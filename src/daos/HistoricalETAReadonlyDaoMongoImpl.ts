import { injectable, inject } from "inversify"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { HistoricalETASchema } from "../models/HistoricalETA/HistoricalETASchema"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { HistoricalETA } from "@curefit/flash-common"
import { HistoricalETAModel } from "../models/HistoricalETA/HistoricalETAModel"
import { IHistoricalETAReadonlyDao } from "./IHistoricalETADao"

@injectable()
export class HistoricalETAReadonlyDaoMongoImpl extends MongoReadonlyDao<HistoricalETAModel, HistoricalETA> implements IHistoricalETAReadonlyDao {
    constructor(
            @inject(FLASH_MODELS_TYPES.HistoricalETASchema) historicalETASchema: HistoricalETASchema,
            @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(historicalETASchema.mongooseModel, logger, historicalETASchema.isLeanQueryEnabled)
    }
}
