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
                required: true
            },
            endTime: {
                type: Date,
                required: true
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
            delayModeReason: {
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