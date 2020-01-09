import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { RouteComponentProps } from 'react-router';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { RefundUserModel, RefundUserExportSearchModel, RefundUnitSummaryModel } from '../../Services/RefundService';
export interface StateProps {
    pageContent: PageContent<RefundUserModel>;
    loading: boolean;
    error: Error;
    response: ResponseModel;
    refundSubmitting: boolean;
    refundError: Error;
    refundCancelError: Error;
    refundCancelSubmitting: boolean;
    exportRefundUserResponseModel: ResponseModel;
    exportSubmitting: boolean;
    refundUnitSummaryModel: RefundUnitSummaryModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    userRefund: (values: {
        refundUserIds: Array<number>;
        refundMethod: string;
    }) => void;
    offlineCancelUserRefund: (values: Array<number>) => void;
    exportRefundUser: (values: RefundUserExportSearchModel) => void;
    fetchRefundUnitSummary: (values: number) => void;
}
export interface MatchPathParams {
    refundUnitId: string;
}
declare type RefundDetailProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface RefundDetailState {
    pageParams: Pagable;
    selectedRows: Array<RefundUserModel>;
    detailVisbile: boolean;
    refundId?: number;
    leaveDateVisible: boolean;
    leaveDateModelTitle: string;
    leaveDateList?: Array<number>;
    editVisible: boolean;
    editItem?: RefundUserModel;
    reasonVisbile: boolean;
}
declare class RefundUser extends PureComponent<RefundDetailProps, RefundDetailState> {
    defaultParams: Pagable;
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number[]) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => string;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => any;
    } | {
        title: string;
        key: string;
        render: (_: void, record: RefundUserModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: RefundDetailProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: RefundDetailProps): void;
    _onOfflineCancelRefund(refundUserIds: number[]): void;
    _onRefund(refundUserIds: number[], refundMethod: string): void;
    _renderLeaveNumber(leaveDateList: number[], leaveDateModelTitle: string): JSX.Element;
    loadData(pageParams: Pagable): void;
    handleFormReset(): void;
    handleSubmit(): void;
    renderSimpleForm(): JSX.Element;
    _onBatchRefund(refundMethod: string): void;
    _onPaginationChange(page: number, size?: number): void;
    _onSelectAll(selected: boolean, selectedRows: Array<RefundUserModel>): void;
    _onSelect(record: RefundUserModel, selected: boolean): void;
    _onRefundEditClose(refresh?: boolean): void;
    _renderModal(): JSX.Element;
    _onExportRefund(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof RefundUser, Pick<RefundDetailProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
