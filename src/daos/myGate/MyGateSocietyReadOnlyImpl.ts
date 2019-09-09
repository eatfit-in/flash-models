import { inject, injectable } from "inversify"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { MyGateSocietyModel } from "../../models/myGate/MyGateSocietyModel"
import { MyGateSociety } from "@curefit/flash-common"
import { FLASH_MODELS_TYPES } from "../../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import MyGateSocietySchema from "../../models/myGate/MyGateSocietySchema"

@injectable()
class MyGateSocietyReadonlyDaoMongoImpl extends MongoReadonlyDao<MyGateSocietyModel, MyGateSociety> {
    constructor(
        @inject(FLASH_MODELS_TYPES.MyGateSocietySchema) myGateSchema: MyGateSocietySchema,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(myGateSchema.mongooseModel, logger, myGateSchema.isLeanQueryEnabled)
    }
}

export default MyGateSocietyReadonlyDaoMongoImpl