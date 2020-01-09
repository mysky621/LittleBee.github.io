import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 商家model
 */
export interface BusinessModel {
    /**
     * 商家id
     */
    id: number;
    /**
     * 商家名称
     */
    name: string;
    /**
     * 商家类型
     */
    businessType: string;
    /**
     * 法人
     */
    legalPerson: string;
    /**
     * 联系电话
     */
    officeTelephone: string;
    /**
     * 商家地址
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
     * 加入时间
     */
    createdDate: Date;
    /**
     * 状态
     */
    statusType: string;
    /**
     * 入账方式
     */
    accountingWay: string;
    /**
     * 结算周期
     */
    accountingPeriod: string;
    /**
     * 结算费率
     */
    accountRate: number;
    /**
     * 商家微信商户号
     */
    subMchId: string;
    /**
     * 可编辑
     */
    editable: boolean;
    /**
     * 标识
     */
    identifier: string;
    /**
     * 审核状态
     */
    auditStatus: string;
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
 * 商家类型
 */
export declare const BusinessType: {
    Central: string;
    Canteen: string;
};
/**
 * 状态
 */
export declare const AuditStatus: {
    Pass: string;
    NotPass: string;
    ToAudit: string;
};
/**
 * 状态
 */
export declare const enum AuditStatusKey {
    Pass = 0,
    NotPass = 1,
    /**
     * 待审核
     */
    ToAudit = 2
}
/**
 * 是否长期
 */
export declare const enum ValidPreiodType {
    LongTerm = 0,
    NotLongTerm = 1
}
export interface UnitSettings {
    classType: string;
    content: Object;
    unitId: number;
}
export interface SearchUnitSettings {
    classType: string;
    unitId: number;
}
export interface UnitSettingsContent {
    leave: {
        leaveTime: string;
        leaveType: string;
    };
    order: {
        orderTime: string;
        orderType: string;
    };
    dayOrder: boolean;
    monthOrder: boolean;
    online: boolean;
    offline: boolean;
}
export interface BusinessAuditModel {
    id: number;
    /**
     * 审核状态
     */
    auditStatus: string;
    /**
     * 审核信息
     */
    message: string;
}
/**
 * 获取商家列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<BusinessModel>>;
/**
 * 获取商家信息
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 添加/更新商家
 * @param params
 */
declare function save(params: BusinessModel): Promise<any>;
/**
 * 删除商家
 * @param id
 */
declare function del(id: number): Promise<any>;
declare function getUnitSettings(params: SearchUnitSettings): Promise<any>;
declare function saveUnitSettings(params: UnitSettings): Promise<any>;
/**
 * 更新商家可编辑状态
 * @param params
 */
declare function updateEditable(params: UpdateEditableParams): Promise<UpdateEditableParams>;
/**
 * 商家入驻
 * @param params
 */
declare function businessSettledIn(params: object): Promise<any>;
/**
 * 获取商家入驻信息
 * @param params
 */
declare function getBusinseeSettledInfo(params: number): Promise<any>;
declare function auditBusiness(params: BusinessAuditModel): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
    getUnitSettings: typeof getUnitSettings;
    saveUnitSettings: typeof saveUnitSettings;
    updateEditable: typeof updateEditable;
    businessSettledIn: typeof businessSettledIn;
    getBusinseeSettledInfo: typeof getBusinseeSettledInfo;
    auditBusiness: typeof auditBusiness;
};
export default _default;
export interface UpdateEditableParams {
    id: number;
    editable: boolean;
}
