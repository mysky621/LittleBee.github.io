import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { RoleUserAddParams, ModuleRoleUserModel, RoleUserFetchParmas } from '../../Services/ModuleRoleUserService';
export interface StateProps {
    loading: boolean;
    deleting: boolean;
    data: PageContent<ModuleRoleUserModel>;
    deleteError: Error;
}
export interface DispatchProps {
    fetch: (values: RoleUserFetchParmas & Pagable) => void;
    delete: (values: RoleUserAddParams) => void;
}
export interface MatchPathParams {
    moduleId: string;
    roleId: string;
}
declare type ModuleRoleUserProps = StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    modalVisbile: boolean;
}
declare class ModuleRole extends PureComponent<ModuleRoleUserProps, HomeState> {
    columns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        key: string;
        render: (_: void, record: ModuleRoleUserModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    state: HomeState;
    constructor(props: ModuleRoleUserProps);
    componentWillReceiveProps(nexProps: ModuleRoleUserProps): void;
    componentWillMount(): void;
    delete(userId: number): void;
    _onPaginationChange(page?: number, pageSize?: number): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ModuleRole, Pick<ModuleRoleUserProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
