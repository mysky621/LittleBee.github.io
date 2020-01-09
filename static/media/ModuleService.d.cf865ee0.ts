export interface ModuleModel {
    id: number;
    displayName: string;
    name: string;
    type: string[];
    moduleType: string;
}
export declare const UserTypes: {
    Student: string;
    Teacher: string;
    Family: string;
    Unit_Admin: string;
    Sys_Admin: string;
};
export declare const ModuleType: {
    All: string;
    Basic: string;
    Increment: string;
};
export declare const ModuleProperty: {
    All: string;
    Organization: string;
    Platform: string;
    Personal: string;
};
export declare const ModuleTags: {
    Basics: string;
    Administration: string;
    Evaluate: string;
    Teaching: string;
    Reading: string;
};
export declare const ModuleConfigures: {
    true: string;
    false: string;
};
export interface ModuleEditModel extends ModuleModel {
    configures: boolean;
    moduleProperties: string[];
    intro: string;
    tags: string[];
    smallIcon: string;
    normalIcon: string;
    bigIcon: string;
    appKey: string;
    appSecret: string;
    serialNumber: number;
    userTypes: string[];
}
export interface ModuleSearchModel {
    displayName?: string;
    moduleType?: number;
    moduleProperties?: string[];
    size?: number;
    page?: number;
}
export interface ModulePlatformEditModel {
    id: number;
    displayName: string;
    icon: string;
    iconBackground: string;
    iconBorder: string;
    iconColor: string;
    intro: string;
    moduleId: number;
    moduleName: string;
    permission: number;
    platform: string;
    sref: string;
    tags: string[];
    url: string;
    userTypes: string[];
    parameter: string;
}
export interface ModulePlatformFetchParams {
    moduleId: number;
    platform: string;
}
export interface ModulePlatformSaveParams extends ModulePlatformFetchParams {
    data: ModulePlatformEditModel;
}
declare function get(moduleId: number): Promise<any>;
declare function getModuleByName(moduleName: string): Promise<any>;
declare function getList(params: ModuleSearchModel): Promise<any>;
declare function save(module: ModuleEditModel): Promise<any>;
declare function deleteModule(moduleId: number): Promise<number>;
/**
 * 获取模块端信息
 * @param params
 */
declare function getModulePlatform(params: ModulePlatformFetchParams): Promise<any>;
/**
 * 添加或更新模块端
 * @param params
 */
declare function saveModulePlatform(params: ModulePlatformSaveParams): Promise<any>;
declare function deleteModulePlatform(params: ModulePlatformFetchParams): Promise<any>;
declare const _default: {
    get: typeof get;
    getModuleByName: typeof getModuleByName;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteModule;
    getModulePlatform: typeof getModulePlatform;
    saveModulePlatform: typeof saveModulePlatform;
    deleteModulePlatform: typeof deleteModulePlatform;
};
export default _default;
