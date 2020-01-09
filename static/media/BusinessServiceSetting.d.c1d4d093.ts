import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SettingEditModel } from '../Services/BusinessServiceSettingService';
export declare const Namespace = "Business_Service_Setting";
import { EffectsCommandMap } from 'dva';
export declare enum BusinessServiceSettingActions {
    saveInfo = "Business_Service_Setting/saveInfo",
    getInfo = "Business_Service_Setting/getInfo",
    cleanInfo = "Business_Service_Setting/cleanInfo",
    cleanResultMessage = "Business_Service_Setting/cleanResultMessage"
}
export interface BusinessServiceSettingState extends DefaultState<SettingEditModel> {
    resultMessage: ResponseModel;
    businessServiceSetting: SettingEditModel;
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
        save({ payload }: EffectsParams<BusinessServiceSettingState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<SettingEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<SettingEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<SettingEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<SettingEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<SettingEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<SettingEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
