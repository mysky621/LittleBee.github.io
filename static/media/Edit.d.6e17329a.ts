import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { MealStandardEditModel } from '../../Services/MealStandardService';
import { MealStandardState } from '../../Models/MealStandard';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    standardEditModel: MealStandardEditModel;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    id: number;
    standardEditModel: MealStandardEditModel;
    checkedUnitGradeMap: Map<number, number[]>;
    serviceUnitGradeMap: Map<number, number>;
    foodProductsType: Array<string>;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: MealStandardEditModel) => void;
    cleanData: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        standardEditModel: MealStandardEditModel;
        checkedUnitGradeMap: Map<number, number[]>;
        serviceUnitGradeMap: Map<number, number>;
        foodProductsType: string[];
        saveError: Error;
        submitting: boolean;
    } | {
        saveError: Error;
        submitting: boolean;
        standardEditModel: MealStandardEditModel;
        checkedUnitGradeMap?: undefined;
        serviceUnitGradeMap?: undefined;
        foodProductsType?: undefined;
    };
    handleSubmit(): void;
    onChangeCallBack(checkedList: Array<CheckboxValueType>, unitId: number): void;
    onCheckAllChangeCallBack(checkedList: Array<CheckboxValueType>, unitId: number): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Standard: MealStandardState;
}
export declare const mapState: ({ Module_Meal_Standard, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
