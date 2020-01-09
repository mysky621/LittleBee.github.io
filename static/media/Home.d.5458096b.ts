import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { GradeModel, GradeUpLogModel } from '../../Services/GradeService';
import { MealGradeState } from '../../Models/Grade';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
export interface StateProps {
    gradeList: PageContent<GradeModel>;
    loading: boolean;
    deleting: boolean;
    upGrade: ResponseModel;
    gradeUpLog: Array<GradeUpLogModel>;
    currentUser?: UserDetail;
}
export interface HomeState {
    schoolId: number;
    visible: boolean;
    confirmLoading: boolean;
    recordVisible: boolean;
    pageNumber: number;
}
export interface OwnerPrams {
    schoolId: number;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    delete: (values: number) => void;
    saveUpGrade: (values: number) => void;
    cleanData: () => void;
    getGradeUpLog: (values: number) => void;
}
declare type HomeProps = StateProps & DispatchProps & OwnerPrams;
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
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: GradeModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    recordColumns: {
        title: string;
        dataIndex: string;
        render: (text: any) => JSX.Element;
    }[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: HomeProps): void;
    delete(userId: number): void;
    recordHandleCancel: () => void;
    _onPaginationChange(page: number, pageSize?: number): void;
    _handleOk(): void;
    _handleCancel(): void;
    fetchGradeUpLog: () => void;
    recordOnChange: (page: number) => void;
    _showModal(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Grade: MealGradeState;
    User: UserState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Grade, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "schoolId">>;
export default _default;
