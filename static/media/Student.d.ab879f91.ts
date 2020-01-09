import { StudentEditModel } from '../Services/StudentService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '../Services/IdentityErrorService';
export declare const Namespace = "Module_Devops_Student";
export declare enum ModuleStudentAction {
    fetch = "Module_Devops_Student/fetchPageContent",
    fetchUser = "Module_Devops_Student/fetchItem",
    save = "Module_Devops_Student/save",
    delete = "Module_Devops_Student/delete",
    clean = "Module_Devops_Student/clean",
    getSchoolList = "Module_Devops_Student/getSchoolList",
    getGradeList = "Module_Devops_Student/getGradeList",
    getClassList = "Module_Devops_Student/getClassList",
    cleanGradeList = "Module_Devops_Student/cleanGradeList",
    cleanClassList = "Module_Devops_Student/cleanClassList",
    cleanData = "Module_Devops_Student/cleanData",
    resetPwd = "Module_Devops_Student/resetPwd",
    export = "Module_Devops_Student/export",
    cleanresetPwd = "Module_Devops_Student/cleanresetPwd"
}
export interface ModuleStudentState extends DefaultState<StudentEditModel> {
    pageContent: PageContent<StudentEditModel>;
    saveBackData: ResponseModel;
    resetPwd: ResponseModel;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
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
        save({ payload }: EffectsParams<ModuleStudentState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<StudentEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<StudentEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<StudentEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<StudentEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<StudentEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<StudentEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
