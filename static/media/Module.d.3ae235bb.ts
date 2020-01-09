import { ModuleEditModel } from '../Services/ModuleService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
export declare enum ModuleSystemModuleAction {
    fetch = "Module_System_Module/fetch",
    fetchModule = "Module_System_Module/fetchItem",
    save = "Module_System_Module/save",
    delete = "Module_System_Module/delete",
    fetchModuleByName = "Module_System_Module/fetchModuleByName",
    clean = "Module_System_Module/clean"
}
export interface ModuleSystemModuleState extends DefaultState<ModuleEditModel> {
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
        save({ payload }: EffectsParams<ModuleSystemModuleState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ModuleEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<ModuleEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<ModuleEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<ModuleEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<ModuleEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<ModuleEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
