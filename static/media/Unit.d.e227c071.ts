import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Moment } from 'moment';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { RefundUnitModel } from '../../Services/RefundService';
export interface StateProps {
    pageContent: PageContent<RefundUnitModel>;
    loading: boolean;
    error: Error;
    schoolList: Array<SimpleModel>;
    refundSubmitting: boolean;
    refundError: Error;
    response: ResponseModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    fetchSchool: (values: number) => void;
    unitRefund: (values: number) => void;
}
declare type RefundManageProps = FormComponentProps & StateProps & DispatchProps;
interface RefundManageState {
    pageParams: Pagable;
    generateVisible: boolean;
}
declare class RefundManage extends PureComponent<RefundManageProps, RefundManageState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => string;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: RefundUnitModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => any;
    } | {
        title: string;
        key: string;
        render: (_: void, record: RefundUnitModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: RefundManageProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: RefundManageProps): void;
    loadData(pageParams: Pagable): void;
    handleFormReset(): void;
    handleSubmit(): void;
    _disabledDate(date?: Moment): boolean;
    renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, size?: number): void;
    _onCloseGenerate(refresh?: boolean): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof RefundManage, Pick<RefundManageProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
