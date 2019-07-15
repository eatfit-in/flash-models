import { IRead, IWrite } from "@curefit/mongo-utils"
import { AuditTrail } from "@curefit/flash-common"

export interface IAuditTrailReadWriteDao extends IWrite<AuditTrail>, IRead<AuditTrail> { }
export interface IAuditTrailReadonlyDao extends IRead<AuditTrail> { }