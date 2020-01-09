import { UserPlatformManageModel, ResultMessage } from '../Services/UserPlatformManageService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
export declare enum UserPlatformManageAction {
    fetch = "Module_UserPlatform_Manage/fetchPageContent",
    clean = "Module_UserPlatform_Manage/clean",
    resetPassword = "Module_UserPlatform_Manage/resetPassword",
    save = "Module_UserPlatform_Manage/updateMobile",
    fetchUserPlatformManage = "Module_UserPlatform_Manage/fetchItem",
    cleanResult = "Module_UserPlatform_Manage/cleanResult"
}
export interface UserPlatformManageState extends DefaultState<UserPlatformManageModel> {
    pageContent: PageContent<UserPlatformManageModel>;
    resultMessage: ResultMessage;
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
        save({ payload }: EffectsParams<UserPlatformManageState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<UserPlatformManageModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<UserPlatformManageModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<UserPlatformManageModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<UserPlatformManageModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<UserPlatformManageModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<UserPlatformManageModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
