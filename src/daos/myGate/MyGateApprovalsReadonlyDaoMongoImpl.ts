import { injectable, inject } from "inversify"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { MyGateApprovals } from "@curefit/flash-common"
import { IMyGateApprovalsReadonlyDao } from "./IMyGateApprovalsDao"
import { MyGateApprovalsModel } from "../../models/myGate/MyGateApprovalsModel"
import { FLASH_MODELS_TYPES } from "../../ioc/FlashModelsTypes"
import { MyGateApprovalsSchema } from "../../models/myGate/MyGateApprovalsSchema"

@injectable()
export class MyGateApprovalsReadonlyDaoMongoImpl extends MongoReadonlyDao<MyGateApprovalsModel, MyGateApprovals> implements IMyGateApprovalsReadonlyDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.MyGateApprovalsSchema) myGateApprovalsSchema: MyGateApprovalsSchema,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(myGateApprovalsSchema.mongooseModel, logger, myGateApprovalsSchema.isLeanQueryEnabled)
    }
}
