import { DefaultState } from '@school/meal-react-framework/Models/createModel';
import { ModulePermissionEditModel } from '../Services/ModulePermissionService';
export { EffectsCommandMap } from 'dva';
export declare enum ModuleSystemModulePermissionAction {
    fetch = "Module_System_Module_Permission/fetch",
    save = "Module_System_Module_Permission/save",
    delete = "Module_System_Module_Permission/delete"
}
export interface ModuleSystemModulePermissionState extends DefaultState<ModulePermissionEditModel> {
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
        save({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<ModuleSystemModulePermissionState>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<number>, command: import("dva").EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ModulePermissionEditModel>, action: import("dva").EffectsCommandMap): void;
        setItem(state: DefaultState<ModulePermissionEditModel>, action: import("dva").EffectsCommandMap): void;
        updateList: (state: DefaultState<ModulePermissionEditModel>, action: import("dva").EffectsCommandMap) => void;
        remove: (state: DefaultState<ModulePermissionEditModel>, action: import("dva").EffectsCommandMap) => void;
        error(state: DefaultState<ModulePermissionEditModel>, action: import("dva").EffectsCommandMap): void;
        loading(state: DefaultState<ModulePermissionEditModel>, action: import("dva").EffectsCommandMap): void;
    };
};
export default _default;
