import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SelectValue } from 'antd/lib/select';
import { AttachmentModel } from '@school/meal-react-framework/Services/AttachmentService';
export interface DishesModel {
    id: number;
    name: string;
    materialName: string;
}
export interface DishesEditModel extends DishesModel {
    foodProductsType: string;
    taste: string;
    batching: string;
    description: string;
    cooking: string;
    price: string;
    matters: string;
    unitId: number;
    dishesMaterialModels: DishesMaterialModel[];
    materials: MaterialModel[];
    dishesMaterialNames: SelectValue;
    dishesType: string;
    imgs: AttachmentModel[];
}
export interface DishesMaterialModel {
    id: number;
    dishesId: number;
    dishesName: string;
    materialId: number;
    materialName: string;
    gram: number;
    showEdit: boolean;
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
export interface SimpleModel {
    id: string;
    name: string;
}
export interface ClassesNames {
    name: string;
}
export interface MaterialModel {
    id: number;
    name: string;
    description: string;
    materialName: string;
}
export interface DishesType {
    Surface: '面食';
    Porridge: '粥';
    Dish: '菜';
}
declare function get(id: number): Promise<any>;
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<DishesModel>>;
declare function save(dishes: DishesEditModel): Promise<any>;
declare function deleteDishes(id: number): Promise<any>;
declare function getMaterials(): Promise<any>;
declare function saveMaterial(material: MaterialModel): Promise<any>;
declare function getMaterial(id: number): Promise<any>;
declare function getPictures(value: FileModel): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteDishes;
    getMaterials: typeof getMaterials;
    saveMaterial: typeof saveMaterial;
    getMaterial: typeof getMaterial;
    getPictures: typeof getPictures;
};
export default _default;
