import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { RouteComponentProps } from 'react-router';
import 'moment/locale/zh-cn';
import { EvaluateModel, EvaluateParamsModel, StandardSimpleModel, ItemModel, ItemScoreModel } from '../Services/EvaluateService';
import { SimpleModel } from 'Modules/School/Services/StudentService';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
import { SelectValue } from 'antd/lib/select';
interface OwnerPrams {
    id: string;
}
export interface StateProps {
    evaluateList: PageContent<EvaluateModel>;
    loading: boolean;
    schoolList: Array<SimpleModel>;
    standardList: Array<StandardSimpleModel>;
    currentUser: UserDetail;
    itemList: Array<ItemModel>;
    allItemList: Array<ItemModel>;
    itemScores: ItemScoreModel;
}
export interface HomeState {
    searchParams: EvaluateParamsModel;
    one: boolean;
    score: number[];
    itemId: number;
    initScore: string;
}
export interface DispatchProps {
    fetch: (values?: EvaluateParamsModel) => void;
    fetchStandards: (value: number) => void;
    fetchSchools: (value: number) => void;
    fetchItems: (_: void) => void;
    fetchItemScore: (_: void) => void;
    fetchAllItems: (_: void) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<OwnerPrams>;
declare class EvaluateList extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    })[];
    constructor(props: HomeProps);
    componentWillMount(): void;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _handleItemChange(e: SelectValue): void;
    _handleScoreChange(e: SelectValue): void;
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    _table(): ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    })[];
    _dateSource(): {
        id: number;
        mealsDate: string;
        standardName: string;
        userName: string;
        shoolName: string;
        evaluateDate: string;
        itemMap: {
            [key: number]: string[];
        };
    }[];
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof EvaluateList, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
