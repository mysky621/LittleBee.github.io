import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { MealMenuModel } from '../Services/MealMenuService';
import { MealStandardEditModel } from '../Services/MealStandardService';
import { MealBoxModel, MealBoxEditModel } from '../Services/MealBoxService';
import { CopyModel } from '../Services/MealMenuService';
export declare const Namespace = "Module_Meal_Menu";
export declare enum MealMenuActions {
    save = "Module_Meal_Menu/save",
    fetchItem = "Module_Meal_Menu/fetchItem",
    fetch = "Module_Meal_Menu/fetchPageContent",
    delete = "Module_Meal_Menu/delete",
    cleanData = "Module_Meal_Menu/cleanData",
    getStandard = "Module_Meal_Menu/fetchStandard",
    getMealBox = "Module_Meal_Menu/fetchMealBox",
    copy = "Module_Meal_Menu/saveCopy",
    getTimes = "Module_Meal_Menu/fetchTimes"
}
export interface MealMenuState extends DefaultState<MealMenuModel> {
    pageContent: PageContent<MealMenuModel>;
    standard: MealStandardEditModel;
    mealBoxes: MealBoxModel[];
    copyModel: CopyModel;
    mealBox: MealBoxEditModel;
    times: Array<Date>;
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
        save({ payload }: EffectsParams<MealMenuState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<MealMenuModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<MealMenuModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<MealMenuModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<MealMenuModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<MealMenuModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<MealMenuModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
