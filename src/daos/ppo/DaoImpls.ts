import { inject, injectable } from "inversify"
import { MongoReadWriteDao, MongoReadonlyDao } from "@curefit/mongo-utils"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { ReadPreference } from "mongodb"
import { FLASH_MODELS_TYPES } from "../../ioc/FlashModelsTypes"
import { PaymentRuleCardModel, PilotPassbookEntryModel } from "../../models/ppo/Models"
import { PaymentRuleCard, PilotPassbookEntry } from "@curefit/flash-common"
import {
  IPaymentRuleCardReadOnlyDao,
  IPaymentRuleCardReadWriteDao,
  IPilotPassbookEntryReadOnlyDao,
  IPilotPassbookEntryReadWriteDao
} from "./Daos"
import { PaymentRuleCardSchema, PilotPassbookEntrySchema } from "../../models/ppo/Schemas"


@injectable()
export class PaymentRuleCardReadWriteDaoMongoImpl extends MongoReadWriteDao<PaymentRuleCardModel, PaymentRuleCard> implements IPaymentRuleCardReadWriteDao {
  constructor(
    @inject(FLASH_MODELS_TYPES.PaymentRuleCardPrimarySchema) schema: PaymentRuleCardSchema,
    @inject(FLASH_MODELS_TYPES.PaymentRuleCardReadOnlyPrimaryDao) readonlyDao: IPaymentRuleCardReadOnlyDao,
    @inject(BASE_TYPES.ILogger) logger: ILogger
  ) {
    super(schema.mongooseModel, readonlyDao, logger)
  }
}

export function PaymentRuleCardReadOnlyDaoFactory(readPreference: string): any {

  @injectable()
  class PaymentRuleCardReadonlyDaoMongoImpl extends MongoReadonlyDao<PaymentRuleCardModel, PaymentRuleCard> implements IPaymentRuleCardReadOnlyDao {
    constructor(
      @inject(FLASH_MODELS_TYPES.PaymentRuleCardPrimarySchema) primarySchema: PaymentRuleCardSchema,
      @inject(FLASH_MODELS_TYPES.PaymentRuleCardSecondarySchema) secondarySchema: PaymentRuleCardSchema,
      @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
      const schema = readPreference === ReadPreference.SECONDARY_PREFERRED ? secondarySchema : primarySchema
      super(schema.mongooseModel, logger, schema.isLeanQueryEnabled)
    }
  }

  return PaymentRuleCardReadonlyDaoMongoImpl
}

@injectable()
export class PilotPassbookEntryReadWriteDaoMongoImpl extends MongoReadWriteDao<PilotPassbookEntryModel, PilotPassbookEntry> implements IPilotPassbookEntryReadWriteDao {
  constructor(
    @inject(FLASH_MODELS_TYPES.PilotPassbookEntryPrimarySchema) schema: PilotPassbookEntrySchema,
    @inject(FLASH_MODELS_TYPES.PilotPassbookEntryReadOnlyPrimaryDao) readonlyDao: IPilotPassbookEntryReadOnlyDao,
    @inject(BASE_TYPES.ILogger) logger: ILogger
  ) {
    super(schema.mongooseModel, readonlyDao, logger)
  }
}

export function PilotPassbookEntryReadOnlyDaoFactory(readPreference: string): any {

  @injectable()
  class PilotPassbookEntryReadonlyDaoMongoImpl extends MongoReadonlyDao<PilotPassbookEntryModel, PilotPassbookEntry> implements IPilotPassbookEntryReadOnlyDao {
    constructor(
      @inject(FLASH_MODELS_TYPES.PilotPassbookEntryPrimarySchema) primarySchema: PilotPassbookEntrySchema,
      @inject(FLASH_MODELS_TYPES.PilotPassbookEntrySecondarySchema) secondarySchema: PilotPassbookEntrySchema,
      @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
      const schema = readPreference === ReadPreference.SECONDARY_PREFERRED ? secondarySchema : primarySchema
      super(schema.mongooseModel, logger, schema.isLeanQueryEnabled)
    }
  }

  return PilotPassbookEntryReadonlyDaoMongoImpl
}
