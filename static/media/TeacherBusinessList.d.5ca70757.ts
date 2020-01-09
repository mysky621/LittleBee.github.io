import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { BusinessServiceUnitModel, ModuleBusinessServiceUnitParams, ServicePeriodModel, UpdateStatusParams } from '../Services/BusinessServiceUnitService';
import { MealBusinessServiceUnitState } from '../Models/BusinessServiceUnit';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { UserState } from '@school/meal-react-framework/Models/User';
export interface StateProps {
    businessList: PageContent<BusinessServiceUnitModel>;
    loading: boolean;
    deleting: boolean;
    currentUser: UserDetail | undefined;
}
export interface HomeState {
    searchParams: ModuleBusinessServiceUnitParams;
    editBusiness?: BusinessServiceUnitModel;
    businessId: number;
    visible: boolean;
    businessServiceUnitPeriodList: ServicePeriodModel[];
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: ModuleBusinessServiceUnitParams) => void;
    delete: (values: number) => void;
    updateStatus: (values: UpdateStatusParams) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
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
        render: (text: string, record: BusinessServiceUnitModel) => JSX.Element;
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
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    showPeriodDate(businessServiceUnitPeriodList: ServicePeriodModel[]): void;
    updateStatus(values: UpdateStatusParams): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Business_Service_Unit: MealBusinessServiceUnitState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Business_Service_Unit, loading, User }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof BusinessServiceUnitHome, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
