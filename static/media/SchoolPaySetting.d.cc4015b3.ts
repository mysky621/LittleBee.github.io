import React from 'react';
import { PaySettingModel, PayChannelSettingModel, ServiceUnitChannelParams, PayChannelModel, PayChannelSettingModelMap, PaySettingTypeEditModel, PaySettingEditModel } from '../../Services/PaySettingService';
import { FormComponentProps } from 'antd/lib/form';
import { RouteComponentProps } from 'react-router-dom';
import { RadioChangeEvent } from 'antd/lib/radio';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    loading: boolean;
    payChannlSettingModel: PayChannelSettingModel;
    serviceUnitMchIds: Array<string>;
    saveResponse: ResponseModel;
}
export interface DispatchProps {
    fetch: (values: ServiceUnitChannelParams) => void;
    fetchMchId: (values: string) => void;
    savePaySetting: (values: PaySettingEditModel) => void;
}
export interface OwnerProps extends FormComponentProps {
    paySettingModel: PaySettingModel;
    visible: boolean;
    onClose: () => void;
}
declare type HomeProps = StateProps & DispatchProps & RouteComponentProps & OwnerProps;
export interface HomeState {
    visible: boolean;
    payChannelValue: string;
    payMchIdValue: string;
    payChannlSettingModel: PayChannelSettingModel;
    payChannelModel: PayChannelModel | undefined;
    settingMap: PayChannelSettingModelMap;
    paySettingTypeEditModel: PaySettingTypeEditModel | undefined;
    saveResponse: ResponseModel;
}
declare class PaySetting extends React.PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        payChannlSettingModel: PayChannelSettingModel;
        settingMap: PayChannelSettingModelMap;
        payChannelModel: PayChannelModel | undefined;
        payChannelValue: string;
        payMchIdValue: string;
        saveResponse?: undefined;
        visible?: undefined;
    } | {
        saveResponse: ResponseModel;
        visible: boolean;
        payChannlSettingModel?: undefined;
        settingMap?: undefined;
        payChannelModel?: undefined;
        payChannelValue?: undefined;
        payMchIdValue?: undefined;
    } | null;
    handleOk(): void;
    handleCancel(): void;
    onChannelChange(e: RadioChangeEvent, settingMap: PayChannelSettingModelMap): void;
    onMchIdChange(e: RadioChangeEvent): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof PaySetting, Pick<HomeProps, "visible" | "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef" | "onClose" | "paySettingModel">>, Pick<OwnerProps, "visible" | "wrappedComponentRef" | "onClose" | "paySettingModel">>;
export default _default;
