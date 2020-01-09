import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface TermsModel {
    /**
     * 学期id
     */
    id: number;
    /**
     * 学期名称
     */
    name: string;
    /**
     * 开始时间
     */
    startDate: Date;
    /**
     * 结束时间
     */
    endDate: Date;
    /**
     * 排序号
     */
    sort: number;
    /**
     * 单位id
     */
    unitId: number;
}
/**
 * 获取学期列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<TermsModel>>;
/**
 * 添加/更新学期
 * @param params
 */
declare function save(params: TermsModel): Promise<any>;
/**
 * 获取学期信息
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 删除学期
 * @param id
 */
declare function del(id: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
};
export default _default;
