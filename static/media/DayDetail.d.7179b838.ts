import { Component } from 'react';
import { Loading } from '@school/meal-react-web-framework';
import { Action, Dispatch } from 'redux';
import { OrdersState } from '../Models/Order';
import { UserState } from '@school/meal-react-framework/Models/User';
import { OrderDayModel } from '../Services/OrderServices';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { RouteComponentProps } from 'react-router';
export interface StateProps {
    orderDayDetail: OrderDayModel;
    loading: boolean;
    currentUser?: UserDetail;
}
export interface HomeState {
    visible: boolean;
    unitType: string;
}
interface OwnProps {
    id: string;
}
/**
 * action的props
 */
interface DispatchProps {
    get: (values: {
        id: number;
        orderType: string;
    }) => void;
}
declare type HomeProps = StateProps & RouteComponentProps<OwnProps> & DispatchProps;
declare class DayDetail extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    openOrderStatusRecord(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Order: OrdersState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Order, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("react-redux").ConnectedComponentClass<typeof DayDetail, Pick<HomeProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
