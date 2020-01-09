import { PureComponent } from 'react';
import { RefundDetailModel } from '../../Services/RefundService';
export interface RefundFailReasonPropsOwnerProps {
    /**
     * 退费标识
     */
    refundId: number;
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
    detail: RefundDetailModel;
    loading: boolean;
    error: Error;
}
export interface DispatchProps {
    fetch: (values: number) => void;
}
declare type RefundFailReasonProps = RefundFailReasonPropsOwnerProps & StateProps & DispatchProps;
interface HomeState {
}
declare class RefundFailReason extends PureComponent<RefundFailReasonProps, HomeState> {
    constructor(props: RefundFailReasonProps);
    componentWillMount(): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof RefundFailReason, Pick<RefundFailReasonProps, "visible" | "onClose" | "refundId">>;
export default _default;
