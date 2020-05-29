import { IRead, IWrite } from "@curefit/mongo-utils"
import { PilotAttendance } from "@curefit/flash-common"

export interface IPilotAttendanceReadWriteDao extends IWrite<PilotAttendance>, IRead<PilotAttendance> {}
export interface IPilotAttendanceReadOnlyDao extends IRead<PilotAttendance> {}
