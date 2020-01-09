import { EffectsParams, MapObject } from '@school/meal-react-framework/Models/createModel';
import { ModuleAssignListModel, ModuleAssignFetchParams, ModuleAssignDeleteParams, ModuleAssignParams, ModuleAssignFetchDetailParams } from './../Services/ModuleAssignService';
import { EffectsCommandMap } from 'dva';
export declare enum ModuleSystemModuleAssignAction {
    fetchAssignedDetail = "Module_System_Module_Assign/fetchAssignedDetail",
    fetch = "Module_System_Module_Assign/fetch",
    assign = "Module_System_Module_Assign/assign",
    delete = "Module_System_Module_Assign/delete"
}
export interface ModuleSystemModuleAssignState {
    assignedData: MapObject<ModuleAssignListModel[]>;
    list: ModuleAssignListModel[];
    error: MapObject<Error>;
}
declare const _default: {
    namespace: string;
    state: {
        assignedData: {};
        list: never[];
        error: {};
    };
    effects: {
        fetchAssignedDetail({ payload }: EffectsParams<ModuleAssignFetchDetailParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetch({ payload }: EffectsParams<ModuleAssignFetchParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        assign({ payload }: EffectsParams<ModuleAssignParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<ModuleAssignDeleteParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setData(state: ModuleSystemModuleAssignState, action: EffectsCommandMap): void;
        setList(state: ModuleSystemModuleAssignState, action: EffectsCommandMap): void;
        updateList(state: ModuleSystemModuleAssignState, action: EffectsCommandMap): void;
        remove(state: ModuleSystemModuleAssignState, action: EffectsCommandMap): void;
        error(state: ModuleSystemModuleAssignState, action: EffectsCommandMap): void;
    };
};
export default _default;
