import { inject, injectable } from "inversify"

import { Schema } from "mongoose"
import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { MyGateSocietyModel } from "./MyGateSocietyModel"


@injectable()
class MyGateSocietySchema extends MultiMongooseSchema<MyGateSocietyModel> {

    constructor(@inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess) {
        super(mongooseAccess, "MyGateSociety", "DEFAULT")
    }

    protected schema() {
        const LatLong = new Schema({
            lat: {
                type: Number,
                required: true
            },
            long: {
                type: Number,
                required: true
            }
        })
        return {
            society: {
                type: String,
                index: true,
                required: true
            },
            city: {
                type: String,
                index: true,
                required: true
            },
            gateLatLong: {
                type: [LatLong],
                required: true
            },
            geoFence: {
                type: [LatLong],
                required: true
            }
        }
    }
}

export default MyGateSocietySchema