import { PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { UserPlatformManageModel, UserPlatformManageSearchModel } from '../../Services/UserPlatformManageService';
export interface HomeState {
    searchParams: UserPlatformManageSearchModel;
}
export interface StateProps {
    userPlatformManageList: PageContent<UserPlatformManageModel>;
    loading: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: UserPlatformManageSearchModel) => void;
    resetPassword: (values: number) => void;
}
declare type UserPlatformManageProps = FormComponentProps & StateProps & DispatchProps;
declare class UserPlatformManageList extends PureComponent<UserPlatformManageProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => 0 | JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: UserPlatformManageModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    /**
     * 构造方法
     */
    constructor(props: UserPlatformManageProps);
    /**
     * 页面加载
     */
    componentWillMount(): void;
    /**
     * 查询数据
     * @param userPlatformManageSearchModel
     */
    loadData(userPlatformManageSearchModel: UserPlatformManageSearchModel): void;
    /**
     * 重置查询条件
     */
    handleFormReset(): void;
    /**
     * 重置密码
     * @param id
     */
    resetPassword(id: number): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    getParams(): {
        params: {
            [x: string]: any;
        };
        id?: number | undefined;
        mobile?: string | undefined;
        page: number;
        size?: number | undefined;
    };
    /**
     * 检索搜索
     */
    handleSubmit(): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof UserPlatformManageList, Pick<UserPlatformManageProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
