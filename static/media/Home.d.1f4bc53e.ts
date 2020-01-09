import { Loading } from '@school/meal-react-framework/interfaces';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { Action, Dispatch } from 'redux';
import { PlatFormUnitUserState } from '../../Models/UnitUser';
import { UnitUserModel } from '../../Services/UnitUserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    unitUserList: Array<UnitUserModel>;
    loading: boolean;
    deleting: boolean;
    delBackData: ResponseModel;
}
export interface HomeState {
    unitId: number;
    delBackData: ResponseModel;
}
interface OwnParams {
    unitId: string;
}
/**
 * action的props
 */
export interface DispatchProps {
    feach: (values: number) => void;
    delete: (values: {
        unitId: number;
        userId: number;
    }) => void;
    resetPassword: (values: number) => void;
}
declare type HomeProps = StateProps & DispatchProps & RouteComponentProps<OwnParams>;
declare class Home extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
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
        key: string;
        render: (_: void, record: UnitUserModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        delBackData: ResponseModel;
    };
    delete(userId: number): void;
    resetPassword(userId: number): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Plat_Form_Unit_User: PlatFormUnitUserState;
}
export declare const mapStateToProps: ({ loading, Module_Plat_Form_Unit_User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "match" | "location" | "history" | "staticContext">>;
export default _default;
