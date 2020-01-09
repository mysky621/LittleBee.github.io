import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { UserState } from '@school/meal-react-framework/Models/User';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { BusinessServiceSettingState } from '../Models/BusinessServiceSetting';
import { SettingEditModel } from '../Services/BusinessServiceSettingService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
interface OwnerProps {
}
interface OwnerPrams {
    schoolId: string;
}
interface StateProps {
    loading: boolean;
    businessServiceSetting: SettingEditModel;
    currentUser?: UserDetail;
    submitting: boolean;
    resultMessage: ResponseModel;
}
interface HomeState {
    submitting: boolean;
    businessId: number;
    schoolId: number;
    businessServiceSetting: SettingEditModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: {
        businessId: number;
        schoolId: number;
    }) => void;
    save: (values: SettingEditModel) => void;
    cleanResultMessage: () => void;
    cleanInfo: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Settings extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): {
        businessServiceSetting: SettingEditModel;
    } | null;
    handleSubmit(): void;
    dayOrderCheck(checked: boolean): void;
    monthOrderCheck(checked: boolean): void;
    offlineCheck(checked: boolean): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Business_Service_Setting: BusinessServiceSettingState;
    User: UserState;
}
export declare const mapState: ({ Business_Service_Setting, User, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Settings, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
