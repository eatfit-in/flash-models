import { injectable, inject } from "inversify"
import { PilotStateHistoryModel } from "./PilotStateModel"
import * as _ from "lodash"
import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { NestablePilotStateSchema } from "./NestablePilotStateSchema"

@injectable()
export class PilotStateHistorySchema extends MultiMongooseSchema<PilotStateHistoryModel> {

    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "PilotStateHistory", "DEFAULT")
    }

    protected schema() {
        const pilotStateSchema: any = _.cloneDeep(NestablePilotStateSchema)
        pilotStateSchema.pilotId.unique = false
        pilotStateSchema.originalVersion = {
            type: Number,
            required: true,
            index: true
        }
        return pilotStateSchema
    }
}
