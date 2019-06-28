import * as Mongoose from "mongoose"
import { DelayModeAction } from "@curefit/flash-common"

export interface DelayModeActionModel extends DelayModeAction, Mongoose.Document {}
