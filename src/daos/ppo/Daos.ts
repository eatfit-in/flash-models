import { IRead, IWrite } from "@curefit/mongo-utils"
import { PaymentRuleCard, PilotPassbookEntry,  } from "@curefit/flash-common"

export interface IPaymentRuleCardReadWriteDao extends IWrite<PaymentRuleCard>, IRead<PaymentRuleCard> {}
export interface IPaymentRuleCardReadOnlyDao extends IRead<PaymentRuleCard> {}
export interface IPilotPassbookEntryReadWriteDao extends IWrite<PilotPassbookEntry>, IRead<PilotPassbookEntry> {}
export interface IPilotPassbookEntryReadOnlyDao extends IRead<PilotPassbookEntry> {}
