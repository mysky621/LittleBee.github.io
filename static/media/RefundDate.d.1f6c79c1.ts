import { PureComponent } from 'react';
import { Moment } from 'moment';
export interface SelectedDateModel {
    [key: string]: string;
}
export interface OwnerProps {
    beginDate: string;
    endDate: string;
    normalDate: Array<string>;
    setRefundDate: (dates: Array<string>) => void;
}
export interface HomeState {
    start: Moment;
    end: Moment;
    selectedDateMap: SelectedDateModel;
    mustDate: Array<string>;
    dispaly: boolean;
    selectedDates: Array<string>;
}
declare type RefundDateProps = OwnerProps;
declare class RefundDate extends PureComponent<RefundDateProps, HomeState> {
    constructor(props: RefundDateProps);
    componentDidMount(): void;
    dateCellRender(date: Moment): JSX.Element;
    onSelect(date: Moment): void;
    render(): JSX.Element;
}
export default RefundDate;
