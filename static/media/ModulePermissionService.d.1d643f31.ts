export interface ModulePermissionEditModel {
    id: number;
    moduleId: number;
    name: string;
    displayName: string;
}
export interface ModulePermissionDeleteParmas {
    moduleId: number;
    permissionId: number;
}
/**
 * 获取模块的权限列表
 * @param moduleId 模块id
 */
declare function getList(moduleId: number): Promise<any>;
/**
 * 保存权限
 * @param values
 */
declare function save(values: ModulePermissionEditModel): Promise<any>;
/**
 * 删除权限信息
 * @param values
 */
declare function deletePermission(values: ModulePermissionDeleteParmas): Promise<number>;
declare const _default: {
    getList: typeof getList;
    save: typeof save;
    delete: typeof deletePermission;
};
export default _default;
