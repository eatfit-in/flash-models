import * as Mongoose from "mongoose"
import { HistoricalETA } from "@curefit/flash-common"

export interface HistoricalETAModel extends HistoricalETA, Mongoose.Document {}
