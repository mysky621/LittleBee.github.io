import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { LeaveModel, AssociatedUserModel, LeaveUserModel, LeaveCountModel } from '../Services/LeaveService';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Leave";
export declare enum MealLeaveActions {
    save = "Module_Meal_Leave/save",
    fetchItem = "Module_Meal_Leave/fetchItem",
    fetch = "Module_Meal_Leave/fetchPageContent",
    delete = "Module_Meal_Leave/delete",
    cleanData = "Module_Meal_Leave/cleanData",
    cleanSaveBackData = "Module_Meal_Leave/cleanSaveBackData",
    fetchSchoolList = "Module_Meal_Leave/fetchSchoolList",
    fetchGradeList = "Module_Meal_Leave/fetchGradeList",
    fetchClassList = "Module_Meal_Leave/fetchClassList",
    fetchStudentList = "Module_Meal_Leave/fetchStudentList",
    fetchTeacherList = "Module_Meal_Leave/fetchTeacherList",
    fetchAssociatedUserList = "Module_Meal_Leave/fetchAssociatedUserList",
    clean = "Module_Meal_Leave/clean",
    cleanGrade = "Module_Meal_Leave/cleanGrade",
    cleanClass = "Module_Meal_Leave/cleanClass",
    cleanSchoolData = "Module_Meal_Leave/cleanSchoolData",
    fetchStudents = "Module_Meal_Leave/fetchStudents"
}
export interface MealLeaveState extends DefaultState<LeaveModel> {
    pageContent: PageContent<LeaveCountModel>;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    studentList: Array<AssociatedUserModel>;
    teacherList: Array<AssociatedUserModel>;
    associatedUserList: Array<LeaveUserModel>;
    saveBackData: ResponseModel;
    students: Array<AssociatedUserModel>;
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
        save({ payload }: EffectsParams<MealLeaveState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<LeaveModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<LeaveModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<LeaveModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<LeaveModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<LeaveModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<LeaveModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
