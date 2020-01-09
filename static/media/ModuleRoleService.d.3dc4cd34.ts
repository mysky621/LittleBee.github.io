import { ModulePermissionEditModel } from './ModulePermissionService';
export interface ModuleRoleEditModel {
    id: number;
    moduleId: number;
    name: string;
    displayName: string;
    content?: string;
    permissionIds: number[];
    permissions: ModulePermissionEditModel[];
}
export interface ModuleRoleDeleteParmas {
    moduleId: number;
    roleId: number;
}
export interface ModuleRoleSetPermission {
    moduleId: number;
    roleId: number;
    permissionIds: number[];
}
/**
 * 获取模块的角色列表
 * @param moduleId 模块id
 */
declare function getList(moduleId: number): Promise<ModuleRoleEditModel[]>;
/**
 * 保存模块角色
 * @param values
 */
declare function save(values: ModuleRoleEditModel): Promise<any>;
/**
 * 删除模块角色
 * @param values
 */
declare function deleteRole(values: ModuleRoleDeleteParmas): Promise<number>;
declare function getRolePermission(params: ModuleRoleDeleteParmas): Promise<any>;
declare function setRolePermission(params: ModuleRoleSetPermission): Promise<any>;
declare const _default: {
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteRole;
    getRolePermission: typeof getRolePermission;
    setRolePermission: typeof setRolePermission;
};
export default _default;
