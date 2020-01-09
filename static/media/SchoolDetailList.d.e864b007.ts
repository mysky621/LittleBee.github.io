import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { StatisticsModel, DayBillParams } from '../../Services/DayBillService';
import { FinanceDayBillState } from '../../Models/DayBill';
import { RouteComponentProps } from 'react-router-dom';
export interface MatchPathParams {
    unitId: string;
    unitName: string;
    startDate: string;
    endDate: string;
}
export interface StateProps {
    billList: PageContent<StatisticsModel>;
    loading: boolean;
    submitting: boolean;
}
export interface HomeState {
    searchParams: DayBillParams;
    submitting: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: DayBillParams) => void;
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
        render: (_: void, record: StatisticsModel) => JSX.Element;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        lastMonthBill: StatisticsModel;
        submitting: boolean;
        searchParams: DayBillParams;
    } | {
        lastMonthBill: null;
        submitting: boolean;
        searchParams: DayBillParams;
    };
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
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
