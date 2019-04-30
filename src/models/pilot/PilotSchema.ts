import { injectable, inject } from "inversify"
import { Model, SchemaTypes } from "mongoose"
import * as uuid from "uuid"
import { Schema } from "mongoose"
import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { PilotModel } from "./PilotModel"
import { LogisticsProviders } from "@curefit/eat-common"
import { StatusTypes } from "@curefit/base-common"

@injectable()
export class PilotSchema extends MultiMongooseSchema<PilotModel> {

    constructor(
        @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess
    ) {
        super(mongooseAccess, "Pilot", "DEFAULT")
    }

    protected schema() {
        const PilotAddressSchema = new Schema({
            addressString: {
                type: String,
                required: true
            },
            locality: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            pincode: {
                type: String,
                required: true
            }
        }, { _id: false })

        return {
            pilotId: {
                type: String,
                default: uuid.v4,
                index: true,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true
            },
            employeeId: {
                type: String,
                required: false
            },
            phone: {
                type: String,
                index: true,
                required: true
            },
            address: {
                type: PilotAddressSchema,
                required: true
            },
            bloodGroup: {
                type: String,
                required: true
            },
            documentLink: {
                type: String,
                required: true
            },
            vehicleNum: {
                type: String,
                required: true
            },
            shiftIds: {
                type: [String],
                index: true,
                required: false
            },
            capacity: {
                type: Number,
                index: true,
                required: true
            },
            centerId: {
                type: String,
                index: true,
                required: true
            },
            otp: {
                type: String,
                required: false
            },
            offlineDelivery: {
                type: Boolean,
                required: true
            },
            appVersion: {
                type: Number,
                required: false
            },
            status: {
                type: String,
                enum: StatusTypes,
                required: false,
                index: true,
                default: "LIVE"
            },
            provider: {
                type: String,
                enum: LogisticsProviders,
                required: false,
                default: "CUREFIT"
            },
            deviceInfo: {
                type: SchemaTypes.Mixed,
                required: false
            }
        }
    }

}
