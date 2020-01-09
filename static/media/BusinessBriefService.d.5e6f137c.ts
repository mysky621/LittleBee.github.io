import { AttachmentModel } from '@school/meal-react-framework/Services/AttachmentService';
export interface BusinessBriefModel {
    id: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 电话
     */
    mobile: string;
    /**
     * 地址
     */
    address: string;
    /**
     * 网址
     */
    website: string;
    /**
     * 简介
     */
    brief: string;
    /**
     * 商家单位id
     */
    businessId: number;
}
export interface BusinessBriefEditModel extends BusinessBriefModel {
    imgs: Array<AttachmentModel>;
}
export interface ResultMessage {
    /**
     * 状态代码
     */
    code: string;
    /**
     * 返回主数据
     */
    data: object;
    /**
     * 返回消息
     */
    message: string;
    /**
     * 执行是否成功
     */
    success: boolean;
}
declare function get(id: number): Promise<any>;
declare function save(businessBrief: BusinessBriefEditModel): Promise<any>;
declare const _default: {
    get: typeof get;
    save: typeof save;
};
export default _default;
