import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { MessageTemplateListModel } from '../../Services/MessageTemplateService';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface StateProps {
    loading: boolean;
    pageContent: PageContent<MessageTemplateListModel>;
    submitting: boolean;
}
export interface DispatchProps {
    fetchMessageTemplate: (values: Pagable) => void;
}
declare type TemplateListProps = FormComponentProps & StateProps & DispatchProps;
interface TemplateListState {
    visible: boolean;
    messageTemplateId: number;
    page: Pagable;
}
declare class TemplateList extends PureComponent<TemplateListProps, TemplateListState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        key: string;
        render: (_: void, record: MessageTemplateListModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: TemplateListProps);
    componentDidMount(): void;
    _onReload(page: Pagable): void;
    onClose(successful: boolean): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof TemplateList, Pick<TemplateListProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
