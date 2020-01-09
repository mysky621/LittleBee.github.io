import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { StudentModel, StudentEditModel, UserExportSearchModel } from './../../Services/StudentService';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { AccessIdentity } from '@school/meal-react-framework/interfaces';
import { RcFile } from 'antd/lib/upload/interface';
import { UploadChangeParam } from 'antd/lib/upload';
import { SimpleModel } from '../../Services/StudentService';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
interface OwenrProps extends FormComponentProps {
    schoolId: number;
}
export interface StateProps {
    userList: PageContent<StudentEditModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    loading: boolean;
    deleting: boolean;
    currentUser?: UserDetail;
    exportDataResponseModel: ResponseModel;
    exportDataLoading: boolean;
}
export interface HomeState {
    resetPasswordModal: boolean;
    searchParams?: Pagable;
    userModel?: StudentModel;
    accessToken: string;
    exchangeModal: boolean;
    tokenType?: string;
    visible: boolean;
    fileList: RcFile[];
    uploadButton: boolean;
    upload: boolean;
    importFile: string;
    currentIdentity?: AccessIdentity;
    onClose: boolean;
    schoolId: number;
    exportDataResponseModel: ResponseModel;
}
export interface DispatchProps {
    feach: (values?: Pagable) => void;
    delete: (values: number) => void;
    getGradeList: (values: number) => void;
    getClassList: (values: number) => void;
    resetPwd: (values: number) => void;
    exportStudent: (values: UserExportSearchModel) => void;
}
declare type HomeProps = StateProps & DispatchProps & OwenrProps;
declare class UserList extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: StudentEditModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        exportDataResponseModel: ResponseModel;
    } | null;
    _loadData(): void;
    _momentBirthday(text: string): string;
    _bindUser(userId: number): "已绑定" | "未绑定";
    _handleFormReset(): void;
    _handleSubmit(): void;
    _export(): void;
    onChangeGrade(v: number): void;
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    delete(id: number): void;
    resetPwd(id: number): void;
    imports(): void;
    showModal: () => void;
    _downloadTemplate(): void;
    convert(base64Str: string): ArrayBuffer;
    _onChange(file: UploadChangeParam): void;
    handleCancel: () => void;
    handleOk: () => void;
    _uploadRender(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof UserList, Pick<HomeProps, "form" | "wrappedComponentRef" | "schoolId">>, Pick<OwenrProps, "wrappedComponentRef" | "schoolId">>;
export default _default;
