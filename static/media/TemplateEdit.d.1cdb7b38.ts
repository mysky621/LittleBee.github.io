import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { MessageTemplateState } from '../../Models/MessageTemplate';
import { MessageTemplateModel } from 'Modules/Message/Services/MessageTemplateService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { UploadFile } from 'antd/lib/upload/interface';
export interface StateProps {
    submitting: boolean;
    loading: boolean;
    saveResponseModel: ResponseModel;
    messageTemplateModel: MessageTemplateModel;
}
export interface HomeState {
    visible: boolean;
    saveResponseModel: ResponseModel;
    messageTemplateModel: MessageTemplateModel;
    fileList: UploadFile[];
    filesLength: number;
    previewVisible: boolean;
    previewImage: string;
}
export interface DispatchProps {
    save: (values: MessageTemplateModel) => void;
    fetch: (values: number) => void;
    cleanData: () => void;
}
export interface OwnProps extends FormComponentProps {
    messageTemplateId: number;
    visible: boolean;
    onClose: (successful: boolean) => void;
}
declare type HomeProps = StateProps & DispatchProps & OwnProps;
declare class TemplateEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        messageTemplateModel: MessageTemplateModel;
        saveResponseModel?: undefined;
    } | {
        saveResponseModel: ResponseModel;
        messageTemplateModel?: undefined;
    } | {
        messageTemplateModel?: undefined;
        saveResponseModel?: undefined;
    };
    _onSubmitting(): void;
    componentWillUnmount(): void;
    _onClose(): void;
    removePicture: (value: any) => void;
    request: (options: any) => {
        abort(): void;
    };
    onChangePicture: (value: any) => void;
    handleCancel: () => void;
    handlePreview: (file: any) => void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Message_Template: MessageTemplateState;
}
export declare const mapState: ({ Module_Message_Template, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof TemplateEdit, Pick<HomeProps, "visible" | "form" | "wrappedComponentRef" | "onClose" | "messageTemplateId">>, Pick<OwnProps, "visible" | "wrappedComponentRef" | "onClose" | "messageTemplateId">>;
export default _default;
