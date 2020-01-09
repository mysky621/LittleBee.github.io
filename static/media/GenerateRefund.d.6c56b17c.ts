import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Moment } from 'moment';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { GenerateRefundParams, FetchRefundUnitParams, RefundUnitModel } from '../../Services/RefundService';
import { RefundRuleSimpleModel } from '../../Services/RefundRuleService';
export interface GenerateRefundOwnerProps extends FormComponentProps {
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
    ruleList: Array<RefundRuleSimpleModel>;
    response: ResponseModel;
    refundSchoolList: Array<RefundUnitModel>;
    fetching: boolean;
}
export interface DispatchProps {
    generateRefund: (values: GenerateRefundParams) => void;
    fetchRuleList: () => void;
    fetchRefundSchool: (values: FetchRefundUnitParams) => void;
    cleanRefundSchool: () => void;
}
declare type GenerateRefundProps = GenerateRefundOwnerProps & StateProps & DispatchProps;
interface HomeState {
    schoolList: Array<SimpleModel>;
    isMustDate: boolean;
    startDate: Moment;
    endDate: Moment;
    refundDateList: Array<string>;
    refundDateNum: number;
}
declare class GenerateRefund extends PureComponent<GenerateRefundProps, HomeState> {
    constructor(props: GenerateRefundProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: GenerateRefundProps): void;
    _onSubmitting(): void;
    _onClose(refresh?: boolean): void;
    _disabledDate(date?: Moment): boolean;
    _onRuleChange(value: number): void;
    _onPeriodChange(values: Moment | null): void;
    handOk(): void;
    setRefundDates(refundDateList: Array<string>): void;
    openRefundDate(): void;
    _renderRefundDate(date: string): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof GenerateRefund, Pick<GenerateRefundProps, "visible" | "form" | "wrappedComponentRef" | "onClose">>, Pick<GenerateRefundOwnerProps, "visible" | "wrappedComponentRef" | "onClose">>;
export default _default;
