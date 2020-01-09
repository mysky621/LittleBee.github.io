import React from 'react';
import { PaySettingModel } from '../../Services/PaySettingService';
import { FormComponentProps } from 'antd/lib/form';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { RouteComponentProps } from 'react-router-dom';
export interface StateProps {
    paySettingModels: PageContent<PaySettingModel>;
    loading: boolean;
}
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    cleanData: () => void;
    editCurrnetPaySetting: (values: PaySettingModel) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps;
export interface HomeState {
    page: number;
    size: number;
    visible: boolean;
    setPaySetting?: PaySettingModel;
}
declare class Home extends React.PureComponent<HomeProps, HomeState> {
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
        key: string;
        render: (_: void, record: PaySettingModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    linkToSchoolPaySetting(record: PaySettingModel): Promise<void>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handlePaySetting(record: PaySettingModel): void;
    handleSubmit(): void;
    handleFormReset(): void;
    renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    onClose(): void;
    handleCancel: (e: any) => void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
