import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export declare const PayChannel: {
    WeChat: string;
    PingAnBank: string;
};
export interface PaySettingEditModel {
    id: number;
    serviceUnitId: number;
    nonServiceUnitId: number;
    payChannel: string;
    mchId: string;
    accountProportion: number;
    silence: boolean;
}
export interface PaySettingModel extends PaySettingEditModel {
    businessName: string;
}
export interface PayChannelModel {
    payChannel: string;
    mchId: string;
    mchIdentify: string;
    accountProportion: number;
    silence: boolean;
}
export interface PayChannelSettingModelMap {
    [key: string]: PayChannelModel;
}
export interface PayChannelSettingModel {
    serviceUnitId: number;
    payChannelSettingModelMap: PayChannelSettingModelMap;
}
export interface DefaultPaySettingModel {
    id: number;
    silence: boolean;
}
export interface ServiceUnitChannelParams {
    serviceUnitId: number;
    nonServiceUnitId: number;
}
export interface PaySettingTypeEditModel {
    serviceUnitId: number;
    payChannel: string;
    mchId: string;
    nonServiceUnitId?: number;
}
/**
 * 保存/更新支付设置
 *
 * @param paySetting
 */
declare function save(paySetting: PaySettingEditModel): Promise<any>;
/**
 * 获取服务单位支付设置列表
 *
 * @param params
 */
declare function getServiceUnitList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<PaySettingModel>>;
/**
 * 获取被服务单位支付设置列表
 *
 * @param params
 */
declare function getNonServiceUnitList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<PaySettingModel>>;
/**
 * 是否使用默认设置
 *
 * @param params
 */
declare function setDefaultPaySetting(params: DefaultPaySettingModel): Promise<any>;
/**
 * 获取服务单位通道设置
 *
 * @param params
 */
declare function getServiceUnitChannel(params: ServiceUnitChannelParams): Promise<any>;
/**
 * 获取服务单位账户
 *
 * @param params
 */
declare function getServiceUnitMchId(params: string): Promise<string[]>;
/**
 * 设置服务单位的商户号
 *
 * @param params
 */
declare function editServiceUnitMchIdentify(params: PaySettingTypeEditModel): Promise<any>;
declare const _default: {
    save: typeof save;
    getServiceUnitList: typeof getServiceUnitList;
    getNonServiceUnitList: typeof getNonServiceUnitList;
    setDefaultPaySetting: typeof setDefaultPaySetting;
    getServiceUnitChannel: typeof getServiceUnitChannel;
    getServiceUnitMchId: typeof getServiceUnitMchId;
    editServiceUnitMchIdentify: typeof editServiceUnitMchIdentify;
};
export default _default;
