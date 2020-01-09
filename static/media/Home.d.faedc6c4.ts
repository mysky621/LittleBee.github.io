/**
 * update by xl
 * updateDate: 2019-11-08
 * content: 跳转请假页面添加请假状态
 */
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { Moment } from 'moment';
import 'moment/locale/zh-cn';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { ReceiptStatisticModel } from '../Services/ReceiptService';
import { MealReceiptState } from '../Models/Receipt';
export interface StateProps {
    loading: boolean;
    currentUser: UserDetail | undefined;
    receiptStatisticModel: ReceiptStatisticModel;
}
export interface HomeState {
    currentDate: Moment;
    receiptStatisticModel: ReceiptStatisticModel;
    dailyDate: Moment;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetchStatistic: (values: {
        unitId: number;
        date: Moment;
    }) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        receiptStatisticModel: ReceiptStatisticModel;
        preState?: undefined;
    } | {
        preState: HomeState;
        receiptStatisticModel?: undefined;
    };
    _handleFormReset(): void;
    _handleSubmit(): void;
    setDailyDate(n: number): void;
    onChange(dateString: string): void;
    renderSimpleForm(): JSX.Element;
    kaifazhong(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Receipt: MealReceiptState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Receipt, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
