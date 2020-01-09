import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface EvaluateModel {
    id: number;
    mealsDate: string;
    standardName: string;
    userName: string;
    shoolName: string;
    evaluateDate: string;
    itemMap: {
        [key: number]: string[];
    };
}
export interface EvaluateParamsModel extends Pagable {
    business: number;
    startDate: string;
    endDate: string;
    standardPrice: number;
    schoolId: number;
    itemId: number;
    score: string;
}
export interface SimpleModel {
    id: string;
    name: string;
}
export interface StandardSimpleModel {
    id: string;
    name: string;
    price: number;
}
export interface ItemScoreModel {
    scoreMap: {
        [key: number]: number[];
    };
}
export interface ItemModel {
    id: number;
    name: string;
}
declare function getList(params: EvaluateParamsModel): Promise<import("@school/meal-react-framework/interfaces").PageContent<EvaluateModel>>;
declare function getStandardList(unitId: number): Promise<any>;
declare function getSchoolList(businessId: number): Promise<any>;
declare function getItems(): Promise<any>;
declare function getAllItems(): Promise<any>;
declare function getItemScore(): Promise<any>;
declare const _default: {
    getList: typeof getList;
    getStandardList: typeof getStandardList;
    getSchoolList: typeof getSchoolList;
    getItems: typeof getItems;
    getItemScore: typeof getItemScore;
    getAllItems: typeof getAllItems;
};
export default _default;
