import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { CascaderOptionType } from 'antd/lib/cascader';
import { Loading } from '@school/meal-react-web-framework';
import { CascaderRegionState } from '@school/meal-react-framework/Models/Region';
import { RegionCascaderModel } from '@school/meal-react-framework/Services/RegionServices';
import { FormComponentProps } from 'antd/lib/form';
import { PlatFormUnitEditModel } from '../Services/PlatFormUnitService';
import { PlatFormUnitState } from '../Models/PlatFormUnit';
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
    unitEditModel: PlatFormUnitEditModel;
    list: RegionCascaderModel[];
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    region: string[];
    unitEditModel: PlatFormUnitEditModel;
    isSelectMap: boolean;
    longitude: number;
    latitude: number;
    currentArea: string;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Edit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        region: string[];
        unitEditModel: PlatFormUnitEditModel;
        longitude: number;
        latitude: number;
        currentArea: string;
        saveError: Error;
        submitting: boolean;
    } | {
        saveError: Error;
        submitting: boolean;
        unitEditModel: PlatFormUnitEditModel;
        region?: undefined;
        longitude?: undefined;
        latitude?: undefined;
        currentArea?: undefined;
    };
    handleSubmit(): void;
    _changeRegionValue: (values: string[], selectedOptions: CascaderOptionType[]) => void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Plat_Form_Unit: PlatFormUnitState;
    Cascader_Region: CascaderRegionState;
}
export declare const mapState: ({ Module_Meal_Plat_Form_Unit, Cascader_Region, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
