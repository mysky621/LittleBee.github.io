import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { AllocationMealModel } from '../Services/AllocationMealService';
export declare const Namespace = "Module_Meal_Allocation";
export declare enum MealAllocationActions {
    fetch = "Module_Meal_Allocation/fetchPageContent",
    cleanData = "Module_Meal_Allocation/cleanData",
    export = "Module_Meal_Allocation/export"
}
export interface MealAllocationState extends DefaultState<AllocationMealModel> {
    pageContent: PageContent<AllocationMealModel>;
    base64Str: string;
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
        save({ payload }: EffectsParams<MealAllocationState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<AllocationMealModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<AllocationMealModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<AllocationMealModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<AllocationMealModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<AllocationMealModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<AllocationMealModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
