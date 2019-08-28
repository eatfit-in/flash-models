import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { injectable, inject } from "inversify"
import { DelayWindowModel } from "./DelayWindowModel"
import { MealSlots } from "@curefit/eat-common"

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
            mealSlot: {
                type: String,
                required: true,
                index: true,
                enum: MealSlots
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
            },
            buffer: {
                type: Number,
                required: true
            },
            status: {
                type: String,
                required: true
            },
            reportedUserMailId: {
                type: String,
                required: true
            }
        }
    }
}