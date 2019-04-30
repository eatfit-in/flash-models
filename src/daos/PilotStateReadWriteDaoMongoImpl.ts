import { injectable, inject } from "inversify"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { PilotStateModel } from "../models/pilotState/PilotStateModel"
import { PilotState, PilotStateHistory } from "@curefit/flash-common"
import { IPilotStateReadWriteDao } from "./IPilotStateDao"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { PilotStateHistorySchema } from "../models/pilotState/PilotStateHistorySchema"
import { PilotStateSchema } from "../models/pilotState/PilotStateSchema"
import { WorkflowUtil } from "@curefit/workflow-common"
import { MongooseUtils } from "@curefit/mongo-utils/dist/src/utils/MongooseUtils"
import { PilotStateReadonlyDaoMongoImpl } from "./PilotStateReadonlyDaoMongoImpl"

@injectable()
export class PilotStateReadWriteDaoMongoImpl extends MongoReadWriteDao<PilotStateModel, PilotState> implements IPilotStateReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.PilotStateSchema) pilotStateSchema: PilotStateSchema,
        @inject(FLASH_MODELS_TYPES.PilotStateReadonlyDao) readonlyDao: PilotStateReadonlyDaoMongoImpl,
        @inject(FLASH_MODELS_TYPES.PilotStateHistorySchema) private pilotStateHistorySchema: PilotStateHistorySchema,
        @inject(BASE_TYPES.ILogger) private logger2: ILogger
    ) {
        super(pilotStateSchema.mongooseModel, readonlyDao, logger2)
    }

    public async findOneAndReplace(cond: any, pilotState: PilotState): Promise<PilotState> {
        const newState = await super.findOneAndReplace(cond, pilotState)
        if (newState.workflow !== undefined) {
            const currState = WorkflowUtil.getCurrentState(newState.workflow)
            const currStateIndex = newState.workflow.stateHistory.findIndex(state => { return state.id === currState.id })
            if (currStateIndex === newState.workflow.stateHistory.length - 1) {
                await this.createPilotStateHistory(newState)
            }
        }
        return newState

    }

    public createPilotStateHistory(pilotState: PilotState): Promise<PilotState> {
        return new Promise<PilotState>((resolve, reject) => {
            const pilotStateHistory: PilotStateHistory = {
                pilotId: pilotState.pilotId,
                status: pilotState.status,
                latLong: pilotState.latLong,
                distanceToDestination: pilotState.distanceToDestination,
                connectionStatus: pilotState.connectionStatus,
                numTripsToday: pilotState.numTripsToday,
                workflow: pilotState.workflow,
                originalVersion: (<any>pilotState).version,
                tripDistance: pilotState.tripDistance ? pilotState.tripDistance : 0,
                locationTrail: pilotState.locationTrail
            }

            this.pilotStateHistorySchema.mongooseModel.create(pilotStateHistory, (error: any, data: PilotState) => {
                if (error) {
                    console.log(error)
                    reject(MongooseUtils.maybeCompressValidationErrors(error, this.logger2))
                } else {
                    resolve(data)
                }
            })
        })
    }
}
