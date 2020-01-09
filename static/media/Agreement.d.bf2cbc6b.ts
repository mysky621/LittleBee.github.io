import { AgreementModel } from '../Services/AgreementService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare enum ModuleAgreementManageAction {
    fetch = "Module_Agreement_Manage/fetch",
    fetchAgreement = "Module_Agreement_Manage/fetchItem",
    save = "Module_Agreement_Manage/save",
    clean = "Module_Agreement_Manage/clean",
    delete = "Module_Agreement_Manage/delete",
    setServiceStatus = "Module_Agreement_Manage/setServiceStatus",
    cleanResultMessage = "Module_Agreement_Manage/cleanResultMessage"
}
export interface ModuleAgreementManageState extends DefaultState<AgreementModel> {
    resultMessage: ResponseModel;
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
        save({ payload }: EffectsParams<ModuleAgreementManageState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<AgreementModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<AgreementModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<AgreementModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<AgreementModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<AgreementModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<AgreementModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
