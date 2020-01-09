import { DefaultState } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { StatisticsModel } from '../Services/TeacherStatisticsService';
export declare const Namespace = "Module_Finance_Teacher_Statistics";
export declare enum FinanceTeacherStatisticsActions {
    save = "Module_Finance_Teacher_Statistics/save",
    fetch = "Module_Finance_Teacher_Statistics/fetchPageContent",
    getBusinessTotalList = "Module_Finance_Teacher_Statistics/getBusinessTotalList",
    getBusinessTotalDetailList = "Module_Finance_Teacher_Statistics/getBusinessTotalDetailList",
    getSchoolTotalList = "Module_Finance_Teacher_Statistics/getSchoolTotalList",
    getSchoolTotalDetailList = "Module_Finance_Teacher_Statistics/getSchoolTotalDetailList",
    getStudentTotalList = "Module_Finance_Teacher_Statistics/getStudentTotalList",
    getStudentTotalDetailList = "Module_Finance_Teacher_Statistics/getStudentTotalDetailList"
}
export interface FinanceTeacherStatisticsState extends DefaultState<StatisticsModel> {
    billList: PageContent<StatisticsModel>;
    schoolBillList: PageContent<StatisticsModel>;
    studentBillList: PageContent<StatisticsModel>;
}
declare const _default: any;
export default _default;
