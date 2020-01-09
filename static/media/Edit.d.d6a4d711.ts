import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { GradeEditModel, GradeModel } from '../../Services/GradeService';
import { MealGradeState } from '../../Models/Grade';
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
    saveError: Error;
    updateError: Error;
    gradeEditModel: GradeModel;
    currentUser?: UserDetail;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    untiId: number;
    id: number;
    gradeEditModel: GradeModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: GradeEditModel) => void;
    cleanData: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        schoolEditModel: GradeModel;
        saveError: Error;
        submitting: boolean;
        gradeEditModel?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        gradeEditModel: GradeModel;
        schoolEditModel?: undefined;
    };
    handleSubmit(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Grade: MealGradeState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Grade, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
