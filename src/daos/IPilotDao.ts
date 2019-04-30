import { IRead, IWrite } from "@curefit/mongo-utils"
import { Pilot } from "@curefit/flash-common"

export interface IPilotReadWriteDao extends IWrite<Pilot>, IRead<Pilot> { }
export interface IPilotReadonlyDao extends IRead<Pilot> {}
