import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { ModuleModel, ModuleSearchModel } from '../../Services/ModuleService';
export interface StateProps {
    moduleList: ModuleModel[];
    loading: boolean;
    deleting: boolean;
}
/**
 * action的props
 */
export interface DispatchProps {
    feach: (values: ModuleSearchModel) => void;
    delete: (values: number) => void;
}
declare type ModuleProps = FormComponentProps & StateProps & DispatchProps;
declare class ModuleList extends PureComponent<ModuleProps> {
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
        dataIndex: string;
        key: string;
        render: (text: string[]) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: ModuleModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: ModuleProps);
    componentWillMount(): void;
    loadData(moduleSearchModel: ModuleSearchModel): void;
    handleFormReset(): void;
    handleSubmit(): void;
    renderSimpleForm(): JSX.Element;
    deleteUnit(unitId: number): void;
    renderMoreBtnMenu(record: ModuleModel): JSX.Element;
    renderMoreBtn(record: ModuleModel): JSX.Element;
    delete(moduleId: number): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModuleList, Pick<ModuleProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
