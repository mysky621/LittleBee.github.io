import { PureComponent } from 'react';
import { TemplateMessageModel } from '../../Services/TemplateMessageService';
export declare type IProps = {};
interface PageState {
    visible: boolean;
    message?: TemplateMessageModel;
}
export default class MessageModal extends PureComponent<IProps, PageState> {
    constructor(props: IProps);
    onOpen(message: TemplateMessageModel): void;
    onClose(): void;
    render(): JSX.Element;
}
export {};
