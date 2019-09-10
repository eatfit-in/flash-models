import * as Mongoose from "mongoose"
import { MyGateApprovals } from "@curefit/flash-common"

export interface MyGateApprovalsModel extends MyGateApprovals, Mongoose.Document {}
