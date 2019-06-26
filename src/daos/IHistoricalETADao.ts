import { IRead, IWrite } from "@curefit/mongo-utils"
import { HistoricalETA } from "@curefit/flash-common"

export interface IHistoricalETAReadWriteDao extends IWrite<HistoricalETA>, IRead<HistoricalETA> { }
export interface IHistoricalETAReadonlyDao extends IRead<HistoricalETA> {}
