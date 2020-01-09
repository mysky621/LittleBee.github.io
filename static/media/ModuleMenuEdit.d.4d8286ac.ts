import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { ModuleMenuFetchParams, ModuleMenuModel } from '../../Services/ModuleMenuService';
import { ModulePermissionEditModel } from '../../Services/ModulePermissionService';
export interface ModuleMenuEditOwnerProps extends FormComponentProps {
    /**
     * 模块id
     */
    moduleId: number;
    /**
     * 菜单id
     */
    menuId: number;
    /**
     * 父级菜单id
     */
    parentId: number;
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
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    menu: ModuleMenuModel;
    permissionList: ModulePermissionEditModel[];
}
export interface DispatchProps {
    fetchMenu: (values: ModuleMenuFetchParams) => void;
    save: (values: ModuleMenuModel) => void;
    fetchPermission: (values: number) => void;
}
declare type ModuleMenuEditProps = ModuleMenuEditOwnerProps & StateProps & DispatchProps;
interface HomeState {
    menu: ModuleMenuModel;
}
declare class ModuleMenuEdit extends PureComponent<ModuleMenuEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleMenuEditProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ModuleMenuEditProps): void;
    handleSubmit(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleMenuEdit, Pick<ModuleMenuEditProps, "visible" | "form" | "wrappedComponentRef" | "onClose" | "menuId" | "moduleId" | "parentId">>, Pick<ModuleMenuEditOwnerProps, "visible" | "wrappedComponentRef" | "onClose" | "menuId" | "moduleId" | "parentId">>;
export default _default;
