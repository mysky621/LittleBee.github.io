import { EffectsParams, MapObject } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { AuthorizationModuleParam, CancelAuthorizationModuleParan, ModuleModel } from '../Services/AuthorizationService';
export declare enum ModuleSystemUnitAuthorizationAction {
    fetch = "Module_System_Unit_Authorization/fetch",
    authorization = "Module_System_Unit_Authorization/authorization",
    cancelAuthorization = "Module_System_Unit_Authorization/cancelAuthorization"
}
export interface ModuleSystemUnitAuthorizationState {
    modules: ModuleModel[];
    error: MapObject<Error>;
}
declare const _default: {
    namespace: string;
    state: {
        modules: never[];
        error: {};
    };
    effects: {
        fetch({ payload }: EffectsParams<number>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
        authorization({ payload }: EffectsParams<AuthorizationModuleParam>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
        cancelAuthorization({ payload }: EffectsParams<CancelAuthorizationModuleParan>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
    };
    reducers: {
        save(state: ModuleSystemUnitAuthorizationState, action: EffectsCommandMap): void;
        saveModule(state: ModuleSystemUnitAuthorizationState): {
            modules: ModuleModel[];
            error: MapObject<Error>;
        };
        removeModule(state: ModuleSystemUnitAuthorizationState): {
            modules: ModuleModel[];
            error: MapObject<Error>;
        };
        error(state: ModuleSystemUnitAuthorizationState, action: EffectsCommandMap): void;
    };
};
export default _default;
