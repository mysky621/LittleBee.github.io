import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
/**
 * 商家微信补贴model
 */
export interface AllowanceWeChatListModel {
    /**
     * id
     */
    id: number;
    /**
     * 方案名称
     */
    name: string;
    /**
     * 比例
     */
    percentage: number;
    /**
     * 是否默认方案
     */
    defaultAllowance: boolean;
}
/**
 * 商家服务单位详情
 */
export interface AllowanceWeChatModel extends AllowanceWeChatListModel {
    /**
     * 商家服务单位
     */
    unitList: Array<SimpleModel>;
}
/**
 * 商家补贴编辑model
 */
export interface AllowanceWeChatEditModel extends AllowanceWeChatListModel {
    /**
     * 商家服务单位ids
     */
    unitIds: Array<number>;
}
/**
 * 获取商家补贴列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<AllowanceWeChatModel>>;
/**
 * 获取商家补贴
 * @param params
 */
declare function get(id: number): Promise<any>;
/**
 * 添加/更新商家补贴
 * @param params
 */
declare function save(params: AllowanceWeChatEditModel): Promise<any>;
/**
 * 删除商家微信补贴
 * @param id
 */
declare function del(id: number): Promise<any>;
/**
 * 获取商家服务单位列表
 * @param params
 */
declare function getUnitList(weChatId: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
    getUnitList: typeof getUnitList;
};
export default _default;
