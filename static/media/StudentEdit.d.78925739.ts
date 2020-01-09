import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { SelectValue } from 'antd/lib/select';
import { FormComponentProps } from 'antd/lib/form';
import { StudentEditModel, SimpleModel } from '../../Services/StudentService';
import { ModuleStudentState } from '../../Models/Student';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
    unitId: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveBackData: ResponseModel;
    saveError: Error;
    updateError: Error;
    userEditModel: StudentEditModel;
    grades: SimpleModel[];
    classes: SimpleModel[];
    currentUser?: UserDetail;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    saveBackData: ResponseModel;
    userEditModel: StudentEditModel;
    grades: SimpleModel[];
    classes: SimpleModel[];
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
    fetchGrades: (values: number) => void;
    fetchClasses: (values: number) => void;
    cleanData: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class StudentEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        saveBackData: ResponseModel;
        classModel?: undefined;
        gradeModel?: undefined;
        region?: undefined;
        userEditModel?: undefined;
        saveError?: undefined;
        submitting?: undefined;
        classes?: undefined;
    } | {
        classModel: SimpleModel;
        gradeModel: SimpleModel;
        region: string[];
        userEditModel: StudentEditModel;
        saveBackData?: undefined;
        saveError?: undefined;
        submitting?: undefined;
        classes?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        userEditModel: StudentEditModel;
        classes: SimpleModel[];
        saveBackData?: undefined;
        classModel?: undefined;
        gradeModel?: undefined;
        region?: undefined;
    };
    handleSubmit(): void;
    onGradeChange(value: SelectValue): void;
    changeClass: (v: any) => void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Student: ModuleStudentState;
    User: UserState;
}
export declare const mapState: ({ Module_Student, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof StudentEdit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
