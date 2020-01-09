import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { ModulePermissionEditModel } from '../../Services/ModulePermissionService';
import { ModuleRoleEditModel } from '../../Services/ModuleRoleService';
export interface ModuleRoleEditOwnerProps extends FormComponentProps {
    /**
     * 模块id
     */
    moduleId: number;
    /**
     * 角色信息
     */
    role?: ModuleRoleEditModel;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
     * 关闭回调、父级组件控制显隐
     */
    onClose: () => void;
}
export interface StateProps {
    submitting: boolean;
    saveError: Error;
    permissionList: ModulePermissionEditModel[];
}
export interface DispatchProps {
    save: (values: ModuleRoleEditModel) => void;
    fetchPermissions: (values: number) => void;
}
declare type ModuleRoleEditProps = ModuleRoleEditOwnerProps & StateProps & DispatchProps;
interface HomeState {
    permissions: ModulePermissionEditModel[];
}
declare class ModuleRoleEdit extends PureComponent<ModuleRoleEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleRoleEditProps);
    convertPermissionToMap(permissions: ModulePermissionEditModel[]): {};
    componentWillMount(): void;
    componentWillReceiveProps(nexProps: ModuleRoleEditProps): void;
    handleSubmit(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleRoleEdit, Pick<ModuleRoleEditProps, "visible" | "form" | "role" | "wrappedComponentRef" | "onClose" | "moduleId">>, Pick<ModuleRoleEditOwnerProps, "visible" | "role" | "wrappedComponentRef" | "onClose" | "moduleId">>;
export default _default;
