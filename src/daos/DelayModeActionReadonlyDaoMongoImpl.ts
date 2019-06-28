import { injectable, inject } from "inversify"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { DelayModeAction } from "@curefit/flash-common"
import { IDelayModeActionReadonlyDao } from "./IDelayModeActionDao"
import { DelayModeActionModel } from "../models/DelayMode/DelayModeActionModel"
import { DelayModeActionSchema } from "../models/DelayMode/DelayModeActionSchema"

@injectable()
export class DelayModeActionReadonlyDaoMongoImpl extends MongoReadonlyDao<DelayModeActionModel, DelayModeAction> implements IDelayModeActionReadonlyDao {
    constructor(
            @inject(FLASH_MODELS_TYPES.DelayModeActionSchema) DelayModeActionSchema: DelayModeActionSchema,
            @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(DelayModeActionSchema.mongooseModel, logger, DelayModeActionSchema.isLeanQueryEnabled)
    }
}
