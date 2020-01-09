import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { MessageModel, MessageSearchModel, SimpleModel } from '../../Services/MessageService';
export interface StateProps {
    messageList: MessageModel[];
    loading: boolean;
    deleting: boolean;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
}
/**
 * action的props
 */
export interface DispatchProps {
    feach: (values: MessageSearchModel) => void;
    delete: (values: number) => void;
    getSchoolList: () => void;
    getGradeList: (values: number) => void;
    getClassList: (values: number) => void;
    cleanGradeList: () => void;
    cleanClassList: () => void;
}
interface HomeState {
}
declare type MessageProps = FormComponentProps & StateProps & DispatchProps;
declare class MessageList extends PureComponent<MessageProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => 0 | JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: MessageModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: MessageProps);
    componentWillMount(): void;
    loadData(messageSearchModel: MessageSearchModel): void;
    handleFormReset(): void;
    delete(messageId: number): void;
    onSchoolChange(value: number): void;
    onGradeChange(value: number): void;
    handleSubmit(): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof MessageList, Pick<MessageProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
