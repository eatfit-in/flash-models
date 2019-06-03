import { inject, injectable } from "inversify"
import * as _ from "lodash"
import { Schema } from "mongoose"
import { LogisticsProviders, LotAssignmentStatuses, PilotStatuses, ShipmentStatuses } from "@curefit/eat-common"
import { MultiMongooseSchema, MultiMongooseAccess, MONGO_TYPES } from "@curefit/mongo-utils"
import { LotModel } from "./LotModel"
import { DeliveryAddressSchema } from "../userDeliveryAddress/DeliveryAddressSchema"

export class LotSchema extends MultiMongooseSchema<LotModel> {
    constructor(mongooseAccess: MultiMongooseAccess, readPreference?: string) {
        super(mongooseAccess, "Lot", "DEFAULT", readPreference)
    }
    protected schema() {
        const delAddrSchema: any = _.cloneDeep(DeliveryAddressSchema)
        delAddrSchema.googlePlacesId.index = true

        const ShipmentSchema = new Schema({
            shipmentId: {
                required: true,
                index: true,
                type: String
            },
            cartShipmentId: {
                required: true,
                index: true,
                type: String
            },
            packerId: {
                required: false,
                type: String
            },
            dispatcherId: {
                required: false,
                type: String
            },
            status: {
                required: true,
                type: String,
                enum: ShipmentStatuses
            }
        }, { _id: false })

        const ConsignmentSchema = new Schema({
            consignmentId: {
                required: true,
                type: String
            },
            estimatedReachTime: {
                type: Date,
                required: false
            },
            estimatedDeliveryEndTime: {
                type: Date,
                required: false
            },
            shipments: {
                required: true,
                type: [ShipmentSchema],
                index: true
            },
            address: {
                required: true,
                type: delAddrSchema
            }
        }, { _id: false })

        const DeliveryDetailsSchema = new Schema({
            kitchenDepartureTime: {
                required: false,
                type: Date
            },
            estimatedKitchenDepartureTime: {
                required: false,
                type: Date
            },
            startTime: {
                required: true,
                type: Date
            },
            endTime: {
                required: true,
                type: Date
            },
            originalEndTime: {
                required: false,
                type: Date
            },
            actualEndTime: {
                required: false,
                type: Date
            },
            estimatedEndTime: {
                required: false,
                type: Date
            },
            originalEstimatedEndTime: {
                required: false,
                type: Date
            }
        }, { _id: false })

        const LogisticsSchema = new Schema({
            assignmentStatus: {
                type: String,
                enum: LotAssignmentStatuses,
                required: false
            },
            statusUpdateTime: {
                required: false,
                type: Date
            },
            locationUpdateTime: {
                required: false,
                type: Date
            },
            provider: {
                type: String,
                enum: LogisticsProviders,
                required: false
            }
        }, { _id: false })

        return {
            lotId: {
                type: String,
                index: true,
                required: true,
                unique: true
            },
            centerId: {
                type: String,
                required: true,
                index: true
            },
            date: {
                type: String,
                required: true,
                index: true
            },
            deliverySlot: {
                type: String,
                index: true,
                required: true
            },
            consignments: {
                type: [ConsignmentSchema],
                required: true
            },
            pilotId: {
                type: String,
                required: false,
                index: true
            },
            pilotShiftEndTime: {
                type: Date,
                required: false
            },
            deliveryDetails: {
                type: DeliveryDetailsSchema,
                required: true
            },
            lastUpdatedTimestamp: {
                type: Date,
                required: false
            },
            tripDistance: {
                type: Number,
                required: false
            },
            runTime: {
                type: Date,
                required: false
            },
            delayInSecs: {
                type: Number,
                required: false
            },
            estimatedDelayInSecs: {
                type: Number,
                required: false
            },
            estimatedLastDeliveryDelayInSeconds: {
                type: Number,
                required: false
            },
            lastDeliveryDelayInSeconds: {
                type: Number,
                required: false
            },
            delayCalculatedAt: {
                type: Date,
                required: false
            },
            isExternalSource: {
                type: Boolean,
                required: false
            },
            pilotStatus: {
                type: String,
                enum: PilotStatuses,
                required: false
            },
            logistics: {
                type: LogisticsSchema,
                required: false
            }

        }
    }

}


export function LotSchemaFactory(readPreference: string): any {
    @injectable()
    class LotSchemaWithReadPreference extends LotSchema {
        constructor(@inject(MONGO_TYPES.MultiMongooseAccess) multiMongooseAccess: MultiMongooseAccess) {
            super(multiMongooseAccess, readPreference)
        }
    }

    return LotSchemaWithReadPreference
}
