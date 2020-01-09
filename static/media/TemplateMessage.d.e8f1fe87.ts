import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { TemplateMessageModel } from '../Services/TemplateMessageService';
export declare enum MessageTemplateMessageActions {
    fetchTemplateMessage = "Module_Message_Template_Message/fetchTemplateMessage",
    fetchBusinessList = "Module_Message_Template_Message/fetchBusinessList"
}
export interface MessageTemplateMessageState {
    templateMessagePage: PageContent<TemplateMessageModel>;
    businessList: Array<SimpleModel>;
}
declare const _default: {
    namespace: string;
    state: {
        templateMessagePage: {};
        businessList: never[];
    };
    effects: {
        fetchTemplateMessage({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchBusinessList(_: void, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setTemplateMessagePage(state: MessageTemplateMessageState, action: EffectsCommandMap): void;
        setBusinessList(state: MessageTemplateMessageState, action: EffectsCommandMap): void;
    };
};
export default _default;
