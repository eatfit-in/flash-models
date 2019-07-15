import { injectable, inject } from "inversify"


import AuditTrailSchema from "../models/auditTrail/AuditTrailSchema"
import { AuditTrail } from "@curefit/flash-common"
import { AuditTrailModel } from "../models/auditTrail/AuditTrailModel"
import { IAuditTrailReadonlyDao } from "./IAuditTrailDao"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"


@injectable()
class AuditTrailReadonlyDaoMongoImpl extends MongoReadonlyDao<AuditTrailModel, AuditTrail>
    implements IAuditTrailReadonlyDao {
    constructor(@inject(FLASH_MODELS_TYPES.AuditTrailSchema) schemaModel: AuditTrailSchema,
                @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(schemaModel.mongooseModel, logger, schemaModel.isLeanQueryEnabled)
    }
}

export default AuditTrailReadonlyDaoMongoImpl
