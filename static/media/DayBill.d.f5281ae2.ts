import { DefaultState } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { StatisticsModel, StudentStatisticsModel } from '../Services/DayBillService';
export declare const Namespace = "Module_Finance_Day_Bill";
export declare enum FinanceDayBillActions {
    save = "Module_Finance_Day_Bill/save",
    fetch = "Module_Finance_Day_Bill/fetchPageContent",
    getBusinessTotalList = "Module_Finance_Day_Bill/getBusinessTotalList",
    getBusinessTotalDetailList = "Module_Finance_Day_Bill/getBusinessTotalDetailList",
    getSchoolTotalList = "Module_Finance_Day_Bill/getSchoolTotalList",
    getSchoolTotalDetailList = "Module_Finance_Day_Bill/getSchoolTotalDetailList",
    getStudentTotalList = "Module_Finance_Day_Bill/getStudentTotalList",
    getStudentTotalDetailList = "Module_Finance_Day_Bill/getStudentTotalDetailList"
}
export interface FinanceDayBillState extends DefaultState<StatisticsModel> {
    billList: PageContent<StatisticsModel>;
    schoolBillList: PageContent<StatisticsModel>;
    studentBillList: PageContent<StudentStatisticsModel>;
}
declare const _default: any;
export default _default;
