import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface StudentModel {
    id: number;
    unitId: number;
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
export interface StudentEditModel extends StudentModel {
    userId: number;
    gradeId: number;
    classesId: number;
}
export interface UserSearchModel {
    schoolId?: number;
    name?: string;
    classEntityId?: number;
    gradeId?: number;
    size?: number;
    page?: number;
}
export interface UserExportSearchModel {
    name: string;
    schoolId: number;
    classEntityId: number;
    bindType: string;
}
export declare const BindType: {
    YES: string;
    NO: string;
};
export interface IdentityErrorModel {
    id: number;
    name: string;
    mobile: string;
    message: string;
    type: string;
    schoolName: string;
    gradeName: string;
    classesName: string;
    schoolId: number;
    gradeId: number;
    classesId: number;
    resolveStatus: string;
}
export interface IdentityErrorSearchModel {
    name?: string;
    mobile?: string;
    schoolId?: number;
    gradeId?: number;
    classesId?: number;
    resolveStatus?: string;
    type?: string;
    size?: number;
    page?: number;
}
export interface IdentityErrorEditModel extends IdentityErrorModel {
    id: number;
    name: string;
    mobile: string;
    message: string;
}
export interface IdentityErrorSaveModel extends IdentityErrorModel {
    name: string;
    mobile: string;
    message: string;
}
/**
 * 留言类型
 */
export declare const MessageType: {
    /**
     * 手机
     */
    App: string;
    /**
     * 官网
     */
    Web: string;
};
/**
 * 处理状态
 */
export declare const ResolveStatus: {
    /**
     * 已处理
     */
    Resolved: string;
    /**
     * 未处理
     */
    UnResolved: string;
};
export interface SimpleModel {
    id: number;
    name: string;
}
declare function getStudentList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<StudentEditModel>>;
declare function get(id: number): Promise<any>;
/**
 * 获取留言列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<IdentityErrorModel>>;
/**
 * 保存/修改 学生信息
 * @param msg
 */
declare function saveStudentInfo(msg: StudentEditModel): Promise<any>;
/**
 * 发送信息
 * @param msg
 */
declare function sendMessage(msg: IdentityErrorModel): Promise<any>;
/**
 * 删除留言
 * @param messageId
 */
declare function deleteMessage(messageId: number): Promise<number>;
/**
 * 删除留言
 * @param messageId
 */
declare function changeResolveStatus(messageId: number): Promise<any>;
/**
 * 获取学校列表
 * @param params
 */
declare function getSchoolList(): Promise<any>;
/**
 * 获取学校年级列表
 * @param unitId
 */
declare function getGradeList(unitId: Number): Promise<any>;
/**
 * 获取学校班级列表
 * @param gradeId
 */
declare function getClassList(gradeId: Number): Promise<any>;
declare function getStudentInfo(id: number): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    saveStudentInfo: typeof saveStudentInfo;
    delete: typeof deleteMessage;
    getSchoolList: typeof getSchoolList;
    getGradeList: typeof getGradeList;
    getClassList: typeof getClassList;
    getStudentList: typeof getStudentList;
    getStudentInfo: typeof getStudentInfo;
    sendMessage: typeof sendMessage;
    changeResolveStatus: typeof changeResolveStatus;
};
export default _default;
