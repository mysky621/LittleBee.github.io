import { PureComponent } from 'react';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
export interface LineChartPropsOwnerProps {
    title: string;
    legendData: string[];
    xAxisData: string[];
    seriesData: {
        [key: string]: number[];
    };
}
declare type LineChartProps = LineChartPropsOwnerProps;
export default class LineChart extends PureComponent<LineChartProps> {
    constructor(props: LineChartProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
