import * as Mongoose from "mongoose"
import { Lot } from "@curefit/eat-common"

export interface LotModel extends Lot, Mongoose.Document {}
