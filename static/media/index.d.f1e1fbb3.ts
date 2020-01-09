import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { ReceiptStatisticModel, ReceiptGradeModel, GradeStatisticsColumnModel, ServiceSchoolBusinessModel } from '../../Services/DashboardAnalysisService';
import { Moment } from 'moment';
export interface StateProps {
    receiptStatisticModel: ReceiptStatisticModel;
    receiptGradeDayModel: ReceiptGradeModel;
    receiptGradeWeekModel: ReceiptGradeModel;
    gradeStatisticsColumnModel: GradeStatisticsColumnModel;
    serviceSchoolBusinessModels: ServiceSchoolBusinessModel[];
}
/**
 * action的props
 */
export interface DispatchProps {
    fetchReceiptStatisticModel: (values: {
        unitId: number;
        date: Moment;
    }) => void;
    fetchReceiptGradeDayModel: (values: {
        unitId: number;
        date: Moment;
    }) => void;
    fetchReceiptGradeWeekModel: (values: {
        unitId: number;
        date: Moment;
    }) => void;
    fetchGradeStatisticsColumnModel: (values: {
        unitId: number;
        date: Moment;
    }) => void;
    fetchServiceSchoolBusiness: (values: {
        unitId: number;
        date: Moment;
    }) => void;
    clearData: () => void;
}
declare type AnalysisIndexProps = FormComponentProps & StateProps & DispatchProps;
declare class AnalysisIndex extends PureComponent<AnalysisIndexProps> {
    constructor(props: AnalysisIndexProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof AnalysisIndex, Pick<AnalysisIndexProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
