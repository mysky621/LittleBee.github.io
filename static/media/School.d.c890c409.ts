import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { SchoolModel, SchoolEditModel } from '../Services/SchoolService';
import { PageContent } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_School";
export declare enum MealSchoolActions {
    save = "Module_Meal_School/save",
    fetchItem = "Module_Meal_School/fetchItem",
    fetch = "Module_Meal_School/fetchPageContent",
    delete = "Module_Meal_School/delete"
}
export interface MealSchoolState extends DefaultState<SchoolEditModel> {
    pageContent: PageContent<SchoolModel>;
    response: ResponseModel;
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
        save({ payload }: EffectsParams<MealSchoolState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<SchoolEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<SchoolEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<SchoolEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<SchoolEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<SchoolEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<SchoolEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
