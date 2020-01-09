export interface ModuleModel {
    id: number;
    displayName: string;
    intro: string;
    unitId: number;
}
export interface AuthorizationModuleParam {
    unitId: number;
    moduleId: number;
    expire: number | string | Date;
    name: string;
}
export interface CancelAuthorizationModuleParan {
    tenantTypeId: string;
    associateId: number;
    moduleId: number;
}
declare function getAuthorizedModules(unitId: number): Promise<{
    id: number;
    displayName: string;
    intro: string;
    unitId: number;
}[]>;
declare function authorizationModule(params: AuthorizationModuleParam): Promise<AuthorizationModuleParam>;
declare function cancelAuthorization(params: CancelAuthorizationModuleParan): Promise<CancelAuthorizationModuleParan>;
declare const _default: {
    getAuthorizedModules: typeof getAuthorizedModules;
    authorizationModule: typeof authorizationModule;
    cancelAuthorization: typeof cancelAuthorization;
};
export default _default;
