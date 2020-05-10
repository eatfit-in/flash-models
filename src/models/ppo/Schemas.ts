import { CompositeIndex, MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { inject, injectable } from "inversify"
import { BASE_TYPES, ILogger } from "@curefit/base"
import { SchemaTypes } from "mongoose"
import { PaymentRuleCardModel } from "./Models"
import { PilotPassbookEntryModel } from "./Models"
import { PaymentRuleTypes, PaymentUnitTypes } from "@curefit/flash-common"

const PaymentRuleSchemaObject = {
  ruleType: {
    type: String,
    enum: PaymentRuleTypes,
    required: true,
  },
  unit: {
    type: Number,
    required: true,
  },
  unitType: {
    type: String,
    enum: PaymentUnitTypes,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  valueLimit: {
    type: Number,
    required: false,
  },
  daysCalculatedFor: {
    type: Number,
    required: false,
  },
  minimumUnits: {
    type: Number,
    required: false,
  },
  maximumUnits: {
    type: Number,
    required: false,
  }
}

const PaymentRuleCardSchemaObject = {
  ruleCardId: {
    type: String,
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    index: true,
  },
  rules: {
    type: [PaymentRuleSchemaObject],
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    index: true,
  },
}

const TempSchema1Object = {
  field: {
    type: String,
    required: true,
  },
  oldValue: {
    type: SchemaTypes.Mixed,
    required: true,
  },
  newValue: {
    type: SchemaTypes.Mixed,
    required: true,
  },
}

const TempSchema2Object = {
  ruleCardId: {
    type: String,
    required: true,
  },
  lotIds: {
    type: [String],
    required: true,
  },
}

const PilotPassbookAuditSchemaObject = {
  changedBy: {
    type: String,
    required: true,
  },
  changes: {
    type: [TempSchema1Object],
    required: true,
  },
  changedAt: {
    type: Date,
    required: true
  },
}

const PilotPassbookEntrySchemaObject = {
  startDate: {
    type: String,
    required: true,
    index: true,
  },
  endDate: {
    type: String,
    required: true,
    index: true,
  },
  pilotId: {
    type: String,
    required: true,
    index: true,
  },
  centerId: {
    type: String,
    required: true,
    index: true,
  },
  ruleCardId: {
    type: String,
    required: true,
    index: true,
  },
  lotIds: {
    type: [String],
    required: true,
  },
  surgePricing: {
    type: [TempSchema2Object],
    required: false,
  },
  auditTrails: {
    type: [PilotPassbookAuditSchemaObject],
    required: false,
  },
}

@injectable()
export class PaymentRuleCardSchema extends MultiMongooseSchema<PaymentRuleCardModel> {
  constructor(mongooseAccess: MultiMongooseAccess, readPreference?: string) {
    super(mongooseAccess, "PaymentRuleCard", "DEFAULT", readPreference)
  }

  protected schema() {
    return PaymentRuleCardSchemaObject
  }

  protected getCompositeUniqueIndex(): any {
    return { ruleCardId: 1, active: 1 }
  }

  protected getAllCompositeIndexes(): CompositeIndex[] {
    return [
      {ruleCardId: 1, active: 1}
    ]
  }
}

export function PaymentRuleCardSchemaFactory(readPreference: string): any {
  @injectable()
  class PaymentRuleCardSchemaWithReadPreference extends PaymentRuleCardSchema {
    constructor(
      @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess,
      @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
      super(mongooseAccess, readPreference)
    }
  }

  return PaymentRuleCardSchemaWithReadPreference
}

@injectable()
export class PilotPassbookEntrySchema extends MultiMongooseSchema<PilotPassbookEntryModel> {
  constructor(mongooseAccess: MultiMongooseAccess, readPreference?: string) {
    super(mongooseAccess, "PilotPassbook", "DEFAULT", readPreference)
  }

  protected schema() {
    return PilotPassbookEntrySchemaObject
  }

  protected getCompositeUniqueIndex(): any {
    return { ruleCardId: 1, centerId: 1, pilotId: 1 }
  }

  protected getAllCompositeIndexes(): CompositeIndex[] {
    return [
      { ruleCardId: 1, centerId: 1, pilotId: 1 }
    ]
  }
}

export function PilotPassbookEntrySchemaFactory(readPreference: string): any {
  @injectable()
  class PilotPassbookEntrySchemaWithReadPreference extends PilotPassbookEntrySchema {
    constructor(
      @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess,
      @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
      super(mongooseAccess, readPreference)
    }
  }

  return PilotPassbookEntrySchemaWithReadPreference
}
