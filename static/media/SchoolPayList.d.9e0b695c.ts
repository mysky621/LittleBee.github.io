import React from 'react';
import { PaySettingModel, DefaultPaySettingModel } from '../../Services/PaySettingService';
import { FormComponentProps } from 'antd/lib/form';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { RouteComponentProps } from 'react-router-dom';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface OwnerParams {
    id: string;
}
export interface StateProps {
    paySettingModels: PageContent<PaySettingModel>;
    currentPaySetting: PaySettingModel;
    loading: boolean;
    defaultResponse: ResponseModel;
}
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    cleanData: () => void;
    editDefaultPaySetting: (values: DefaultPaySettingModel) => void;
}
declare type HomeProps = StateProps & DispatchProps & FormComponentProps & RouteComponentProps<OwnerParams>;
export interface HomeState {
    page: number;
    businessId: number;
    setPaySetting: PaySettingModel | undefined;
    visible: boolean;
}
declare class SchoolPayList extends React.PureComponent<HomeProps, HomeState> {
    columnsList: ({
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
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: boolean, record: PaySettingModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: PaySettingModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handlePaySetting(record: PaySettingModel): void;
    handleDefault(checked: boolean, record: PaySettingModel): void;
    handleSubmit(): void;
    handleFormReset(): void;
    renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    _renderCurrentPaySetting(record: PaySettingModel): JSX.Element;
    currentBack(): void;
    onClose(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof SchoolPayList, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
