import { injectable, inject } from "inversify"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { PilotStateModel } from "../models/pilotState/PilotStateModel"
import { PilotState } from "@curefit/flash-common"
import { IPilotStateReadonlyDao } from "./IPilotStateDao"
import { PilotStateSchema } from "../models/pilotState/PilotStateSchema"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"

@injectable()
export class PilotStateReadonlyDaoMongoImpl extends MongoReadonlyDao<PilotStateModel, PilotState> implements IPilotStateReadonlyDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.PilotStateSchema) pilotStateSchema: PilotStateSchema,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(pilotStateSchema.mongooseModel, logger, pilotStateSchema.isLeanQueryEnabled)
    }
}
