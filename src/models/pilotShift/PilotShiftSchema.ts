import { injectable, inject } from "inversify"
import * as shortid from "shortid"
import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { StartEndTimeSchema } from "@curefit/schema-mongo"
import { PilotShiftModel } from "./PilotShiftModel"

@injectable()
export class PilotShiftSchema extends MultiMongooseSchema<PilotShiftModel> {

    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "PilotShift", "DEFAULT")
    }

    protected schema() {
        return {
            shiftId: {
                type: String,
                default: shortid.generate,
                index: true,
                required: true,
                unique: true
            },
            shiftName: {
                type: String,
                required: true
            },
            centerId: {
                type: String,
                required: true,
                index: true
            },
            active: {
                type: Boolean,
                required: true
            },
            is3p: {
            type: Boolean,
                required: false
        },
            shiftTimes: {
                type: [StartEndTimeSchema],
                required: false
            }
        }
    }
}
