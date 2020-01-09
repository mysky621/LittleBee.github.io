import { MenuDetail } from '../Services/ModuleService';
import { ModuleDetail, ModulePlatformType } from '../Services/ModuleService';
import { EffectsCommandMap } from 'dva';
import { EffectsParams, Action } from './createModel';
export declare enum ModuleActions {
    fetch = "Module/fetch",
    currentModuleChange = "Module/changeCurrent",
    getModuleMenus = "Module/fetchModuleMenus"
}
export interface ModuleState {
    current?: ModuleDetail;
    menus?: Array<MenuDetail>;
    list: ModuleDetail[];
}
declare const _default: {
    namespace: string;
    state: {
        list: never[];
        menus: never[];
        current: null;
    };
    effects: {
        fetch({ payload }: EffectsParams<ModulePlatformType>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
        changeCurrent({ payload }: EffectsParams<string>, { call, put, select }: EffectsCommandMap): Generator<any, void, ModuleDetail>;
        fetchModuleMenus({ payload }: EffectsParams<string>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
    };
    reducers: {
        saveCurrent(state: ModuleState, action: Action<string>): {
            current: ModuleDetail | undefined;
            menus?: MenuDetail[] | undefined;
            list: ModuleDetail[];
        };
        saveMenu(state: ModuleState, action: Action<MenuDetail[]>): {
            menus: MenuDetail[];
            current?: ModuleDetail | undefined;
            list: ModuleDetail[];
        };
        save(state: ModuleState, action: Action<ModuleDetail[]>): {
            list: ModuleDetail[];
            current?: ModuleDetail | undefined;
            menus?: MenuDetail[] | undefined;
        };
    };
};
export default _default;
