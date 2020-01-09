import { PureComponent } from 'react';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
export interface BarChartPropsOwnerProps {
    title: string;
    legendData: string[];
    xAxisData: string[];
    seriesData: {
        [key: string]: number[];
    };
}
declare type BarChartProps = BarChartPropsOwnerProps;
export default class BarChart extends PureComponent<BarChartProps> {
    constructor(props: BarChartProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
