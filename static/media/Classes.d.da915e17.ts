import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { ClassesModel, SimpleModel } from '../Services/ClassesService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Classes";
export declare enum MealClassesActions {
    save = "Module_Meal_Classes/save",
    fetchItem = "Module_Meal_Classes/fetchItem",
    fetch = "Module_Meal_Classes/fetchPageContent",
    delete = "Module_Meal_Classes/delete",
    getGradeList = "Module_Meal_Classes/getGradeList",
    cleanData = "Module_Meal_Classes/cleanData"
}
export interface MealClassesState extends DefaultState<ClassesModel> {
    pageContent: PageContent<ClassesModel>;
    gradeList: Array<SimpleModel>;
    saveBackData: ResponseModel;
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
        save({ payload }: EffectsParams<MealClassesState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ClassesModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<ClassesModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<ClassesModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<ClassesModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<ClassesModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<ClassesModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
