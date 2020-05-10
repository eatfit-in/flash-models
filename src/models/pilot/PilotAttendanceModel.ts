import * as Mongoose from "mongoose"
import { PilotAttendance } from "@curefit/flash-common"

export interface PilotAttendanceModel extends PilotAttendance, Mongoose.Document {}
