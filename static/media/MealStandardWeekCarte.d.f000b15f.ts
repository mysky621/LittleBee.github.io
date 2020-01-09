import { PureComponent } from 'react';
import { FormComponentProps } from 'antd/lib/form';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-framework/interfaces';
import { MealPublicityState } from '../../Models/MealPublicity';
import { CarteListModel, CarteSimpleModel } from '../../Services/MealPublicityService';
import { UploadChangeParam, RcFile } from 'antd/lib/upload/interface';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
interface OwnerPrams {
    standardId: string;
    carteStandardId: string;
}
export interface StateProps {
    carteList: Array<CarteListModel>;
    loading: boolean;
    templateResponseModel: ResponseModel;
    deleting: boolean;
    deleteResponse: ResponseModel;
    downLoading: boolean;
}
export interface DispatchProps {
    fetch: (values: number) => void;
    downTemplate: (values: {
        id: number;
        simpleTemplate: boolean;
    }) => void;
    deleteCarte: (values: number) => void;
}
declare type HomeProps = FormComponentProps & RouteComponentProps<OwnerPrams> & StateProps & DispatchProps;
export interface HomeState {
    carteStandardId: number;
    accessToken: string;
    tokenType?: string;
    fileList: RcFile[];
    visible: boolean;
    uploadButton: boolean;
    templateResponseModel: ResponseModel;
    mealStandardId: number;
    deleteResponse: ResponseModel;
    downTemplatePage: boolean;
}
declare class Home extends PureComponent<HomeProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (value: number) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (value: CarteSimpleModel, record: CarteListModel) => JSX.Element;
    })[];
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        deleteResponse: ResponseModel;
        templateResponseModel?: undefined;
        downTemplatePage?: undefined;
    } | {
        templateResponseModel: ResponseModel;
        downTemplatePage: boolean;
        deleteResponse?: undefined;
    } | {
        deleteResponse?: undefined;
        templateResponseModel?: undefined;
        downTemplatePage?: undefined;
    };
    _onChange(file: UploadChangeParam): void;
    handleCancel: () => void;
    downTemplateCancel: () => void;
    handleOk: () => void;
    downTemplate(simple: boolean): void;
    _uploadRender(): JSX.Element;
    _onDeleteCart(carteId: number): void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Publicity: MealPublicityState;
}
export declare const mapStateToProps: ({ loading, Module_Meal_Publicity }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Home, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
