import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { Moment } from 'moment';
/**
 * 年级编辑model
 */
export interface GradeEditModel {
    /**
     * 年级id
     */
    id: number;
    /**
     * 年级名称
     */
    name: string;
    /**
     * 年级
     */
    grade: number;
    /**
     * 入学年份
     */
    year: number;
    /**
     * 学段
     */
    schoolType: string;
    /**
     * 单位id
     */
    unitId: number;
}
/**
 * 年级升级记录
 */
export interface GradeUpLogModel {
    id: number;
    operateUserName: string;
    schoolName: string;
    gradeUpStatus: string;
    operateDate: Moment;
}
/**
 * 年级升级记录状态
 */
export declare const GradeUpStatus: {
    Success: string;
    Failed: string;
};
/**
 * 年级model
 */
export interface GradeModel extends GradeEditModel {
    /**
     * 班级数量
     */
    classNum: number;
}
/**
 * 状态
 */
export declare const StatusType: {
    Normal: string;
    Delete: string;
    Disabled: string;
};
/**
 * 学段
 */
export declare const SchoolTypes: {
    Kindergarten: string;
    Primary: string;
    Junior: string;
    Senior: string;
};
/**
 * 获取年级列表
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<GradeModel>>;
/**
 * 添加/更新年级
 * @param params
 */
declare function save(params: GradeEditModel): Promise<any>;
/**
 * 获取年级
 * @param params
 */
declare function get(id: number): Promise<any>;
/**
 * 删除年级
 * @param id
 */
declare function del(id: number): Promise<any>;
/**
 * 年级升级
 * @param params
 */
declare function upgrade(schoolId: number): Promise<any>;
/**
 * 获取年级升级记录
 * @param params
 */
declare function getGradeUpLog(schoolId: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
    upgrade: typeof upgrade;
    getGradeUpLog: typeof getGradeUpLog;
};
export default _default;
