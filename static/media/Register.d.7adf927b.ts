import { DefaultState, EffectsParams } from './createModel';
import { EffectsCommandMap } from 'dva';
import { RegisterModel } from '../Services/RegisterService';
export declare enum ModuleRegisterAction {
    save = "Module_Wechat_Register/save"
}
export declare type EffectsCommandMapEx = EffectsCommandMap;
export interface EffectsParamsEx extends EffectsParams<RegisterModel> {
}
export interface ModuleRegisterState extends DefaultState<RegisterModel> {
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
        save({ payload }: EffectsParams<ModuleRegisterState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<RegisterModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<RegisterModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<RegisterModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<RegisterModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<RegisterModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<RegisterModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
