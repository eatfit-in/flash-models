import { injectable, inject } from "inversify"
import { MongoReadWriteDao } from "@curefit/mongo-utils"
import { PilotShiftModel } from "../models/pilotShift/PilotShiftModel"
import { PilotShift } from "@curefit/flash-common"
import { IPilotShiftReadWriteDao } from "./IPilotShiftDao"
import { PilotShiftSchema } from "../models/pilotShift/PilotShiftSchema"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { PilotShiftReadonlyDaoMongoImpl } from "./PilotShiftReadonlyDaoMongoImpl"

@injectable()
export class PilotShiftReadWriteDaoMongoImpl extends MongoReadWriteDao<PilotShiftModel, PilotShift> implements IPilotShiftReadWriteDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.PilotShiftSchema) pilotShiftSchema: PilotShiftSchema,
        @inject(FLASH_MODELS_TYPES.PilotShiftReadonlyDao) readonlyDao: PilotShiftReadonlyDaoMongoImpl,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(pilotShiftSchema.mongooseModel, readonlyDao, logger)
    }
}
