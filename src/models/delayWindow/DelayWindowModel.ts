import * as Mongoose from "mongoose"
import { DelayWindow } from "@curefit/flash-common"

export interface DelayWindowModel extends DelayWindow, Mongoose.Document {}
