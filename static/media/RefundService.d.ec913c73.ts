import { Moment } from 'moment';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
/**
 * 获取学校退费列表
 */
declare function fetchUnitRefund(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<RefundUnitModel>>;
/**
 * 获取退费周期内退费的学校
 */
declare function fetchRefundSchool(params: FetchRefundUnitParams): Promise<any>;
/**
 * 获取用户退费明细
 */
declare function fetchUserRefund(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<RefundUserModel>>;
/**
 * 获取用户退费详情
 * @param params
 */
declare function fetchRefundDetail(params: number): Promise<any>;
/**
 * 给用户退费
 * @param params
 */
declare function userRefund(params: {
    refundUserIds: Array<number>;
    refundMethod: string;
}): Promise<any>;
/**
 * 用户取消退费
 * @param params
 */
declare function offlineCancelUserRefund(params: Array<number>): Promise<any>;
/**
 * 给学校所有用户退费
 * @param params
 */
declare function unitRefund(params: number): Promise<any>;
/**
 * 编辑用户退费记录
 * @param params
 */
declare function saveRecord(params: RefundEditModel): Promise<any>;
/**
 * 生成退费记录
 * @param params
 */
declare function generateRefund(params: GenerateRefundParams): Promise<any>;
/**
 * 获取退费周期
 */
declare function fetchRefundPeriod(): Promise<{
    id: number;
    name: string;
}[]>;
/**
 * 获取商家服务的学校
 * @param params
 */
declare function fetchServiceSchool(params: number): Promise<any>;
/**
 * 获取用户退费记录
 */
declare function fetchRefundRecord(params: number): Promise<RefundEditModel>;
/**
 * 导出用户退费记录
 *
 * @param params
 */
declare function exportRefundUser(params: RefundUserExportSearchModel): Promise<ResponseModel>;
declare function getRefundUnitSummary(params: number): Promise<ResponseModel>;
declare const _default: {
    fetchUnitRefund: typeof fetchUnitRefund;
    fetchRefundSchool: typeof fetchRefundSchool;
    fetchUserRefund: typeof fetchUserRefund;
    fetchRefundDetail: typeof fetchRefundDetail;
    userRefund: typeof userRefund;
    unitRefund: typeof unitRefund;
    saveRecord: typeof saveRecord;
    generateRefund: typeof generateRefund;
    fetchRefundPeriod: typeof fetchRefundPeriod;
    fetchServiceSchool: typeof fetchServiceSchool;
    fetchRefundRecord: typeof fetchRefundRecord;
    offlineCancelUserRefund: typeof offlineCancelUserRefund;
    exportRefundUser: typeof exportRefundUser;
    getRefundUnitSummary: typeof getRefundUnitSummary;
};
export default _default;
export interface RefundUnitModel {
    id: number;
    schoolId: number;
    schoolName: string;
    leaveNum: number;
    leaveValidNum: number;
    totalMoney: number;
    shouldMoney: number;
    actualMoney: number;
    refundStatus: string;
    beginDate: number;
    endDate: number;
}
export interface RefundUserModel {
    id: number;
    associatedUserId: number;
    associatedUserName: string;
    userMobile: string;
    period: number;
    leaveNum: number;
    leaveDateList: Array<number>;
    leaveValidNum: number;
    leaveValidDateList: Array<number>;
    totalMoney: number;
    shouldMoney: number;
    actualMoney: number;
    refundStatus: string;
    refundDate: number;
    beginDate: number;
    endDate: number;
    refundMethod: string;
    operationUserId: number;
}
export interface RefundDetailModel {
    id: number;
    shouldMoney: number;
    actualMoney: number;
    hasRefundMoney: number;
    description: number;
    refundStatus: string;
    refundMethod: string;
    refundRecordModels: Array<RefundRecordModel>;
}
/**
 * 生成退费记录
 */
export interface GenerateRefundParams {
    refundRuleId: number;
    refundBeginDate: number;
    refundEndDate: number;
    unitIds: Array<number>;
}
export interface RefundRecordModel {
    id: number;
    refundDate: number;
    orderNoList: string;
    transactionId: string;
    refundId: string;
    settlementRefundFee: number;
    resultCode: string;
    refundMethod: string;
    errorCode: string;
    errorCodeDes: string;
}
/**
 * 退费记录
 */
export interface RefundRecordListModel {
    id: number;
    settlementRefundFee: number;
    transactionId: string;
    totalFee: number;
    resultCode: string;
}
export interface RefundEditModel {
    refundRecordListModels: Array<RefundRecordListModel>;
    description: string;
    refundUserId: number;
}
export interface FetchRefundUnitParams {
    businessId: number;
    start: number | Moment;
    end: number | Moment;
}
export interface RefundUserExportSearchModel {
    refundUnitId: number;
    refundStatus: string;
    refundMethod: string;
    associatedUserName: string;
}
export interface RefundUnitSummaryModel {
    /**
     * 总人数
     */
    totalNum: number;
    /**
     * 总金额
     */
    totalMoney: number;
    /**
     * 已退费人数
     */
    refundNum: number;
    /**
     * 已退费金额
     */
    refundMoney: number;
    /**
     * 未退费人数
     */
    unRefundNum: number;
    /**
     * 未退费金额
     */
    unRefundMoney: number;
}
