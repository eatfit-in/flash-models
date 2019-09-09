import * as Mongoose from "mongoose"
import { MyGateSociety } from "@curefit/flash-common"

export interface MyGateSocietyModel extends MyGateSociety, Mongoose.Document { }