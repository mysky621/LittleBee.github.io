import { MapObject } from '@school/meal-react-framework/Models/createModel';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { ModuleAssignDeleteParams, ModuleAssignFetchDetailParams, ModuleAssignListModel } from '../../Services/ModuleAssignService';
export interface StateProps {
    assignedData: MapObject<ModuleAssignListModel[]>;
    loading: boolean;
    deleting: boolean;
    deleteError: Error;
}
export interface DispatchProps {
    fetch: (values: ModuleAssignFetchDetailParams) => void;
    delete: (values: ModuleAssignDeleteParams) => void;
}
export interface MatchPathParams {
    moduleId: string;
}
declare type ModuleAssignHomeProps = StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    currentTab: string;
    assginedUnitModalVisible: boolean;
    assginedUserModalVisible: boolean;
    assignedModule: {
        moduleId: number;
        moduleName: string;
        assignMonths?: number;
        associateId?: number;
        associateName?: string;
    };
}
declare class ModuleAssignHome extends PureComponent<ModuleAssignHomeProps, HomeState> {
    columns: ({
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
        dataIndex: string;
        key: string;
        render: (_: void, record: ModuleAssignListModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: ModuleAssignListModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    state: HomeState;
    constructor(props: ModuleAssignHomeProps);
    componentWillMount(): void;
    componentWillReceiveProps(nexProps: ModuleAssignHomeProps): void;
    delete(record: ModuleAssignListModel): void;
    assignModule(assignMonths?: number, associateId?: number, associateName?: string): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ModuleAssignHome, Pick<ModuleAssignHomeProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
