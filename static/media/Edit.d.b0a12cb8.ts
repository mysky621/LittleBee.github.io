import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { MealMenuModel, MealWeekMenuEditModel, WeekMenuModel } from '../../../Services/MealMenuService';
import { Moment } from 'moment';
import { MealMenuState } from '../../../Models/MealMenu';
import { MealStandardEditModel, FoodProductsTypeModel } from '../../../Services/MealStandardService';
import { MealBoxModel } from '../../../Services/MealBoxService';
import { SelectValue } from 'antd/lib/select';
import 'moment/locale/zh-cn';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
    standardId: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    mealMenuModel: MealMenuModel;
    standard: MealStandardEditModel;
    mealBoxes: MealBoxModel[];
    times: Array<Date>;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    id: number;
    mealMenuModel: MealMenuModel;
    weekMenuModelList: WeekMenuModel[];
    standard: MealStandardEditModel;
    mealBoxList: MealBoxModel[];
    foodTypes: FoodProductsTypeModel[];
    date: Moment;
    startDate: Moment;
    times: Array<Date>;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: MealWeekMenuEditModel) => void;
    cleanData: () => void;
    getStandard: (values: number) => void;
    getMealBox: (values?: string) => void;
    getTimes: (values: string) => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        region: string[];
        mealMenuModel: MealMenuModel;
        startDate: any;
        date: any;
        weekMenuModelList: any;
        mealBoxList: MealBoxModel[];
        foodTypes?: undefined;
        saveError?: undefined;
        submitting?: undefined;
        standard?: undefined;
    } | {
        foodTypes: FoodProductsTypeModel[];
        saveError: Error;
        submitting: boolean;
        mealMenuModel: MealMenuModel;
        standard: MealStandardEditModel;
        region?: undefined;
        startDate?: undefined;
        date?: undefined;
        weekMenuModelList?: undefined;
        mealBoxList?: undefined;
    };
    handleSubmit(): void;
    disableTime(current?: Moment): boolean;
    onChange(d: Moment | null): void;
    foodProducts(type: string): "普通" | "清真";
    selectChild(type: string): JSX.Element[];
    selMealBox(v: SelectValue, w: string, value: string): void;
    selWeek(value: string, week: string): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Menu: MealMenuState;
}
export declare const mapState: ({ Module_Meal_Menu, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
