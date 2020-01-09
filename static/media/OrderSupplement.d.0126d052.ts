import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { OrdersPaymentState } from '../../Models/OrderPayment';
import { SearchStudentParams, StudentSimpleModel, OrderSupplementEditModel } from '../../Services/OrderPaymentServices';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    students: Array<StudentSimpleModel>;
    orderSupplementResponseModel: ResponseModel;
}
export interface HomeState {
    supplementPage: boolean;
    foodProductsType: string;
    students: Array<StudentSimpleModel>;
    stuNum: number;
    fetching: boolean;
    orderSupplementResponseModel: ResponseModel;
}
export interface DispatchProps {
    fetchStudent: (values: SearchStudentParams) => void;
    orderSupplement: (values: OrderSupplementEditModel) => void;
}
export interface OwnProps extends FormComponentProps {
    orderPaymentId: number;
    supplementPage: boolean;
    onClose: (successful: boolean) => void;
    grades: string[];
}
declare type HomeProps = StateProps & DispatchProps & OwnProps;
declare class OrderSupplement extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        students: StudentSimpleModel[];
        fetching: boolean;
        orderSupplementResponseModel?: undefined;
    } | {
        orderSupplementResponseModel: ResponseModel;
        students?: undefined;
        fetching?: undefined;
    } | {
        students?: undefined;
        fetching?: undefined;
        orderSupplementResponseModel?: undefined;
    };
    _onSubmitting(): void;
    _onClose(): void;
    _selectStudentChange(value: any): void;
    _onSearch(value: string): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Order_Payment: OrdersPaymentState;
}
export declare const mapState: ({ Module_Meal_Order_Payment, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof OrderSupplement, Pick<HomeProps, "form" | "wrappedComponentRef" | "onClose" | "grades" | "orderPaymentId" | "supplementPage">>, Pick<OwnProps, "wrappedComponentRef" | "onClose" | "grades" | "orderPaymentId" | "supplementPage">>;
export default _default;
