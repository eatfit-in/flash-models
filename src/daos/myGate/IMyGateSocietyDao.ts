import { IRead, IWrite } from "@curefit/mongo-utils"
import { MyGateSociety } from "@curefit/flash-common"

export interface IMyGateSocietyReadonlyDao extends IRead<MyGateSociety> {
}
export interface IMyGateSocietyReadWriteDao extends IWrite<MyGateSociety>, IRead<MyGateSociety>  {
}