import { PureComponent } from 'react';
import { RefundDetailModel } from '../../Services/RefundService';
export interface RefundDetailOwnerProps {
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
declare type RefundDetailProps = RefundDetailOwnerProps & StateProps & DispatchProps;
interface HomeState {
}
declare class RefundDetail extends PureComponent<RefundDetailProps, HomeState> {
    constructor(props: RefundDetailProps);
    componentWillMount(): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof RefundDetail, Pick<RefundDetailProps, "visible" | "onClose" | "refundId">>;
export default _default;
