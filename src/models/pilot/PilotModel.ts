import * as Mongoose from "mongoose"
import { Pilot } from "@curefit/flash-common"

export interface PilotModel extends Pilot, Mongoose.Document {}
