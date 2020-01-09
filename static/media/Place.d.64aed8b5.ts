import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { PlaceModel, SimpleModel } from '../Services/PlaceService';
export declare const Namespace = "Module_Place";
export declare enum ModulePlaceAction {
    fetch = "Module_Place/fetchPageContent",
    fetchUser = "Module_Place/fetchItem",
    save = "Module_Place/save",
    delete = "Module_Place/delete",
    clean = "Module_Place/clean",
    fetchClasses = "Module_Place/fetchClasses",
    fetchHaveClasses = "Module_Place/fetchHaveClasses"
}
export interface ModulePlaceState extends DefaultState<PlaceModel> {
    pageContent: PageContent<PlaceModel>;
    getClasses: SimpleModel[];
    getHaveClasses: SimpleModel[];
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
        save({ payload }: EffectsParams<ModulePlaceState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<PlaceModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<PlaceModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<PlaceModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<PlaceModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<PlaceModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<PlaceModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
