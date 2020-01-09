import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { MealStandardEditModel, MealStandardModel, DishesFieldModel } from '../Services/MealStandardService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Standard";
export declare enum MealStandardActions {
    save = "Module_Meal_Standard/save",
    fetchItem = "Module_Meal_Standard/fetchItem",
    fetch = "Module_Meal_Standard/fetchPageContent",
    delete = "Module_Meal_Standard/delete",
    cleanData = "Module_Meal_Standard/cleanData",
    fetchDishesField = "Module_Meal_Standard/fetchDishesField",
    updateDishesField = "Module_Meal_Standard/updateDishesField"
}
export interface MealStandardState extends DefaultState<MealStandardEditModel> {
    pageContent: PageContent<MealStandardModel>;
    removeBackData: ResponseModel;
    dishesFieldList: Array<DishesFieldModel>;
    dishesFieldResponse: ResponseModel;
}
declare const _default: {
    namespace: string;
    state: {
        list: never[];
        current: {};
        error: {};
        loading: {};
    };
    effects: {
        fetch({ payload }: EffectsParams<any>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchItem({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        save({ payload }: EffectsParams<MealStandardState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<MealStandardModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<MealStandardModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<MealStandardModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<MealStandardModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<MealStandardModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<MealStandardModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
