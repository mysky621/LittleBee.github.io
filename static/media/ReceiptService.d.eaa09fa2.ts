import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { Moment } from 'moment';
/**
 * 收单管理model
 */
export interface ReceiptModel {
    /**
     * id
     */
    id: number;
    /**
     * 名称
     */
    name: number;
    /**
     * 总计
     */
    total: number;
    /**
     * 内容
     */
    remark: string;
}
/**
 * 餐标统计model
 */
export interface StandardStatisticsModel {
    /**
     * id
     */
    id: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 总计
     */
    total: number;
    /**
     * 价格
     */
    mealMoney: number;
}
/**
 * 餐品统计
 */
export interface MealBoxStatisticsModel {
    /**
     * id
     */
    id: number;
    /**
     * 餐品名称
     */
    mealBoxName: string;
    /**
     * 餐品配图
     */
    mealBoxImgs: Array<string>;
    /**
     * 合计数量
     */
    total: number;
    /**
     * 用户类型
     */
    userTypes: string;
    /**
     * 收单时间
     */
    receiptTime: Date;
}
/**
 * 收单明细model
 */
export interface ReceiptDetailModel {
    /**
     *
     */
    id: number;
    /**
     * 用餐日期
     */
    mealDate: Date;
    /**
     * 姓名
     */
    name: string;
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 年级
     */
    gradeName: string;
    /**
     * 班级
     */
    classesName: string;
    /**
     * 姓名
     */
    associatedUserName: string;
    /**
     * 餐标
     */
    money: string;
    /**
     * 餐饮风格
     */
    foodProductsType: string;
    /**
     * 餐品名字
     */
    mealBoxName: string;
    /**
     * 用户类型
     */
    userTypes: string;
    /**
     * 下单方式
     */
    orderType: string;
}
export interface MealBoxStatisticsParams extends Pagable {
    unitId?: number;
}
export interface MealBoxParams {
    unitId: number;
    date: string;
}
export interface MealStandard {
    id: number;
    name: string;
    money: number;
}
/**
 * 身份
 */
export declare const UserTypes: {
    Student: string;
    Teacher: string;
};
export declare const OrderType: {
    Day: string;
    Month: string;
    PayCost: string;
};
export declare const FoodProductsType: {
    Ordinary: string;
    Muslim: string;
};
export interface ReceiptStatisticModel {
    /**
     * 当日订餐总人数
     */
    totalNum: number;
    /**
     * 请假总数
     */
    leaveNum: number;
    /**
     * 收单总数
     */
    receiptOrderNum: number;
    /**
     * 普通餐总数
     */
    ordinaryNum: number;
    /**
     * 清真餐总数
     */
    muslimNum: number;
    /**
     * 生成时间
     */
    createdDate: Date;
}
/**
 * 获取商家所有学校用餐数量
 * @param params
 */
declare function getList(params: MealBoxStatisticsParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<ReceiptModel>>;
/**
 * 获取商家所有餐标用餐数量
 * @param params
 */
declare function getStandards(params: MealBoxStatisticsParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<StandardStatisticsModel>>;
/**
 * 获取商家补贴
 * @param params
 */
declare function get(id: number): Promise<any>;
/**
 * 获取餐品统计列表
 * @param params
 */
declare function getMealBoxList(params: MealBoxStatisticsParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<MealBoxStatisticsModel>>;
/**
 * 获取明细列表
 * @param params
 */
declare function getReceiptOrderList(params: MealBoxStatisticsParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<ReceiptDetailModel>>;
/**
 * 获取单日菜品
 * @param params
 */
declare function getDayMealBoxList(params: MealBoxParams): Promise<any>;
/**
 * 获取收单概览
 */
declare function receiptStatistic(params: {
    unitId: number;
    date: Moment;
}): Promise<any>;
declare function exportReceiptOrderList(searchParams: MealBoxStatisticsParams): Promise<any>;
declare function fetchSchoolList(): Promise<any>;
/**
 * 获取单位所有年级
 * @param id
 */
declare function getGradeList(id: number): Promise<any>;
/**
 * 获取年级下班级
 * @param id
 */
declare function getGradeClassList(id: number): Promise<any>;
/**
 * 获取单位餐标列表
 * @param id
 */
declare function getStandardList(): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    getMealBoxList: typeof getMealBoxList;
    getReceiptOrderList: typeof getReceiptOrderList;
    getDayMealBoxList: typeof getDayMealBoxList;
    receiptStatistic: typeof receiptStatistic;
    exportReceiptOrderList: typeof exportReceiptOrderList;
    fetchSchoolList: typeof fetchSchoolList;
    getGradeList: typeof getGradeList;
    getGradeClassList: typeof getGradeClassList;
    getStandardList: typeof getStandardList;
    getStandards: typeof getStandards;
};
export default _default;
