import { OrderPaymentEditModel, MealStandard, TermRange, DefaultTemplateMessage, StudentSimpleModel, OrderPaymentListModel } from '../Services/OrderPaymentServices';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { EffectsCommandMap } from 'dva';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { OrderMonthModel, OrderModel } from '@school/react-school-module-order-web/Services/OrderServices';
export declare const Namespace = "Module_Meal_Order_Payment";
export declare enum OrdersPaymentAction {
    fetch = "Module_Meal_Order_Payment/fetchPageContent",
    fetchPaymentOrder = "Module_Meal_Order_Payment/fetchItem",
    fetchOrderPayment = "Module_Meal_Order_Payment/fetchOrderPaymentPageContent",
    fetchPaymentOrderDetail = "Module_Meal_Order_Payment/fetchPaymentOrderDetail",
    fetchSchoolList = "Module_Meal_Order_Payment/fetchSchoolList",
    fetchCurrentServiceSchoolList = "Module_Meal_Order_Payment/fetchCurrentServiceSchoolList",
    fetchGradeList = "Module_Meal_Order_Payment/fetchGradeList",
    fetchMealStandard = "Module_Meal_Order_Payment/fetchMealStandard",
    fetchUserList = "Module_Meal_Order_Payment/fetchUserList",
    savePayment = "Module_Meal_Order_Payment/save",
    delete = "Module_Meal_Order_Payment/delete",
    publish = "Module_Meal_Order_Payment/publish",
    exportOrderList = "Module_Meal_Order_Payment/exportOrderList",
    clean = "Module_Meal_Order_Payment/clean",
    getHoliday = "Module_Meal_Order_Payment/getHoliday",
    fetchCurrentTerm = "Module_Meal_Order_Payment/fetchCurrentTerm",
    cleanMealStandard = "Module_Meal_Order_Payment/cleanMealStandard",
    cleanUnitData = "Module_Meal_Order_Payment/cleanUnitData",
    fetchDefaultTemplateMessage = "Module_Meal_Order_Payment/fetchDefaultTemplateMessage",
    remind = "Module_Meal_Order_Payment/remind",
    changeCurrentOrderPaymentEditModel = "Module_Meal_Order_Payment/changeCurrentOrderPaymentEditModel",
    fetchOrderPaymentUser = "Module_Meal_Order_Payment/fetchOrderPaymentUser",
    addOrderPaymentUser = "Module_Meal_Order_Payment/addOrderPaymentUser",
    addOrderPaymentTemplageMessage = "Module_Meal_Order_Payment/addOrderPaymentTemplageMessage",
    fetchOrderSupplementUser = "Module_Meal_Order_Payment/fetchOrderSupplementUser",
    orderSupplement = "Module_Meal_Order_Payment/orderSupplement",
    delSupplementOrder = "Module_Meal_Order_Payment/delSupplementOrder"
}
export interface OrdersPaymentState extends DefaultState<OrderPaymentEditModel> {
    pageContent: PageContent<OrderPaymentListModel>;
    pageOrderPaymentContent: PageContent<OrderModel>;
    saveResponseModel: ResponseModel;
    delResponseModel: ResponseModel;
    publishResponseModel: ResponseModel;
    exportOrderResponseModel: ResponseModel;
    holidayDate: Array<string>;
    unitList: Array<SimpleModel>;
    serviceSchoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    orderDetail: OrderMonthModel;
    mealStandard: MealStandard;
    userList: Array<SimpleModel>;
    termRanges: TermRange;
    defaultTemplateMessage: DefaultTemplateMessage;
    remindResponseModel: ResponseModel;
    orderPaymentUsers: Array<StudentSimpleModel>;
    currentOrderPaymentEditModel: OrderPaymentEditModel;
    addOrderPaymentUserResponseModel: ResponseModel;
    addOrderPaymentTemplageMessageResponseModel: ResponseModel;
    orderSupplementUser: Array<StudentSimpleModel>;
    orderSupplementResponseModel: ResponseModel;
    delSuppementOrderResponseModel: ResponseModel;
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
        save({ payload }: EffectsParams<OrdersPaymentState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<OrderPaymentEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<OrderPaymentEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<OrderPaymentEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<OrderPaymentEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<OrderPaymentEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<OrderPaymentEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
