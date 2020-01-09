import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { TermsModel } from '../../Services/TermsService';
import { MealTermsState } from '../../Models/Terms';
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
    termsEditModel: TermsModel;
    currentUser?: UserDetail;
}
interface HomeState {
    submitting: boolean;
    saveBackData: ResponseModel;
    id: number;
    unitId: number;
    termsEditModel: TermsModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: TermsModel) => void;
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
        termsEditModel?: undefined;
    } | {
        schoolEditModel: TermsModel;
        saveBackData?: undefined;
        submitting?: undefined;
        termsEditModel?: undefined;
    } | {
        submitting: boolean;
        termsEditModel: TermsModel;
        saveBackData?: undefined;
        schoolEditModel?: undefined;
    };
    handleSubmit(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Terms: MealTermsState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Terms, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
