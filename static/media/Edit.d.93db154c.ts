import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
export interface OwnerPrams {
    id: string;
}
declare type OrderPaymentEditProps = RouteComponentProps<OwnerPrams>;
interface HomeState {
    step: number;
    data: object;
    id: number;
}
declare class Edit extends PureComponent<OrderPaymentEditProps, HomeState> {
    constructor(props: OrderPaymentEditProps);
    next(id: number): void;
    previous(): void;
    _render(step: number): JSX.Element;
    render(): JSX.Element;
}
export default Edit;
