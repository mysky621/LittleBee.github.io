import { PureComponent } from 'react';
export interface RefundDetailOwnerProps {
    /**
     * 日期列表
     */
    dateList: Array<number>;
    title: string;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
     * 关闭回调、父级组件控制显隐
     */
    onClose: () => void;
}
export default class LeaveDateModel extends PureComponent<RefundDetailOwnerProps> {
    constructor(props: RefundDetailOwnerProps);
    render(): JSX.Element;
}
