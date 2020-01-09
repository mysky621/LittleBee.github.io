import { StudentEditModel } from '../Services/StudentService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { SimpleModel } from '../Services/StudentService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Student";
export declare enum ModuleStudentAction {
    fetch = "Module_Student/fetchPageContent",
    fetchUser = "Module_Student/fetchItem",
    save = "Module_Student/save",
    delete = "Module_Student/delete",
    clean = "Module_Student/clean",
    getGradeList = "Module_Student/fetchGrades",
    getClassList = "Module_Student/fetchClasses",
    getUnitClassList = "Module_Student/fetchUnitClasses",
    cleanData = "Module_Student/cleanData",
    resetPwd = "Module_Student/resetPwd",
    export = "Module_Student/export"
}
export interface ModuleStudentState extends DefaultState<StudentEditModel> {
    pageContent: PageContent<StudentEditModel>;
    getGrades: SimpleModel[];
    getClasses: SimpleModel[];
    getUnitClasses: SimpleModel[];
    saveBackData: ResponseModel;
    resetPwd: boolean;
    exportDataResponseModel: ResponseModel;
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
