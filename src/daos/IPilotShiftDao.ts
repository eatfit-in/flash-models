import { IRead, IWrite } from "@curefit/mongo-utils"
import { PilotShift } from "@curefit/flash-common"

export interface IPilotShiftReadWriteDao extends IWrite<PilotShift>, IRead<PilotShift> { }
export interface IPilotShiftReadonlyDao extends IRead<PilotShift> {}
