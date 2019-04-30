import { injectable, inject } from "inversify"
import { ReadPreference } from "mongodb"
import { LotSchema } from "../models/lot/LotSchema"
import { LotModel } from "../models/lot/LotModel"
import { ILotReadonlyDao } from "./ILotDao"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { Lot } from "@curefit/eat-common"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { BASE_TYPES, ILogger } from "@curefit/base"

export function LotReadonlyDaoFactory(readPreference: string): any {
    class LotReadonlyDaoMongoImpl extends MongoReadonlyDao<LotModel, Lot> implements ILotReadonlyDao {
        constructor(
            @inject(FLASH_MODELS_TYPES.LotPrimarySchema) primarySchema: LotSchema,
            @inject(FLASH_MODELS_TYPES.LotSecondarySchema) secondarySchema: LotSchema,
            @inject(BASE_TYPES.ILogger) logger: ILogger
        ) {
            const schema = readPreference === ReadPreference.SECONDARY_PREFERRED ? secondarySchema : primarySchema
            super(schema.mongooseModel, logger, schema.isLeanQueryEnabled)
        }
    }

    return LotReadonlyDaoMongoImpl
}
