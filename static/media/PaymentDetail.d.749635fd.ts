import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { OrderPaymentEditModel, DefaultTemplateMessage } from '../Services/OrderPaymentServices';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { RouteComponentProps } from 'react-router';
export interface OwnerPrams {
    id: string;
}
export interface StateProps {
    loading: boolean;
    unitList: Array<SimpleModel>;
    orderPaymentModel: OrderPaymentEditModel;
    defaultTemplateMessage: DefaultTemplateMessage;
}
export interface DispatchProps {
    fetchItem: (values: number) => void;
    fetchUnits: () => void;
    fetchDefaultTemplateMessage: (values: {
        unitId: number;
        orderPaymentId: number;
    }) => void;
}
declare type OrderPaymentDetailProps = StateProps & DispatchProps & FormComponentProps & RouteComponentProps<OwnerPrams>;
interface HomeState {
    loading: boolean;
    unitList: Array<SimpleModel>;
    orderPaymentModel: OrderPaymentEditModel;
    messageTip: boolean;
    defaultTemplateMessage: DefaultTemplateMessage;
}
declare class OrderPaymentDetail extends PureComponent<OrderPaymentDetailProps, HomeState> {
    constructor(props: OrderPaymentDetailProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: OrderPaymentDetailProps, prevState: HomeState): {
        orderPaymentModel: OrderPaymentEditModel;
    } | {
        defaultTemplateMessage: DefaultTemplateMessage;
        loading: boolean;
        unitList: SimpleModel[];
        orderPaymentModel: OrderPaymentEditModel;
        messageTip: boolean;
    } | {
        orderPaymentModel?: undefined;
    };
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof OrderPaymentDetail, Pick<OrderPaymentDetailProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
