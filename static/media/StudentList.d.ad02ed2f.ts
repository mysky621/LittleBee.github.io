import { PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { SimpleModel, StudentEditModel, UserSearchModel, IdentityErrorModel } from '../../Services/IdentityErrorService';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    loading: boolean;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    studentList: PageContent<StudentEditModel>;
    studentInfo: StudentEditModel;
    resultMessage: ResponseModel;
    message: IdentityErrorModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetchMessage: (values: number) => void;
    getSchoolList: () => void;
    getGradeList: (values: number) => void;
    getClassList: (values: number) => void;
    cleanGradeList: () => void;
    cleanClassList: () => void;
    fetchStudent: (values?: Pagable) => void;
    getStudentInfo: (values: number) => void;
    saveStudentInfo: (values: StudentEditModel) => void;
    cleanStudentInfo: () => void;
    cleanResultMessage: () => void;
    cleanStudentList: () => void;
}
export interface MatchPathParams {
    unitId: string;
    classesId: string;
    gradeId: string;
    messageId: string;
}
interface HomeState {
    editVisible: boolean;
    schoolId: number;
    classEntityId: number;
    gradeId: number;
    createVisible: boolean;
    searchParams: UserSearchModel;
    messageId: number;
    gender: string;
}
declare type MessageProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
declare class StudentList extends PureComponent<MessageProps, HomeState> {
    StudentlistColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: StudentEditModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: StudentEditModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: MessageProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: StateProps): void;
    fetchStudent(schoolId: number, gradeId: number, classesId: number): void;
    editStudent(associatedUserId: number): void;
    onEditOk: () => void;
    onEditCancel: () => void;
    createStudent(): void;
    onCreateOk: () => void;
    onCreateCancel: () => void;
    handleFormReset(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    onGenderChange: (e: any) => void;
    searchStudent(): void;
    editFrom(): JSX.Element;
    createFrom(): JSX.Element;
    onGradeChange(value: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof StudentList, Pick<MessageProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
