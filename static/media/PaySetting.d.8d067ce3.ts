import { EffectsCommandMap } from 'dva';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { PaySettingModel, DefaultPaySettingModel, PayChannelSettingModel, ServiceUnitChannelParams, PaySettingTypeEditModel, PaySettingEditModel } from '../Services/PaySettingService';
import { EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export declare const Namespace = "Module_PAY_SETTING";
export declare enum ModulePaySettingAction {
    fetch = "Module_PAY_SETTING/fetch",
    gets = "Module_PAY_SETTING/gets",
    cleanData = "Module_PAY_SETTING/cleanData",
    schoolCleanData = "Module_PAY_SETTING/schoolCleanData",
    editCurrentPaySetting = "Module_PAY_SETTING/editCurrentPaySetting",
    editDefaultPaySetting = "Module_PAY_SETTING/editDefaultPaySetting",
    fetchServiceUnitChannel = "Module_PAY_SETTING/fetchServiceUnitChannel",
    fetchServiceUnitMchId = "Module_PAY_SETTING/fetchServiceUnitMchId",
    editServiceUnitMchIdentify = "Module_PAY_SETTING/editServiceUnitMchIdentify",
    savePaySetting = "Module_PAY_SETTING/savePaySetting"
}
export interface ModulePaySettingState {
    pageContent: PageContent<PaySettingModel>;
    schoolPageContent: PageContent<PaySettingModel>;
    saveResponse: ResponseModel;
    schoolSaveResponse: ResponseModel;
    currentPaySetting: PaySettingModel;
    defaultResponse: ResponseModel;
    payChannelSettingModel: PayChannelSettingModel;
    serviceUnitMchIds: Array<string>;
    editServiceUnitMchIdentifyResponse: ResponseModel;
    fetchPagable: Pagable;
    getsPagable: Pagable;
    markerPagable: Pagable;
}
declare const extendModel: {
    namespace: string;
    state: {
        fetchPagable: null;
        getsPagable: null;
        markerPagable: null;
        pageContent: {};
        schoolPageContent: {};
        saveResponse: null;
        schoolSaveResponse: null;
        currentPaySetting: null;
        defaultResponse: null;
        payChannelSettingModel: null;
        serviceUnitMchIds: never[];
        editServiceUnitMchIdentifyResponse: null;
    };
    effects: {
        fetch({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<any, void, unknown>;
        gets({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<any, void, unknown>;
        cleanData(_: void, command: EffectsCommandMap): Generator<any, void, unknown>;
        schoolCleanData(_: void, command: EffectsCommandMap): Generator<any, void, unknown>;
        editCurrentPaySetting({ payload }: EffectsParams<PaySettingModel>, command: EffectsCommandMap): Generator<any, void, unknown>;
        editDefaultPaySetting({ payload }: EffectsParams<DefaultPaySettingModel>, command: EffectsCommandMap): Generator<any, void, unknown>;
        fetchServiceUnitChannel({ payload }: EffectsParams<ServiceUnitChannelParams>, command: EffectsCommandMap): Generator<any, void, unknown>;
        fetchServiceUnitMchId({ payload }: EffectsParams<string>, command: EffectsCommandMap): Generator<any, void, unknown>;
        editServiceUnitMchIdentify({ payload }: EffectsParams<PaySettingTypeEditModel>, command: EffectsCommandMap): Generator<any, void, unknown>;
        savePaySetting({ payload }: EffectsParams<PaySettingEditModel>, command: EffectsCommandMap): Generator<any, void, unknown>;
    };
    reducers: {
        setPaySettings(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setSchoolPaySettings(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setCleanData(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setSchoolCleanData(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setCurrentPaySetting(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setDefaultPaySetting(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setPayChannelSettingModel(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setServiceUnitMchIds(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setEditServiceUnitMchIdentifyResponse(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setSaveResponse(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setFetchPagable(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setGetsPagable(state: ModulePaySettingState, action: EffectsCommandMap): void;
        setMarkerPagable(state: ModulePaySettingState, action: EffectsCommandMap): void;
    };
};
export default extendModel;
