import { injectable, inject } from "inversify"
import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { NestablePilotStateSchema } from "./NestablePilotStateSchema"
import { PilotStateModel } from "./PilotStateModel"


@injectable()
export class PilotStateSchema extends MultiMongooseSchema<PilotStateModel> {

    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "PilotState", "DEFAULT")
    }

    protected schema() {
        return NestablePilotStateSchema
    }
}
