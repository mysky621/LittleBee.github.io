import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { ModuleRoleDeleteParmas, ModuleRoleEditModel } from '../../Services/ModuleRoleService';
export interface StateProps {
    loading: boolean;
    deleting: boolean;
    list: ModuleRoleEditModel[];
    deleteError: Error;
}
export interface DispatchProps {
    fetch: (values: number) => void;
    delete: (values: ModuleRoleDeleteParmas) => void;
}
export interface MatchPathParams {
    moduleId: string;
}
declare type ModuleRoleProps = StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    modalVisbile: boolean;
    editRole?: ModuleRoleEditModel;
}
declare class ModuleRole extends PureComponent<ModuleRoleProps, HomeState> {
    columns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        key: string;
        render: (_: void, record: ModuleRoleEditModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    state: HomeState;
    constructor(props: ModuleRoleProps);
    componentWillReceiveProps(nexProps: ModuleRoleProps): void;
    componentWillMount(): void;
    delete(roleId: number): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ModuleRole, Pick<ModuleRoleProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
