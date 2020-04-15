import * as Mongoose from "mongoose"
import { PaymentRuleCard, PilotPassbookEntry } from "@curefit/flash-common"

export interface PaymentRuleCardModel extends PaymentRuleCard, Mongoose.Document {}
export interface PilotPassbookEntryModel extends PilotPassbookEntry, Mongoose.Document {}