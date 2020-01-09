import React from 'react';
import { Action, Dispatch } from 'redux';
import { FormComponentProps } from 'antd/lib/form';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { MealUserLeaveState } from '../Models/UserLeave';
import { UserLeaveModel } from '../Services/UserLeaveService';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { MealLeaveState } from '../Models/Leave';
import { UnitParams } from '../Services/LeaveService';
import moment, { Moment } from 'moment';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { RouteComponentProps } from 'react-router';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
interface HomeDispatchProps {
    fetch: (values: Pagable) => void;
    fetchSchoolList: (values: UnitParams) => void;
    getBusinessList: () => void;
    fetchGradeList: (values: number) => void;
    fetchClassList: (values: number) => void;
    clean: () => void;
    cleanGrade: () => void;
    cleanClass: () => void;
    export: (values: Pagable) => void;
}
interface HomeStateProps {
    loading: boolean;
    userLeaveList: PageContent<UserLeaveModel>;
    currentUser?: UserDetail;
    schoolList: Array<SimpleModel>;
    businessList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    exportMealLeaveResponseModel: ResponseModel;
}
interface OwerParams {
    date: string;
    leaveStatus: string;
}
declare type HomeProps = FormComponentProps & HomeDispatchProps & HomeStateProps & RouteComponentProps<OwerParams>;
interface HomeState {
    searchParams: Pagable;
    startTime: Moment;
    endTime: Moment;
    isVisible: boolean;
    isExport: boolean;
    allowDownLoad: boolean;
    base64Str: string;
    exportMealLeaveResponseModel: ResponseModel;
    unitType: string;
}
declare class IncidentHome extends React.PureComponent<HomeProps, HomeState> {
    columns: {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    }[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    dateOnchange(value: RangePickerValue, dateString: [string, string]): void;
    onSchoolChange(value: number): void;
    onGradeChange(value: number): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        base64Str: any;
        isExport: boolean;
        allowDownLoad: boolean;
        exportMealLeaveResponseModel: ResponseModel;
        userLeaveList?: undefined;
    } | {
        isExport: boolean;
        exportMealLeaveResponseModel: ResponseModel;
        base64Str?: undefined;
        allowDownLoad?: undefined;
        userLeaveList?: undefined;
    } | {
        userLeaveList: PageContent<UserLeaveModel>;
        base64Str?: undefined;
        isExport?: undefined;
        allowDownLoad?: undefined;
        exportMealLeaveResponseModel?: undefined;
    };
    convert(base64Str: string): ArrayBuffer;
    _download(): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    onToday(): void;
    onYesterday(): void;
    onTomorrow(): void;
    _exportData(): void;
    getParams(): {
        params: {
            beginDate: moment.Moment;
            endDate: moment.Moment;
            leaveStatus: any;
        };
        page: number;
        size?: number | undefined;
    };
    _renderSearchForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_User_Leave: MealUserLeaveState;
    Module_Meal_Leave: MealLeaveState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Leave, Module_Meal_User_Leave, User, loading }: StateParams) => HomeStateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => HomeDispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof IncidentHome, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
