import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { FormComponentProps } from 'antd/lib/form';
import { StatisticsModel } from '../../../Services/TeacherStatisticsService';
import { FinanceTeacherStatisticsState } from '../../../Models/TeacherStatistics';
import { RouteComponentProps } from 'react-router-dom';
export interface MatchPathParams {
    teacherId: string;
    teacherName: string;
    startDate: string;
    endDate: string;
}
export interface StateProps {
    billList: PageContent<StatisticsModel>;
    loading: boolean;
    submitting: boolean;
}
export interface HomeState {
    searchParams: Pagable;
    submitting: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: Pagable) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
declare class Home extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: Date) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        lastMonthBill: StatisticsModel;
        submitting: boolean;
        searchParams: Pagable;
    } | {
        lastMonthBill: null;
        submitting: boolean;
        searchParams: Pagable;
    };
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Finance_Teacher_Statistics: FinanceTeacherStatisticsState;
}
export declare const mapState: ({ Module_Finance_Teacher_Statistics, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
