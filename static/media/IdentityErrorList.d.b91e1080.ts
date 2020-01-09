import { PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { IdentityErrorModel, IdentityErrorSearchModel, SimpleModel } from '../../Services/IdentityErrorService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface StateProps {
    messageList: PageContent<IdentityErrorModel>;
    loading: boolean;
    deleting: boolean;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    resultMessage: ResponseModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    feach: (values?: Pagable) => void;
    delete: (values: number) => void;
    getSchoolList: () => void;
    getGradeList: (values: number) => void;
    getClassList: (values: number) => void;
    cleanGradeList: () => void;
    cleanClassList: () => void;
    sendMessage: (values: IdentityErrorModel) => void;
    changeResolveStatus: (values: number) => void;
    cleanResultMessage: () => void;
}
interface HomeState {
    searchParams: IdentityErrorSearchModel;
}
declare type MessageProps = FormComponentProps & StateProps & DispatchProps;
declare class IdentityErrorList extends PureComponent<MessageProps, HomeState> {
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
        dataIndex: string;
        key: string;
        render: (_: void, record: IdentityErrorModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: IdentityErrorModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: MessageProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: StateProps): void;
    sendResolve(id: number): void;
    handleFormReset(): void;
    delete(messageId: number): void;
    sendMessage(message: IdentityErrorModel): void;
    onSchoolChange(value: number): void;
    onGradeChange(value: number): void;
    handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof IdentityErrorList, Pick<MessageProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
