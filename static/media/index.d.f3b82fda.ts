import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { FormComponentProps } from 'antd/lib/form';
interface RouteMatchParams {
    businessId: string;
}
declare type BusinessSettledProps = FormComponentProps & RouteComponentProps<RouteMatchParams>;
interface BusinessSettledState {
    step: number;
    data: object;
    businessId: number;
}
declare class BusinessSettled extends PureComponent<BusinessSettledProps, BusinessSettledState> {
    constructor(props: BusinessSettledProps);
    _onStepBack(): void;
    _onStepSubmit(data: object): void;
    _render(step: number): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof BusinessSettled, Pick<BusinessSettledProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
