import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface UserPlatformManageModel {
    id: number;
    mobile: string;
    count: number;
}
export interface UserPlatformManageEditModel {
}
export interface AssociatedUserModel {
    id: number;
}
export interface ResultMessage {
    /**
     * 状态代码
     */
    code: string;
    /**
     * 返回主数据
     */
    data: object;
    /**
     * 返回消息
     */
    message: string;
    /**
     * 执行是否成功
     */
    success: boolean;
}
export interface UserModel {
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
    /**
     * 单位名称
     */
    unitName: string;
    /**
     * 用户类型
     */
    userTypes: string;
    /**
     * 用户状态
     */
    statusType: string;
}
/**
 * 用户类型
 */
export declare const UserTypes: {
    /**
     * 学生
     */
    Student: string;
    /**
     * 老师
     */
    Teacher: string;
    /**
     * 家长
     */
    Family: string;
    /**
     * 学校
     */
    School: string;
    /**
     * 主管部门
     */
    Depart: string;
    /**
     * 教育机构
     */
    Education: string;
    /**
     * 单位管理员
     */
    Unit_Admin: string;
    /**
     * 系统管理员
     */
    Sys_Admin: string;
    /**
     * 其它
     */
    Other: string;
};
export interface UserPlatformManageSearchModel extends Pagable {
    id?: number;
    mobile?: string;
}
declare function get(id: number): Promise<any>;
declare function getUserByMobile(mobile: string): Promise<any>;
declare function resetUserPlatformPassword(id: number): Promise<any>;
declare function unbind(id: number): Promise<any>;
declare function getList(params: UserPlatformManageSearchModel): Promise<import("@school/meal-react-framework/interfaces").PageContent<UserPlatformManageModel>>;
declare function getAssociatedList(params: UserPlatformManageSearchModel): Promise<any>;
declare function save(msg: UserPlatformManageSearchModel): Promise<any>;
declare const _default: {
    get: typeof get;
    getUserByMobile: typeof getUserByMobile;
    getList: typeof getList;
    resetUserPlatformPassword: typeof resetUserPlatformPassword;
    getAssociatedList: typeof getAssociatedList;
    save: typeof save;
    unbind: typeof unbind;
};
export default _default;
