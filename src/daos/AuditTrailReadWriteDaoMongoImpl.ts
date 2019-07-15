import { injectable, inject } from "inversify"

import AuditTrailSchema from "../models/auditTrail/AuditTrailSchema"
import { AuditTrail } from "@curefit/flash-common"
import AuditTrailReadonlyDaoMongoImpl from "./AuditTrailReadonlyDaoMongoImpl"
import { AuditTrailModel } from "../models/auditTrail/AuditTrailModel"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { IAuditTrailReadWriteDao } from "./IAuditTrailDao"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"

@injectable()
class AuditTrailReadWriteDaoMongoImpl extends MongoReadWriteDao<AuditTrailModel, AuditTrail>
    implements IAuditTrailReadWriteDao {
    constructor( @inject(FLASH_MODELS_TYPES.AuditTrailSchema) schemaModel: AuditTrailSchema,
                 @inject(FLASH_MODELS_TYPES.AuditTrailReadonlyDao) readonlyDao: AuditTrailReadonlyDaoMongoImpl,
                 @inject(BASE_TYPES.ILogger) logger: ILogger) {
        super(schemaModel.mongooseModel, readonlyDao, logger)
    }
}

export default AuditTrailReadWriteDaoMongoImpl
