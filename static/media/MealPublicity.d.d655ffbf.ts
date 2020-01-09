import { EffectsCommandMap } from 'dva';
import { EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PageContent } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { MealStandardModel } from '../Services/MealStandardService';
import { CarteMealStandardModel, FetchCarteMealParams, CarteListModel, FetchCarteItemParams, CarteDetailModel, CarteEditModel, SaveCarteStandardParams } from '../Services/MealPublicityService';
export declare const Namespace = "Module_Meal_Publicity";
export declare enum MealPublicityActions {
    fetchStandardPageContent = "Module_Meal_Publicity/fetchStandardPageContent",
    fetchCarteMealPageContent = "Module_Meal_Publicity/fetchCarteMealPageContent",
    fetchCarte = "Module_Meal_Publicity/fetchCarte",
    fetchCarteItem = "Module_Meal_Publicity/fetchCarteItem",
    saveCarte = "Module_Meal_Publicity/saveCarte",
    downTemplate = "Module_Meal_Publicity/downTemplate",
    saveCarteStandard = "Module_Meal_Publicity/saveCarteStandard",
    deleteCarte = "Module_Meal_Publicity/deleteCarte",
    deleteCarteStandard = "Module_Meal_Publicity/deleteCarteStandard"
}
export interface MealPublicityState {
    standardPageContent: PageContent<MealStandardModel>;
    carteMealPageContent: PageContent<CarteMealStandardModel>;
    carteList: Array<CarteListModel>;
    carteItem: CarteDetailModel;
    saveCarteResponse: ResponseModel;
    templateResponseModel: ResponseModel;
    saveCarteStandardResponse: ResponseModel;
    deleteCarteResponse: ResponseModel;
    deleteCarteStandardResponse: ResponseModel;
}
declare const _default: {
    namespace: string;
    state: {
        standardPageContent: {};
        carteMealPageContent: {};
        carteList: never[];
        templateResponseModel: null;
    };
    effects: {
        fetchStandardPageContent({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchCarteMealPageContent({ payload }: EffectsParams<FetchCarteMealParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchCarte({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchCarteItem({ payload }: EffectsParams<FetchCarteItemParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        downTemplate({ payload }: EffectsParams<{
            id: number;
            simpleTemplate: boolean;
        }>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        saveCarte({ payload }: EffectsParams<CarteEditModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        saveCarteStandard({ payload }: EffectsParams<SaveCarteStandardParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        deleteCarte({ payload }: EffectsParams<SaveCarteStandardParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        deleteCarteStandard({ payload }: EffectsParams<SaveCarteStandardParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setStandardPageContent(state: MealPublicityState, action: EffectsCommandMap): void;
        setCarteMealPageContent(state: MealPublicityState, action: EffectsCommandMap): void;
        setCarte(state: MealPublicityState, action: EffectsCommandMap): void;
        setCarteItem(state: MealPublicityState, action: EffectsCommandMap): void;
        setTemplateResponseModel(state: MealPublicityState, action: EffectsCommandMap): void;
        setSaveCarteReponse(state: MealPublicityState, action: EffectsCommandMap): void;
        setSaveCarteStandardReponse(state: MealPublicityState, action: EffectsCommandMap): void;
        setDeleteCarteReponse(state: MealPublicityState, action: EffectsCommandMap): void;
        setDeleteStandardReponse(state: MealPublicityState, action: EffectsCommandMap): void;
    };
};
export default _default;
