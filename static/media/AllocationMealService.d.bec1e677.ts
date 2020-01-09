import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 分餐详情model
 */
export interface AllocationMealModel {
    /**
     * id
     */
    id: number;
    /**
     * 名称
     */
    date: Date;
    /**
     * 生成时间
     */
    createdDate: Date;
    /**
     * 总计
     */
    finalExportTime: Date;
}
/**
 * 获取分餐详情列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<AllocationMealModel>>;
/**
 * 导出
 * @param params
 */
declare function exportAllocationMeal(id: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    exportAllocationMeal: typeof exportAllocationMeal;
};
export default _default;
