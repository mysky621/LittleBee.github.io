import { RefundRuleModel, SchoolModel, RefundRuleSimpleModel } from '../Services/RefundRuleService';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
export declare enum RefundRuleAction {
    fetch = "Module_RefundRule_Manage/fetchPageContent",
    clean = "Module_RefundRule_Manage/clean",
    save = "Module_RefundRule_Manage/save",
    delete = "Module_RefundRule_Manage/delete",
    fetchRefundRule = "Module_RefundRule_Manage/fetchItem",
    fetchSchool = "Module_RefundRule_Manage/fetchSchool",
    fetchSimpleRuleList = "Module_RefundRule_Manage/fetchSimpleRuleList"
}
export interface RefundRuleState extends DefaultState<RefundRuleModel> {
    pageContent: PageContent<RefundRuleModel>;
    schoolList: Array<SchoolModel>;
    simpleRuleList: Array<RefundRuleSimpleModel>;
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
        save({ payload }: EffectsParams<RefundRuleState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<RefundRuleModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<RefundRuleModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<RefundRuleModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<RefundRuleModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<RefundRuleModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<RefundRuleModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
