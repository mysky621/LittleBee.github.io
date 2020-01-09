import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PlatFormUnitModel, PlatFormUnitEditModel } from '../Services/PlatFormUnitService';
import { PageContent } from '@school/meal-react-framework/interfaces';
export declare const Namespace = "Module_Meal_Plat_Form_Unit";
export declare enum PlatFormUnitActions {
    save = "Module_Meal_Plat_Form_Unit/save",
    fetchItem = "Module_Meal_Plat_Form_Unit/fetchItem",
    fetch = "Module_Meal_Plat_Form_Unit/fetchPageContent",
    delete = "Module_Meal_Plat_Form_Unit/delete"
}
export interface PlatFormUnitState extends DefaultState<PlatFormUnitEditModel> {
    pageContent: PageContent<PlatFormUnitModel>;
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
        save({ payload }: EffectsParams<PlatFormUnitState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<PlatFormUnitEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<PlatFormUnitEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<PlatFormUnitEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<PlatFormUnitEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<PlatFormUnitEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<PlatFormUnitEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
