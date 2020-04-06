import { injectable, inject } from "inversify"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { DelayWindowSchema } from "../models/delayWindow/DelayWindowSchema"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { DelayWindow } from "@curefit/flash-common"
import { DelayWindowModel } from "../models/delayWindow/DelayWindowModel"
import { IDelayWindowReadonlyDao } from "./IDelayWindowDao"

@injectable()
export class DelayWindowReadonlyDaoMongoImpl extends MongoReadonlyDao<DelayWindowModel, DelayWindow> implements IDelayWindowReadonlyDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.DelayWindowSchema) delayWindowSchema: DelayWindowSchema,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(delayWindowSchema.mongooseModel, logger, delayWindowSchema.isLeanQueryEnabled)
    }
}
