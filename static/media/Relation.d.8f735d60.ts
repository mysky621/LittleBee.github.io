import { DefaultState, EffectsParams } from './createModel';
import { RelationModel } from '../Services/RelationService';
import { EffectsCommandMap } from 'dva';
export declare enum ModuleRelationAction {
    fetch = "Module_Wechat_Relation/fetch"
}
export interface EffectsParamsEx extends EffectsParams<RelationModel> {
}
export declare type EffectsCommandMapEx = EffectsCommandMap;
export interface ModuleRelationState extends DefaultState<RelationModel> {
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
        save({ payload }: EffectsParams<ModuleRelationState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<RelationModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<RelationModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<RelationModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<RelationModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<RelationModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<RelationModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
