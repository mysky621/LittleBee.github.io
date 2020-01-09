import { IdentityErrorModel, SimpleModel, StudentEditModel } from '../Services/IdentityErrorService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare enum ModuleIdentityModuleAction {
    fetch = "Identity_Error_Manage/fetch",
    fetchMessage = "Identity_Error_Manage/fetchItem",
    saveStudentInfo = "Identity_Error_Manage/saveStudentInfo",
    clean = "Identity_Error_Manage/clean",
    delete = "Identity_Error_Manage/delete",
    getSchoolList = "Identity_Error_Manage/getSchoolList",
    getGradeList = "Identity_Error_Manage/getGradeList",
    getClassList = "Identity_Error_Manage/getClassList",
    cleanGradeList = "Identity_Error_Manage/cleanGradeList",
    cleanClassList = "Identity_Error_Manage/cleanClassList",
    fetchStudent = "Identity_Error_Manage/fetchPageContent",
    getStudentInfo = "Identity_Error_Manage/getStudentInfo",
    cleanStudentInfo = "Identity_Error_Manage/cleanStudentInfo",
    sendMessage = "Identity_Error_Manage/sendMessage",
    changeResolveStatus = "Identity_Error_Manage/changeResolveStatus",
    cleanResultMessage = "Identity_Error_Manage/cleanResultMessage",
    cleanStudentList = "Identity_Error_Manage/cleanStudentList"
}
export interface ModuleIdentityModuleState extends DefaultState<IdentityErrorModel> {
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    pageContent: PageContent<StudentEditModel>;
    studentInfo: StudentEditModel;
    resultMessage: ResponseModel;
    messageList: PageContent<IdentityErrorModel>;
    message: IdentityErrorModel;
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
        save({ payload }: EffectsParams<ModuleIdentityModuleState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<IdentityErrorModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<IdentityErrorModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<IdentityErrorModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<IdentityErrorModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<IdentityErrorModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<IdentityErrorModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
