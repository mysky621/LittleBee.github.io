import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { AttachmentModel } from '@school/meal-react-framework/Services/AttachmentService';
export interface MealBoxModel {
    id: number;
    name: string;
    dishesNames: string;
    foodProductsType: string;
}
export interface MealBoxEditModel extends MealBoxModel {
    foodProductsType: string;
    money: number;
    /**
     * 餐品名称
     */
    name: string;
    /**
     * 所属单位
     */
    unitId: number;
    /**
     * 年龄段开始
     */
    ageBegin: number;
    /**
     * 年龄段结束
     */
    ageEnd: number;
    /**
     * 描述
     */
    describe: string[];
    /**
     * 餐品图片
     */
    /**
     * 菜品信息
     */
    dishesWeights: DishesWeightModel[];
    /**
     * 关联营养搭配
     */
    statusType: string;
    dishesType: string;
    imgs: AttachmentModel[];
    materials: ImageModel[];
}
export interface DishesWeightModel {
    id: number;
    key: number;
    dishesId: number;
    dishesName: string;
    weight: string;
    imageModelList: ImageModel[];
}
export interface DishesModel {
    id: number;
    name: string;
    imageModelList: ImageModel[];
}
export interface ImageModel {
    id: number;
    name: string;
    url: string;
}
export interface FileModel {
    associateId: number;
    tenantTypeId: string;
    ownerId: number;
}
export declare const FoodProductsType: {
    Ordinary: string;
    Muslim: string;
};
declare function get(id: number): Promise<any>;
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<MealBoxModel>>;
declare function save(mealBox: MealBoxEditModel): Promise<any>;
declare function deleteMealBox(id: number): Promise<any>;
declare function getDishes(foodProductsType: string): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteMealBox;
    getDishes: typeof getDishes;
};
export default _default;
