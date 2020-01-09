import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { MealBusinessState } from '../../Models/Business';
import { SearchUnitSettings, UnitSettings, UnitSettingsContent } from '../../Services/BusinessService';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    unitSettings: UnitSettingsContent;
    currentUser?: UserDetail;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    unitSettings: UnitSettingsContent;
    dayOrder: boolean;
    monthOrder: boolean;
    online: boolean;
    offline: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    getUnitSettings: (values: SearchUnitSettings) => void;
    saveUnitSettings: (values: UnitSettings) => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Settings extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        unitSettings: UnitSettingsContent;
        dayOrder: boolean;
        monthOrder: boolean;
        online: boolean;
        offline: boolean;
        saveError?: undefined;
        submitting?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        unitSettings?: undefined;
        dayOrder?: undefined;
        monthOrder?: undefined;
        online?: undefined;
        offline?: undefined;
    };
    handleSubmit(): void;
    dayOrderCheck(checked: boolean): void;
    monthOrderCheck(checked: boolean): void;
    onlineCheck(checked: boolean): void;
    offlineCheck(checked: boolean): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Business: MealBusinessState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Business, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Settings, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
