import EditableTable, { EditColumnProps } from '@school/react-web-school-components/EditableTable';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { ModulePermissionDeleteParmas, ModulePermissionEditModel } from '../../Services/ModulePermissionService';
export interface Record extends ModulePermissionEditModel {
    editable: boolean;
    key?: string;
}
export interface StateProps {
    list: ModulePermissionEditModel[];
    loading: boolean;
    submitting: boolean;
    deleting: boolean;
    saveError: Error;
}
export interface DispatchProps {
    fetch: (values: number) => void;
    delete: (values: ModulePermissionDeleteParmas) => void;
    save: (values: ModulePermissionEditModel) => void;
}
export interface MatchPathParmas {
    moduleId: string;
}
declare type ModulePermissionProps = StateProps & DispatchProps & RouteComponentProps<MatchPathParmas>;
export interface HomeState {
    list: Record[];
    editItem?: Record;
    editable: boolean;
}
declare class ModulePermission extends PureComponent<ModulePermissionProps, HomeState> {
    table: EditableTable<Record> | null;
    columns: Array<EditColumnProps<Record>>;
    state: HomeState;
    constructor(props: ModulePermissionProps);
    componentWillMount(): void;
    componentWillReceiveProps(nexProps: ModulePermissionProps): void;
    cancel(key: number): void;
    delete(key: number): void;
    edit(key: number): void;
    updateEditStatus(key: number, editable: boolean): void;
    save(): void;
    add(): void;
    onRecordChange(index: number, columns: Array<EditColumnProps<Record>>, record: Record, changedValues: Record): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ModulePermission, Pick<ModulePermissionProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
