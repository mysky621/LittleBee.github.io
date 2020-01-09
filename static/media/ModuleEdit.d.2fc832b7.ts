import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { ModuleEditModel } from '../../Services/ModuleService';
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    moduleEditModel: ModuleEditModel;
}
export interface DispatchProps {
    update: (values: ModuleEditModel) => void;
    fetchModule: (moduleId: number) => void;
    fetchModuleByName: (moduleName: string) => void;
    clean: () => void;
}
export interface MatchPathParams {
    moduleId: string;
}
declare type ModuleEditProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    module: ModuleEditModel;
    moduleName: string;
    configurtions: boolean;
}
declare class ModuleEdit extends PureComponent<ModuleEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleEditProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ModuleEditProps): void;
    handleSubmit(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleEdit, Pick<ModuleEditProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
