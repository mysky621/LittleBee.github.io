import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { ModuleMenuFetchParams, ModuleMenuListModel } from '../../Services/ModuleMenuService';
export interface StateProps {
    loading: boolean;
    deleting: boolean;
    menus: ModuleMenuListModel[];
    deleteError: Error;
}
export interface DispatchProps {
    fetch: (values: number) => void;
    delete: (values: ModuleMenuFetchParams) => void;
}
export interface MatchPathParams {
    moduleId: string;
}
declare type ModuleMenuProps = StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    modalVisbile: boolean;
    moduleId: number;
    menuId: number;
    parentId: number;
}
declare class ModuleMenu extends PureComponent<ModuleMenuProps, HomeState> {
    columns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        key: string;
        render: (_: void, record: ModuleMenuListModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    state: HomeState;
    constructor(props: ModuleMenuProps);
    componentWillReceiveProps(nexProps: ModuleMenuProps): void;
    componentWillMount(): void;
    delete(menuId: number): void;
    renderExpandedRow(menus: ModuleMenuListModel[]): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ModuleMenu, Pick<ModuleMenuProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
