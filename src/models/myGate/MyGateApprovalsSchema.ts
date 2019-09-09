import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { injectable, inject } from "inversify"
import { MyGateApprovalsModel } from "./MyGateApprovalsModel"

@injectable()
export class MyGateApprovalsSchema extends MultiMongooseSchema<MyGateApprovalsModel> {
    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "MyGateApprovals", "DEFAULT")
    }

    protected schema(): any {
        return {
            userId: {
                type: String,
                required: true
            },
            status: {
                type: Boolean,
                required: true
            }
        }
    }
}