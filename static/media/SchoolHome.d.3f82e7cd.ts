import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { ReceiptModel, MealBoxStatisticsParams } from '../Services/ReceiptService';
import { MealReceiptState } from '../Models/Receipt';
import { FormComponentProps } from 'antd/lib/form';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { RouteComponentProps } from 'react-router';
import 'moment/locale/zh-cn';
import { Moment } from 'moment';
export interface StateProps {
    schoolDataList: PageContent<ReceiptModel>;
    loading: boolean;
    currentUser: UserDetail | undefined;
}
export interface MatchPathParams {
    date: string;
}
export interface HomeState {
    dailyDate: Moment;
    currentDate: Moment;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: MealBoxStatisticsParams) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
declare class SchoolHome extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        key: string;
        render: (_: void, record: ReceiptModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    setDailyDate(n: number): void;
    onChange(dateString: string): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Receipt: MealReceiptState;
    User: UserState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Receipt, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof SchoolHome, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
