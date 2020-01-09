import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { TemplateMessageModel, TemplateMessageUserModel } from '../../Services/TemplateMessageService';
import { MessageTemplateModel } from '../../Services/MessageTemplateService';
import TemplateMessageUserModal from './TemplateMessageUserModal';
import TemplateMessageModal from './TemplateMessageModal';
export interface StateProps {
    loading: boolean;
    pageContent: PageContent<TemplateMessageModel>;
    templateList: Array<MessageTemplateModel>;
    currentUser: UserDetail;
    businessList: Array<SimpleModel>;
}
export interface DispatchProps {
    fetchTemplateMessage: (values: Pagable) => void;
    fetchTemplate: () => void;
    fetchBusiness: () => void;
}
declare type TemplateMessageListProps = FormComponentProps & StateProps & DispatchProps;
interface TemplateMessageListState {
    params: Pagable;
}
declare class TemplateMessageList extends PureComponent<TemplateMessageListProps, TemplateMessageListState> {
    users: TemplateMessageUserModal | null;
    message: TemplateMessageModal | null;
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (values: any) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: TemplateMessageModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: TemplateMessageListProps);
    _showMessageUserModal(users: Array<TemplateMessageUserModel>): void;
    _showMessageModal(message: TemplateMessageModel): void;
    _onReload(params: Pagable): void;
    componentDidMount(): void;
    _handleSubmit(): void;
    _handleFormReset(): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof TemplateMessageList, Pick<TemplateMessageListProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
