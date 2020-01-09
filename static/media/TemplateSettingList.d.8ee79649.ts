import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { MessageTemplateSettingListModel } from '../../Services/MessageTemplateService';
export interface StateProps {
    loading: boolean;
    pageContent: PageContent<MessageTemplateSettingListModel>;
}
export interface DispatchProps {
    fetchTemplateSettings: (values: Pagable) => void;
}
declare type TemplateSettingListProps = FormComponentProps & StateProps & DispatchProps;
interface TemplateSettingListState {
    editVisible: boolean;
    settingId?: number;
}
declare class TemplateSettingList extends PureComponent<TemplateSettingListProps, TemplateSettingListState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (values: string[]) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: MessageTemplateSettingListModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: TemplateSettingListProps);
    _onReload(page?: number, size?: number): void;
    componentDidMount(): void;
    _showEdit(settingId: number): void;
    _onEditClose(reload: boolean): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof TemplateSettingList, Pick<TemplateSettingListProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
