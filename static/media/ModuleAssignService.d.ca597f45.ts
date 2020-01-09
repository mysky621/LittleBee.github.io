import { Moment } from 'moment';
export interface TenantModel {
    associateId: number;
    ownerId?: number;
    tenantTypeId: string;
}
export interface ModuleAssignModel {
    id: number;
    moduleId: number;
    expire: string | number | Date;
    assginMonths: number;
    ownerId?: number;
    unitId: number;
    name: string;
    createdDate: string | number | Date;
}
export interface ModuleAssignListModel extends ModuleAssignModel {
    moduleName: string;
    associateId: number;
    tenantTypeId: string;
}
export interface ModuleAssignFetchParams extends TenantModel {
    platform: string;
}
export interface ModuleAssignDeleteParams extends TenantModel {
    moduleId: number;
}
export interface ModuleAssignParams {
    tenantTypeId: string;
    moduleIds: number[];
    expire: string | number | Date | Moment;
    associateIds: number[];
    ownerId?: number;
}
export interface ModuleAssignFetchDetailParams {
    tenantTypeId: string;
    moduleId: number;
}
/**
 *
 * @param tenantTypeId
 */
declare function getList(values: ModuleAssignFetchDetailParams): Promise<{}>;
/**
 * 获取租户下某个id授权的模块列表
 * @param tenantTypeId
 * @param associateId
 * @param platform 平台属性(All、Web、App)
 */
declare function getPlatformList(params: ModuleAssignFetchParams): Promise<ModuleAssignListModel>;
/**
 * 添加授权模块到关联的对象
 * @param tenantTypeId
 * @param associateId
 * @param data
 */
declare function assignModule(params: ModuleAssignParams): Promise<ModuleAssignListModel[]>;
/**
 * 从关联对象移除授权模块
 * @param tenantTypeId
 * @param associateId
 * @param moduleId
 */
declare function deleteAssignModule(params: ModuleAssignDeleteParams): Promise<ModuleAssignDeleteParams>;
declare const _default: {
    getList: typeof getList;
    getPlatformList: typeof getPlatformList;
    assignModule: typeof assignModule;
    deleteAssignModule: typeof deleteAssignModule;
};
export default _default;
