import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { UserState } from '@school/meal-react-framework/Models/User';
import { FormComponentProps } from 'antd/lib/form';
import { BusinessModel, BusinessAuditModel } from '../Services/BusinessService';
import { MealBusinessState } from '../Models/Business';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface StateProps {
    businessList: PageContent<BusinessModel>;
    loading: boolean;
    deleting: boolean;
    deleteError: Error;
    resultMessage: ResponseModel;
}
export interface HomeState {
    searchParams: Pagable;
    editBusiness?: BusinessModel;
    businessList: PageContent<BusinessModel>;
    showSettledModal: boolean;
    auditModalVisible: boolean;
    auditBusinessId: number;
    notPass: boolean;
    auditStatus: string;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: Pagable) => void;
    delete: (values: number) => void;
    audit: (values: BusinessAuditModel) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: Date) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: BusinessModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): {
        businessList: PageContent<BusinessModel>;
    };
    hiddenDivider(hidden: boolean): JSX.Element | null;
    auditForm(): JSX.Element;
    onPassChange: (e: any) => void;
    toAuditBusiness(): void;
    /**
     * 删除商家
     */
    _delBusiness(id: number): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Business: MealBusinessState;
    User: UserState;
}
export declare const mapState: ({ Module_Meal_Business, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
