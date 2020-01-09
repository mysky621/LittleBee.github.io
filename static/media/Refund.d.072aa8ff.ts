import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { MapObject, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { RefundUnitModel, RefundUserModel, RefundDetailModel, GenerateRefundParams, RefundEditModel, FetchRefundUnitParams, RefundUserExportSearchModel, RefundUnitSummaryModel } from '../Services/RefundService';
export declare enum RefundActions {
    fetchUnitRefund = "Module_Meal_Refund/fetchUnitRefund",
    fetchUserRefund = "Module_Meal_Refund/fetchUserRefund",
    fetchRefundDetail = "Module_Meal_Refund/fetchRefundDetail",
    userRefund = "Module_Meal_Refund/userRefund",
    offlineCancelUserRefund = "Module_Meal_Refund/offlineCancelUserRefund",
    unitRefund = "Module_Meal_Refund/unitRefund",
    save = "Module_Meal_Refund/save",
    generateRefund = "Module_Meal_Refund/generateRefund",
    fetchRefundPeriod = "Module_Meal_Refund/fetchRefundPeriod",
    fetchServiceSchool = "Module_Meal_Refund/fetchServiceSchool",
    fetchRefundRecord = "Module_Meal_Refund/fetchRefundRecord",
    fetchRefundSchool = "Module_Meal_Refund/fetchRefundSchool",
    cleanRefundSchool = "Module_Meal_Refund/cleanRefundSchool",
    exportRefundUser = "Module_Meal_Refund/exportRefundUser",
    fetchRefundUnitSummary = "Module_Meal_Refund/fetchRefundUnitSummary"
}
export interface RefundState {
    unitPage: PageContent<RefundUnitModel>;
    userPage: PageContent<RefundUserModel>;
    error: MapObject<Error>;
    refundDetail: RefundDetailModel;
    periodList: Array<SimpleModel>;
    schoolList: Array<SimpleModel>;
    response: ResponseModel;
    refundRecord: RefundEditModel;
    refundSchool: Array<RefundUnitModel>;
    exportRefundUserResponseModel: ResponseModel;
    refundUnitSummaryModel: RefundUnitSummaryModel;
}
declare const _default: {
    namespace: string;
    state: {
        unitPage: {};
        userPage: {};
        error: {};
        periodList: never[];
        schoolList: never[];
        refundSchool: never[];
        exportRefundUserResponseModel: null;
        refundUnitSummaryModel: null;
    };
    effects: {
        fetchUnitRefund({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchUserRefund({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchRefundDetail({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        userRefund({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        offlineCancelUserRefund({ payload }: EffectsParams<number[]>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        unitRefund({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        save({ payload }: EffectsParams<RefundEditModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        generateRefund({ payload }: EffectsParams<GenerateRefundParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchRefundPeriod({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchServiceSchool({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchRefundRecord({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchRefundSchool({ payload }: EffectsParams<FetchRefundUnitParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        exportRefundUser({ payload }: EffectsParams<RefundUserExportSearchModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchRefundUnitSummary({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setUnitPage(state: RefundState, action: EffectsCommandMap): void;
        setUserPage(state: RefundState, action: EffectsCommandMap): void;
        setRefundDetail(state: RefundState, action: EffectsCommandMap): void;
        updateUser(state: RefundState, action: EffectsCommandMap): void;
        updateUser2(): void;
        updateUnit(state: RefundState, action: EffectsCommandMap): void;
        setResponse(state: RefundState, action: EffectsCommandMap): void;
        setPersiod(state: RefundState, action: EffectsCommandMap): void;
        setSchool(state: RefundState, action: EffectsCommandMap): void;
        setRecord(state: RefundState, action: EffectsCommandMap): void;
        setRefundSchool(state: RefundState, action: EffectsCommandMap): void;
        cleanRefundSchool(state: RefundState): void;
        error(state: RefundState, action: EffectsCommandMap): void;
        setExportRefundUserResponseModel(state: RefundState, action: EffectsCommandMap): void;
        setRefundUnitSummary(state: RefundState, action: EffectsCommandMap): void;
    };
};
export default _default;
