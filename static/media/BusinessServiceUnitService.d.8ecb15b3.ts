import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface SimpleModel {
    id: number;
    name: string;
}
export interface BusinessServiceUnitGradeModel {
    id?: number;
    gradeId: number;
    gradeName?: string;
}
export interface ModuleBusinessServiceUnitParams extends Pagable {
    businessId: number;
}
export interface BusinessServiceUnitFetchParams {
    businessId: number;
    schoolId: number;
}
/**
 * 单位model
 */
export interface BusinessServiceUnitModel {
    /**
     * 单位id
     */
    id: number;
    /**
     * 单位名称
     */
    name: string;
    /**
     * 地址
     */
    unitAddress: string;
    /**
     * 服务单位
     */
    businessServiceUnitGradeList: Array<BusinessServiceUnitGradeModel>;
    /**
     * 服务开始时间
     */
    serviceStartDate: Date;
    /**
     * 服务结束时间
     */
    serviceEndDate: Date;
    /**
     * 服务时段
     */
    servicePeriodType: String;
    /**
     * 状态
     */
    serviceStatus: string;
    /**
     * 服务时段
     */
    businessServiceUnitPeriodList: Array<ServicePeriodModel>;
    /**
     * 服务单位id
     */
    serviceUnitId: number;
}
/**
 * 服务时间段
 */
export interface ServicePeriodModel {
    /**
     * 编号
     */
    id?: number;
    /**
     * 识别号
     */
    key?: string;
    /**
     * 服务开始时间
     */
    serviceStartDate: Date;
    /**
     * 服务结束时间
     */
    serviceEndDate: Date;
}
/**
 * 服务单位编辑model
 */
export interface BusinessServiceUnitEditModel extends BusinessServiceUnitModel {
    businessId: number;
    serviceUnitId: number;
    serviceUnitName: string;
    serviceObjectType: string;
}
/**
 * 更新状态model
 */
export interface UpdateStatusParams {
    id: number;
    serviceStatus: string;
}
/**
 * 状态
 */
export declare const ServiceStatus: {
    Normal: string;
    Stop: string;
};
/**
 * 服务时段
 */
export declare const ServicePeriodType: {
    All: string;
    Customize: string;
};
/**
 * 获取商家服务单位列表
 * @param params
 */
declare function getList(params: ModuleBusinessServiceUnitParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<BusinessServiceUnitModel>>;
/**
 * 获取服务单位信息
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 获取学校列表
 * @param params
 */
declare function getSchoolList(): Promise<any>;
/**
 * 获取学校列表
 * @param params
 */
declare function getSchoolGradeList(unitId: Number): Promise<any>;
/**
 * 添加/更新商家服务单位
 * @param params
 */
declare function save(params: BusinessServiceUnitEditModel): Promise<any>;
/**
 * 删除商家服务单位
 * @param id
 */
declare function del(id: number): Promise<any>;
declare function updateStatus(params: UpdateStatusParams): Promise<any>;
declare const _default: {
    getList: typeof getList;
    save: typeof save;
    get: typeof get;
    delete: typeof del;
    getSchoolList: typeof getSchoolList;
    getSchoolGradeList: typeof getSchoolGradeList;
    updateStatus: typeof updateStatus;
};
export default _default;
