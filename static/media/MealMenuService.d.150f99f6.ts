import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SelectValue } from 'antd/lib/select';
import { Moment } from 'moment';
/**
 * 餐标model
 */
export interface MealMenuModel {
    id: number;
    date: string;
    startDate: Date;
    endDate: Date;
    mealStandardId: number;
    mealStandardName: string;
    weekMenuModelList: WeekMenuModel[];
    flag: boolean;
    dateFlag: boolean;
}
export interface WeekMenuModel {
    id: number;
    mealMenuId: number;
    mealStandardName: string;
    foodProductsType: string;
    mealBoxId: SelectValue;
    mealBoxName: string;
    week: string;
}
export interface MealWeekMenuEditModel {
    id: number;
    date: Date;
    standardId: number;
    weekMenuModels: WeekMenuModel[];
}
export declare const Week: {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
};
export declare const FoodProductsType: {
    Ordinary: string;
    Muslim: string;
};
export interface ParamsModel {
    params: Pagable;
    standardId: number;
}
export interface MealMenuTimeModel {
    startDate: Moment;
    endDate: Moment;
}
/**
 * 获取周菜单列表
 * @param params
 */
declare function getList(params: ParamsModel): Promise<import("@school/meal-react-framework/interfaces").PageContent<MealMenuModel>>;
/**
 * 获取周菜单详情
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 获取餐标
 * @param id
 */
declare function getStandard(id: number): Promise<any>;
declare function getMealBoxes(foodProductsType: string): Promise<any>;
/**
 * 添加/更新周菜单
 * @param params
 */
declare function save(params: MealWeekMenuEditModel): Promise<any>;
declare function del(id: number): Promise<any>;
/**
 * 复制
 * @param id
 */
export interface CopyModel {
    id: number;
    date: Moment;
}
declare function copy(params: CopyModel): Promise<any>;
declare function getMealBox(id: number): Promise<any>;
declare function getTimes(id: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
    getStadnard: typeof getStandard;
    getMealBoxes: typeof getMealBoxes;
    copyWeekMenu: typeof copy;
    getMealBox: typeof getMealBox;
    getTimes: typeof getTimes;
};
export default _default;
