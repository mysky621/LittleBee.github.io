import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 请假编辑model
 */
export interface LeaveEditModel {
    /**
     * id
     */
    id: number;
    /**
     * 单位编号
     */
    unitId: number;
    /**
     * 学校编号
     */
    schoolId: number;
    /**
     * 开始时间
     */
    startDate: Date;
    /**
     * 结束时间
     */
    endDate: Date;
    /**
     * 请假对象
     */
    incidentObject: string;
    /**
     * 请假范围
     */
    scopeType: string;
    /**
     * 请假对象
     */
    leaveObjects: Array<LeaveObjectModel>;
    /**
     * 请假类型
     */
    leaveType: string;
}
export interface LeaveCountModel {
    /**
     * id
     */
    id: number;
    /**
     * 单位编号
     */
    unitId: number;
    /**
     * 学校编号
     */
    schoolId: number;
    /**
     * 开始时间
     */
    startDate: Date;
    /**
     * 结束时间
     */
    endDate: Date;
    /**
     * 请假对象
     */
    incidentObject: string;
    /**
     * 请假范围
     */
    scopeType: string;
    /**
     * 请假对象
     */
    leaveObjects: Array<LeaveObjectModel>;
    /**
     * 请假类型
     */
    leaveType: string;
    /**
     * 总人数
     */
    totalCount: number;
    /**
     * 成功人数
     */
    successCount: number;
    /**
     * 失败人数
     */
    failCount: number;
    /**
     * 创建时间
     */
    createdDate: Date;
    leaveProcessingStatus: string;
}
export interface LeaveUserModel {
    /**
     * 请假人id
     */
    associatedUserId: number;
    /**
     * 姓名
     */
    name: string;
    /**
     * 班级名称
     */
    classesName: string;
    /**
     * 失败原因
     */
    remark: string;
    /**
     * 请假失败类型
     */
    leaveFailType: string;
    /**
     * 用餐日期
     */
    date: Date;
}
/**
 * 请假model
 */
export interface LeaveModel extends LeaveEditModel {
    /**
     * 创建时间
     */
    createdDate: Date;
}
export interface LeaveUserCountModel {
    /**
     * 总人数
     */
    totalCount: number;
    /**
     * 成功人数
     */
    successCount: number;
    /**
     * 失败人数
     */
    failCount: number;
}
export interface LeaveObjectModel {
    /**
     * 编号
     */
    id?: number;
    /**
     * 假条
     */
    leaveId?: number;
    /**
     * 关联用户
     */
    associateId: number;
}
/**
 * 关联用户model
 */
export interface AssociatedUserModel {
    /**
     * 关联用户id
     */
    associatedUserId: number;
    /**
     * 名字
     */
    name: string;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 班级名称
     */
    classesName: string;
}
export interface UnitParams {
    /**
     * 服务对象类型
     */
    serviceObjectType?: string;
}
export interface StudentParams {
    pagesize: number;
    schoolId: number;
    name: string;
}
/**
 * 状态
 */
export declare const IncidentObject: {
    Student: string;
    Teacher: string;
};
export declare const LeaveProcessingStatus: {
    /**
     * 已处理
     */
    Processed: string;
    /**
     * 处理中
     */
    InProcessing: string;
    /**
     * 处理失败
     */
    ProcessingFailure: string;
};
/**
 * 请假范围
 */
export declare const ScopeType: {
    School: string;
    Grade: string;
    Class: string;
    Person: string;
};
export declare const LeaveType: {
    Leave: string;
    CompensatoryLeave: string;
};
/**
 * 获取请假列表
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<LeaveModel>>;
/**
 * 获取请假
 * @param params
 */
declare function get(id: number): Promise<any>;
/**
 * 添加/更新请假
 * @param params
 */
declare function save(params: LeaveEditModel): Promise<any>;
/**
 * 删除请假
 * @param id
 */
declare function del(params: {
    id: number;
    leaveType: string;
}): Promise<any>;
/**
 * 获取学校列表
 * @param params
 */
declare function getSchoolList(params: UnitParams): Promise<any>;
/**
 * 获取学校年级列表
 * @param params
 */
declare function getGradeList(id: number): Promise<any>;
/**
 * 获取学校班级列表
 * @param params
 */
declare function getClassList(id: number): Promise<any>;
/**
 * 获取学生列表
 * @param params
 */
declare function getStudentList(id: number): Promise<any>;
/**
 * 获取老师列表
 * @param params
 */
declare function getTeacherList(id: number): Promise<any>;
/**
 * 获取请假人员列表
 * @param params
 */
declare function getAssociatedUserList(id: number): Promise<any>;
/**
 * 检索学生
 *
 * @param params
 */
declare function getStudents(params: StudentParams): Promise<AssociatedUserModel>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
    getSchoolList: typeof getSchoolList;
    getGradeList: typeof getGradeList;
    getClassList: typeof getClassList;
    getStudentList: typeof getStudentList;
    getTeacherList: typeof getTeacherList;
    getAssociatedUserList: typeof getAssociatedUserList;
    getStudents: typeof getStudents;
};
export default _default;
