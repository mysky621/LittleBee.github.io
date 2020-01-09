import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RoleUserAddParams, UserModel } from '../../Services/ModuleRoleUserService';
export interface ModuleRoleUserEditOwnerProps extends FormComponentProps {
    /**
     * 模块id
     */
    moduleId: number | string;
    /**
     * 角色id
     */
    roleId: number | string;
    /**
     * 已选用户
     */
    userIds: number[];
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
    userList: UserModel[];
    fetching: boolean;
}
export interface DispatchProps {
    save: (values: RoleUserAddParams) => void;
    fetchUser: (values: string) => void;
}
declare type ModuleRoleUserEditProps = ModuleRoleUserEditOwnerProps & StateProps & DispatchProps;
interface HomeState {
}
declare class ModuleRoleEdit extends PureComponent<ModuleRoleUserEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleRoleUserEditProps);
    componentWillReceiveProps(nexProps: ModuleRoleUserEditProps): void;
    handleSubmit(): void;
    fetchUser(value: string): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleRoleEdit, Pick<ModuleRoleUserEditProps, "visible" | "form" | "wrappedComponentRef" | "onClose" | "userIds" | "moduleId" | "roleId">>, Pick<ModuleRoleUserEditOwnerProps, "visible" | "wrappedComponentRef" | "onClose" | "userIds" | "moduleId" | "roleId">>;
export default _default;
