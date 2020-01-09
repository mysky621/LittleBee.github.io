import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface TeacherModel {
    id: number;
    unitId: number;
    associatedUserId: number;
    userName: string;
    name: string;
    gender: string;
    mobile: string;
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
export interface TeacherEditModel extends TeacherModel {
    userId: number;
}
export interface UserSearchModel {
    name?: string;
    size?: number;
    page?: number;
}
declare function get(id: number): Promise<any>;
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<TeacherEditModel>>;
declare function save(users: TeacherEditModel): Promise<any>;
declare function deleteUser(id: number): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteUser;
};
export default _default;
