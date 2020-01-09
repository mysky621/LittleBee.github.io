import { UnitEditModel } from '../Services/UnitServices';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
export declare enum ModuleSystemUnitAction {
    fetch = "Module_System_Unit/fetchPageContent",
    fetchUnit = "Module_System_Unit/fetchItem",
    update = "Module_System_Unit/save",
    delete = "Module_System_Unit/delete",
    updateStatus = "Module_System_Unit/updateStatus"
}
export interface ModuleSystemUnitState extends DefaultState<UnitEditModel> {
    pageContent: PageContent<UnitEditModel>;
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
        save({ payload }: EffectsParams<ModuleSystemUnitState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<UnitEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<UnitEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<UnitEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<UnitEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<UnitEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<UnitEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
