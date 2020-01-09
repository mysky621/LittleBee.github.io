import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { TermsModel } from '../../Services/TermsService';
import { MealTermsState } from '../../Models/Terms';
export interface StateProps {
    TermsList: PageContent<TermsModel>;
    loading: boolean;
    deleting: boolean;
}
export interface HomeState {
    schoolId: number;
}
export interface OwnParams {
    schoolId: number;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    delete: (values: number) => void;
}
declare type HomeProps = StateProps & DispatchProps & OwnParams;
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
        render: (_: void, record: TermsModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: TermsModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    delete(userId: number): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Terms: MealTermsState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Terms }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "schoolId">>;
export default _default;
