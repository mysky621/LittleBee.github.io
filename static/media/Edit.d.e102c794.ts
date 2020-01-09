import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { UnitUserModel, UnitUserEditModel } from '../../Services/UnitUserService';
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    unitUserModel: UnitUserModel;
}
interface OwnerPrams {
    userId: string;
    unitId: string;
}
export interface DispatchProps {
    fetchUser: (values: number) => void;
    save: (values: UnitUserEditModel) => void;
    cleanData: () => void;
}
declare type HomeProps = RouteComponentProps<OwnerPrams> & StateProps & DispatchProps & FormComponentProps;
interface HomeState {
    userId: number;
    submitting: boolean;
    saveError: Error;
    unitUserModel: UnitUserModel;
    params: {
        unitId: string;
        userId: string;
    };
}
declare class ModuleMenuEdit extends PureComponent<HomeProps, HomeState> {
    state: HomeState;
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        unitUserModel: UnitUserModel;
        saveError: Error;
        submitting: boolean;
    };
    handleSubmit(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleMenuEdit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
