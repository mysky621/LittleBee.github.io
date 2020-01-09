import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { TermsModel } from '../Services/TermsService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Terms";
export declare enum MealTermsActions {
    save = "Module_Meal_Terms/save",
    fetchItem = "Module_Meal_Terms/fetchItem",
    fetch = "Module_Meal_Terms/fetchPageContent",
    delete = "Module_Meal_Terms/delete",
    cleanData = "Module_Meal_Terms/cleanData"
}
export interface MealTermsState extends DefaultState<TermsModel> {
    pageContent: PageContent<TermsModel>;
    saveBackData: ResponseModel;
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
        save({ payload }: EffectsParams<MealTermsState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<TermsModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<TermsModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<TermsModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<TermsModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<TermsModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<TermsModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
