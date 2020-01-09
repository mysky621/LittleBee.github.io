import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { OrderPaymentEditModel, MealStandard, TermRange, DefaultTemplateMessage } from '../../Services/OrderPaymentServices';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { RouteComponentProps } from 'react-router';
import { CheckboxOptionType, CheckboxValueType } from 'antd/lib/checkbox/Group';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import moment, { Moment } from 'moment';
export interface OwnerPrams {
    id: string;
}
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    serviceSchoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    mealStandard: MealStandard;
    orderPaymentModel: OrderPaymentEditModel;
    saveResponseModel: ResponseModel;
    termRanges: TermRange;
    defaultTemplateMessage: DefaultTemplateMessage;
}
export interface DispatchProps {
    fetchItem: (values: number) => void;
    fetchCurrentServiceSchoolList: () => void;
    fetchGradeList: (unitId: number) => void;
    fetchMealStandard: (values: Array<number>) => void;
    fetchCurrentTerm: (unitId: number) => void;
    save: (values: OrderPaymentEditModel) => void;
    clean: () => void;
    cleanMealStandard: () => void;
    cleanUnitData: () => void;
    fetchDefaultTemplateMessage: (values: {
        unitId: number;
        orderPaymentId: number;
    }) => void;
}
declare type OrderPaymentEditProps = StateProps & DispatchProps & FormComponentProps & RouteComponentProps<OwnerPrams>;
interface HomeState {
    loading: boolean;
    serviceSchoolList: Array<SimpleModel>;
    saveResponseModel: ResponseModel;
    orderPaymentModel: OrderPaymentEditModel;
    mealDateList: Array<string>;
    gradeList: Array<SimpleModel>;
    mealStandard: MealStandard;
    checkedList: Array<CheckboxValueType>;
    plainOptions: Array<CheckboxOptionType>;
    defaultServiceDate: RangePickerValue;
    startDate?: Date;
    endDate?: Date;
    isMealDate: boolean;
    checkAll: boolean;
    indeterminate: boolean;
    mealNum: number;
    money: number;
    defaultTemplateMessage: DefaultTemplateMessage;
    defaultName: string;
    messageTip: boolean;
}
declare class Edit extends PureComponent<OrderPaymentEditProps, HomeState> {
    constructor(props: OrderPaymentEditProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: OrderPaymentEditProps, prevState: HomeState): {
        orderPaymentModel: OrderPaymentEditModel;
        checkedList: number[];
        mealDateList: string[];
        mealStandard: MealStandard;
        money: number;
        mealNum: number;
        startDate: Date;
        defaultServiceDate: moment.Moment[];
        gradeList?: undefined;
        plainOptions?: undefined;
        indeterminate?: undefined;
        saveResponseModel?: undefined;
    } | {
        mealStandard: MealStandard;
        orderPaymentModel?: undefined;
        checkedList?: undefined;
        mealDateList?: undefined;
        money?: undefined;
        mealNum?: undefined;
        startDate?: undefined;
        defaultServiceDate?: undefined;
        gradeList?: undefined;
        plainOptions?: undefined;
        indeterminate?: undefined;
        saveResponseModel?: undefined;
    } | {
        gradeList: SimpleModel[];
        plainOptions: CheckboxOptionType[];
        indeterminate: boolean;
        orderPaymentModel?: undefined;
        checkedList?: undefined;
        mealDateList?: undefined;
        mealStandard?: undefined;
        money?: undefined;
        mealNum?: undefined;
        startDate?: undefined;
        defaultServiceDate?: undefined;
        saveResponseModel?: undefined;
    } | {
        saveResponseModel: ResponseModel;
        orderPaymentModel?: undefined;
        checkedList?: undefined;
        mealDateList?: undefined;
        mealStandard?: undefined;
        money?: undefined;
        mealNum?: undefined;
        startDate?: undefined;
        defaultServiceDate?: undefined;
        gradeList?: undefined;
        plainOptions?: undefined;
        indeterminate?: undefined;
    } | {
        defaultTemplateMessage: DefaultTemplateMessage;
        loading: boolean;
        serviceSchoolList: SimpleModel[];
        saveResponseModel: ResponseModel;
        orderPaymentModel: OrderPaymentEditModel;
        mealDateList: string[];
        gradeList: SimpleModel[];
        mealStandard: MealStandard;
        checkedList: (string | number | boolean)[];
        plainOptions: CheckboxOptionType[];
        defaultServiceDate: RangePickerValue;
        startDate?: Date | undefined;
        endDate?: Date | undefined;
        isMealDate: boolean;
        checkAll: boolean;
        indeterminate: boolean;
        mealNum: number;
        money: number;
        defaultName: string;
        messageTip: boolean;
    } | {
        orderPaymentModel?: undefined;
        checkedList?: undefined;
        mealDateList?: undefined;
        mealStandard?: undefined;
        money?: undefined;
        mealNum?: undefined;
        startDate?: undefined;
        defaultServiceDate?: undefined;
        gradeList?: undefined;
        plainOptions?: undefined;
        indeterminate?: undefined;
        saveResponseModel?: undefined;
    };
    componentWillUnmount(): void;
    handleSubmit(): void;
    onUnitChange(value: number): void;
    onCheckAllChange(e: CheckboxChangeEvent): void;
    onGradeChange(checkedList: Array<CheckboxValueType>): void;
    onRangeDateChange: (dateStrings: [string, string]) => void;
    transferParams(checkedList: Array<CheckboxValueType>): number[];
    setMealDates(mealDateList: Array<string>): void;
    handOk(): void;
    openMealDate(): void;
    disabledDate(current: Moment): boolean;
    disabledOverdueDate(current: Moment): boolean;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<OrderPaymentEditProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
