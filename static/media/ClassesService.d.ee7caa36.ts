import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 班级model
 */
export interface ClassesModel {
    /**
     * 班级id
     */
    id: number;
    /**
     * 班级名称
     */
    name: string;
    /**
     * 年级id
     */
    gradeId: number;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 年级
     */
    grade: number;
    /**
     * 学生数量
     */
    studentNum: number;
}
/**
 * 班级编辑model
 */
export interface ClassesEditModel {
    /**
     * 班级id
     */
    id: number;
    /**
     * 班级名称
     */
    name: string;
    /**
     * 班级序号
     */
    sort: number;
    /**
     * 年级
     */
    gradeId: number;
    /**
     * 班级年份
     */
    year: number;
}
/**
 * 年级下拉model
 */
export interface SimpleModel {
    id: number;
    name: string;
}
/**
 * 获取学校列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<ClassesModel>>;
/**
 * 添加/更新班级
 * @param params
 */
declare function save(params: ClassesEditModel): Promise<any>;
/**
 * 获取班级
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 删除班级
 * @param id
 */
declare function del(id: number): Promise<any>;
/**
 * 获取单位所有年级
 * @param id
 */
declare function getGradeList(id: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    save: typeof save;
    get: typeof get;
    delete: typeof del;
    getGradeList: typeof getGradeList;
};
export default _default;
