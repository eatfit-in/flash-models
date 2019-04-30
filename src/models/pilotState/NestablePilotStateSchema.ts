import { PilotStatuses } from "@curefit/eat-common"
import { PilotConnectionStatuses } from "@curefit/flash-common"
import { Schema } from "mongoose"
import { WorkflowDetailsSchema } from "@curefit/shipment-models"
import { LatLongSchema } from "@curefit/schema-mongo"

const LastKnownDelaySchema = new Schema({
    timeInSecs: {type: Number, required: true},
    timestamp: {type: Number, required: true}
}, {id: false})

const LocationTrailSchema = new Schema({
    location: {type: LatLongSchema, required: true},
    timeStamp: {type: Number, required: true},
    delayInSecs: {type: Number, required: false}
})

export const NestablePilotStateSchema = {
    pilotId: {
        type: String,
        index: true,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: PilotStatuses,
        required: true,
        index: true
    },
    latLong: {
        type: LatLongSchema,
        required: true
    },
    distanceToDestination: {
        type: Number,
        required: true
    },
    connectionStatus: {
        type: String,
        enum: PilotConnectionStatuses,
        index: true,
        required: true
    },
    numTripsToday: {
        type: Number,
        required: true
    },
    workflow: {
        type: WorkflowDetailsSchema,
        required: false
    },
    lastKnownDelay: {
        type: LastKnownDelaySchema,
        required: false
    },
    tripDistance: {
        type: Number,
        required: false
    },
    locationTrail: {
        type: [LocationTrailSchema],
        required: false
    }
}
