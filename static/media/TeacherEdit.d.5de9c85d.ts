import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { TeacherEditModel } from '../../../Services/TeacherService';
import { ModuleTeacherState } from '../../../Models/Teacher';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { SimpleModel } from '../../../Services/IdentityErrorService';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
    unitId: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    teacherEditModel: TeacherEditModel;
    saveBackData: ResponseModel;
    currentUser?: UserDetail;
    schoolList: Array<SimpleModel>;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    teacherEditModel?: TeacherEditModel;
    saveBackData: ResponseModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: TeacherEditModel) => void;
    cleanData: () => void;
    getSchoolList: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class TeacherEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        saveBackData: ResponseModel;
        region?: undefined;
        teacherEditModel?: undefined;
        saveError?: undefined;
        submitting?: undefined;
    } | {
        region: string[];
        teacherEditModel: TeacherEditModel;
        saveBackData?: undefined;
        saveError?: undefined;
        submitting?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        teacherEditModel: TeacherEditModel;
        saveBackData?: undefined;
        region?: undefined;
    };
    handleSubmit(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Devops_Teacher: ModuleTeacherState;
    User: UserState;
}
export declare const mapState: ({ Module_Devops_Teacher, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof TeacherEdit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
