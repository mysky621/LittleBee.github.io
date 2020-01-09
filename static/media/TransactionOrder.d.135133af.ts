import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { Moment } from 'moment';
import { OrderSearchParams } from '../Services/OrderServices';
import { OrdersState } from '../Models/Order';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { UserState } from '@school/meal-react-framework/Models/User';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    exporTransactionResponseModel: ResponseModel;
    currentUser?: UserDetail;
    businessList: Array<SimpleModel>;
}
export interface HomeState {
    searchParams: OrderSearchParams;
    isExport: boolean;
    allowDownLoad: boolean;
    base64Str: string;
    exporTransactionResponseModel: ResponseModel;
    unitType: string;
    dates: Moment[];
}
/**
 * action的props
 */
export interface DispatchProps {
    exporTransactionOrderList: (values: OrderSearchParams) => void;
    fetchBusinessList: () => void;
    cleanTransactionOrder: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        base64Str: any;
        isExport: boolean;
        allowDownLoad: boolean;
        exporTransactionResponseModel: ResponseModel;
    } | {
        isExport: boolean;
        exporTransactionResponseModel: ResponseModel;
        base64Str?: undefined;
        allowDownLoad?: undefined;
    } | null;
    convert(base64Str: string): ArrayBuffer;
    _download(): void;
    getParams(): {
        params: {
            businessId: any;
        } | {
            startDate: any;
            endDate: any;
            businessId: any;
        };
        startDate?: Date | undefined;
        endDate?: Date | undefined;
        page: number;
        size?: number | undefined;
    };
    exportOrderList(): void;
    showbusiness(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Order: OrdersState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Order, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
