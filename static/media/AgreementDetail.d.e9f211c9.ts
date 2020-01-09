import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { AgreementSaveModel } from '../../Services/AgreementService';
export interface StateProps {
    loading: boolean;
    agreementSaveModel: AgreementSaveModel;
}
export interface DispatchProps {
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
declare class AgreementDetail extends PureComponent<ModuleEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleEditProps);
    componentWillMount(): void;
    componentWillUnmount(): void;
    goBack(): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof AgreementDetail, Pick<ModuleEditProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
