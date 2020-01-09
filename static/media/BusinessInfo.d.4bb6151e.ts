import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { UploadFile } from 'antd/lib/upload/interface';
import { RadioChangeEvent } from 'antd/lib/radio';
import { ValidPreiodType } from 'Modules/Business/Services/BusinessService';
export interface BusinessOwnerProps extends FormComponentProps {
    onSubmit: (data: object) => void;
    businessId: number;
    data: any;
    onBack: () => void;
}
declare type BusinessProps = BusinessOwnerProps;
interface BusinessState {
    holderIDBack: UploadFile[];
    holderIDFront: UploadFile[];
    organizationCodeImg: UploadFile[];
    licenseImg: UploadFile[];
    licenseUnification: boolean;
    validPreiodType: ValidPreiodType;
    businessTermHidden: boolean;
    businessTerm2Hidden: boolean;
    idCardHidden: boolean;
    validPreiodType2: ValidPreiodType;
    holderValidPreiodType: ValidPreiodType;
}
declare type StateKeyType = 'holderIDBack' | 'holderIDFront' | 'organizationCodeImg' | 'licenseImg';
declare class BusinessInfo extends PureComponent<BusinessProps, BusinessState> {
    constructor(props: BusinessProps);
    componentWillMount(): void;
    _setImg(data: any): void;
    componentWillReceiveProps(newProps: BusinessProps): void;
    _onValidateForm(step: number): void;
    _setState(key: string, fileList: UploadFile[]): void;
    _onChangePicture(stateKey: StateKeyType, file: UploadFile, fileList: UploadFile[]): void;
    _onRemovePicture(stateKey: StateKeyType, file: UploadFile): void;
    _onBeforeUpload(file: UploadFile): boolean;
    _renderUpload(tenantTypeId: string, list: UploadFile[], key: StateKeyType): JSX.Element;
    _onLicenseChange(e: RadioChangeEvent): void;
    onBusinessLicenseCheck: (e: any) => void;
    isHiddenBusinessLicenseDate: (e: any) => JSX.Element | null;
    onBusiness2LicenseCheck: (e: any) => void;
    isHiddenBusiness2LicenseDate: (e: any) => JSX.Element | null;
    idCardCheck: (e: any) => void;
    isIdCardDate: (e: any) => JSX.Element | null;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<typeof BusinessInfo, Pick<BusinessOwnerProps, "data" | "onSubmit" | "wrappedComponentRef" | "businessId" | "onBack">>;
export default _default;
