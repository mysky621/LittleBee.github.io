import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { MessageTemplateListModel, MessageTemplateModel, MessageTemplateSettingListModel, MessageTemplateSettingModel } from '../Services/MessageTemplateService';
import { EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare enum MessageTemplateActions {
    fetchMessageTemplate = "Module_Message_Template/fetchMessageTemplate",
    fetchAllTemplate = "Module_Message_Template/fetchAllTemplate",
    save = "Module_Message_Template/save",
    fetch = "Module_Message_Template/fetch",
    fetchTemplateSettings = "Module_Message_Template/fetchTemplateSettings",
    fetchTemplateSettingItem = "Module_Message_Template/fetchTemplateSettingItem",
    fetchServiceSchool = "Module_Message_Template/fetchServiceSchool",
    fetchExistingSchool = "Module_Message_Template/fetchExistingSchool",
    saveSetting = "Module_Message_Template/saveSetting",
    cleanData = "Module_Message_Template/cleanData"
}
export interface MessageTemplateState {
    messageTemplatePage: PageContent<MessageTemplateListModel>;
    saveResponseModel: ResponseModel;
    messageTemplateModel: MessageTemplateModel;
    templateSettingsPage: PageContent<MessageTemplateSettingListModel>;
    templatSettingItem: MessageTemplateSettingModel;
    messageTemplateList: Array<MessageTemplateModel>;
    schoolList: Array<SimpleModel>;
    existingSchoolList: Array<SimpleModel>;
    settingResponseModel: ResponseModel;
}
declare const _default: {
    namespace: string;
    state: {
        messageTemplatePage: {};
        saveResponseModel: null;
        messageTemplateModel: null;
        templateSettingsPage: {};
        messageTemplateList: never[];
        schoolList: never[];
        existingSchoolList: never[];
    };
    effects: {
        fetchMessageTemplate({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchAllTemplate(_: void, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        save({ payload }: EffectsParams<MessageTemplateModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetch({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchTemplateSettings({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchTemplateSettingItem({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchServiceSchool(_: void, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchExistingSchool({ payload }: EffectsParams<string>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        saveSetting({ payload }: EffectsParams<MessageTemplateSettingModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setMessageTemplatePage(state: MessageTemplateState, action: EffectsCommandMap): void;
        setMessageTemplate(state: MessageTemplateState, action: EffectsCommandMap): void;
        setList(state: MessageTemplateState, action: EffectsCommandMap): void;
        setItem(state: MessageTemplateState, action: EffectsCommandMap): void;
        setTemplateSettingsPage(state: MessageTemplateState, action: EffectsCommandMap): void;
        setTemplateSettingItem(state: MessageTemplateState, action: EffectsCommandMap): void;
        setSchool(state: MessageTemplateState, action: EffectsCommandMap): void;
        setExistingSchool(state: MessageTemplateState, action: EffectsCommandMap): void;
        updateSetting(state: MessageTemplateState, action: EffectsCommandMap): void;
        cleanData(state: MessageTemplateState): void;
    };
};
export default _default;
