import { PureComponent } from 'react';
import { GradeStatisticsColumnModel } from '../../Services/DashboardAnalysisService';
export interface ClassesTableOwnerProps {
    title: string;
    gradeStatisticsColumnModel: GradeStatisticsColumnModel;
}
declare type ClassesTableProps = ClassesTableOwnerProps;
export default class ClassesTable extends PureComponent<ClassesTableProps> {
    constructor(props: ClassesTableProps);
    render(): JSX.Element;
}
export {};
