import { ModulePlatformEditModel } from '../Services/ModuleService';
import { MapObject, DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
export declare enum ModuleSystemModulePlatformAction {
    fetch = "Module_System_Module_Platform/fetch",
    save = "Module_System_Module_Platform/save",
    delete = "Module_System_Module_Platform/delete"
}
export interface ModuleSystemModulePlatformState extends DefaultState<ModulePlatformEditModel> {
    platformModule: MapObject<ModulePlatformEditModel>;
    error: MapObject<Error>;
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
        save({ payload }: EffectsParams<ModuleSystemModulePlatformState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ModulePlatformEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<ModulePlatformEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<ModulePlatformEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<ModulePlatformEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<ModulePlatformEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<ModulePlatformEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
