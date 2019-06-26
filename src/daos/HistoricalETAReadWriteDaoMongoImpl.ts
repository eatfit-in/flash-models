import { injectable, inject } from "inversify"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { HistoricalETAModel } from "../models/HistoricalETA/HistoricalETAModel"
import { IHistoricalETAReadWriteDao } from "./IHistoricalETADao"
import { HistoricalETASchema } from "../models/HistoricalETA/HistoricalETASchema"
import { HistoricalETAReadonlyDaoMongoImpl } from "./HistoricalETAReadonlyDaoMongoImpl"
import { HistoricalETA } from "@curefit/flash-common"

@injectable()
export class HistoricalETAReadWriteDaoMongoImpl extends MongoReadWriteDao<HistoricalETAModel, HistoricalETA> implements IHistoricalETAReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.HistoricalETASchema) historicalETASchema: HistoricalETASchema,
        @inject(FLASH_MODELS_TYPES.HistoricalETAReadonlyDao) readonlyDao: HistoricalETAReadonlyDaoMongoImpl,
        @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(historicalETASchema.mongooseModel, readonlyDao, logger)
    }
}
