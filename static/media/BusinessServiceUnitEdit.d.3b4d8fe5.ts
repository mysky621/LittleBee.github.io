import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { BusinessServiceUnitEditModel, SimpleModel, ServicePeriodModel } from '../Services/BusinessServiceUnitService';
import { MealBusinessServiceUnitState } from '../Models/BusinessServiceUnit';
import { CheckboxValueType, CheckboxOptionType } from 'antd/lib/checkbox/Group';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { Moment } from 'moment';
import 'moment/locale/zh-cn';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
    businessId: string;
    object: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    businessServiceUnitDetail: BusinessServiceUnitEditModel;
    schools: Array<SimpleModel>;
    grades: Array<SimpleModel>;
    saveBackData: ResponseModel;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    businessServiceUnitDetail: BusinessServiceUnitEditModel;
    schoolId: number;
    checkedList: CheckboxValueType[];
    indeterminate: boolean;
    checkAll: boolean;
    plainOptions: Array<CheckboxOptionType>;
    defaultCheckedList: CheckboxValueType[];
    servicePeriodType: string;
    defaultServiceDate: RangePickerValue;
    servicePeriodTypeVisiable: boolean;
    periodList: Array<ServicePeriodModel>;
    serviceStartDate: Date;
    serviceEndDate: Date;
}
/**
 * action的props
 */
export interface DispatchProps {
    getSchoolList: () => void;
    getSchoolGradeList: (values: number) => void;
    get: (values: number) => void;
    save: (values: number) => void;
    cleanSaveBackData: () => void;
    cleanData: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        schoolId: number;
        businessServiceUnitDetail: BusinessServiceUnitEditModel;
        serviceStartDate: Date;
        serviceEndDate: Date;
        defaultServiceDate: Moment[];
        servicePeriodType: String;
        checkedList: (string | number | boolean)[];
        periodList: ServicePeriodModel[];
        servicePeriodTypeVisiable: boolean;
        saveError?: undefined;
        submitting?: undefined;
        plainOptions?: undefined;
        indeterminate?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        plainOptions: CheckboxOptionType[];
        indeterminate: boolean;
        schoolId?: undefined;
        businessServiceUnitDetail?: undefined;
        serviceStartDate?: undefined;
        serviceEndDate?: undefined;
        defaultServiceDate?: undefined;
        servicePeriodType?: undefined;
        checkedList?: undefined;
        periodList?: undefined;
        servicePeriodTypeVisiable?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        businessServiceUnitDetail: BusinessServiceUnitEditModel;
        schoolId?: undefined;
        serviceStartDate?: undefined;
        serviceEndDate?: undefined;
        defaultServiceDate?: undefined;
        servicePeriodType?: undefined;
        checkedList?: undefined;
        periodList?: undefined;
        servicePeriodTypeVisiable?: undefined;
        plainOptions?: undefined;
        indeterminate?: undefined;
    };
    dateCompare(d1: Date, d2: Date): boolean;
    handleSubmit(): void;
    schoolSelected(value: number): void;
    onGadeChange: (checkedList: any) => void;
    onCheckAllChange: (e: any) => void;
    onServiceDateChange: (dateStrings: [string, string]) => void;
    onServicePeriodTypeChange: (e: any) => void;
    addNewPeriod: () => void;
    delPeriod: (key: string) => void;
    onServicePeriodDateChange: (dateStrings: [string, string], key: string) => void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Business_Service_Unit: MealBusinessServiceUnitState;
}
export declare const mapState: ({ Module_Meal_Business_Service_Unit, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
