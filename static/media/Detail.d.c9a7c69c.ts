import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { ReceiptDetailModel, MealBoxStatisticsParams, MealStandard } from '../Services/ReceiptService';
import { MealReceiptState } from '../Models/Receipt';
import { RouteComponentProps } from 'react-router';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
import moment, { Moment } from 'moment';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    receiptOrderList: PageContent<ReceiptDetailModel>;
    loading: boolean;
    currentUser: UserDetail | undefined;
    dayMealBoxList: Array<SimpleModel>;
    exportReceiptOrderResponseModel: ResponseModel;
    unitList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    mealStandardList: Array<MealStandard>;
}
export interface MatchPathParams {
    date: string;
    mealBoxId: string;
    standardId: string;
    schoolId: string;
    userTypes: string;
    foodProductsType: string;
}
export interface HomeState {
    searchParams: MealBoxStatisticsParams;
    isExport: boolean;
    allowDownLoad: boolean;
    base64Str: string;
    exportReceiptOrderResponseModel: ResponseModel;
    dailyDate: Moment;
    mealStandardList: Array<MealStandard>;
    unitList: Array<SimpleModel>;
    loadingStandard: boolean;
    loadingUnit: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    getReceiptOrderList: (values?: MealBoxStatisticsParams) => void;
    exportReceiptOrderList: (values: MealBoxStatisticsParams) => void;
    fetchSchoolList: () => void;
    getGradeList: (values: number) => void;
    getGradeClassList: (values: number) => void;
    getStandardList: () => void;
    cleanGrade: () => void;
    cleanData: () => void;
    cleanClass: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
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
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        loadingStandard: boolean;
        mealStandardList: MealStandard[];
        searchParams: MealBoxStatisticsParams;
        isExport: boolean;
        allowDownLoad: boolean;
        base64Str: string;
        exportReceiptOrderResponseModel: ResponseModel;
        dailyDate: moment.Moment;
        unitList: SimpleModel[];
        loadingUnit: boolean;
    } | {
        base64Str: any;
        isExport: boolean;
        allowDownLoad: boolean;
        exportReceiptOrderResponseModel: ResponseModel;
    } | {
        isExport: boolean;
        exportReceiptOrderResponseModel: ResponseModel;
        base64Str?: undefined;
        allowDownLoad?: undefined;
    } | {
        base64Str?: undefined;
        isExport?: undefined;
        allowDownLoad?: undefined;
        exportReceiptOrderResponseModel?: undefined;
    };
    _handleFormReset(): void;
    _handleSubmit(): void;
    convert(base64Str: string): ArrayBuffer;
    _download(): void;
    getPrams(): {
        params: {
            foodProductsType: any;
            mealDate: moment.Moment;
        } | {
            foodProductsType: any;
            mealDate: moment.Moment;
        };
        unitId: number | undefined;
        page: number;
        size?: number | undefined;
    };
    setDailyDate(n: number): void;
    onChange(dateString: string): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    onUnitChange(value: number): void;
    onGradeChange(value: number): void;
    exportReceiptOrderList(): void;
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
