import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { RouteComponentProps } from 'react-router-dom';
import { FormComponentProps } from 'antd/lib/form';
import { OrderModel, OrderSearchParams } from '@school/react-school-module-order-web/Services/OrderServices';
import { OrdersPaymentState } from '../Models/OrderPayment';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { UserState } from '@school/meal-react-framework/Models/User';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    orderList: PageContent<OrderModel>;
    exportOrderResponseModel: ResponseModel;
    loading: boolean;
    currentUser?: UserDetail;
}
export interface HomeState {
    exportOrderResponseModel: ResponseModel;
    searchParams: OrderSearchParams;
    isExport: boolean;
    allowDownLoad: boolean;
    base64Str: string;
    isAdmin: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: OrderSearchParams) => void;
    exportOrderList: (values: OrderSearchParams) => void;
    clean: () => void;
}
interface OwnProps {
    id: string;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<OwnProps>;
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
        key: string;
        render: (_: void, record: OrderModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        base64Str: any;
        isExport: boolean;
        allowDownLoad: boolean;
        exportOrderResponseModel: ResponseModel;
        orderList?: undefined;
    } | {
        isExport: boolean;
        exportOrderResponseModel: ResponseModel;
        base64Str?: undefined;
        allowDownLoad?: undefined;
        orderList?: undefined;
    } | {
        orderList: PageContent<OrderModel>;
        base64Str?: undefined;
        isExport?: undefined;
        allowDownLoad?: undefined;
        exportOrderResponseModel?: undefined;
    };
    convert(base64Str: string): ArrayBuffer;
    _download(): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    getParams(): {
        params: {
            orderPaymentId: number;
            orderStatusArray: any;
            orderPayStatus: any;
            orderNo: any;
            name: any;
            foodProductsType: any;
        };
        startDate?: Date | undefined;
        endDate?: Date | undefined;
        page: number;
        size?: number | undefined;
    };
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    exportOrderList(): void;
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
