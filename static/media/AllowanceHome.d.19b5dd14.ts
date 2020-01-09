import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { AllowanceModel } from '../../Services/AllowanceService';
import { MealAllowanceState } from '../../Models/Allowance';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { FormComponentProps } from 'antd/lib/form';
import { UploadChangeParam } from 'antd/lib/upload';
import { RcFile } from 'antd/lib/upload/interface';
import { SelectValue } from 'antd/lib/select';
export interface StateProps {
    allowanceList: PageContent<AllowanceModel>;
    loading: boolean;
    deleting: boolean;
    schoolList: SimpleModel[];
}
export interface HomeState {
    visible: boolean;
    editItem?: AllowanceModel;
    accessToken: string;
    tokenType?: string;
    fileList: RcFile[];
    uploadButton: boolean;
    upload: boolean;
    importFile: string;
    importVisible: boolean;
    selectedSchool: boolean;
    importSchoolId: number;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: Pagable) => void;
    delete: (values: number) => void;
    getSchoolList: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: AllowanceModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    delete(id: number): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    onAllowanceEditClose(): void;
    /**
     *
     * @param item 编辑
     */
    onEdit(item: AllowanceModel): void;
    _uploadChange(info: UploadChangeParam): void;
    _downloadTemplate(): void;
    convert(base64Str: string): ArrayBuffer;
    _onChange(file: UploadChangeParam): void;
    showModal: () => void;
    handleCancel: () => void;
    imports(): void;
    handleOk: () => void;
    selectedSchool(e: SelectValue): void;
    _uploadRender(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Allowance: MealAllowanceState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Allowance }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
