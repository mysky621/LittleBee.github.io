import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface PlaceModel {
    id: number;
    /**
     * 场所地点
     */
    address: string;
    /**
     * 场所名称
     */
    name: string;
    /**
     * 最大容量人数
     */
    maxNumber: number;
    unitId: number;
    classes: SimpleModel[];
    classIds: number[];
    classesName: string[];
    classNames: string[];
}
export interface HaveClassModel {
    unitId: number;
    placeId: number;
}
export interface SimpleModel {
    id: string;
    name: string;
}
export interface ClassesNames {
    name: string;
}
export interface PlaceSearchModel {
    name?: string;
    classesId?: number;
    unitId?: number;
    size?: number;
    page?: number;
}
declare function get(id: number): Promise<any>;
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<PlaceModel>>;
declare function save(places: PlaceModel): Promise<any>;
declare function getClasses(unitId: number): Promise<any>;
declare function getHaveClasses(have: HaveClassModel): Promise<any>;
declare function deletePlace(id: number): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deletePlace;
    getClasses: typeof getClasses;
    getHaveClasses: typeof getHaveClasses;
};
export default _default;
