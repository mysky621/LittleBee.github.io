import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { FormComponentProps } from 'antd/lib/form';
import { StudentStatisticsModel } from '../../Services/DayBillService';
import { FinanceDayBillState } from '../../Models/DayBill';
import { RouteComponentProps } from 'react-router-dom';
export interface MatchPathParams {
    studentId: string;
    studentName: string;
    startDate: string;
    endDate: string;
}
export interface StateProps {
    billList: PageContent<StudentStatisticsModel>;
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
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: StudentStatisticsModel) => JSX.Element;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        lastMonthBill: StudentStatisticsModel;
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
    Module_Finance_Day_Bill: FinanceDayBillState;
}
export declare const mapState: ({ Module_Finance_Day_Bill, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
