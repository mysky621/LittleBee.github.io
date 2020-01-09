import { Loading, PageContent } from '@school/meal-react-framework/interfaces';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { Action, Dispatch } from 'redux';
import { FormComponentProps } from 'antd/lib/form';
import { MealMenuModel, ParamsModel, CopyModel } from '../../../Services/MealMenuService';
import { MealMenuState } from '../../../Models/MealMenu';
import 'moment/locale/zh-cn';
import { Moment } from 'moment';
export interface StateProps {
    mealMenuList: PageContent<MealMenuModel>;
    loading: boolean;
    deleting: boolean;
    times: Array<Date>;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
}
export interface HomeState {
    visible: boolean;
    date: Moment;
    copyModel: CopyModel;
    menuId: number;
    submitting: boolean;
    saveError: Error;
    mealMenuList: PageContent<MealMenuModel>;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values: ParamsModel) => void;
    delete: (values: number) => void;
    copy: (values: CopyModel) => void;
    getTimes: (values: string) => void;
}
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
    standardId: string;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class Home extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
        title: string;
        render: (record: MealMenuModel) => JSX.Element;
        key?: undefined;
    } | {
        title: string;
        key: string;
        render: (_: void, record: MealMenuModel) => JSX.Element;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        saveError: Error;
        submitting: boolean;
        mealMenuList: PageContent<MealMenuModel>;
    };
    showDele(record: MealMenuModel): JSX.Element;
    weekRecord(record: MealMenuModel, week: string): JSX.Element;
    isThisWeek(record: MealMenuModel): JSX.Element;
    showModal: (id: any) => void;
    handleOk: () => void;
    handleCancel: () => void;
    delete(id: number): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    onChange(d: Moment | null): void;
    disableTime(current: Moment): boolean;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Menu: MealMenuState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Menu }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
