import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { Moment } from 'moment';
import { StatisticsSearchParams, StatisticsParams, StatisticsModel, StatisticsResult } from '../Services/OrderServices';
import { OrdersState } from '../Models/Order';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { UserState } from '@school/meal-react-framework/Models/User';
export interface StateProps {
    usedCouponList: PageContent<StatisticsModel>;
    statisticsUsedCouponResult: StatisticsResult;
    loading: boolean;
    currentUser?: UserDetail;
    unitList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
}
export interface HomeState {
    searchParams: StatisticsSearchParams;
    statisticsParams?: StatisticsParams;
    dates: Moment[];
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: StatisticsSearchParams) => void;
    statisticsUsedCoupon: (values: StatisticsParams) => void;
    fetchSchoolList: () => void;
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
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): {
        usedCouponList: PageContent<StatisticsModel>;
    };
    _handleFormReset(): void;
    _handleSubmit(): void;
    getParams(): {
        params: {
            businessId: number | undefined;
        } | {
            startDate: any;
            endDate: any;
            businessId: number | undefined;
        };
        businessId: number;
        page: number;
        size?: number | undefined;
    };
    _onPaginationChange(page: number, pageSize?: number): void;
    onUnitChange(value: number): void;
    onGradeChange(value: number): void;
    renderSimpleForm(): JSX.Element;
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
