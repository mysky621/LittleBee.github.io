import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { TeacherEditModel } from '../Services/TeacherService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Teacher";
export declare enum ModuleTeacherAction {
    fetch = "Module_Teacher/fetchPageContent",
    fetchTeacher = "Module_Teacher/fetchItem",
    save = "Module_Teacher/save",
    delete = "Module_Teacher/delete",
    cleanData = "Module_Teacher/cleanData"
}
export interface ModuleTeacherState extends DefaultState<TeacherEditModel> {
    pageContent: PageContent<TeacherEditModel>;
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
        save({ payload }: EffectsParams<ModuleTeacherState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<TeacherEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<TeacherEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<TeacherEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<TeacherEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<TeacherEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<TeacherEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
