import { PureComponent } from 'react';
import { TemplateMessageUserModel } from '../../Services/TemplateMessageService';
export declare type IProps = {};
interface PageState {
    visible: boolean;
    users: Array<TemplateMessageUserModel>;
}
export default class MessageUserModal extends PureComponent<IProps, PageState> {
    constructor(props: IProps);
    onOpen(users?: Array<TemplateMessageUserModel>): void;
    onClose(): void;
    render(): JSX.Element;
}
export {};
