import { OrderModel, OrderDayModel, OrderMonthModel, StatisticsResult, StatisticsModel } from '../Services/OrderServices';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { EffectsCommandMap } from 'dva';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export declare const Namespace = "Module_Meal_Order";
export declare enum OrdersAction {
    fetch = "Module_Meal_Order/fetchPageContent",
    fetchDayOrder = "Module_Meal_Order/fetchDayOrder",
    fetchMonthOrder = "Module_Meal_Order/fetchMonthOrder",
    statisticsUsedCoupon = "Module_Meal_Order/statisticsUsedCoupon",
    fetchUsedCouponList = "Module_Meal_Order/fetchUsedCouponList",
    exportOrderList = "Module_Meal_Order/exportOrderList",
    fetchSchoolList = "Module_Meal_Order/fetchSchoolList",
    fetchBusinessList = "Module_Meal_Order/fetchBusinessList",
    getGradeList = "Module_Meal_Order/getGradeList",
    getGradeClassList = "Module_Meal_Order/getGradeClassList",
    clean = "Module_Meal_Order/clean",
    cleanGrade = "Module_Meal_Order/cleanGrade",
    cleanClass = "Module_Meal_Order/cleanClass",
    exporTransactionOrderList = "Module_Meal_Order/exporTransactionOrderList",
    cleanTransactionOrder = "Module_Meal_Order/cleanTransactionOrder"
}
export interface OrdersState extends DefaultState<OrderModel> {
    pageContent: PageContent<OrderModel>;
    statisticsContent: PageContent<StatisticsModel>;
    orderDayDetail: OrderDayModel;
    orderMonthDetail: OrderMonthModel;
    exportOrderResponseModel: ResponseModel;
    saveResponseModel: ResponseModel;
    unitList: Array<SimpleModel>;
    businessList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    statisticsUsedCouponResult: StatisticsResult;
    exporTransactionResponseModel: ResponseModel;
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
        save({ payload }: EffectsParams<OrdersState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<OrderModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<OrderModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<OrderModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<OrderModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<OrderModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<OrderModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
