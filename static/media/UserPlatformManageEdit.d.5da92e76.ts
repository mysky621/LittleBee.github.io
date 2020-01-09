import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { UserPlatformManageEditModel, ResultMessage } from '../../Services/UserPlatformManageService';
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    userPlatformManageEditModel: UserPlatformManageEditModel;
    resultMessage: ResultMessage;
}
export interface DispatchProps {
    save: (values: UserPlatformManageEditModel) => void;
    fetchUserPlatformManage: (id: number) => void;
    clean: () => void;
}
export interface MatchPathParams {
    id: string;
}
declare type ModuleEditProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    msg: UserPlatformManageEditModel;
}
declare class ModuleEdit extends PureComponent<ModuleEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleEditProps);
    componentWillMount(): void;
    goBack(): void;
    componentWillReceiveProps(nextProps: ModuleEditProps): void;
    handleSubmit(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleEdit, Pick<ModuleEditProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
