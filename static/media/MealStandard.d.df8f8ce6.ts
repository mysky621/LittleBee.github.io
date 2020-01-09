import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { MealStandardModel, UnitGradeModel } from '../../Services/MealStandardService';
import { MealPublicityState } from '../../Models/MealPublicity';
import UnitGradeModal from '../Standard/UnitGradeModal';
import { CarteMealStandardModel } from '../../Services/MealPublicityService';
export interface StateProps {
    standardList: PageContent<MealStandardModel>;
    loading: boolean;
}
export interface HomeState {
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (value: UnitGradeModel[]) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (value: CarteMealStandardModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: MealStandardModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    unitGradeModal: UnitGradeModal | null;
    constructor(props: HomeProps);
    componentDidMount(): void;
    showUnitGradeModal(unitGradeList: Array<UnitGradeModel>): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Publicity: MealPublicityState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Publicity }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
