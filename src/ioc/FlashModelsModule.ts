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
import MyGateSocietySchema from "../models/myGate/MyGateSocietySchema"
import { IMyGateSocietyReadonlyDao, IMyGateSocietyReadWriteDao } from "../daos/myGate/IMyGateSocietyDao"
import { MyGateSocietyReadWriteDaoMongoImpl } from "../daos/myGate/MyGateSocietyReadWriteImpl"
import MyGateSocietyReadonlyDaoMongoImpl from "../daos/myGate/MyGateSocietyReadOnlyImpl"
import { MyGateApprovalsSchema } from "../models/myGate/MyGateApprovalsSchema"
import { IMyGateApprovalsReadonlyDao, IMyGateApprovalsReadWriteDao } from "../daos/myGate/IMyGateApprovalsDao"
import { MyGateApprovalsReadonlyDaoMongoImpl } from "../daos/myGate/MyGateApprovalsReadonlyDaoMongoImpl"
import { MyGateApprovalsReadWriteDaoMongoImpl } from "../daos/myGate/MyGateApprovalsReadWriteDaoMongoImpl"

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

        bind<PilotShiftSchema>(FLASH_MODELS_TYPES.PilotShiftSchema).to(PilotShiftSchema).inSingletonScope()
        bind<IPilotShiftReadWriteDao>(FLASH_MODELS_TYPES.PilotShiftReadwriteDao).to(PilotShiftReadWriteDaoMongoImpl).inSingletonScope()
        bind<IPilotShiftReadonlyDao>(FLASH_MODELS_TYPES.PilotShiftReadonlyDao).to(PilotShiftReadonlyDaoMongoImpl).inSingletonScope()

        bind<PilotStateHistorySchema>(FLASH_MODELS_TYPES.PilotStateHistorySchema).to(PilotStateHistorySchema).inSingletonScope()

    })
}
