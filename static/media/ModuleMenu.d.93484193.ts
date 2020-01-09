import { DefaultState } from '@school/meal-react-framework/Models/createModel';
import { ModuleMenuModel } from '../Services/ModuleMenuService';
export declare enum ModuleSystemModuleMenuAction {
    fetch = "Module_System_Module_Menu/fetch",
    fetchItem = "Module_System_Module_Menu/fetchItem",
    save = "Module_System_Module_Menu/save",
    delete = "Module_System_Module_Menu/delete"
}
export interface ModuleSystemModuleMenuState extends DefaultState<ModuleMenuModel> {
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
        fetch({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<any>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchItem({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<number>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        save({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<ModuleSystemModuleMenuState>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<number>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ModuleMenuModel>, action: import("dva").EffectsCommandMap): void;
        setItem(state: DefaultState<ModuleMenuModel>, action: import("dva").EffectsCommandMap): void;
        updateList: (state: DefaultState<ModuleMenuModel>, action: import("dva").EffectsCommandMap) => void;
        remove: (state: DefaultState<ModuleMenuModel>, action: import("dva").EffectsCommandMap) => void;
        error(state: DefaultState<ModuleMenuModel>, action: import("dva").EffectsCommandMap): void;
        loading(state: DefaultState<ModuleMenuModel>, action: import("dva").EffectsCommandMap): void;
    };
};
export default _default;
