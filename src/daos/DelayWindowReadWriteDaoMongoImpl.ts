import { injectable, inject } from "inversify"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { DelayWindowModel } from "../models/delayWindow/DelayWindowModel"
import { IDelayWindowReadWriteDao } from "./IDelayWindowDao"
import { DelayWindowSchema } from "../models/delayWindow/DelayWindowSchema"
import { DelayWindowReadonlyDaoMongoImpl } from "./DelayWindowReadonlyDaoMongoImpl"
import { DelayWindow } from "@curefit/flash-common"

@injectable()
export class DelayWindowReadWriteDaoMongoImpl extends MongoReadWriteDao<DelayWindowModel, DelayWindow> implements IDelayWindowReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.DelayWindowSchema) delayWindowSchema: DelayWindowSchema,
        @inject(FLASH_MODELS_TYPES.DelayWindowReadonlyDao) readonlyDao: DelayWindowReadonlyDaoMongoImpl,
        @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(delayWindowSchema.mongooseModel, readonlyDao, logger)
    }
}
