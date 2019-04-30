import * as Mongoose from "mongoose"
import { PilotState, PilotStateHistory } from "@curefit/flash-common"

export interface PilotStateModel extends PilotState, Mongoose.Document {}
export interface PilotStateHistoryModel extends PilotStateHistory, Mongoose.Document { }
