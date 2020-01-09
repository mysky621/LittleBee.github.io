import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { UploadFile } from 'antd/lib/upload/interface';
export interface BasicOwnerProps extends FormComponentProps {
    onSubmit: (data: object) => void;
    businessId: number;
    data: any;
}
declare type BasicProps = BasicOwnerProps;
interface BasiceState {
    foodLicenseImg: UploadFile[];
}
declare class BasicInfo extends PureComponent<BasicProps, BasiceState> {
    constructor(props: BasicProps);
    componentWillMount(): void;
    _setFoodLicenseImg(data: any): void;
    componentWillReceiveProps(newProps: BasicProps): void;
    _onValidateForm(): void;
    _onChangePicture(file: UploadFile, fileList: UploadFile[]): void;
    _onRemovePicture(file: UploadFile): void;
    _onBeforeUpload(file: UploadFile): boolean;
    _renderUpload(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<typeof BasicInfo, Pick<BasicOwnerProps, "data" | "onSubmit" | "wrappedComponentRef" | "businessId">>;
export default _default;
