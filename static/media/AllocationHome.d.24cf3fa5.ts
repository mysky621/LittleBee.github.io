import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { AllocationMealModel } from '../../Services/AllocationMealService';
import { MealAllocationState } from '../../Models/AllocationMeal';
import { FormComponentProps } from 'antd/lib/form';
export interface StateProps {
    allocationList: PageContent<AllocationMealModel>;
    loading: boolean;
    base64Str: string;
}
export interface HomeState {
    base64Str: string;
    allowDownLoad: boolean;
    exportDate?: Date;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    export: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: AllocationMealModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, preState: HomeState): {
        base64Str: string;
        allowDownLoad: boolean;
    } | null;
    convert(base64Str: string): ArrayBuffer;
    _download(): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    _export(id: number, date: Date): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Allocation: MealAllocationState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Allocation }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
