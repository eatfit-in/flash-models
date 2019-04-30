import { Lot } from "@curefit/eat-common"
import { IWrite, IRead } from "@curefit/mongo-utils"

export interface ILotReadWriteDao extends IWrite<Lot>, IRead<Lot> { }
export interface ILotReadonlyDao extends IRead<Lot> {}
