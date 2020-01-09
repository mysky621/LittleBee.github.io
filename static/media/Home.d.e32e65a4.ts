import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { AllowanceWeChatModel, AllowanceWeChatListModel } from '../../Services/AllowanceWeChatService';
import { MealAllowanceWeChatState } from '../../Models/WeChat';
import { FormComponentProps } from 'antd/lib/form';
export interface StateProps {
    allowanceWeChatList: PageContent<AllowanceWeChatListModel>;
    loading: boolean;
    deleting: boolean;
}
export interface HomeState {
    visible: boolean;
    allowanceWeChatId: number;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    delete: (values: number) => void;
    cleanData: () => void;
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
        render: (text: boolean) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: AllowanceWeChatModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    delete(id: number): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    onAllowanceWeChatEditClose(): void;
    /**
     *
     * @param item 编辑
     */
    onEdit(item: AllowanceWeChatModel): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Allowance_WeChat: MealAllowanceWeChatState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Allowance_WeChat }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
