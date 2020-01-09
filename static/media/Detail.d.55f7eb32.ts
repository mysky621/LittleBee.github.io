import { Component } from 'react';
import { Loading } from '@school/meal-react-web-framework';
import { Action, Dispatch } from 'redux';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { OrderMonthModel } from '@school/react-school-module-order-web/Services/OrderServices';
import { OrdersPaymentState } from '../Models/OrderPayment';
import { UserState } from '@school/meal-react-framework/Models/User';
import { RouteComponentProps } from 'react-router';
export interface StateProps {
    orderDetail: OrderMonthModel;
    loading: boolean;
    currentUser?: UserDetail;
}
export interface HomeState {
    orderVisible: boolean;
    mealVisible: boolean;
    unitType: string;
}
interface OwnProps {
    id: string;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: {
        id: number;
        orderType: string;
    }) => void;
}
declare type HomeProps = StateProps & DispatchProps & RouteComponentProps<OwnProps>;
declare class Detail extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    openOrderStatusRecord(): void;
    openMealBoxRecord(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Order_Payment: OrdersPaymentState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Order_Payment, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("react-redux").ConnectedComponentClass<typeof Detail, Pick<HomeProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
