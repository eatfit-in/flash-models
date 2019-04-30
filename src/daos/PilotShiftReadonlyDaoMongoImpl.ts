import { injectable, inject } from "inversify"
import { MongoReadonlyDao } from "@curefit/mongo-utils"
import { PilotShiftModel } from "../models/pilotShift/PilotShiftModel"
import { PilotShift } from "@curefit/flash-common"
import { IPilotShiftReadonlyDao } from "./IPilotShiftDao"
import { PilotShiftSchema } from "../models/pilotShift/PilotShiftSchema"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"
import { BASE_TYPES, ILogger } from "@curefit/base"

@injectable()
export class PilotShiftReadonlyDaoMongoImpl extends MongoReadonlyDao<PilotShiftModel, PilotShift> implements IPilotShiftReadonlyDao {
    constructor(
        @inject(FLASH_MODELS_TYPES.PilotShiftSchema) pilotShiftSchema: PilotShiftSchema,
        @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
        super(pilotShiftSchema.mongooseModel, logger, pilotShiftSchema.isLeanQueryEnabled)
    }
}
