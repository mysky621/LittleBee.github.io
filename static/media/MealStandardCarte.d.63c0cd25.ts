import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Moment } from 'moment';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { MealPublicityState } from '../../Models/MealPublicity';
import { CarteMealStandardModel, FetchCarteMealParams, SaveCarteStandardParams } from '../../Services/MealPublicityService';
interface OwnerPrams {
    standardId: string;
}
export interface StateProps {
    carteMealList: PageContent<CarteMealStandardModel>;
    loading: boolean;
    submitResponse: ResponseModel;
    submitting: boolean;
    deleting: boolean;
    deleteResponse: ResponseModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: FetchCarteMealParams) => void;
    saveCarteStandard: (values: SaveCarteStandardParams) => void;
    deleteCarteStandard: (values: number) => void;
}
declare type HomeProps = FormComponentProps & RouteComponentProps<OwnerPrams> & StateProps & DispatchProps;
export interface HomeState {
    mealStandardId: number;
    visible: boolean;
    date?: Moment;
    submitResponse: ResponseModel;
    submitting: boolean;
    deleteResponse: ResponseModel;
}
declare class Home extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (value: number, record: CarteMealStandardModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: CarteMealStandardModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: CarteMealStandardModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): HomeState;
    _onDeleteCartStandard(carteStandardId: number): void;
    _onLoad(page?: number, size?: number): void;
    _onPaginationChange(page: number, size?: number): void;
    _disabledDate(current: Moment): boolean;
    _handleSubmit(): void;
    _onWeekPickerChange(date: Moment | null): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Publicity: MealPublicityState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Publicity }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
