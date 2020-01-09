import { AssociatedUserModel, UserModel, ResultMessage } from '../Services/UserPlatformManageService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
export declare enum AssociatedUserModelAction {
    fetch = "Module_AssociatedUser_Manage/fetch",
    getAssociatedList = "Module_AssociatedUser_Manage/getAssociatedList",
    unbind = "Module_AssociatedUser_Manage/unbind"
}
export interface AssociatedUserModelState extends DefaultState<AssociatedUserModel> {
    userList: Array<UserModel>;
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
        save({ payload }: EffectsParams<AssociatedUserModelState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<AssociatedUserModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<AssociatedUserModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<AssociatedUserModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<AssociatedUserModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<AssociatedUserModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<AssociatedUserModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
