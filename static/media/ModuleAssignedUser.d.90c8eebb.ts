import { PageContent } from '@school/meal-react-framework/interfaces';
import { PureComponent } from 'react';
import { ModuleAssignParams } from '../../Services/ModuleAssignService';
import { LabeledValue } from 'antd/lib/select';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export interface ModuleAssignedUserType {
    moduleId: number;
    moduleName: string;
    assignMonths?: number;
    userId?: number;
    userName?: string;
}
export interface ModuleAssignedUserOwnerProps {
    /**
     * 已授权模块信息
     */
    assignedModule: ModuleAssignedUserType;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
     * 关闭回调，需要父级自行隐藏本元素
     */
    onClose: () => void;
}
export interface StateProps {
    submitting: boolean;
    assignError: Error;
    users: PageContent<SimpleModel>;
}
export interface DispatchProps {
    assign: (values: ModuleAssignParams) => void;
    searchUser: (values: Pagable) => void;
}
declare type ModuleAssignedUserProps = ModuleAssignedUserOwnerProps & StateProps & DispatchProps;
interface HomeState {
    assignMonths: {
        label: string;
        value: number;
    };
    associateIds: number[];
    search: boolean;
}
declare class ModuleAssignedUser extends PureComponent<ModuleAssignedUserProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleAssignedUserProps);
    componentWillReceiveProps(nexProps: ModuleAssignedUserProps): void;
    changeAssignMonth(values: number): void;
    handleSubmit(): void;
    onSearch(value: string): void;
    userSelected(value: LabeledValue[]): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ModuleAssignedUser, Pick<ModuleAssignedUserProps, "visible" | "onClose" | "assignedModule">>;
export default _default;
