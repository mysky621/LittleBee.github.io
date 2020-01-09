import { PureComponent } from 'react';
import { BusinessModel, UpdateEditableParams } from '../Services/BusinessService';
export interface BusinessSettledOwnerProps {
    /**
     * 商家信息
     */
    item: BusinessModel;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
     * 关闭回调、父级组件控制显隐
     */
    onClose: (refresh?: boolean) => void;
}
export interface StateProps {
    submitting: boolean;
    error: Error;
}
export interface DispatchProps {
    updateEditable: (values: UpdateEditableParams) => void;
}
declare type BusinessSettledProps = BusinessSettledOwnerProps & StateProps & DispatchProps;
declare class BusinessSettled extends PureComponent<BusinessSettledProps> {
    _onClose(): void;
    _onEditableChange(editable: boolean): void;
    _onCopySerrledLink(text: string): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof BusinessSettled, Pick<BusinessSettledProps, "visible" | "item" | "onClose">>;
export default _default;
