import { injectable, inject } from "inversify"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { PilotModel } from "../models/pilot/PilotModel"
import { PilotSchema } from "../models/pilot/PilotSchema"
import { IPilotReadWriteDao } from "./IPilotDao"
import { Pilot } from "@curefit/flash-common"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { PilotReadonlyDaoMongoImpl } from "./PilotReadonlyDaoMongoImpl"

@injectable()
export class PilotReadWriteDaoMongoImpl extends MongoReadWriteDao<PilotModel, Pilot> implements IPilotReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.PilotSchema) pilotSchema: PilotSchema,
        @inject(FLASH_MODELS_TYPES.PilotReadonlyDao) readonlyDao: PilotReadonlyDaoMongoImpl,
        @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(pilotSchema.mongooseModel, readonlyDao, logger)
    }
}
