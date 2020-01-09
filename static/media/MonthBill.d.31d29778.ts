import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { FormComponentProps } from 'antd/lib/form';
import { MonthBillModel, MonthBillEditModel } from '../../Services/MonthBillService';
import { FinanceMonthBillState } from '../../Models/MonthBill';
export interface StateProps {
    monthBillList: PageContent<MonthBillModel>;
    loading: boolean;
    submitting: boolean;
}
export interface HomeState {
    searchParams: Pagable;
    lastMonthBill?: MonthBillModel;
    startMonth?: Date;
    endMonth?: Date;
    submitting: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    updateBillState: (values: MonthBillEditModel) => void;
    fetch: (values?: Pagable) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: MonthBillModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: MonthBillModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        lastMonthBill: MonthBillModel;
        submitting: boolean;
        searchParams: Pagable;
        startMonth?: Date | undefined;
        endMonth?: Date | undefined;
    } | {
        lastMonthBill: null;
        submitting: boolean;
        searchParams: Pagable;
        startMonth?: Date | undefined;
        endMonth?: Date | undefined;
    };
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    updateBillState(id: number, state: string): void;
    buttonInit(record: MonthBillModel): JSX.Element;
    controllerRange(dates: [Date, Date]): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Finance_Month_Bill: FinanceMonthBillState;
}
export declare const mapState: ({ Module_Finance_Month_Bill, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
