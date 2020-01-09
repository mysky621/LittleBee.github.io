import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { FormComponentProps } from 'antd/lib/form';
import { SelectValue } from 'antd/lib/select';
import { Loading } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { MessageTemplateState } from '../../Models/MessageTemplate';
import { MessageTemplateSettingModel, MessageTemplateModel } from '../../Services/MessageTemplateService';
export interface StateProps {
    submitting: boolean;
    loading: boolean;
    saveResponseModel: ResponseModel;
    item: MessageTemplateSettingModel;
    templateList: Array<MessageTemplateModel>;
    schoolList: Array<SimpleModel>;
    existingSchoolList: Array<SimpleModel>;
}
export interface HomeState {
    saveResponseModel: ResponseModel;
    settingId?: number;
    tipImageUri?: string;
    showImageTip: boolean;
}
export interface DispatchProps {
    save: (values: MessageTemplateSettingModel) => void;
    fetchTemplate: () => void;
    fetchSettingItem: (values?: number) => void;
    fetchServiceSchool: () => void;
    fetchExistingSchool: (templateId: string) => void;
}
export interface OwnProps extends FormComponentProps {
    visible: boolean;
    settingId?: number;
    onClose: (reload?: boolean) => void;
}
declare type HomeProps = StateProps & DispatchProps & OwnProps;
declare class TemplateEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        saveResponseModel: ResponseModel;
        settingId: number | undefined;
    };
    _onSubmitting(): void;
    _onClose(): void;
    _onTemplateChange(key: SelectValue): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Message_Template: MessageTemplateState;
}
export declare const mapState: ({ Module_Message_Template, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof TemplateEdit, Pick<HomeProps, "visible" | "form" | "wrappedComponentRef" | "onClose" | "settingId">>, Pick<OwnProps, "visible" | "wrappedComponentRef" | "onClose" | "settingId">>;
export default _default;
