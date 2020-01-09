import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { UnitParams, LeaveUserModel, LeaveUserCountModel, LeaveCountModel } from '../../Services/LeaveService';
import { MealLeaveState } from '../../Models/Leave';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { FormComponentProps } from 'antd/lib/form';
export interface StateProps {
    leaveList: PageContent<LeaveCountModel>;
    loading: boolean;
    deleting: boolean;
    schoolList: SimpleModel[];
    associatedUserList: LeaveUserModel[];
}
export interface HomeState {
    visible: boolean;
    associatedUserList: LeaveUserModel[];
    leaveUserCountModel: LeaveUserCountModel;
    leaveUserList: LeaveUserModel[];
    showTip: boolean;
    loading: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    delete: (values: {
        id: number;
        leaveType: string;
    }) => void;
    fetchSchoolList: (values: UnitParams) => void;
    fetchAssociatedUserList: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    leaveUserColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: LeaveUserModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    })[];
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: LeaveCountModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: Date) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: LeaveCountModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): HomeState;
    onLoad(showTip?: boolean): void;
    delete(p: {
        id: number;
        leaveType: string;
    }): void;
    _detail(record: LeaveCountModel): void;
    handleCancel(): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    callback(key: string): void;
    renderTable(): JSX.Element;
    renderTabsName(key: number): string;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Leave: MealLeaveState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Leave }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
