import * as Mongoose from "mongoose"
import { PilotShift } from "@curefit/flash-common"

export interface PilotShiftModel extends PilotShift, Mongoose.Document {}
