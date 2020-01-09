import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
/**
 * 获取消息模板列表
 */
declare function fetchMessageTemplates(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<MessageTemplateListModel>>;
/**
 * 获取本单位所有消息模板
 */
declare function fetchAllMessageTemplates(): Promise<any>;
/**
 * 获取消息模板
 */
declare function fetchMessageTemplate(params: number): Promise<MessageTemplateModel>;
/**
 * 创建消息模板
 * @param params
 */
declare function save(params: MessageTemplateModel): Promise<ResponseModel>;
/**
 * 获取自定义模板列表
 * @param params
 */
declare function fetchTemplateSettings(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<MessageTemplateListModel>>;
/**
 * 获取自定义模板详情
 * @param params
 */
declare function fetchTemplateSettingItem(params: number): Promise<any>;
/**
 * 获取服务单位
 * @param params
 */
declare function fetchServiceSchool(): Promise<any>;
/**
 * 获取服务单位
 * @param params
 */
declare function fetchExistingSchool(params: string): Promise<any>;
/**
 * 创建消息模板
 * @param params
 */
declare function saveSetting(params: MessageTemplateSettingModel): Promise<ResponseModel>;
declare const _default: {
    fetchMessageTemplates: typeof fetchMessageTemplates;
    fetchAllMessageTemplates: typeof fetchAllMessageTemplates;
    fetchMessageTemplate: typeof fetchMessageTemplate;
    save: typeof save;
    fetchTemplateSettings: typeof fetchTemplateSettings;
    fetchTemplateSettingItem: typeof fetchTemplateSettingItem;
    fetchServiceSchool: typeof fetchServiceSchool;
    fetchExistingSchool: typeof fetchExistingSchool;
    saveSetting: typeof saveSetting;
};
export default _default;
export interface MessageTemplateListModel {
    id: number;
    templateId: string;
    title: string;
    tenantTypeId: string;
}
export interface MessageTemplateSettingListModel {
    id: number;
    templateId: number;
    title: string;
    unitNames: Array<string>;
    url: string;
}
export interface MessageTemplateSettingModel {
    id: number;
    templateId: number;
    unitIds: Array<number>;
    firstData: string;
    remarkData: string;
    color?: string;
    url: string;
}
export interface MessageTemplateModel {
    id: number;
    templateId: string;
    title: string;
    tenantTypeId: string;
    firstData: string;
    remarkData: string;
    url?: string;
    color?: string;
    introduceUrl?: string;
}
