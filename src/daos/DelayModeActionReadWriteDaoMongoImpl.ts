import { inject, injectable } from "inversify"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"

import { IDelayModeActionReadWriteDao } from "./IDelayModeActionDao"

import { DelayModeActionReadonlyDaoMongoImpl } from "./DelayModeActionReadonlyDaoMongoImpl"
import { DelayModeAction } from "@curefit/flash-common"
import { DelayModeActionModel } from "../models/DelayMode/DelayModeActionModel"
import { DelayModeActionSchema } from "../models/DelayMode/DelayModeActionSchema"

@injectable()
export class DelayModeActionReadWriteDaoMongoImpl extends MongoReadWriteDao<DelayModeActionModel, DelayModeAction> implements IDelayModeActionReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.DelayModeActionSchema) DelayModeActionSchema: DelayModeActionSchema,
        @inject(FLASH_MODELS_TYPES.DelayModeActionReadonlyDao) readonlyDao: DelayModeActionReadonlyDaoMongoImpl,
        @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(DelayModeActionSchema.mongooseModel, readonlyDao, logger)
    }
}
