import { IRead, IWrite } from "@curefit/mongo-utils"
import { DelayWindow } from "@curefit/flash-common"

export interface IDelayWindowReadWriteDao extends IWrite<DelayWindow>, IRead<DelayWindow> { }
export interface IDelayWindowReadonlyDao extends IRead<DelayWindow> {}
