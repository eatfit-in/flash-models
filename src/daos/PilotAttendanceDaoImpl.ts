import { inject, injectable } from "inversify"
import { MongoReadWriteDao, MongoReadonlyDao } from "@curefit/mongo-utils"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { ReadPreference } from "mongodb"
import { PilotAttendanceModel } from "../models/pilot/PilotAttendanceModel"
import { PilotAttendance } from "@curefit/flash-common"
import { IPilotAttendanceReadOnlyDao, IPilotAttendanceReadWriteDao } from "./IPilotAttendanceDao"
import { PilotAttendanceSchema } from "../models/pilot/PilotAttendanceSchema"
import { FLASH_MODELS_TYPES } from "../ioc/FlashModelsTypes"

@injectable()
export class PilotAttendanceReadWriteDaoMongoImpl extends MongoReadWriteDao<PilotAttendanceModel, PilotAttendance> implements IPilotAttendanceReadWriteDao {
  constructor(
    @inject(FLASH_MODELS_TYPES.PilotAttendancePrimarySchema) schema: PilotAttendanceSchema,
    @inject(FLASH_MODELS_TYPES.PilotAttendanceReadOnlyPrimaryDao) readonlyDao: IPilotAttendanceReadOnlyDao,
    @inject(BASE_TYPES.ILogger) logger: ILogger
  ) {
    super(schema.mongooseModel, readonlyDao, logger)
  }
}

export function PilotAttendanceReadOnlyDaoFactory(readPreference: string): any {

  @injectable()
  class PilotAttendanceReadonlyDaoMongoImpl extends MongoReadonlyDao<PilotAttendanceModel, PilotAttendance> implements IPilotAttendanceReadOnlyDao {
    constructor(
      @inject(FLASH_MODELS_TYPES.PilotAttendancePrimarySchema) primarySchema: PilotAttendanceSchema,
      @inject(FLASH_MODELS_TYPES.PilotAttendanceSecondarySchema) secondarySchema: PilotAttendanceSchema,
      @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
      const schema = readPreference === ReadPreference.SECONDARY_PREFERRED ? secondarySchema : primarySchema
      super(schema.mongooseModel, logger, schema.isLeanQueryEnabled)
    }
  }

  return PilotAttendanceReadonlyDaoMongoImpl
}
