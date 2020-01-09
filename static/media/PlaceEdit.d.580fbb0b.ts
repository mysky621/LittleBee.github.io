import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { PlaceModel, PlaceSearchModel, SimpleModel, HaveClassModel } from '../../Services/PlaceService';
import { ModulePlaceState } from '../../Models/Place';
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
    saveError: Error;
    updateError: Error;
    placeModel: PlaceModel;
    classes: SimpleModel[];
    haveClasses: SimpleModel[];
    currentUser?: UserDetail;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    placeModel?: PlaceSearchModel;
    classes: SimpleModel[];
    haveClasses: SimpleModel[];
    classNames: string[];
    classIds: number[];
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: PlaceModel) => void;
    fetchClasses: (values: number) => void;
    fetchHaveClasses: (values: HaveClassModel) => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class PlaceEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        region: string[];
        placeModel: PlaceModel;
        classNames: string[];
        haveClasses: SimpleModel[];
        saveError?: undefined;
        submitting?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        placeModel: PlaceModel;
        region?: undefined;
        classNames?: undefined;
        haveClasses?: undefined;
    };
    handleSubmit(): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Place: ModulePlaceState;
    User: UserState;
}
export declare const mapState: ({ Module_Place, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof PlaceEdit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
