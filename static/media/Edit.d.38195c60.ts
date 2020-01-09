import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { AllowanceWeChatModel, AllowanceWeChatEditModel } from '../../Services/AllowanceWeChatService';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface OwnerProps extends FormComponentProps {
    allowanceWeChatId: number;
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
    allowanceWeChatDetail: AllowanceWeChatModel;
    unitList: Array<SimpleModel>;
    saveResponseModel: ResponseModel;
}
export interface DispatchProps {
    fetchItem: (values: number) => void;
    save: (values: AllowanceWeChatEditModel) => void;
    fetchUnits: (values: number) => void;
}
declare type ModuleAllowanceWeChatEditProps = OwnerProps & StateProps & DispatchProps;
interface HomeState {
    allowanceWeChatDetail: AllowanceWeChatModel;
    loading: boolean;
    unitList: Array<SimpleModel>;
    saveResponseModel: ResponseModel;
}
declare class ModuleallowanceEdit extends PureComponent<ModuleAllowanceWeChatEditProps, HomeState> {
    constructor(props: ModuleAllowanceWeChatEditProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ModuleAllowanceWeChatEditProps): void;
    handleSubmit(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleallowanceEdit, Pick<ModuleAllowanceWeChatEditProps, "visible" | "form" | "wrappedComponentRef" | "onClose" | "allowanceWeChatId">>, Pick<OwnerProps, "visible" | "wrappedComponentRef" | "onClose" | "allowanceWeChatId">>;
export default _default;
