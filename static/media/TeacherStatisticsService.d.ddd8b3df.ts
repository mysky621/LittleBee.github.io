import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 统计通用model
 */
export interface StatisticsModel {
    id: number;
    /**
     * 学校数量
     */
    name: string;
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 日结日期
     */
    dailyDate: Date;
    /**
     * 总量
     */
    total: number;
}
export interface DayBillParams extends Pagable {
    unitId?: string;
    teacherId?: string;
}
/**
 * 获取商家月账单统计列表
 */
declare function getBusinessTotalList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<StatisticsModel>>;
/**
 * 获取商家月账单详情列表
 */
declare function getBusinessTotalDetailList(params: DayBillParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<StatisticsModel>>;
/**
 * 获取商家月账单学校统计列表
 */
declare function getSchoolTotalList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<StatisticsModel>>;
/**
 * 获取商家月账单学校统计详情列表
 */
declare function getSchoolTotalDetailList(params: DayBillParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<StatisticsModel>>;
/**
 * 获取商家月账单学生统计列表
 */
declare function getStudentTotalList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<StatisticsModel>>;
/**
 * 获取商家月账单学生统计详情列表
 */
declare function getStudentTotalDetailList(params: DayBillParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<StatisticsModel>>;
declare const _default: {
    getBusinessTotalList: typeof getBusinessTotalList;
    getBusinessTotalDetailList: typeof getBusinessTotalDetailList;
    getSchoolTotalList: typeof getSchoolTotalList;
    getSchoolTotalDetailList: typeof getSchoolTotalDetailList;
    getStudentTotalList: typeof getStudentTotalList;
    getStudentTotalDetailList: typeof getStudentTotalDetailList;
};
export default _default;
