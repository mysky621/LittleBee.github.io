import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { PageContent } from '@school/meal-react-framework/interfaces';
export interface OrderModel {
    id: number;
    createDate: Date;
    orderNo: string;
    orderPayMethod: string;
    transactionId: string;
    orderType: string;
    foodProductsType: string;
    orderStatus: string;
    orderPayStatus: string;
    totalMoney: number;
    couponMoney: number;
    payMoney: number;
    name: string;
    gradeName: string;
    className: string;
    mobile: string;
    userTypes: string;
    schoolName: string;
    businessName: string;
    operator: number;
    operatorName: string;
    orderCreateType: string;
}
export interface OrderDayModel extends OrderModel {
    orderStatusModels: Array<{
        orderStatus: string;
        createdDate: Date;
    }>;
    mealDates: Array<Date>;
    money: number;
    discountMoney: number;
    totalPayChannelMoney: number;
    businessPayChannelMoney: number;
    payChannelMoney: number;
    payMethod: string;
}
export interface OrderMonthModel extends OrderDayModel {
    mealsBeginDate: Date;
    mealsEndDate: Date;
    estimateMealsNumber: number;
    actualMealsNumber: number;
    accountStatus: string;
    accountMoney: number;
}
export interface OrderPaymentModel extends OrderModel {
    unitList: Array<SimpleModel>;
}
export declare const OrderStatus: {
    UnPay: string;
    Pay: string;
    Begin: string;
    End: string;
    Unsubscribe: string;
};
export declare const OrderType: {
    Day: string;
    Month: string;
    PayCost: string;
    Custom: string;
};
export declare const FoodProductsType: {
    Ordinary: string;
    Muslim: string;
};
export declare const OrderPayMethod: {
    Online: string;
    Offline: string;
};
export declare const UserTypes: {
    Student: string;
    Teacher: string;
};
export interface OrderSearchParams extends Pagable {
    startDate?: Date;
    endDate?: Date;
}
export interface StatisticsParams {
    businessId?: number;
    startDate?: Date;
    endDate?: Date;
    schoolId?: number;
    gradeId?: number;
    classesId?: number;
}
export interface StatisticsSearchParams extends Pagable {
    businessId: number;
}
export interface StatisticsResult {
    totalNum: number;
    totalMoney: number;
}
export interface StatisticsModel {
    couponUserId: number;
    useDate: Date;
    price: number;
    orderNo: string;
    gradeName: string;
    classesName: string;
    schoolName: string;
}
declare function getList(params: OrderSearchParams): Promise<PageContent<OrderModel>>;
declare function getOrderPaymentList(params: OrderSearchParams): Promise<PageContent<OrderModel>>;
declare function get(params: {
    id: number;
    orderType: string;
}): Promise<any>;
declare function exportOrderList(searchParams: OrderSearchParams): Promise<any>;
declare function exporTransactionOrderList(searchParams: OrderSearchParams): Promise<any>;
declare function fetchSchoolList(): Promise<any>;
declare function fetchBusinessList(): Promise<any>;
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
 * 统计优惠券使用情况
 */
declare function statisticsUsedCoupon(params: StatisticsParams): Promise<PageContent<StatisticsResult>>;
/**
 * 用户优惠券使用记录
 */
declare function fetchUsedCouponList(params: StatisticsSearchParams): Promise<PageContent<StatisticsModel>>;
declare const _default: {
    getList: typeof getList;
    getOrderPaymentList: typeof getOrderPaymentList;
    get: typeof get;
    exportOrderList: typeof exportOrderList;
    fetchSchoolList: typeof fetchSchoolList;
    fetchBusinessList: typeof fetchBusinessList;
    getGradeList: typeof getGradeList;
    getGradeClassList: typeof getGradeClassList;
    statisticsUsedCoupon: typeof statisticsUsedCoupon;
    fetchUsedCouponList: typeof fetchUsedCouponList;
    exporTransactionOrderList: typeof exporTransactionOrderList;
};
export default _default;
