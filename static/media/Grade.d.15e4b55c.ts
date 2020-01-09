import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { GradeModel, GradeUpLogModel } from '../Services/GradeService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Grade";
export declare enum MealGradeActions {
    save = "Module_Meal_Grade/save",
    fetchItem = "Module_Meal_Grade/fetchItem",
    fetch = "Module_Meal_Grade/fetchPageContent",
    delete = "Module_Meal_Grade/delete",
    cleanData = "Module_Meal_Grade/cleanData",
    upGrade = "Module_Meal_Grade/upGrade",
    getGradeUpLog = "Module_Meal_Grade/getGradeUpLog"
}
export interface MealGradeState extends DefaultState<GradeModel> {
    pageContent: PageContent<GradeModel>;
    responseModel: ResponseModel;
    gradeUpLog: Array<GradeUpLogModel>;
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
        save({ payload }: EffectsParams<MealGradeState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<GradeModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<GradeModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<GradeModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<GradeModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<GradeModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<GradeModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
