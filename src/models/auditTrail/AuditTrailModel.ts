import * as Mongoose from "mongoose"
import { AuditTrail } from "@curefit/flash-common"

export interface AuditTrailModel extends AuditTrail, Mongoose.Document { }