import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StudentModel {
    id: number;
    schoolId: number;
    associatedUserId: number;
    userName: string;
    name: string;
    gender: string;
    mobile: string;
    classesName: string;
    gradeName: string;
    classModel: SimpleModel;
    gradeModel: SimpleModel;
    birthday: string;
    schoolName: string;
}
export declare const UserTypes: {
    Student: string;
    Teacher: string;
    Family: string;
    Unit_Admin: string;
    Sys_Admin: string;
};
export declare const Gender: {
    Male: string;
    Female: string;
    Other: string;
};
export declare const BindType: {
    YES: string;
    NO: string;
};
export interface SimpleModel {
    id: string;
    name: string;
}
export interface StudentEditModel extends StudentModel {
    userId: number;
    unitId: number;
    gradeId: number;
    classesId: number;
}
export interface UserSearchModel {
    name?: string;
    classesId?: number;
    size?: number;
    page?: number;
}
export interface UserExportSearchModel {
    name: string;
    schoolId: number;
    classEntityId: number;
    bindType: string;
}
declare function get(id: number): Promise<any>;
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<StudentEditModel>>;
declare function save(users: StudentEditModel): Promise<any>;
declare function getGrades(unitId: number): Promise<any>;
declare function getClasses(gradeId: number): Promise<any>;
declare function getUnitClasses(unitId: number): Promise<any>;
declare function deleteUser(id: number): Promise<any>;
declare function resetPwd(id: number): Promise<any>;
declare function studentExport(params: UserExportSearchModel): Promise<ResponseModel>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteUser;
    getGrades: typeof getGrades;
    getClasses: typeof getClasses;
    getUnitClasses: typeof getUnitClasses;
    resetPwd: typeof resetPwd;
    studentExport: typeof studentExport;
};
export default _default;
