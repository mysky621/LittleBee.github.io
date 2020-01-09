import { PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { LabeledValue } from 'antd/lib/select';
import { PureComponent } from 'react';
import { ModuleAssignParams } from '../../Services/ModuleAssignService';
import { UnitEditModel } from '../../Services/UnitServices';
export interface ModuleAssignedUnitType {
    moduleId: number;
    moduleName: string;
    assignMonths?: number;
    unitId?: number;
    unitName?: string;
}
export interface ModuleAssignedUnitOwnerProps {
    /**
     * 已授权模块信息
     */
    assignedModule: ModuleAssignedUnitType;
    /**
     * 是否可见
     */
    visible: boolean;
    /**
     * 关闭回调，需要父级自行隐藏本元素
     */
    onClose: () => void;
}
export interface StateProps {
    submitting: boolean;
    assignError: Error;
    units: PageContent<UnitEditModel>;
}
export interface DispatchProps {
    assign: (values: ModuleAssignParams) => void;
    fetchUnit: (values: Pagable) => void;
}
declare type ModuleAssignedUnitProps = ModuleAssignedUnitOwnerProps & StateProps & DispatchProps;
interface HomeState {
    assignMonths: {
        label: string;
        value: number;
    };
    assignedModule: ModuleAssignedUnitType;
    associateIds: number[];
    search: boolean;
}
declare class ModuleAssignedUnit extends PureComponent<ModuleAssignedUnitProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleAssignedUnitProps);
    componentWillReceiveProps(nexProps: ModuleAssignedUnitProps): void;
    changeAssignMonth(values: number): void;
    handleSubmit(): void;
    onSearch(value: string): void;
    unitSelected(value: LabeledValue[]): void;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponentClass<typeof ModuleAssignedUnit, Pick<ModuleAssignedUnitProps, "visible" | "onClose" | "assignedModule">>;
export default _default;
