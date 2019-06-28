import { MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { DelayModeActionModel } from "./DelayModeActionModel"
import { DelayModeReasons, DelayModes, MenuTypes } from "@curefit/eat-common"

export class DelayModeActionSchema extends MultiMongooseSchema<DelayModeActionModel> {
    constructor(mongooseAccess: MultiMongooseAccess, readPreference?: string) {
        super(mongooseAccess, "DelayModeAction", "DEFAULT", readPreference)
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
                required: true
            },
            endTime: {
                type: Date,
                required: true
            }
        }
    }
}
