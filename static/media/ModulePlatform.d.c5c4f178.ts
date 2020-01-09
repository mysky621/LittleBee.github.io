import React, { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Field } from '@school/react-web-school-components';
import { ModulePlatformEditModel, ModulePlatformFetchParams, ModulePlatformSaveParams } from '../../Services/ModuleService';
import { OptionProps } from 'antd/lib/select';
export interface ModulePlatformEditOwnerProps extends FormComponentProps {
    platform: string;
    moduleId: number;
}
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    modulePlatformEditModel: ModulePlatformEditModel;
    saveError: Error;
}
export interface DispatchProps {
    saveModulePlatform: (values: ModulePlatformSaveParams) => void;
    fetchModulePlatform: (values: ModulePlatformFetchParams) => void;
}
declare type ModulePlatfromEditProps = ModulePlatformEditOwnerProps & StateProps & DispatchProps;
interface ModulePlatfromEditState {
}
declare class ModulePlatfromEdit extends PureComponent<ModulePlatfromEditProps, ModulePlatfromEditState> {
    state: ModulePlatfromEditState;
    constructor(props: ModulePlatfromEditProps);
    _columns(): Field[];
    _fieleMap(): Map<string, Field>;
    componentDidMount(): void;
    handleSubmit(): void;
    _filterOption: (input: string, option: React.ReactElement<OptionProps, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>) => boolean;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof ModulePlatfromEdit, Pick<ModulePlatfromEditProps, "platform" | "form" | "wrappedComponentRef" | "moduleId"> & ModulePlatformEditOwnerProps>, Pick<ModulePlatformEditOwnerProps, "platform" | "wrappedComponentRef" | "moduleId">>;
export default _default;
