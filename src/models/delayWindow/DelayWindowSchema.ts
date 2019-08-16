import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { injectable, inject } from "inversify"
import { DelayWindowModel } from "./DelayWindowModel"

@injectable()
export class DelayWindowSchema extends MultiMongooseSchema<DelayWindowModel> {
    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "DelayWindow", "DEFAULT")
    }

    protected schema(): any {
        return {
            centerId: {
                type: String,
                required: true,
                index: true
            },
            startTime: {
                type: Date,
                required: false
            },
            endTime: {
                type: Date,
                required: false
            },
            date: {
                type: String,
                required: true,
                index: true
            },
            delayMode: {
                type: String,
                required: true
            },
            delayReason: {
                type: String,
                required: true
            },
            revertDrivingScaleFactor: {
                type: Number,
                required: false
            }
        }
    }
}