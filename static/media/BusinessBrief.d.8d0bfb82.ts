import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { BusinessBriefEditModel, ResultMessage } from '../Services/BusinessBriefService';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { UploadFile } from 'antd/lib/upload/interface';
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    businessBriefEditModel: BusinessBriefEditModel;
    currentUser?: UserDetail;
    resultMessage: ResultMessage;
}
export interface DispatchProps {
    save: (values: BusinessBriefEditModel) => void;
    fetchBusinessBrief: (moduleId: number) => void;
    clean: () => void;
}
declare type ModuleEditProps = FormComponentProps & StateProps & DispatchProps;
interface HomeState {
    businessBriefEditModel: BusinessBriefEditModel;
    visible: boolean;
    previewVisible: boolean;
    previewImage: string;
    fileList: UploadFile[];
    filesLength: number;
    showVisible: boolean;
}
declare class ModuleEdit extends PureComponent<ModuleEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleEditProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: ModuleEditProps, prevState: HomeState): {
        businessBriefEditModel: BusinessBriefEditModel;
        filesLength: number;
        fileList: {
            response: import("@school/meal-react-framework/Services/AttachmentService").AttachmentModel;
            url: string;
            uid: number;
            size: number;
            name: string;
            type: string;
        }[];
        saveError?: undefined;
        submitting?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        businessBriefEditModel?: undefined;
        filesLength?: undefined;
        fileList?: undefined;
    };
    handleSubmit(): void;
    componentWillUnmount(): void;
    onChangePicture: (value: any) => void;
    showModal: () => void;
    showVisibalModal: () => void;
    handleCancel: () => void;
    visibaCancel: () => void;
    handlePreview: (file: any) => void;
    removePicture: (value: any) => void;
    _renderUpload(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleEdit, Pick<ModuleEditProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
