import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { DishesEditModel } from '../Services/DishesService';
import { MaterialModel } from '../Services/DishesService';
import { AttachmentModel } from '@school/meal-react-framework/Services/AttachmentService';
export declare const Namespace = "Module_Dishes";
export declare enum ModuleDishesAction {
    fetch = "Module_Dishes/fetchPageContent",
    fetchDishes = "Module_Dishes/fetchItem",
    save = "Module_Dishes/save",
    delete = "Module_Dishes/delete",
    clean = "Module_Dishes/clean",
    fetchMaterials = "Module_Dishes/fetchMaterials",
    saveMaterial = "Module_Dishes/saveMaterial",
    fetchMaterial = "Module_Dishes/fetchMaterial",
    fetchPictures = "Module_Dishes/fetchPictures"
}
export interface ModuleDishesState extends DefaultState<DishesEditModel> {
    pageContent: PageContent<DishesEditModel>;
    getMaterials: MaterialModel[];
    newMaterial: MaterialModel;
    getPictures: AttachmentModel[];
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
        save({ payload }: EffectsParams<ModuleDishesState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<DishesEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<DishesEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<DishesEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<DishesEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<DishesEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<DishesEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
