import { DefaultState, EffectsParams } from './createModel';
import { ValidateModel } from '../Services/ValidateService';
import { EffectsCommandMap } from 'dva';
export interface EffectsParamsEx extends EffectsParams<ValidateModel> {
}
export declare type EffectsCommandMapEx = EffectsCommandMap;
export declare enum ModuleValidateAction {
    fetchItem = "Module_Wechat_Validate/fetchItem"
}
export interface ModuleValidateState extends DefaultState<ValidateModel> {
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
        save({ payload }: EffectsParams<ModuleValidateState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ValidateModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<ValidateModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<ValidateModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<ValidateModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<ValidateModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<ValidateModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
