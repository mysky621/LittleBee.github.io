import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { AttachmentModel } from '@school/meal-react-framework/Services/AttachmentService';
import { MealStandardModel } from './MealStandardService';
/**
 * 获取餐标列表
 */
declare function getStandardList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<MealStandardModel>>;
/**
 * 获取餐标下的菜单
 * @param params
 */
declare function getsByCarteMealStandard(params: FetchCarteMealParams): Promise<import("@school/meal-react-framework/interfaces").PageContent<MealStandardModel>>;
/**
 * 获取每日菜单
 * @param params
 */
declare function getsCarte(params: number): Promise<any>;
/**
 * 每日菜单详情
 * @param params
 */
declare function getCarteItem(params: FetchCarteItemParams): Promise<any>;
/**
 * 保存菜单
 * @param params
 */
declare function saveCarte(params: CarteEditModel): Promise<any>;
/**
 * 保存周菜单
 * @param params
 */
declare function saveCarteStandard(params: SaveCarteStandardParams): Promise<any>;
/**
 * 清空某日菜单
 * @param params
 */
declare function deleteCarte(params: number): Promise<any>;
/**
 * 清空某日菜单
 * @param params
 */
declare function deleteCarteStandard(params: number): Promise<any>;
/**
 * 导出模板
 * @param params
 */
declare function downTemplate(params: {
    id: number;
    simpleTemplate: boolean;
}): Promise<ResponseModel>;
declare const _default: {
    getStandardList: typeof getStandardList;
    getsByCarteMealStandard: typeof getsByCarteMealStandard;
    getsCarte: typeof getsCarte;
    getCarteItem: typeof getCarteItem;
    downTemplate: typeof downTemplate;
    saveCarte: typeof saveCarte;
    saveCarteStandard: typeof saveCarteStandard;
    deleteCarte: typeof deleteCarte;
    deleteCarteStandard: typeof deleteCarteStandard;
};
export default _default;
export interface CarteMealStandardModel {
    id: number;
    beginDate: number;
    endDate: number;
}
export interface FetchCarteMealParams {
    mealStandardId: number;
    page: Pagable;
}
export interface CarteListModel {
    date: number;
    ordinary?: CarteSimpleModel;
    muslim?: CarteSimpleModel;
}
export interface CarteSimpleModel {
    id: number;
    date: number;
    foodProductsType: 'Ordinary' | 'Muslim';
    comboName: string;
}
export interface FetchCarteItemParams {
    date: number;
    foodProductsType: string;
    mealStandardId: number;
}
export interface CarteDetailModel {
    id: number;
    date: number;
    foodProductsType: string;
    comboId: number;
    comboName: string;
    dishesWeight: Array<DishesWeightModel>;
    carteMealStandardId: number;
    mealStandardId: number;
    mealStandardName: string;
    imgs: Array<AttachmentModel>;
}
export interface DishesWeightModel {
    id: number;
    dishesId: number;
    dishesName: string;
    weight: string;
    weightUnit: string;
    dishesFieldId: number;
    dishesFieldName: string;
}
export interface CarteEditModel {
    id?: number;
    carteMealStandardId: number;
    mealStandardId: number;
    date: number;
    foodProductsType: string;
    comboName: string;
    dishesWeight: Array<DishesWeightEditModel>;
}
export interface DishesWeightEditModel {
    dishesName: string;
    weight: string;
    weightUnit?: string;
    dishesFieldId: number;
}
export interface SaveCarteStandardParams {
    date: number;
    mealStandardId: number;
}
