import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { AllowanceWeChatModel, AllowanceWeChatListModel } from '../Services/AllowanceWeChatService';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Allowance_WeChat";
export declare enum MealAllowanceWeChatActions {
    save = "Module_Meal_Allowance_WeChat/save",
    fetchItem = "Module_Meal_Allowance_WeChat/fetchItem",
    fetch = "Module_Meal_Allowance_WeChat/fetchPageContent",
    delete = "Module_Meal_Allowance_WeChat/delete",
    getUnitList = "Module_Meal_Allowance_WeChat/getUnitList",
    cleanData = "Module_Meal_Allowance_WeChat/cleanData"
}
export interface MealAllowanceWeChatState extends DefaultState<AllowanceWeChatModel> {
    pageContent: PageContent<AllowanceWeChatListModel>;
    unitList: Array<SimpleModel>;
    delResponseModel: ResponseModel;
    saveResponseModel: ResponseModel;
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
        save({ payload }: EffectsParams<MealAllowanceWeChatState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<AllowanceWeChatModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<AllowanceWeChatModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<AllowanceWeChatModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<AllowanceWeChatModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<AllowanceWeChatModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<AllowanceWeChatModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
