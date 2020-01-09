import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 商家补贴编辑model
 */
export interface AllowanceEditModel {
    /**
     * id
     */
    id: number;
    /**
     * 单位名称
     */
    unitId: number;
    /**
     * 学生编号
     */
    associated_user_id: number;
    /**
     * 比例
     */
    percentage: number;
    /**
     * 状态
     */
    status: string;
}
/**
 * 年级model
 */
export interface AllowanceModel extends AllowanceEditModel {
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 班级名称
     */
    className: string;
    /**
     * 学生名称
     */
    studentName: string;
    /**
     * 学生id
     */
    studentId: number;
    /**
     * 手机号
     */
    mobile: string;
}
export interface AssociatedUserModel {
    /**
     * 关联用户编号
     */
    associatedUserId: number;
    /**
     * 名称
     */
    userName: string;
    /**
     * 单位
     */
    unitName: string;
    /**
     * 班级名称
     */
    classesName: string;
}
/**
 * 状态
 */
export declare const AllowanceStatusType: {
    Normal: string;
    Disable: string;
};
/**
 * 获取商家补贴列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<AllowanceModel>>;
/**
 * 获取商家补贴
 * @param params
 */
declare function get(id: number): Promise<any>;
/**
 * 添加/更新商家补贴
 * @param params
 */
declare function save(params: AllowanceEditModel): Promise<any>;
/**
 * 删除商家补贴
 * @param id
 */
declare function del(id: number): Promise<any>;
/**
 * 获取学校列表
 * @param params
 */
declare function getSchoolList(): Promise<any>;
/**
 * 获取学生列表
 * @param params
 */
declare function getStudentList(): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
    getSchoolList: typeof getSchoolList;
    getStudentList: typeof getStudentList;
};
export default _default;
