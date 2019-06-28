import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { injectable, inject } from "inversify"
import { HistoricalETAModel } from "./HistoricalETAModel"

@injectable()
export class HistoricalETASchema extends MultiMongooseSchema<HistoricalETAModel> {
    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "HistoricalETA", "DEFAULT")
    }

    protected schema(): any {
        return {
            userId: {
                type: String,
                required: true
            },
            fulfilmentId: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },
            centerId: {
                type: String,
                required: true
            },
            currentETA: {
                type: Date,
                required: true
            },
            historicalETAs: {
                type: [Date],
                required: true
            }
        }
    }
}