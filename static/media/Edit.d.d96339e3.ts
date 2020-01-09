import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { LeaveEditModel, AssociatedUserModel, LeaveObjectModel, UnitParams, StudentParams } from '../../Services/LeaveService';
import { MealLeaveState } from '../../Models/Leave';
import { UserState } from '@school/meal-react-framework/Models/User';
import { Moment } from 'moment';
import 'moment/locale/zh-cn';
import { UserDetail, SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { RadioChangeEvent } from 'antd/lib/radio';
import { SelectValue } from 'antd/lib/select';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { RcFile, UploadChangeParam } from 'antd/lib/upload/interface';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
    leaveType: string;
}
interface StudentSimpleModel {
    userId: number;
    /**
     * 关联用户id
     */
    associatedUserId: number;
    /**
     * 用户名称
     */
    name: string;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 班级名称
     */
    classesName: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    leaveEditModel: LeaveEditModel;
    currentUser: UserDetail | undefined;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    studentList: Array<AssociatedUserModel>;
    teacherList: Array<AssociatedUserModel>;
    saveBackData: ResponseModel;
    stuLoding: boolean;
    students: Array<AssociatedUserModel>;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    leaveEditModel: LeaveEditModel;
    incidentObject: string;
    scopeType: string;
    activeKey: string;
    visible: boolean;
    uploadButton: boolean;
    accessToken: string;
    tokenType?: string;
    fileList: RcFile[];
    studentSimpleModels: Array<StudentSimpleModel>;
    schoolId: number;
    stuIds: {
        key: number;
        label: string;
    }[];
    schoolList: Array<SimpleModel>;
    fetching: boolean;
    students: Array<AssociatedUserModel>;
    stuNum: number;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: LeaveEditModel) => void;
    cleanData: () => void;
    cleanSchoolData: () => void;
    cleanSaveBackData: () => void;
    fetchSchoolList: (values: UnitParams) => void;
    fetchGradeList: (values: number) => void;
    fetchClassList: (values: number) => void;
    fetchStudentList: (values: number) => void;
    fetchTeacherList: (values: number) => void;
    fetchStudents: (values: StudentParams) => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    columnsList: {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    }[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        leaveEditModel: LeaveEditModel;
        incidentObject: string;
        scopeType: string;
        saveError: Error;
        submitting: boolean;
        activeKey: string;
        stuNum: number;
        schoolList?: undefined;
        students?: undefined;
        fetching?: undefined;
    } | {
        schoolList: SimpleModel[];
        leaveEditModel?: undefined;
        incidentObject?: undefined;
        scopeType?: undefined;
        saveError?: undefined;
        submitting?: undefined;
        activeKey?: undefined;
        stuNum?: undefined;
        students?: undefined;
        fetching?: undefined;
    } | {
        students: AssociatedUserModel[];
        fetching: boolean;
        leaveEditModel?: undefined;
        incidentObject?: undefined;
        scopeType?: undefined;
        saveError?: undefined;
        submitting?: undefined;
        activeKey?: undefined;
        stuNum?: undefined;
        schoolList?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        leaveEditModel?: undefined;
        incidentObject?: undefined;
        scopeType?: undefined;
        activeKey?: undefined;
        stuNum?: undefined;
        schoolList?: undefined;
        students?: undefined;
        fetching?: undefined;
    };
    handleSubmit(): void;
    getLeaveObject(): LeaveObjectModel[];
    onIncidentObjectChange(e: RadioChangeEvent): void;
    resetData(scopeType: string, e: RadioChangeEvent | null): void;
    onScopeTypeChange(e: RadioChangeEvent): void;
    onSchoolChange(value: SelectValue): void;
    reloadData(incidentObject: string, scopeType: string): void;
    getSeclectInitialValue(scopeType: string): number[] | {
        key: number;
        label: string;
    }[];
    disabledDate(current: Moment): boolean;
    tabsCallback(activeKey: string): void;
    handleCancel: () => void;
    handleOk: () => void;
    downTemplate(): void;
    convert(base64Str: string): ArrayBuffer;
    _onChange(file: UploadChangeParam): void;
    _exportModal(): void;
    _uploadRender(): JSX.Element;
    getStudentSimpleModel(): number[];
    _selectStudentChange(value: any): void;
    _onSearch(value: string): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Leave: MealLeaveState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Leave, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
