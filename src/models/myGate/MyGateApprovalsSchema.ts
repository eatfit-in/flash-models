import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { injectable, inject } from "inversify"
import { MyGateApprovalsModel } from "./MyGateApprovalsModel"
import { MyGateApprovalStatus } from "@curefit/flash-common"
import { Schema } from "mongoose"

@injectable()
export class MyGateApprovalsSchema extends MultiMongooseSchema<MyGateApprovalsModel> {
    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "MyGateApprovals", "DEFAULT")
    }

    protected schema(): any {
        const StatusHistorySchema = new Schema({
            status: {
                type: String,
                enum: MyGateApprovalStatus,
                required: true
            },
            orderId: {
                type: String,
                required: true
            },
            timestamp: {
                type: String,
                required: true
            }
        })
        return {
            userId: {
                type: String,
                required: true
            },
            status: {
                type: String,
                enum: MyGateApprovalStatus,
                required: true
            },
            orderId: {
                type: String,
                required: true
            },
            timestamp: {
                type: String,
                required: true
            },
            source: {
                type: String,
                required: true
            },
            statusHistory: {
                type: [StatusHistorySchema],
                required: true
            }
        }
    }
}