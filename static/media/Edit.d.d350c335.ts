import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { CascaderOptionType } from 'antd/lib/cascader';
import { Loading } from '@school/meal-react-web-framework';
import { CascaderRegionState } from '@school/meal-react-framework/Models/Region';
import { RegionCascaderModel } from '@school/meal-react-framework/Services/RegionServices';
import { FormComponentProps } from 'antd/lib/form';
import { SchoolEditModel, SchoolTypeModel } from '../../Services/SchoolService';
import { MealSchoolState } from '../../Models/School';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare function setSchoolType(schoolType: SchoolTypeModel[]): string | undefined;
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
    schoolEditModel: SchoolEditModel;
    list: RegionCascaderModel[];
    response: ResponseModel;
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    region: string[];
    schoolEditModel: SchoolEditModel;
    selectedSchoolType?: string;
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
        schoolEditModel: SchoolEditModel;
        longitude: number;
        latitude: number;
        currentArea: string;
        selectedSchoolType: string | undefined;
        saveError: Error;
        submitting: boolean;
    } | {
        saveError: Error;
        submitting: boolean;
        schoolEditModel: SchoolEditModel;
        region?: undefined;
        longitude?: undefined;
        latitude?: undefined;
        currentArea?: undefined;
        selectedSchoolType?: undefined;
    };
    handleSubmit(): void;
    _changeRegionValue: (values: string[], selectedOptions: CascaderOptionType[]) => void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_School: MealSchoolState;
    Cascader_Region: CascaderRegionState;
}
export declare const mapState: ({ Module_Meal_School, Cascader_Region, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
