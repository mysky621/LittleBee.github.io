import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { FormComponentProps } from 'antd/lib/form';
import { SchoolModel, SchoolTypeModel } from '../../Services/SchoolService';
import { MealSchoolState } from '../../Models/School';
export interface StateProps {
    schoolList: PageContent<SchoolModel>;
    loading: boolean;
    deleting: boolean;
    deleteError: Error;
}
export interface HomeState {
    searchParams: Pagable;
    editSchool?: SchoolModel;
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
        render: (text: SchoolTypeModel[]) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: Date) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: SchoolModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps): {
        schoolList: PageContent<SchoolModel>;
    };
    /**
     * 删除学校
     */
    _delSchool(id: number): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_School: MealSchoolState;
}
export declare const mapState: ({ Module_Meal_School, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
