import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { AgreementModel, AgreementSearchModel } from '../../Services/AgreementService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
interface HomeState {
    agreementModel: AgreementModel;
}
export interface StateProps {
    agreementList: AgreementModel[];
    loading: boolean;
    deleting: boolean;
    resultMessage: ResponseModel;
}
/**
 * action的props
 */
export interface DispatchProps {
    feach: (values: AgreementSearchModel) => void;
    delete: (values: number) => void;
    setServiceStatus: (values: number) => void;
    cleanResultMessage: () => void;
}
declare type AgreementProps = FormComponentProps & StateProps & DispatchProps;
declare class AgreementList extends PureComponent<AgreementProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string, record: AgreementModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: AgreementModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: AgreementProps);
    componentWillReceiveProps(nextProps: StateProps): void;
    setServiceStatus(id: number): void;
    componentWillMount(): void;
    loadData(agreementSearchModel: AgreementSearchModel): void;
    handleFormReset(): void;
    delete(agreementId: number): void;
    handleSubmit(): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof AgreementList, Pick<AgreementProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
