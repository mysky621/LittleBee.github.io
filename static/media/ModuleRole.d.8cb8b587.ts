import { DefaultState } from '@school/meal-react-framework/Models/createModel';
import { ModuleRoleEditModel } from '../Services/ModuleRoleService';
export declare enum ModuleSystemModuleRoleAction {
    fetch = "Module_System_Module_Role/fetch",
    save = "Module_System_Module_Role/save",
    delete = "Module_System_Module_Role/delete"
}
export interface ModuleSystemModuleRoleState extends DefaultState<ModuleRoleEditModel> {
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
        save({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<ModuleSystemModuleRoleState>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<number>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ModuleRoleEditModel>, action: import("dva").EffectsCommandMap): void;
        setItem(state: DefaultState<ModuleRoleEditModel>, action: import("dva").EffectsCommandMap): void;
        updateList: (state: DefaultState<ModuleRoleEditModel>, action: import("dva").EffectsCommandMap) => void;
        remove: (state: DefaultState<ModuleRoleEditModel>, action: import("dva").EffectsCommandMap) => void;
        error(state: DefaultState<ModuleRoleEditModel>, action: import("dva").EffectsCommandMap): void;
        loading(state: DefaultState<ModuleRoleEditModel>, action: import("dva").EffectsCommandMap): void;
    };
};
export default _default;
