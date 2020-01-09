import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { AllowanceEditModel, AssociatedUserModel, AllowanceModel } from '../../Services/AllowanceService';
export interface ModuleallowanceEditOwnerProps extends FormComponentProps {
    editItem?: AllowanceModel;
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
    allowance: AllowanceEditModel;
    studentList: AssociatedUserModel[];
}
export interface DispatchProps {
    fetchAllowance: (values: number) => void;
    save: (values: AllowanceEditModel) => void;
    fetchStudents: () => void;
}
declare type ModuleallowanceEditProps = ModuleallowanceEditOwnerProps & StateProps & DispatchProps;
interface HomeState {
    allowance: AllowanceEditModel;
    loading: boolean;
}
declare class ModuleallowanceEdit extends PureComponent<ModuleallowanceEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleallowanceEditProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ModuleallowanceEditProps): void;
    handleSubmit(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleallowanceEdit, Pick<ModuleallowanceEditProps, "visible" | "form" | "wrappedComponentRef" | "editItem" | "onClose">>, Pick<ModuleallowanceEditOwnerProps, "visible" | "wrappedComponentRef" | "editItem" | "onClose">>;
export default _default;
