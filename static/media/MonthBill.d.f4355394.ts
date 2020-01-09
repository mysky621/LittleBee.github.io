import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { MonthBillModel, TotalStatisticsModel } from '../Services/MonthBillService';
import { PageContent } from '@school/meal-react-framework/interfaces';
export declare const Namespace = "Module_Finance_Month_Bill";
export declare enum FinanceMonthBillActions {
    save = "Module_Finance_Month_Bill/save",
    updateBillState = "Module_Finance_Month_Bill/updateBillState",
    fetchItem = "Module_Finance_Month_Bill/fetchItem",
    fetch = "Module_Finance_Month_Bill/fetchPageContent",
    getListByBusiness = "Module_Finance_Month_Bill/getListByBusiness",
    getBusinessTotalList = "Module_Finance_Month_Bill/getBusinessTotalList"
}
export interface FinanceMonthBillState extends DefaultState<MonthBillModel> {
    pageContent: PageContent<MonthBillModel>;
    businessTotalList: PageContent<TotalStatisticsModel>;
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
        save({ payload }: EffectsParams<FinanceMonthBillState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<MonthBillModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<MonthBillModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<MonthBillModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<MonthBillModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<MonthBillModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<MonthBillModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
