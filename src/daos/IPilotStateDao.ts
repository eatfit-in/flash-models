import { IWrite, IRead } from "@curefit/mongo-utils"
import { PilotState } from "@curefit/flash-common"

export interface IPilotStateReadWriteDao extends IWrite<PilotState>, IRead<PilotState> { }
export interface IPilotStateReadonlyDao extends IRead<PilotState> {}
