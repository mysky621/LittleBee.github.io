import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 平台单位model
 */
export interface PlatFormUnitModel {
    /**
     * id
     */
    id: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 法人
     */
    legalPerson: string;
    /**
     * 联系电话
     */
    officeTelephone: string;
    /**
     * 地址
     */
    unitAddress: string;
    /**
     * 加入时间
     */
    createdDate: Date;
    /**
     * 状态
     */
    statusType: string;
}
/**
 * 平台单位编辑model
 */
export interface PlatFormUnitEditModel {
    /**
     * id
     */
    id: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 法人
     */
    legalPerson: string;
    /**
     * 联系电话
     */
    officeTelephone: string;
    /**
     * 学校地址
     */
    unitAddress: string;
    /**
     * 省/市/县
     */
    region: string;
    /**
     * 省
     */
    province: string;
    /**
     * 市
     */
    city: string;
    /**
     * 县
     */
    area: string;
    /**
     * 街道
     */
    street: string;
    /**
     * 经度
     */
    longitude: number;
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 状态
     */
    statusType: string;
}
/**
 * 状态
 */
export declare const StatusType: {
    Normal: string;
    Delete: string;
    Disabled: string;
};
/**
 * 获取列表
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<PlatFormUnitModel>>;
/**
 * 获取平台单位信息
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 添加/更新平台单位
 * @param params
 */
declare function save(params: PlatFormUnitEditModel): Promise<any>;
/**
 * 删除平台单位
 * @param id
 */
declare function del(id: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
};
export default _default;
