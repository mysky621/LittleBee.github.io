import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { EffectsCommandMap } from 'dva';
import { ModuleRoleUserModel, UserModel } from '../Services/ModuleRoleUserService';
export declare enum ModuleSystemModuleRoleUserAction {
    fetch = "Module_System_Module_Role_User/fetch",
    save = "Module_System_Module_Role_User/save",
    delete = "Module_System_Module_Role_User/delete",
    fetchUser = "Module_System_Module_Role_User/fetchUser"
}
export interface ModuleSystemModuleRoleUserState extends DefaultState<ModuleRoleUserModel> {
    pageContent: PageContent<ModuleRoleUserModel>;
    userList: UserModel[];
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
        save({ payload }: EffectsParams<ModuleSystemModuleRoleUserState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ModuleRoleUserModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<ModuleRoleUserModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<ModuleRoleUserModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<ModuleRoleUserModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<ModuleRoleUserModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<ModuleRoleUserModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
