import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { AgreementSaveModel } from '../../Services/AgreementService';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    agreementSaveModel: AgreementSaveModel;
    currentUser?: UserDetail;
}
export interface DispatchProps {
    save: (values: AgreementSaveModel) => void;
    fetchAgreement: (moduleId: number) => void;
    clean: () => void;
}
export interface MatchPathParams {
    id: string;
}
declare type ModuleEditProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    agreement: AgreementSaveModel;
}
declare class AgreementEdit extends PureComponent<ModuleEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleEditProps);
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: ModuleEditProps): void;
    handleSubmit(): void;
    setFieldsValue: (content: any) => void;
    componentWillUnmount(): void;
    goBack(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof AgreementEdit, Pick<ModuleEditProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
