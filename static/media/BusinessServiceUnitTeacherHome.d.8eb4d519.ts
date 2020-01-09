import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { BusinessServiceUnitModel, ModuleBusinessServiceUnitParams, ServicePeriodModel } from '../Services/BusinessServiceUnitService';
import { MealBusinessServiceUnitState } from '../Models/BusinessServiceUnit';
import { RouteComponentProps } from 'react-router';
export interface MatchPathParams {
    businessId: string;
}
export interface StateProps {
    businessList: PageContent<BusinessServiceUnitModel>;
    loading: boolean;
    deleting: boolean;
}
export interface HomeState {
    searchParams: ModuleBusinessServiceUnitParams;
    editBusiness?: BusinessServiceUnitModel;
    businessId: string;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: ModuleBusinessServiceUnitParams) => void;
    delete: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
declare class BusinessServiceUnitHome extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: BusinessServiceUnitModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string, record: BusinessServiceUnitModel) => string | JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: BusinessServiceUnitModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): {
        businessList: PageContent<BusinessServiceUnitModel>;
    };
    /**
     * 删除商家
     */
    _delBusiness(id: number): void;
    showPeriodDate(businessServiceUnitPeriodList: Array<ServicePeriodModel>): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Business_Service_Unit: MealBusinessServiceUnitState;
}
export declare const mapState: ({ Module_Meal_Business_Service_Unit, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof BusinessServiceUnitHome, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
