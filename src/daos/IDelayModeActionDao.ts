import { IRead, IWrite } from "@curefit/mongo-utils"
import { DelayModeAction } from "@curefit/flash-common"

export interface IDelayModeActionReadWriteDao extends IWrite<DelayModeAction>, IRead<DelayModeAction> { }
export interface IDelayModeActionReadonlyDao extends IRead<DelayModeAction> {}
