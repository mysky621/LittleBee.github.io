import { Moment } from 'moment';
export declare const FoodProductsType: {
    Ordinary: string;
    Muslim: string;
};
export interface SimpleModel {
    id: number;
    name: string;
}
export interface GradeStatisticsModel {
    grade: number;
    gradeName: string;
    total: number;
    classesMap: {
        [key: number]: number[];
    };
}
export interface GradeStatisticsColumnModel {
    columnModel: SimpleModel[];
    gradeStatisticsModels: GradeStatisticsModel[];
}
export interface ReceiptGradeModel {
    columns: string[];
    keys: string[];
    count: {
        [key: string]: number[];
    };
}
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
export interface ServiceSchoolBusinessModel {
    businessId: number;
    businessName: string;
    servicePeriodType: string;
    describe: string;
}
/**
 * 获取收单概览
 */
declare function receiptStatistic(params: {
    unitId: number;
    date: Moment;
}): Promise<ReceiptStatisticModel>;
/**
 * 获取班级用餐数量
 */
declare function getClassesStatistics(params: {
    unitId: number;
    date: Moment;
}): Promise<GradeStatisticsColumnModel>;
/**
 * 单位全年级当天用餐汇总
 */
declare function gradeReceiptByDay(params: {
    unitId: number;
    date: Moment;
}): Promise<ReceiptGradeModel>;
/**
 * 单位全年级一周用餐汇总
 */
declare function gradeReceiptByWeek(params: {
    unitId: number;
    date: Moment;
}): Promise<ReceiptGradeModel>;
/**
 * 获取当天的服务单位
 */
declare function getServiceSchoolBusiness(params: {
    unitId: number;
    date: Moment;
}): Promise<ServiceSchoolBusinessModel>;
declare const _default: {
    receiptStatistic: typeof receiptStatistic;
    getClassesStatistics: typeof getClassesStatistics;
    gradeReceiptByDay: typeof gradeReceiptByDay;
    gradeReceiptByWeek: typeof gradeReceiptByWeek;
    getServiceSchoolBusiness: typeof getServiceSchoolBusiness;
};
export default _default;
