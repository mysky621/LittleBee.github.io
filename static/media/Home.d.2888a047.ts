import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { RouteComponentProps } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';
import { OrderPaymentListModel } from '../../Services/OrderPaymentServices';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { UserState } from '@school/meal-react-framework/Models/User';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { OrdersPaymentState } from '../../Models/OrderPayment';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    orderPaymentList: PageContent<OrderPaymentListModel>;
    loading: boolean;
    currentUser?: UserDetail;
    unitList: Array<SimpleModel>;
    delResponseModel: ResponseModel;
    publishResponseModel: ResponseModel;
    remindResponseModel: ResponseModel;
}
export interface HomeState {
    searchParams: Pagable;
    orderPaymentList: PageContent<OrderPaymentListModel>;
    remindResponseModel: ResponseModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: Pagable) => void;
    savePayment: (values: Pagable) => void;
    delete: (values: number) => void;
    publish: (values: number) => void;
    fetchUnitList: () => void;
    clean: () => void;
    remind: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: SimpleModel[]) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: Date) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, redord: OrderPaymentListModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string, record: OrderPaymentListModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: OrderPaymentListModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        delResponseModel: ResponseModel;
        publishResponseModel?: undefined;
        remindResponseModel?: undefined;
        orderPaymentList?: undefined;
    } | {
        publishResponseModel: ResponseModel;
        delResponseModel?: undefined;
        remindResponseModel?: undefined;
        orderPaymentList?: undefined;
    } | {
        remindResponseModel: ResponseModel;
        delResponseModel?: undefined;
        publishResponseModel?: undefined;
        orderPaymentList?: undefined;
    } | {
        orderPaymentList: PageContent<OrderPaymentListModel>;
        delResponseModel?: undefined;
        publishResponseModel?: undefined;
        remindResponseModel?: undefined;
    };
    _goOrderList(record: OrderPaymentListModel): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    del(id: number): void;
    published(id: number): void;
    remind(id: number): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Order_Payment: OrdersPaymentState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Order_Payment, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
