import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { OrderPaymentEditModel, DefaultTemplateMessage, OrderPaymentTemplateMessage } from '../../Services/OrderPaymentServices';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import * as H from 'history';
export interface OwnerPrams extends FormComponentProps {
    id: string;
    previous: () => void;
    history: H.History;
}
export interface StateProps {
    defaultTemplateMessage: DefaultTemplateMessage;
    currentOrderPaymentEditModel: OrderPaymentEditModel;
    addOrderPaymentTemplateMessageResponseModel: ResponseModel;
}
export interface DispatchProps {
    fetchDefaultTemplateMessage: (values: {
        unitId: number;
        orderPaymentId: number;
    }) => void;
    addOrderPaymentTemplateMessage: (values: OrderPaymentTemplateMessage) => void;
}
declare type OrderPaymentEditProps = StateProps & DispatchProps & OwnerPrams;
interface HomeState {
    defaultTemplateMessage: DefaultTemplateMessage;
    messageTip: boolean;
    addOrderPaymentTemplateMessageResponseModel: ResponseModel;
}
declare class Edit3 extends PureComponent<OrderPaymentEditProps, HomeState> {
    constructor(props: OrderPaymentEditProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: OrderPaymentEditProps, prevState: HomeState): {};
    componentWillUnmount(): void;
    handleSubmit(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit3, Pick<OrderPaymentEditProps, "form" | "id" | "history" | "wrappedComponentRef" | "previous">>, Pick<OwnerPrams, "id" | "history" | "wrappedComponentRef" | "previous">>;
export default _default;
