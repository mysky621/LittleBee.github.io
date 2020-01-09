import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { FormComponentProps } from 'antd/lib/form';
import { Loading } from '@school/meal-react-web-framework';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { MealStandardState } from '../../Models/MealStandard';
import { DishesFieldModel, DishesFieldUpdateModel } from '../../Services/MealStandardService';
interface StateProps {
    submitting: boolean;
    loading: boolean;
    fieldList: Array<DishesFieldModel>;
    submitResponse: ResponseModel;
}
interface DispatchProps {
    fetchDishesField: (values: number) => void;
    updateDishesField: (values: DishesFieldUpdateModel) => void;
}
interface RouteParams {
    standardId: string;
}
declare type IProps = StateProps & DispatchProps & FormComponentProps & RouteComponentProps<RouteParams>;
interface PageState {
    fieldList: Array<DishesFieldModel>;
    newFieldList: Array<DishesFieldModel>;
    deleteFieldIds: Array<number>;
    submitResponse: ResponseModel;
}
declare class DishesField extends PureComponent<IProps, PageState> {
    constructor(props: IProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: IProps, prevState: PageState): PageState;
    _removeField(index: number): void;
    _addField(): void;
    _handleSubmit(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Standard: MealStandardState;
}
export declare const mapState: ({ Module_Meal_Standard, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof DishesField, Pick<IProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
