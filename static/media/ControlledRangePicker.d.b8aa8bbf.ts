import { PureComponent } from 'react';
import 'moment/locale/zh-cn';
import { RangePickerValue } from 'antd/lib/date-picker/interface';
export interface HomeState {
    value: RangePickerValue;
    mode: string | string[];
}
export interface OwnerProps {
    callback: (dates: [Date, Date]) => void;
    format: string;
}
declare type HomeProps = OwnerProps;
export default class ControlledRangePicker extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    handlePanelChange: (value: any, mode: any) => void;
    render(): JSX.Element;
}
export {};
