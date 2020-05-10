import { MONGO_TYPES, MultiMongooseAccess, MultiMongooseSchema } from "@curefit/mongo-utils"
import { inject, injectable } from "inversify"
import { BASE_TYPES, ILogger } from "@curefit/base"

import { PilotAttendanceModel } from "./PilotAttendanceModel"
import { HourMinSchema } from "@curefit/schema-mongo"

const LoginDetailsSchemaObject = {
  start: {
    type: HourMinSchema,
    required: true,
  },
  end: {
    type: HourMinSchema,
    required: false,
  },
}

const PilotAttendanceSchemaObject = {
  pilotId: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  loginMinutes: {
    type: Number,
    required: false,
  },
  logins: {
    type: [LoginDetailsSchemaObject],
    required: true,
  },
}

@injectable()
export class PilotAttendanceSchema extends MultiMongooseSchema<PilotAttendanceModel> {
  constructor(mongooseAccess: MultiMongooseAccess, readPreference?: string) {
    super(mongooseAccess, "PilotAttendances", "DEFAULT", readPreference)
  }

  protected schema() {
    return PilotAttendanceSchemaObject
  }
}

export function PilotAttendanceSchemaFactory(readPreference: string): any {
  @injectable()
  class PilotAttendanceSchemaWithReadPreference extends PilotAttendanceSchema {
    constructor(
      @inject(MONGO_TYPES.MultiMongooseAccess) mongooseAccess: MultiMongooseAccess,
      @inject(BASE_TYPES.ILogger) logger: ILogger
    ) {
      super(mongooseAccess, readPreference)
    }
  }

  return PilotAttendanceSchemaWithReadPreference
}
