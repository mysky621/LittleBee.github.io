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
export interface StudentStatisticsModel extends StatisticsModel {
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 班级名称
     */
    className: string;
    /**
     * 菜品名称
     */
    mealBoxName: string;
}
export interface DayBillParams extends Pagable {
    unitId?: string;
    studentId?: string;
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
declare function getStudentTotalList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<StudentStatisticsModel>>;
/**
 * 获取商家月账单学生统计详情列表
 */
declare function getStudentTotalDetailList(params: DayBillParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<StudentStatisticsModel>>;
declare const _default: {
    getBusinessTotalList: typeof getBusinessTotalList;
    getBusinessTotalDetailList: typeof getBusinessTotalDetailList;
    getSchoolTotalList: typeof getSchoolTotalList;
    getSchoolTotalDetailList: typeof getSchoolTotalDetailList;
    getStudentTotalList: typeof getStudentTotalList;
    getStudentTotalDetailList: typeof getStudentTotalDetailList;
};
export default _default;
