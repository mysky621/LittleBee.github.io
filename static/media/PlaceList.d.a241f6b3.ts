import { FormComponentProps } from 'antd/lib/form';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { PlaceModel, SimpleModel } from './../../Services/PlaceService';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
interface OwenrProps extends FormComponentProps {
    schoolId: number;
}
export interface StateProps {
    placeList: PageContent<PlaceModel>;
    loading: boolean;
    deleting: boolean;
    classesList: SimpleModel[];
    currentUser?: UserDetail;
}
export interface HomeState {
    searchParams?: Pagable;
    placemodel?: PlaceModel;
    schoolId: number;
    classesList: SimpleModel[];
}
export interface DispatchProps {
    feach: (values?: Pagable) => void;
    delete: (values: number) => void;
    fetchClasses: (values: number) => void;
}
declare type HomeProps = StateProps & DispatchProps & OwenrProps;
declare class PlaceList extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: PlaceModel) => JSX.Element;
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
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof PlaceList, Pick<HomeProps, "form" | "wrappedComponentRef" | "schoolId">>, Pick<OwenrProps, "wrappedComponentRef" | "schoolId">>;
export default _default;
