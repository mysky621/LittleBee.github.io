import { MessageModel, SimpleModel } from '../Services/MessageService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
export declare enum ModuleMessageModuleAction {
    fetch = "Module_Message_Manage/fetch",
    fetchMessage = "Module_Message_Manage/fetchItem",
    save = "Module_Message_Manage/save",
    clean = "Module_Message_Manage/clean",
    delete = "Module_Message_Manage/delete",
    getSchoolList = "Module_Message_Manage/getSchoolList",
    getGradeList = "Module_Message_Manage/getGradeList",
    getClassList = "Module_Message_Manage/getClassList",
    cleanGradeList = "Module_Message_Manage/cleanGradeList",
    cleanClassList = "Module_Message_Manage/cleanClassList"
}
export interface ModuleMessageModuleState extends DefaultState<MessageModel> {
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
        save({ payload }: EffectsParams<ModuleMessageModuleState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<MessageModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<MessageModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<MessageModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<MessageModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<MessageModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<MessageModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
