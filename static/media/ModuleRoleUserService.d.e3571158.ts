import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface ModuleRoleUserModel {
    id: number;
    userId: number;
    userName: string;
}
export interface UserModel {
    userId: number;
    name: string;
}
export interface RoleUserFetchParmas {
    moduleId: number | string;
    roleId: number | string;
}
export interface RoleUserAddParams extends RoleUserFetchParmas {
    userIds: number[];
}
/**
 * 获取角色用户
 * @param params
 */
declare function getList(params: RoleUserFetchParmas & Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<unknown>>;
/**
 * 保存模块角色
 * @param values
 */
declare function save(params: RoleUserAddParams): Promise<number[]>;
/**
 * 删除模块角色
 * @param values
 */
declare function deleteUser(params: RoleUserAddParams): Promise<number[]>;
/**
 * 检索用户
 * @param loginOrName
 */
declare function getUserList(loginOrName: string): Promise<any>;
declare const _default: {
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteUser;
    getUserList: typeof getUserList;
};
export default _default;
