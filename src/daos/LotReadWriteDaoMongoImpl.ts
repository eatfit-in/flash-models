import { injectable, inject } from "inversify"
import { LotModel } from "../models/lot/LotModel"
import { LotSchema } from "../models/lot/LotSchema"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { ILotReadonlyDao, ILotReadWriteDao } from "./ILotDao"
import { Lot } from "@curefit/eat-common"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"

@injectable()
export class LotReadWriteDaoMongoImpl extends MongoReadWriteDao<LotModel, Lot> implements ILotReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.LotPrimarySchema) lotSchema: LotSchema,
        @inject(FLASH_MODELS_TYPES.LotReadonlyDao) readonlyDao: ILotReadonlyDao,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(lotSchema.mongooseModel, readonlyDao, logger)
    }
}
