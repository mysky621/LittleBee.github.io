import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { MapObject } from '@school/meal-react-framework/Models/createModel';
/**
 * 获取模板消息
 */
declare function fetchTemplateMessage(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<TemplateMessageModel>>;
/**
 * 获取商家列表
 */
declare function fetchBusinessList(): Promise<any>;
declare const _default: {
    fetchTemplateMessage: typeof fetchTemplateMessage;
    fetchBusinessList: typeof fetchBusinessList;
};
export default _default;
export interface TemplateMessageModel {
    id: number;
    message: MapObject<Object>;
    templateId: string;
    templateTitle: string;
    sendUserName: string;
    receiveUsers: Array<TemplateMessageUserModel>;
    successfulReceiveUsers: Array<TemplateMessageUserModel>;
    createdDate: number;
    receiveUnitName: string;
}
export interface TemplateMessageUserModel {
    id: number;
    userName: string;
    userUnit: string;
    userGrade: string;
    userClasses: string;
}
