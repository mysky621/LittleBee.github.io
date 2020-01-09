import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { MealBoxEditModel, MealBoxModel } from '../Services/MealBoxService';
import { DishesModel } from '../Services/MealBoxService';
export declare const Namespace = "Module_MealBox";
export declare enum ModuleMealBoxAction {
    fetch = "Module_MealBox/fetchPageContent",
    fetchMealBox = "Module_MealBox/fetchItem",
    save = "Module_MealBox/save",
    delete = "Module_MealBox/delete",
    clean = "Module_MealBox/clean",
    fetchDishes = "Module_MealBox/fetchDishes"
}
export interface ModuleMealBoxState extends DefaultState<MealBoxEditModel> {
    pageContent: PageContent<MealBoxModel>;
    getDishes: DishesModel[];
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
        save({ payload }: EffectsParams<ModuleMealBoxState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<MealBoxEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<MealBoxEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<MealBoxEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<MealBoxEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<MealBoxEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<MealBoxEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
