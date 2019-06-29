import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { DelayModeActionModel } from "./DelayModeActionModel"
import { DelayModeReasons, DelayModes, MenuTypes } from "@curefit/eat-common"
import { inject, injectable } from "inversify"

@injectable()
export class DelayModeActionSchema extends MultiMongooseSchema<DelayModeActionModel> {
    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "DelayModeAction", "DEFAULT")
    }
    protected schema() {

        return {
            centerId: {
                type: String,
                index: true,
                required: true,
            },
            mealSlot: {
                type: String,
                required: true,
                index: true,
                enum: MenuTypes
            },
            modifiedBy: {
                type: String,
                index: true,
                required: true
            },
            delayMode: {
                type: String,
                required: true,
                index: true,
                enum: DelayModes
            },
            newDelayMode: {
                type: String,
                required: true,
                index: true,
                enum: DelayModes
            },
            delayModeReason: {
                type: String,
                required: true,
                index: true,
                enum: DelayModeReasons
            },
            revertDrivingScaleFactor: {
                type: Number,
                required: false,
            },
            startTime: {
                type: Date,
                required: false
            },
            endTime: {
                type: Date,
                required: false
            }
        }
    }
}
