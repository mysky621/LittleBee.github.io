import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { FormComponentProps } from 'antd/lib/form';
import { PlatFormUnitModel } from '../Services/PlatFormUnitService';
import { PlatFormUnitState } from '../Models/PlatFormUnit';
export interface StateProps {
    unitList: PageContent<PlatFormUnitModel>;
    loading: boolean;
    deleting: boolean;
    deleteError: Error;
}
export interface HomeState {
    searchParams: Pagable;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: Pagable) => void;
    delete: (values: number) => void;
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
        render: (_: void, record: PlatFormUnitModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): {
        unitList: PageContent<PlatFormUnitModel>;
    };
    /**
     * 删除单位
     */
    _del(id: number): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Plat_Form_Unit: PlatFormUnitState;
}
export declare const mapState: ({ Module_Meal_Plat_Form_Unit, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
