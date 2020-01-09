import { DefaultState, EffectsParams } from './createModel';
import { SmsVerifyCodeModel } from '../Services/SmsCodeService';
import { EffectsCommandMap } from 'dva';
export declare enum ModuleSmsCodeAction {
    fetchItem = "Module_Wechat_SmsCode/fetchItem"
}
export declare type EffectsCommandMapEx = EffectsCommandMap;
export interface EffectsParamsEx extends EffectsParams<SmsVerifyCodeModel> {
}
export interface ModuleSmsCodeState extends DefaultState<SmsVerifyCodeModel> {
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
        save({ payload }: EffectsParams<ModuleSmsCodeState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<SmsVerifyCodeModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<SmsVerifyCodeModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<SmsVerifyCodeModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<SmsVerifyCodeModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<SmsVerifyCodeModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<SmsVerifyCodeModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
