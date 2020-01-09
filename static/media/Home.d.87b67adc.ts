import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { Moment } from 'moment';
import { OrderModel, OrderSearchParams } from '../Services/OrderServices';
import { OrdersState } from '../Models/Order';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { UserState } from '@school/meal-react-framework/Models/User';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    orderList: PageContent<OrderModel>;
    exportOrderResponseModel: ResponseModel;
    loading: boolean;
    currentUser?: UserDetail;
    unitList: Array<SimpleModel>;
    businessList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
}
export interface HomeState {
    searchParams: OrderSearchParams;
    isExport: boolean;
    allowDownLoad: boolean;
    base64Str: string;
    exportOrderResponseModel: ResponseModel;
    unitType: string;
    dates: Moment[];
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: OrderSearchParams) => void;
    exportOrderList: (values: OrderSearchParams) => void;
    fetchSchoolList: () => void;
    fetchBusinessList: () => void;
    getGradeList: (values: number) => void;
    getGradeClassList: (values: number) => void;
    clean: () => void;
    cleanGrade: () => void;
    cleanClass: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
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
            businessId: any;
            associatedUserUnitId: any;
            orderPayMethod: any;
            orderType: any;
            orderStatusArray: any;
            orderPayStatus: any;
            foodProductsType: any;
        } | {
            startDate: any;
            endDate: any;
            businessId: any;
            associatedUserUnitId: any;
            orderPayMethod: any;
            orderType: any;
            orderStatusArray: any;
            orderPayStatus: any;
            foodProductsType: any;
        };
        startDate?: Date | undefined;
        endDate?: Date | undefined;
        page: number;
        size?: number | undefined;
    };
    _onPaginationChange(page: number, pageSize?: number): void;
    onUnitChange(value: number): void;
    onGradeChange(value: number): void;
    renderSimpleForm(): JSX.Element;
    exportOrderList(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Order: OrdersState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Order, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
