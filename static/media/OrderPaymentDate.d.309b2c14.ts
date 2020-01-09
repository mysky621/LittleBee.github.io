import { PureComponent } from 'react';
import { Loading } from '@school/meal-react-web-framework';
import { Moment } from 'moment';
import { OrderPaymentHolidayQueryModel } from '../Services/OrderPaymentServices';
import { OrdersPaymentState } from '../Models/OrderPayment';
import { Dispatch, Action } from 'redux';
export interface SelectedDateModel {
    [key: string]: string;
}
export interface OwnProps {
    beginDate: string;
    endDate: string;
    normalDate: Array<string>;
    setOrderPaymentDate: (dates: Array<string>) => void;
}
export interface StateProps {
    loading: boolean;
    holidayDate: Array<string>;
}
export interface HomeState {
    start: Moment;
    end: Moment;
    selectedDateMap: SelectedDateModel;
    holidayDate: Array<string>;
    dispaly: boolean;
    selectedDates: Array<string>;
}
export interface DispatchProps {
    getHolidayDate: (values: OrderPaymentHolidayQueryModel) => void;
}
declare type OrderPaymentHolidayProps = StateProps & OwnProps & DispatchProps;
declare class OrderPaymentDate extends PureComponent<OrderPaymentHolidayProps, HomeState> {
    constructor(props: OrderPaymentHolidayProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: OrderPaymentHolidayProps, preState: HomeState): {
        selectedDateMap: SelectedDateModel;
        dispaly: boolean;
        selectedDates: string[];
        holidayDate: string[];
        preState?: undefined;
    } | {
        preState: HomeState;
        selectedDateMap?: undefined;
        dispaly?: undefined;
        selectedDates?: undefined;
        holidayDate?: undefined;
    };
    dateCellRender(date: Moment): JSX.Element;
    onSelect(date: Moment): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Order_Payment: OrdersPaymentState;
}
export declare const mapState: ({ Module_Meal_Order_Payment, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("react-redux").ConnectedComponentClass<typeof OrderPaymentDate, Pick<OrderPaymentHolidayProps, "endDate" | "beginDate" | "normalDate" | "setOrderPaymentDate">>;
export default _default;
