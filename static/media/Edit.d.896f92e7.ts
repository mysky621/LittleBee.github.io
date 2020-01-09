import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { UserState } from '@school/meal-react-framework/Models/User';
import { Moment } from 'moment';
import 'moment/locale/zh-cn';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { RadioChangeEvent } from 'antd/lib/radio';
import { SelectValue } from 'antd/lib/select';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { CouponEditModel, UnitParams, AssociatedUserModel } from '../Services/CouponService';
import { ModuleCouponState } from '../Models/Coupon';
import { UploadChangeParam } from 'antd/lib/upload';
import { RcFile } from 'antd/lib/upload/interface';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    couponEditModel: CouponEditModel;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    studentList: Array<AssociatedUserModel>;
    teacherList: Array<AssociatedUserModel>;
    saveBackData: ResponseModel;
    businessList: Array<SimpleModel>;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    couponEditModel: CouponEditModel;
    incidentObject: string;
    scopeType: string;
    businessId: number;
    couponType: string;
    visible: boolean;
    uploadButton: boolean;
    upload: boolean;
    tokenType?: string;
    accessToken: string;
    fileList: RcFile[];
    importFile: string;
    personList: number[];
    count: number;
    isClean: boolean;
    associatedUserModels: Array<SimpleModel>;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: CouponEditModel) => void;
    cleanData: () => void;
    cleanSchoolData: () => void;
    cleanSaveBackData: () => void;
    fetchSchoolList: (values: UnitParams) => void;
    fetchGradeList: (values: number) => void;
    fetchClassList: (values: number) => void;
    fetchStudentList: (values: number) => void;
    fetchTeacherList: (values: number) => void;
    fetchBusiness: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        couponEditModel: CouponEditModel;
        incidentObject: string;
        scopeType: string;
        saveError: Error;
        submitting: boolean;
        businessId: any;
        couponType: any;
        count: any;
        isClean: any;
        associatedUserModels: any;
    } | {
        saveError: Error;
        submitting: boolean;
        couponEditModel?: undefined;
        incidentObject?: undefined;
        scopeType?: undefined;
        businessId?: undefined;
        couponType?: undefined;
        count?: undefined;
        isClean?: undefined;
        associatedUserModels?: undefined;
    };
    handleSubmit(): void;
    importSubmit(): void;
    getLeaveObject(): any;
    onChangeCouponType(e: RadioChangeEvent): void;
    onScopeTypeChange(e: RadioChangeEvent): void;
    onSchoolChange(value: SelectValue): void;
    onBusinessChange(value: SelectValue): void;
    reloadData(incidentObject: string, scopeType: string): void;
    showUpload(): JSX.Element;
    getSeclectInitialValue(scopeType: string): number[];
    disabledDate(a?: Moment): boolean;
    _downloadTemplate(): void;
    convert(base64Str: string): ArrayBuffer;
    _onChange(file: UploadChangeParam): void;
    handleCancel: () => void;
    handleOk: () => void;
    showModal: () => void;
    imports(): void;
    cleanUser(): void;
    _uploadRender(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Coupon: ModuleCouponState;
    User: UserState;
}
export declare const mapState: ({ Module_Coupon, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
