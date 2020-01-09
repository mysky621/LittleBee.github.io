import React from 'react';
import { PaySettingTypeEditModel } from '../../Services/PaySettingService';
import { FormComponentProps } from 'antd/lib/form';
import { RouteComponentProps } from 'react-router-dom';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    loading: boolean;
    editServiceUnitMchIdentifyResponse: ResponseModel;
}
export interface DispatchProps {
    editServiceUnitMchIdentify: (values: PaySettingTypeEditModel) => void;
}
export interface OwnerProps extends FormComponentProps {
    paySettingTypeEditModel: PaySettingTypeEditModel;
    visible: boolean;
    onClose: () => void;
}
declare type HomeProps = StateProps & DispatchProps & RouteComponentProps & OwnerProps;
export interface HomeState {
    visible: boolean;
    mchIdentify: string;
    responseModel: ResponseModel;
}
declare class PaySetting extends React.PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        responseModel: ResponseModel;
        visible: boolean;
    } | {
        responseModel: ResponseModel;
        visible?: undefined;
    } | null;
    handleOk(): void;
    handleCancel(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof PaySetting, Pick<HomeProps, "visible" | "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef" | "onClose" | "paySettingTypeEditModel">>, Pick<OwnerProps, "visible" | "wrappedComponentRef" | "onClose" | "paySettingTypeEditModel">>;
export default _default;
