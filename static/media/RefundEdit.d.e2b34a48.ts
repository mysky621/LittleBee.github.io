import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { RefundEditModel, RefundRecordListModel } from '../../Services/RefundService';
export interface RefundEditOwnerProps extends FormComponentProps {
    /**
     * 退费标识
     */
    refundUserId: number;
    /**
     * 应退金额
     */
    shouldMoney: number;
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
    refundRecord: RefundEditModel;
    response: ResponseModel;
}
export interface DispatchProps {
    save: (values: RefundEditModel) => void;
    fetchRefundRecord: (values: number) => void;
}
declare type RefundEditProps = RefundEditOwnerProps & StateProps & DispatchProps;
interface HomeState {
}
declare class RefundEdit extends PureComponent<RefundEditProps, HomeState> {
    constructor(props: RefundEditProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: RefundEditProps): void;
    _onSubmitting(): void;
    _onClose(refresh?: boolean): void;
    _renderCard(record: RefundRecordListModel): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof RefundEdit, Pick<RefundEditProps, "visible" | "form" | "wrappedComponentRef" | "onClose" | "shouldMoney" | "refundUserId">>, Pick<RefundEditOwnerProps, "visible" | "wrappedComponentRef" | "onClose" | "shouldMoney" | "refundUserId">>;
export default _default;
