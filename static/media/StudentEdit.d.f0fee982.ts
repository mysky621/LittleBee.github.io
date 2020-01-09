import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { SimpleModel } from '../../../Services/IdentityErrorService';
import { StudentEditModel } from '../../../Services/StudentService';
import { ModuleStudentState } from '../../../Models/Student';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
    schoolId: string;
    gradeId: string;
    classesId: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveBackData: ResponseModel;
    saveError: Error;
    updateError: Error;
    userEditModel: StudentEditModel;
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    currentUser?: UserDetail;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    classesId: number;
    classModel?: SimpleModel;
    gradeModel?: SimpleModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: StudentEditModel) => void;
    cleanData: () => void;
    getSchoolList: () => void;
    getGradeList: (values: number) => void;
    getClassList: (values: number) => void;
    cleanGradeList: () => void;
    cleanClassList: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class StudentEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): null;
    handleSubmit(): void;
    onSchoolChange(value: number): void;
    onChangeGrade(value: number): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Devops_Student: ModuleStudentState;
    User: UserState;
}
export declare const mapState: ({ Module_Devops_Student, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof StudentEdit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
