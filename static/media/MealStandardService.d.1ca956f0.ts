import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
/**
 * 餐标model
 */
export interface MealStandardModel {
    /**
     * id
     */
    id: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 餐标
     */
    price: number;
    /**
     * 备注
     */
    note: string;
    /**
     * 餐标对象
     */
    unitGradeList: Array<UnitGradeModel>;
}
export interface MealStandardEditModel extends MealStandardModel {
    /**
     * 风格
     */
    mealStandardStyleModelList: Array<FoodProductsTypeModel>;
    /**
     * 餐标对象
     */
    checkedUnitGradeList: Array<SimpleModel>;
    /**
     * 服务年级
     */
    unitGradeList: Array<UnitGradeModel>;
    /**
     * 不可选的年级
     */
    disabledGradeList: number[];
    /**
     * 是不被使用
     */
    used: boolean;
}
export interface UnitGradeModel {
    unitId: number;
    unitName: string;
    gradeList: Array<SimpleModel>;
}
export interface CheckedGradeModel {
    unitId: number;
    grades: number[];
}
export interface FoodProductsTypeModel {
    id?: number;
    foodProductsType: string;
}
export declare const FoodProductsType: {
    Ordinary: string;
    Muslim: string;
};
/**
 * 获取餐标列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<MealStandardModel>>;
/**
 * 获取餐标
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 添加/更新餐标
 * @param params
 */
declare function save(params: MealStandardEditModel): Promise<any>;
/**
 * 删除餐标
 * @param id
 */
declare function del(id: number): Promise<any>;
/**
 * 获取餐标下的餐品字段列表
 * @param standardId
 */
declare function getsDishesField(standardId: number): Promise<any>;
/**
 * 设置餐标下的餐品字段
 * @param params
 */
declare function updateDishesField(params: DishesFieldUpdateModel): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
    getsDishesField: typeof getsDishesField;
    updateDishesField: typeof updateDishesField;
};
export default _default;
export interface DishesFieldModel {
    id: number;
    name: string;
    sort: number;
}
export interface DishesFieldUpdateModel {
    standardId: number;
    fieldNames: Array<SimpleModel>;
    deleteFieldIds: Array<number>;
}
