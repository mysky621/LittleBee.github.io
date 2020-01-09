import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export interface CouponUserModel {
    id: number;
    giveDate: string;
    price: number;
    description: string;
    couponScenes: string;
    couponSceneSet: Array<string>;
    startDate: string;
    endDate: string;
    couponType: string;
    businessName: string;
    businessId: number;
    associatedUserName: string;
    giveStatus: boolean;
    mobile: string;
    couponStatus: string;
}
export interface CouponSceneModel {
    couponScene: string;
}
export interface StatisticsResult {
    totalNum: number;
    totalMoney: number;
}
export declare const CouponType: {
    Business: string;
    Platform: string;
};
export declare const CouponScene: {
    Month: string;
    Day: string;
    PayCost: string;
};
export interface UnitParams {
    /**
     * 服务对象类型
     */
    id?: number;
    serviceObjectType?: string;
}
export interface SearchStatisticsParams {
    giveDate?: number;
    startDate?: Date;
    endDate?: Date;
    couponType?: string;
    businessId?: number;
    couponStatus?: string;
}
export interface SearchStatisticsParams extends Pagable {
    couponId: number;
}
export interface StatisticsParams {
    couponId?: number;
    giveDate?: number;
    startDate?: Date;
    endDate?: Date;
    couponType?: string;
    businessId?: number;
    couponStatus?: string;
}
export interface UserParms {
    pagable: Pagable;
    couponId: number;
}
/**
 * 获取用户列表
 */
declare function getList(params: SearchStatisticsParams): Promise<PageContent<CouponUserModel>>;
/**
 *  获取商家列表/发放方
 */
declare function getBusinessList(): Promise<PageContent<SimpleModel>>;
/**
 * 统计优惠券使用情况
 */
declare function statisticsUsedCoupon(params: StatisticsParams): Promise<PageContent<StatisticsResult>>;
declare const _default: {
    getList: typeof getList;
    getBusinessList: typeof getBusinessList;
    statisticsUsedCoupon: typeof statisticsUsedCoupon;
};
export default _default;
