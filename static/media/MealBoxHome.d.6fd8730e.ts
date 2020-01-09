import { FormComponentProps } from 'antd/lib/form';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { MealBoxModel } from '../Services/MealBoxService';
interface OwenrProps {
    unitId: number;
}
export interface StateProps {
    mealBoxList: PageContent<MealBoxModel>;
    loading: boolean;
    deleting: boolean;
}
export interface HomeState {
    searchParams?: Pagable;
    mealBoxModel?: MealBoxModel;
}
export interface DispatchProps {
    fetch: (values?: Pagable) => void;
    delete: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & OwenrProps;
declare class MealBoxList extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: MealBoxModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentWillMount(): void;
    componentDidMount(): void;
    _loadData(): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    delete(id: number): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof MealBoxList, Pick<HomeProps, "form" | "wrappedComponentRef" | "unitId">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
