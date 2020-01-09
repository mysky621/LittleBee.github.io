import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { ClassesEditModel, ClassesModel, SimpleModel } from '../../Services/ClassesService';
import { MealClassesState } from '../../Models/Classes';
import { LabeledValue } from 'antd/lib/select';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { UserState } from '@school/meal-react-framework/Models/User';
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
    classesEditModel: ClassesModel;
    gradeList: Array<SimpleModel>;
    currentUser?: UserDetail;
}
interface HomeState {
    submitting: boolean;
    saveBackData: ResponseModel;
    id: number;
    unitId: number;
    classesEditModel: ClassesModel;
    gradeId: number;
    name: string;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: ClassesEditModel) => void;
    getGradeList: (values: number) => void;
    cleanData: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        saveBackData: ResponseModel;
        schoolEditModel?: undefined;
        submitting?: undefined;
        name?: undefined;
        classesEditModel?: undefined;
    } | {
        schoolEditModel: ClassesModel;
        submitting: boolean;
        name: any;
        saveBackData?: undefined;
        classesEditModel?: undefined;
    } | {
        submitting: boolean;
        classesEditModel: ClassesModel;
        name: any;
        saveBackData?: undefined;
        schoolEditModel?: undefined;
    };
    handleSubmit(): void;
    gradeSelected(value: LabeledValue): void;
    nameChage: (value: any) => void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Classes: MealClassesState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Classes, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
