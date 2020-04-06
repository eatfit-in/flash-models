import { IRead, IWrite } from "@curefit/mongo-utils"
import { MyGateApprovals } from "@curefit/flash-common"

export interface IMyGateApprovalsReadWriteDao extends IWrite<MyGateApprovals>, IRead<MyGateApprovals> { }
export interface IMyGateApprovalsReadonlyDao extends IRead<MyGateApprovals> {}
