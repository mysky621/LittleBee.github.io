import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { ReceiptModel, MealBoxStatisticsModel, ReceiptDetailModel, ReceiptStatisticModel, MealStandard, StandardStatisticsModel } from '../Services/ReceiptService';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Receipt";
export declare enum MealReceiptActions {
    fetchItem = "Module_Meal_Receipt/fetchItem",
    fetch = "Module_Meal_Receipt/fetchPageContent",
    fetchStandard = "Module_Meal_Receipt/fetchStandardPageContent",
    cleanData = "Module_Meal_Receipt/cleanData",
    fetchMealBox = "Module_Meal_Receipt/fetchMealBox",
    fetchReceiptOrder = "Module_Meal_Receipt/fetchReceiptOrder",
    fetchDayMealBox = "Module_Meal_Receipt/fetchDayMealBox",
    fetchStatistic = "Module_Meal_Receipt/fetchStatistic",
    exportReceiptOrderList = "Module_Meal_Receipt/exportReceiptOrderList",
    fetchSchoolList = "Module_Meal_Receipt/fetchSchoolList",
    getGradeList = "Module_Meal_Receipt/getGradeList",
    getGradeClassList = "Module_Meal_Receipt/getGradeClassList",
    getStandardList = "Module_Meal_Receipt/getStandardList",
    cleanGrade = "Module_Meal_Receipt/cleanGrade",
    cleanClass = "Module_Meal_Receipt/cleanClass"
}
export interface MealReceiptState extends DefaultState<ReceiptModel> {
    pageContent: PageContent<ReceiptModel>;
    standardPageContent: PageContent<StandardStatisticsModel>;
    mealBoxList: Array<MealBoxStatisticsModel>;
    receiptOrderList: PageContent<ReceiptDetailModel>;
    dayMealBoxList: Array<SimpleModel>;
    receiptStatisticModel: ReceiptStatisticModel;
    exportReceiptOrderResponseModel: ResponseModel;
    unitList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    mealStandardList: Array<MealStandard>;
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
        save({ payload }: EffectsParams<MealReceiptState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<ReceiptModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<ReceiptModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<ReceiptModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<ReceiptModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<ReceiptModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<ReceiptModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
