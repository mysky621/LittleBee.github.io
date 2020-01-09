import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 月账单model
 */
export interface MonthBillModel {
    /**
     * 账单id
     */
    id: number;
    /**
     * 年
     */
    year: number;
    /**
     * 月
     */
    month: number;
    /**
     * 总量
     */
    total: number;
    /**
     * 总金额
     */
    amount: number;
    /**
     * 商家优惠
     */
    discount: number;
    /**
     * 扣除费用
     */
    deductCost: number;
    /**
     * 状态
     */
    billStatus: string;
    /**
     * 结算应收
     */
    receivableSettlement: number;
    /**
     * 实收账款
     */
    accountsReceivable: number;
}
/**
 * 学校账单
 */
export interface SchoolMonthBillModel extends MonthBillModel {
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 账单周期
     */
    billingCycle: string;
}
export interface MonthBillEditModel {
    /**
     * 账单id
     */
    id: number;
    /**
     * 状态
     */
    billStatus: string;
}
export interface MonthBillParams extends Pagable {
    id: number;
}
/**
 * 商家总计月账单model
 */
export interface TotalStatisticsModel {
    /**
     * 学校数量
     */
    schoolNum: number;
    /**
     * 总量
     */
    total: number;
    /**
     * 总金额
     */
    amount: number;
    /**
     * 商家优惠
     */
    discount: number;
    /**
     * 结算应收
     */
    receivableSettlement: number;
}
/**
 * 状态
 */
export declare const BillStatusType: {
    WaitConfirm: string;
    WaitReceipt: string;
    Completed: string;
};
/**
 * 获取月账单列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<MonthBillModel>>;
/**
 * 获取月账单信息
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 根据商家获取月账单列表
 * @param params
 */
declare function getListByBusiness(params: MonthBillParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<SchoolMonthBillModel>>;
/**
 * 添加/更新月账单
 * @param params
 */
declare function save(params: MonthBillEditModel): Promise<any>;
/**
 * 获取商家月账单统计列表
 */
declare function getBusinessTotalList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<TotalStatisticsModel>>;
declare const _default: {
    getList: typeof getList;
    save: typeof save;
    get: typeof get;
    getListByBusiness: typeof getListByBusiness;
    getBusinessTotalList: typeof getBusinessTotalList;
};
export default _default;
