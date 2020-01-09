export interface UnitUserModel {
    id: number;
    login: string;
    name: string;
    mobile: string;
    statusType: string;
    unitId: number;
}
/**
 * 状态
 */
export declare const StatusType: {
    Normal: string;
    Delete: string;
    Disabled: string;
};
export interface UnitUserEditModel extends UnitUserModel {
    method: string;
}
declare function getList(id: number): Promise<any>;
declare function get(id: number): Promise<any>;
declare function save(unitUser: UnitUserEditModel): Promise<any>;
declare function deleteUnitUser(params: {
    unitId: number;
    userId: number;
}): Promise<any>;
declare function resetPassword(id: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof deleteUnitUser;
    resetPassword: typeof resetPassword;
};
export default _default;
