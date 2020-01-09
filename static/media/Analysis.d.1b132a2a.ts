import { ReceiptStatisticModel, ReceiptGradeModel, GradeStatisticsColumnModel, ServiceSchoolBusinessModel } from '../Services/DashboardAnalysisService';
import { EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { Moment } from 'moment';
export declare enum ModuleSystemModuleAction {
    fetchReceiptStatisticModel = "Module_Dashboard_Analysis/fetchReceiptStatisticModel",
    fetchReceiptGradeDayModel = "Module_Dashboard_Analysis/fetchReceiptGradeDayModel",
    fetchReceiptGradeWeekModel = "Module_Dashboard_Analysis/fetchReceiptGradeWeekModel",
    fetchGradeStatisticsColumnModel = "Module_Dashboard_Analysis/fetchGradeStatisticsColumnModel",
    fetchServiceSchoolBusiness = "Module_Dashboard_Analysis/fetchServiceSchoolBusiness",
    clearData = "Module_Dashboard_Analysis/clearData"
}
export interface DashboardAnalysisState {
    receiptStatisticModel: ReceiptStatisticModel;
    receiptGradeDayModel: ReceiptGradeModel;
    receiptGradeWeekModel: ReceiptGradeModel;
    gradeStatisticsColumnModel: GradeStatisticsColumnModel;
    serviceSchoolBusinessModels: ServiceSchoolBusinessModel[];
}
declare const extendModel: {
    namespace: string;
    state: {
        receiptStatisticModel: {};
        receiptGradeDayModel: {};
        receiptGradeWeekModel: {};
        gradeStatisticsColumnModel: {};
        serviceSchoolBusinessModels: never[];
    };
    effects: {
        fetchReceiptStatisticModel({ payload }: EffectsParams<{
            unitId: number;
            date: Moment;
        }>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchReceiptGradeDayModel({ payload }: EffectsParams<{
            unitId: number;
            date: Moment;
        }>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchReceiptGradeWeekModel({ payload }: EffectsParams<{
            unitId: number;
            date: Moment;
        }>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchGradeStatisticsColumnModel({ payload }: EffectsParams<{
            unitId: number;
            date: Moment;
        }>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchServiceSchoolBusiness({ payload }: EffectsParams<{
            unitId: number;
            date: Moment;
        }>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        clearData(_: void, command: EffectsCommandMap): Generator<any, void, unknown>;
    };
    reducers: {
        setReceiptStatisticModel(state: DashboardAnalysisState, action: EffectsCommandMap): void;
        setReceiptGradeDayModel(state: DashboardAnalysisState, action: EffectsCommandMap): void;
        setReceiptGradeWeekModel(state: DashboardAnalysisState, action: EffectsCommandMap): void;
        setGradeStatisticsColumnModel(state: DashboardAnalysisState, action: EffectsCommandMap): void;
        setServiceSchoolBusinessModel(state: DashboardAnalysisState, action: EffectsCommandMap): void;
        setClearData(state: DashboardAnalysisState, action: EffectsCommandMap): void;
    };
};
export default extendModel;
