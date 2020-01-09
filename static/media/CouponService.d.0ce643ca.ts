import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export interface CouponModel {
    id: number;
    createDate: string;
    price: number;
    description: string;
    couponScenes: string;
    date: string;
    couponType: string;
    businessName: string;
    businessId: number;
    objectCount: number;
    giveStatus: boolean;
}
export interface CouponEditModel extends CouponModel {
    couponSceneSet: Array<CouponSceneModel>;
    scopeType: string;
    ownerId: number;
    startDate: string;
    endDate: string;
    associatedUsers: Array<number>;
    incidentObject: string;
    gradeModels: Array<SimpleModel>;
    classModels: Array<SimpleModel>;
    associatedUserModels: Array<SimpleModel>;
    associatedUserIds: Array<number>;
    count: number;
}
export interface AssociatedUserModel {
    /**
     * 关联用户id
     */
    associatedUserId: number;
    /**
     * 名字
     */
    name: string;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 班级名称
     */
    classesName: string;
}
export interface CouponSceneModel {
    id: number;
    couponScene: string;
}
export declare const CouponType: {
    Business: string;
    Platform: string;
};
export interface AssociatedUserModel {
    /**
     * 关联用户id
     */
    associatedUserId: number;
    /**
     * 名字
     */
    name: string;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 班级名称
     */
    classesName: string;
}
export declare const ScopeType: {
    School: string;
    Grade: string;
    Class: string;
    Person: string;
    Leading: string;
};
export declare const IncidentObject: {
    Student: string;
    Teacher: string;
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
export interface ClassesNames {
    name: string;
}
export interface CouponSceneModel {
    couponScene: string;
}
declare function get(id: number): Promise<any>;
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<CouponModel>>;
declare function save(couponEditModel: CouponEditModel): Promise<any>;
declare function saveGive(id: number): Promise<any>;
declare function getBusinessList(): Promise<import("@school/meal-react-framework/interfaces").PageContent<CouponModel>>;
/**
 * 获取学校列表
 * @param params
 */
declare function getSchoolList(params: UnitParams): Promise<any>;
/**
 * 获取学校年级列表
 * @param params
 */
declare function getGradeList(id: number): Promise<any>;
/**
 * 获取学校班级列表
 * @param params
 */
declare function getClassList(id: number): Promise<any>;
/**
 * 获取学生列表
 * @param params
 */
declare function getStudentList(id: number): Promise<any>;
/**
 * 获取老师列表
 * @param params
 */
declare function getTeacherList(id: number): Promise<any>;
/**
 * 删除
 * @param id
 */
declare function del(id: number): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof del;
    getBusinessList: typeof getBusinessList;
    getSchoolList: typeof getSchoolList;
    getGradeList: typeof getGradeList;
    getClassList: typeof getClassList;
    getStudentList: typeof getStudentList;
    getTeacherList: typeof getTeacherList;
    saveGive: typeof saveGive;
};
export default _default;
