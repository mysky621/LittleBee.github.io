import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { AllowanceModel, AssociatedUserModel } from '../Services/AllowanceService';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export declare const Namespace = "Module_Meal_Allowance";
export declare enum MealAllowanceActions {
    save = "Module_Meal_Allowance/save",
    fetchItem = "Module_Meal_Allowance/fetchItem",
    fetch = "Module_Meal_Allowance/fetchPageContent",
    delete = "Module_Meal_Allowance/delete",
    cleanData = "Module_Meal_Allowance/cleanData",
    getSchoolList = "Module_Meal_Allowance/getSchoolList",
    getStudentList = "Module_Meal_Allowance/getStudentList"
}
export interface MealAllowanceState extends DefaultState<AllowanceModel> {
    pageContent: PageContent<AllowanceModel>;
    schoolList: Array<SimpleModel>;
    studentList: Array<AssociatedUserModel>;
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
        save({ payload }: EffectsParams<MealAllowanceState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<AllowanceModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<AllowanceModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<AllowanceModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<AllowanceModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<AllowanceModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<AllowanceModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
