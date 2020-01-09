import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { UserPlatformManageSearchModel, UserModel, ResultMessage } from '../../Services/UserPlatformManageService';
import { RouteComponentProps } from 'react-router';
export interface MatchPathParams {
    id: string;
}
export interface StateProps {
    associatedUserList: Array<UserModel>;
    loading: boolean;
    resultMessage: ResultMessage;
}
/**
 * action的props
 */
export interface DispatchProps {
    feach: (values: UserPlatformManageSearchModel) => void;
    unbind: (values: number) => void;
}
declare type AssociatedUserModelProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
declare class PlatformUserList extends PureComponent<AssociatedUserModelProps> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: UserModel) => JSX.Element;
    } | {
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
        render: (_: void, record: UserModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    /**
     * 构造方法
     */
    constructor(props: AssociatedUserModelProps);
    unBind(id: number): void;
    componentWillReceiveProps(nextProps: AssociatedUserModelProps): void;
    _showGraduation(record: UserModel): string | JSX.Element;
    goBack(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof PlatformUserList, Pick<AssociatedUserModelProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
