import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { EvaluateModel, SimpleModel, StandardSimpleModel, ItemModel, ItemScoreModel } from '../Services/EvaluateService';
import { PageContent } from '@school/meal-react-framework/interfaces';
export declare const Namespace = "Module_Evaluate";
export declare enum ModuleEvaluateAction {
    fetch = "Module_Evaluate/fetchPageContent",
    fetchStandard = "Module_Evaluate/fetchStandard",
    fetchSchool = "Module_Evaluate/fetchSchool",
    fetchItems = "Module_Evaluate/fetchItems",
    fetchItemScore = "Module_Evaluate/fetchItemScore",
    fetchAllItems = "Module_Evaluate/fetchAllItems"
}
export interface ModuleEvaluateState extends DefaultState<EvaluateModel> {
    pageContent: PageContent<EvaluateModel>;
    standardList: Array<StandardSimpleModel>;
    schoolList: Array<SimpleModel>;
    itemList: Array<ItemModel>;
    allItemList: Array<ItemModel>;
    itemScores: ItemScoreModel;
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
        save({ payload }: EffectsParams<ModuleEvaluateState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<EvaluateModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<EvaluateModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<EvaluateModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<EvaluateModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<EvaluateModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<EvaluateModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
