import { MyGateSocietyModel } from "../../models/myGate/MyGateSocietyModel"
import { MyGateSociety } from "@curefit/flash-common"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { inject, injectable } from "inversify"
import { FLASH_MODELS_TYPES } from "../../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import MyGateSocietySchema from "../../models/myGate/MyGateSocietySchema"
import { IMyGateSocietyReadWriteDao } from "./IMyGateSocietyDao"

@injectable()
export class MyGateSocietyReadWriteDaoMongoImpl extends MongoReadWriteDao<MyGateSocietyModel, MyGateSociety> implements IMyGateSocietyReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.MyGateSocietySchema) myGateSocietySchema: MyGateSocietySchema,
        @inject(FLASH_MODELS_TYPES.MyGateSocietyReadonlyDao) readonlyDao: MyGateSocietyReadWriteDaoMongoImpl,
        @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(myGateSocietySchema.mongooseModel, readonlyDao, logger)
    }
}