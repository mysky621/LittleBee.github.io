import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface UnitModel {
    id: number;
    name: string;
    unitType: string;
    region: string;
    auditStatus: string;
    authenticationEndDate: Date;
    createdDate: Date;
    createdBy: string;
}
export interface UnitSchoolType {
    id?: number;
    schoolTypes: string;
    years: number;
    unitId?: number;
}
export interface UnitEditModel {
    id: number;
    name: string;
    fullName: string;
    province: string;
    city: string;
    area: string;
    legalPerson: string;
    unitAddress: string;
    unitType: string;
    officeTelephone: string;
    email: string;
    netAddress: string;
    schoolType: UnitSchoolType[];
    auditStatus: string;
    region: string;
}
export interface UnitSearchModel {
    name?: string;
    auditStatus?: string;
    createdDate?: Date;
    region?: string;
    statusType: string;
}
export interface UnitUpdateStatusParams {
    unitId: number;
    statusType: string;
}
export declare const UnitType: {
    School: string;
    Bureau: string;
    Group: string;
    Other: string;
};
export declare const RegisterMethod: {
    System: string;
    Bureau: string;
};
export declare const SchoolType: {
    Kindergarten: string;
    SixYearOfPrimary: string;
    FiveYearOfPrimary: string;
    ThreeYearOfJunior: string;
    FourYearOfJunior: string;
    NineYear6: string;
    NineYear5: string;
    Senior: string;
    InTheEnd: string;
};
export declare const AuditStatus: {
    Fail: string;
    Pending: string;
    Again: string;
    Success: string;
};
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<UnitEditModel>>;
declare function get(unitId: number): Promise<any>;
declare function save(unit: UnitModel): Promise<any>;
declare function deleteUnit(unitId: number): Promise<number>;
declare function updateStatus(params: UnitUpdateStatusParams): Promise<number>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof deleteUnit;
    updateStatus: typeof updateStatus;
};
export default _default;
