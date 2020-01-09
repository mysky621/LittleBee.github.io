import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams, MapObject } from './createModel';
import { SmsSendCodeModel, SmsResultModel } from '../Services/SmsService';
import ResponseModel from '../Utils/ResponseModel';
import { ChangeUserPasswordModel } from '../Services/SmsService';
export declare enum ModuleSmsAction {
    save = "Module_Wechat_Sms/sendSmsCode",
    fetchUser = "Module_Wechat_Sms/fetchUser",
    saveResetPassword = "Module_Wechat_Sms/saveResetPassword"
}
export interface ModuleSmsState extends DefaultState<SmsSendCodeModel> {
    smsResultModel: SmsResultModel;
    userId: number;
    restModel: ResponseModel;
    passwordModel: ResponseModel;
    error: MapObject<Error>;
}
declare const _default: {
    namespace: string;
    state: {
        smsResultModel: {};
        userId: number;
        resetModel: {};
        passwordModel: {};
        error: {};
    };
    effects: {
        sendSmsCode({ payload }: EffectsParams<SmsSendCodeModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchUser({ payload }: EffectsParams<SmsSendCodeModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        saveResetPassword({ payload }: EffectsParams<ChangeUserPasswordModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setCode(state: ModuleSmsState, action: EffectsCommandMap): void;
        setMobile(state: ModuleSmsState, action: EffectsCommandMap): void;
        setSaveRestPassword(state: ModuleSmsState, action: EffectsCommandMap): void;
    };
};
export default _default;
