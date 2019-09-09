import { injectable, inject } from "inversify"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { MyGateApprovals } from "@curefit/flash-common"
import { FLASH_MODELS_TYPES } from "../../ioc/FlashModelsTypes"
import { MyGateApprovalsSchema } from "../../models/MyGateApprovals/MyGateApprovalsSchema"
import { MyGateApprovalsReadonlyDaoMongoImpl } from "./MyGateApprovalsReadonlyDaoMongoImpl"
import { MyGateApprovalsModel } from "../../models/MyGateApprovals/MyGateApprovalsModel"
import { IMyGateApprovalsReadWriteDao } from "./IMyGateApprovalsDao"

@injectable()
export class MyGateApprovalsReadWriteDaoMongoImpl extends MongoReadWriteDao<MyGateApprovalsModel, MyGateApprovals> implements IMyGateApprovalsReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.MyGateApprovalsSchema) myGateApprovalsSchema: MyGateApprovalsSchema,
        @inject(FLASH_MODELS_TYPES.MyGateApprovalsReadonlyDao) readonlyDao: MyGateApprovalsReadonlyDaoMongoImpl,
        @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(myGateApprovalsSchema.mongooseModel, readonlyDao, logger)
    }
}
