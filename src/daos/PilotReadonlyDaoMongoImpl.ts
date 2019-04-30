import { injectable, inject } from "inversify"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { PilotModel } from "../models/pilot/PilotModel"
import { Pilot } from "@curefit/flash-common"
import { IPilotReadonlyDao } from "./IPilotDao"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { PilotSchema } from "../models/pilot/PilotSchema"
import { BASE_TYPES, ILogger } from "@curefit/base"

@injectable()
export class PilotReadonlyDaoMongoImpl extends MongoReadonlyDao<PilotModel, Pilot> implements IPilotReadonlyDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.PilotSchema) pilotSchema: PilotSchema,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(pilotSchema.mongooseModel, logger, pilotSchema.isLeanQueryEnabled)
    }
}
