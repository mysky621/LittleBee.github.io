import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { BusinessBriefEditModel, ResultMessage } from '../Services/BusinessBriefService';
export declare const Namespace = "Module_Business_Brief";
import { EffectsCommandMap } from 'dva';
export declare enum BusinessBriefActions {
    save = "Module_Business_Brief/saveBrief",
    fetchItem = "Module_Business_Brief/fetchItem",
    clean = "Module_Business_Brief/clean"
}
export interface BusinessBriefState extends DefaultState<BusinessBriefEditModel> {
    resultMessage: ResultMessage;
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
        save({ payload }: EffectsParams<BusinessBriefState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<BusinessBriefEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<BusinessBriefEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<BusinessBriefEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<BusinessBriefEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<BusinessBriefEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<BusinessBriefEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
