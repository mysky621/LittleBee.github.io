import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { ReceiptDetailModel, MealBoxStatisticsParams, MealBoxParams } from '../Services/ReceiptService';
import { MealReceiptState } from '../Models/Receipt';
import { RouteComponentProps } from 'react-router';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
export interface StateProps {
    receiptOrderList: PageContent<ReceiptDetailModel>;
    loading: boolean;
    currentUser: UserDetail | undefined;
    dayMealBoxList: Array<SimpleModel>;
}
export interface MatchPathParams {
    date: string;
    mealBoxId: string;
    schoolId: string;
    userTypes: string;
}
export interface HomeState {
    searchParams: MealBoxStatisticsParams;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: MealBoxStatisticsParams) => void;
    fetchDayMealBox: (values?: MealBoxParams) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
declare class Home extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string, record: ReceiptDetailModel) => JSX.Element;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        searchParams: MealBoxStatisticsParams;
        dayMealBoxList?: undefined;
    } | {
        dayMealBoxList: SimpleModel[];
    } | {
        lastMonthBill: null;
        searchParams: MealBoxStatisticsParams;
        dayMealBoxList?: undefined;
    };
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Receipt: MealReceiptState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Receipt, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
