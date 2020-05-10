import * as Inversify from "inversify"
import { ContainerModule, interfaces } from "inversify"
import { FLASH_MODELS_TYPES } from "./FlashModelsTypes"
import { ILotReadonlyDao, ILotReadWriteDao } from "../daos/ILotDao"
import { LotSchema, LotSchemaFactory } from "../models/lot/LotSchema"
import { ReadPreference } from "mongodb"
import { LotReadonlyDaoFactory } from "../daos/LotReadonlyDaoMongoImpl"
import { LotReadWriteDaoMongoImpl } from "../daos/LotReadWriteDaoMongoImpl"
import { PilotStateHistorySchema } from "../models/pilotState/PilotStateHistorySchema"
import { PilotShiftSchema } from "../models/pilotShift/PilotShiftSchema"
import { IPilotStateReadonlyDao, IPilotStateReadWriteDao } from "../daos/IPilotStateDao"
import { PilotStateSchema } from "../models/pilotState/PilotStateSchema"
import { PilotSchema } from "../models/pilot/PilotSchema"
import { IPilotReadonlyDao, IPilotReadWriteDao } from "../daos/IPilotDao"
import { IPilotShiftReadonlyDao, IPilotShiftReadWriteDao } from "../daos/IPilotShiftDao"
import { PilotStateReadWriteDaoMongoImpl } from "../daos/PilotStateReadWriteDaoMongoImpl"
import { PilotStateReadonlyDaoMongoImpl } from "../daos/PilotStateReadonlyDaoMongoImpl"
import { PilotReadWriteDaoMongoImpl } from "../daos/PilotReadWriteDaoMongoImpl"
import { PilotReadonlyDaoMongoImpl } from "../daos/PilotReadonlyDaoMongoImpl"
import { PilotShiftReadWriteDaoMongoImpl } from "../daos/PilotShiftReadWriteDaoMongoImpl"
import { PilotShiftReadonlyDaoMongoImpl } from "../daos/PilotShiftReadonlyDaoMongoImpl"
import { HistoricalETASchema } from "../models/HistoricalETA/HistoricalETASchema"
import { IHistoricalETAReadonlyDao, IHistoricalETAReadWriteDao } from "../daos/IHistoricalETADao"
import { HistoricalETAReadWriteDaoMongoImpl } from "../daos/HistoricalETAReadWriteDaoMongoImpl"
import { HistoricalETAReadonlyDaoMongoImpl } from "../daos/HistoricalETAReadonlyDaoMongoImpl"
import { DelayModeActionSchema } from "../models/DelayMode/DelayModeActionSchema"
import { DelayModeActionReadWriteDaoMongoImpl } from "../daos/DelayModeActionReadWriteDaoMongoImpl"
import { IDelayModeActionReadonlyDao, IDelayModeActionReadWriteDao } from "../daos/IDelayModeActionDao"
import { DelayModeActionReadonlyDaoMongoImpl } from "../daos/DelayModeActionReadonlyDaoMongoImpl"
import AuditTrailSchema from "../models/auditTrail/AuditTrailSchema"
import { IAuditTrailReadWriteDao, IAuditTrailReadonlyDao } from "../daos/IAuditTrailDao"
import AuditTrailReadWriteDaoMongoImpl from "../daos/AuditTrailReadWriteDaoMongoImpl"
import AuditTrailReadonlyDaoMongoImpl from "../daos/AuditTrailReadonlyDaoMongoImpl"
import { DelayWindowSchema } from "../models/delayWindow/DelayWindowSchema"
import { IDelayWindowReadonlyDao, IDelayWindowReadWriteDao } from "../daos/IDelayWindowDao"
import { DelayWindowReadWriteDaoMongoImpl } from "../daos/DelayWindowReadWriteDaoMongoImpl"
import { DelayWindowReadonlyDaoMongoImpl } from "../daos/DelayWindowReadonlyDaoMongoImpl"
import MyGateSocietySchema from "../models/myGate/MyGateSocietySchema"
import { IMyGateSocietyReadonlyDao, IMyGateSocietyReadWriteDao } from "../daos/myGate/IMyGateSocietyDao"
import { MyGateSocietyReadWriteDaoMongoImpl } from "../daos/myGate/MyGateSocietyReadWriteImpl"
import MyGateSocietyReadonlyDaoMongoImpl from "../daos/myGate/MyGateSocietyReadOnlyImpl"
import { MyGateApprovalsSchema } from "../models/myGate/MyGateApprovalsSchema"
import { IMyGateApprovalsReadonlyDao, IMyGateApprovalsReadWriteDao } from "../daos/myGate/IMyGateApprovalsDao"
import { MyGateApprovalsReadonlyDaoMongoImpl } from "../daos/myGate/MyGateApprovalsReadonlyDaoMongoImpl"
import { MyGateApprovalsReadWriteDaoMongoImpl } from "../daos/myGate/MyGateApprovalsReadWriteDaoMongoImpl"
import {
    PaymentRuleCardSchema,
    PaymentRuleCardSchemaFactory,
    PilotPassbookEntrySchema,
    PilotPassbookEntrySchemaFactory
} from "../models/ppo/Schemas"
import {
    IPaymentRuleCardReadOnlyDao,
    IPaymentRuleCardReadWriteDao,
    IPilotPassbookEntryReadOnlyDao, IPilotPassbookEntryReadWriteDao
} from "../daos/ppo/Daos"
import {
    PaymentRuleCardReadOnlyDaoFactory,
    PaymentRuleCardReadWriteDaoMongoImpl,
    PilotPassbookEntryReadOnlyDaoFactory, PilotPassbookEntryReadWriteDaoMongoImpl
} from "../daos/ppo/DaoImpls"
import { PilotAttendanceSchema, PilotAttendanceSchemaFactory } from "../models/pilot/PilotAttendanceSchema"
import { IPilotAttendanceReadOnlyDao, IPilotAttendanceReadWriteDao } from "../daos/IPilotAttendanceDao"
import { PilotAttendanceReadOnlyDaoFactory, PilotAttendanceReadWriteDaoMongoImpl } from "../daos/PilotAttendanceDaoImpl"

export function FlashModelsModule(kernel: Inversify.Container): ContainerModule {
    return new Inversify.ContainerModule((bind: Inversify.interfaces.Bind) => {

        bind<LotSchema>(FLASH_MODELS_TYPES.LotPrimarySchema).to(LotSchemaFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<LotSchema>(FLASH_MODELS_TYPES.LotSecondarySchema).to(LotSchemaFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<ILotReadonlyDao>(FLASH_MODELS_TYPES.LotReadonlyDao).to(LotReadonlyDaoFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<ILotReadonlyDao>(FLASH_MODELS_TYPES.LotReadonlySecondaryDao).to(LotReadonlyDaoFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<ILotReadWriteDao>(FLASH_MODELS_TYPES.LotReadwriteDao).to(LotReadWriteDaoMongoImpl).inSingletonScope()

        bind<PilotSchema>(FLASH_MODELS_TYPES.PilotSchema).to(PilotSchema).inSingletonScope()
        bind<IPilotReadWriteDao>(FLASH_MODELS_TYPES.PilotReadwriteDao).to(PilotReadWriteDaoMongoImpl).inSingletonScope()
        bind<IPilotReadonlyDao>(FLASH_MODELS_TYPES.PilotReadonlyDao).to(PilotReadonlyDaoMongoImpl).inSingletonScope()

        bind<HistoricalETASchema>(FLASH_MODELS_TYPES.HistoricalETASchema).to(HistoricalETASchema).inSingletonScope()
        bind<IHistoricalETAReadWriteDao>(FLASH_MODELS_TYPES.HistoricalETAReadwriteDao).to(HistoricalETAReadWriteDaoMongoImpl).inSingletonScope()
        bind<IHistoricalETAReadonlyDao>(FLASH_MODELS_TYPES.HistoricalETAReadonlyDao).to(HistoricalETAReadonlyDaoMongoImpl).inSingletonScope()

        bind<DelayWindowSchema>(FLASH_MODELS_TYPES.DelayWindowSchema).to(DelayWindowSchema).inSingletonScope()
        bind<IDelayWindowReadWriteDao>(FLASH_MODELS_TYPES.DelayWindowReadWriteDao).to(DelayWindowReadWriteDaoMongoImpl).inSingletonScope()
        bind<IDelayWindowReadonlyDao>(FLASH_MODELS_TYPES.DelayWindowReadonlyDao).to(DelayWindowReadonlyDaoMongoImpl).inSingletonScope()

        bind<MyGateSocietySchema>(FLASH_MODELS_TYPES.MyGateSocietySchema).to(MyGateSocietySchema).inSingletonScope()
        bind<IMyGateSocietyReadWriteDao>(FLASH_MODELS_TYPES.MyGateSocietyReadwriteDao).to(MyGateSocietyReadWriteDaoMongoImpl).inSingletonScope()
        bind<IMyGateSocietyReadonlyDao>(FLASH_MODELS_TYPES.MyGateSocietyReadonlyDao).to(MyGateSocietyReadonlyDaoMongoImpl).inSingletonScope()

        bind<MyGateApprovalsSchema>(FLASH_MODELS_TYPES.MyGateApprovalsSchema).to(MyGateApprovalsSchema).inSingletonScope()
        bind<IMyGateApprovalsReadWriteDao>(FLASH_MODELS_TYPES.MyGateApprovalsReadwriteDao).to(MyGateApprovalsReadWriteDaoMongoImpl).inSingletonScope()
        bind<IMyGateApprovalsReadonlyDao>(FLASH_MODELS_TYPES.MyGateApprovalsReadonlyDao).to(MyGateApprovalsReadonlyDaoMongoImpl).inSingletonScope()

        bind<AuditTrailSchema>(FLASH_MODELS_TYPES.AuditTrailSchema).to(AuditTrailSchema).inSingletonScope()
        bind<IAuditTrailReadWriteDao>(FLASH_MODELS_TYPES.AuditTrailReadwriteDao).to(AuditTrailReadWriteDaoMongoImpl).inSingletonScope()
        bind<IAuditTrailReadonlyDao>(FLASH_MODELS_TYPES.AuditTrailReadonlyDao).to(AuditTrailReadonlyDaoMongoImpl).inSingletonScope()

        bind<DelayModeActionSchema>(FLASH_MODELS_TYPES.DelayModeActionSchema).to(DelayModeActionSchema).inSingletonScope()
        bind<IDelayModeActionReadWriteDao>(FLASH_MODELS_TYPES.DelayModeActionReadwriteDao).to(DelayModeActionReadWriteDaoMongoImpl).inSingletonScope()
        bind<IDelayModeActionReadonlyDao>(FLASH_MODELS_TYPES.DelayModeActionReadonlyDao).to(DelayModeActionReadonlyDaoMongoImpl).inSingletonScope()

        bind<PilotStateSchema>(FLASH_MODELS_TYPES.PilotStateSchema).to(PilotStateSchema).inSingletonScope()
        bind<IPilotStateReadWriteDao>(FLASH_MODELS_TYPES.PilotStateReadwriteDao).to(PilotStateReadWriteDaoMongoImpl).inSingletonScope()
        bind<IPilotStateReadonlyDao>(FLASH_MODELS_TYPES.PilotStateReadonlyDao).to(PilotStateReadonlyDaoMongoImpl).inSingletonScope()

        bind<PaymentRuleCardSchema>(FLASH_MODELS_TYPES.PaymentRuleCardPrimarySchema).to(PaymentRuleCardSchemaFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<PaymentRuleCardSchema>(FLASH_MODELS_TYPES.PaymentRuleCardSecondarySchema).to(PaymentRuleCardSchemaFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<IPaymentRuleCardReadOnlyDao>(FLASH_MODELS_TYPES.PaymentRuleCardReadOnlyPrimaryDao).to(PaymentRuleCardReadOnlyDaoFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<IPaymentRuleCardReadOnlyDao>(FLASH_MODELS_TYPES.PaymentRuleCardReadOnlySecondaryDao).to(PaymentRuleCardReadOnlyDaoFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<IPaymentRuleCardReadWriteDao>(FLASH_MODELS_TYPES.PaymentRuleCardReadWriteDao).to(PaymentRuleCardReadWriteDaoMongoImpl).inSingletonScope()

        bind<PilotPassbookEntrySchema>(FLASH_MODELS_TYPES.PilotPassbookEntryPrimarySchema).to(PilotPassbookEntrySchemaFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<PilotPassbookEntrySchema>(FLASH_MODELS_TYPES.PilotPassbookEntrySecondarySchema).to(PilotPassbookEntrySchemaFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<IPilotPassbookEntryReadOnlyDao>(FLASH_MODELS_TYPES.PilotPassbookEntryReadOnlyPrimaryDao).to(PilotPassbookEntryReadOnlyDaoFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<IPilotPassbookEntryReadOnlyDao>(FLASH_MODELS_TYPES.PilotPassbookEntryReadOnlySecondaryDao).to(PilotPassbookEntryReadOnlyDaoFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<IPilotPassbookEntryReadWriteDao>(FLASH_MODELS_TYPES.PilotPassbookEntryReadWriteDao).to(PilotPassbookEntryReadWriteDaoMongoImpl).inSingletonScope()

        bind<PilotShiftSchema>(FLASH_MODELS_TYPES.PilotShiftSchema).to(PilotShiftSchema).inSingletonScope()
        bind<IPilotShiftReadWriteDao>(FLASH_MODELS_TYPES.PilotShiftReadwriteDao).to(PilotShiftReadWriteDaoMongoImpl).inSingletonScope()
        bind<IPilotShiftReadonlyDao>(FLASH_MODELS_TYPES.PilotShiftReadonlyDao).to(PilotShiftReadonlyDaoMongoImpl).inSingletonScope()

        bind<PilotStateHistorySchema>(FLASH_MODELS_TYPES.PilotStateHistorySchema).to(PilotStateHistorySchema).inSingletonScope()

        bind<PilotAttendanceSchema>(FLASH_MODELS_TYPES.PilotAttendancePrimarySchema).to(PilotAttendanceSchemaFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<PilotAttendanceSchema>(FLASH_MODELS_TYPES.PilotAttendanceSecondarySchema).to(PilotAttendanceSchemaFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<IPilotAttendanceReadOnlyDao>(FLASH_MODELS_TYPES.PilotAttendanceReadOnlyPrimaryDao).to(PilotAttendanceReadOnlyDaoFactory(ReadPreference.PRIMARY)).inSingletonScope()
        bind<IPilotAttendanceReadOnlyDao>(FLASH_MODELS_TYPES.PilotAttendanceReadOnlySecondaryDao).to(PilotAttendanceReadOnlyDaoFactory(ReadPreference.SECONDARY_PREFERRED)).inSingletonScope()
        bind<IPilotAttendanceReadWriteDao>(FLASH_MODELS_TYPES.PilotAttendanceReadWriteDao).to(PilotAttendanceReadWriteDaoMongoImpl).inSingletonScope()


    })
}