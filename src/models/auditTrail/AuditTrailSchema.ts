import { injectable, inject } from "inversify"
import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { Schema } from "mongoose"
import { AuditTrailModel } from "./AuditTrailModel"
import { AuditTrail, AuditTypes } from "@curefit/flash-common"

@injectable()
class AuditTrailSchema extends MultiMongooseSchema<AuditTrailModel> {

    constructor(@inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess) {
        super(mongooseAccess, "AuditTrail", "DEFAULT")
    }

    protected schema() {

        return {
            type: {
                type: String,
                enum: AuditTypes,
                required: true
            },
            reason: {
                type: String,
                required: true
            },
            source: {
                type: String,
                required: false
            },
            oldValue: {
                type: Schema.Types.Mixed,
                required: true
            },
            newValue: {
                type: Schema.Types.Mixed,
                required: true
            },
            modifiedBy: {
                type: String,
                required: true
            },
            timestamp: {
                type: Date,
            },
            entityName: {
                type: String,
                required: true
            },
            entityId: {
                type: String,
                required: true
            }
        }
    }
}

export default AuditTrailSchema
