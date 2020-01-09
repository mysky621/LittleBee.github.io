import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { FormComponentProps } from 'antd/lib/form';
import { UploadFile } from 'antd/lib/upload/interface';
import { Loading } from '@school/meal-react-web-framework';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { MealPublicityState } from '../../Models/MealPublicity';
import { FetchCarteItemParams, CarteDetailModel, CarteEditModel } from '../../Services/MealPublicityService';
interface StateProps {
    submitting: boolean;
    loading: boolean;
    carteItem: CarteDetailModel;
    submitResponse: ResponseModel;
}
interface DispatchProps {
    fetchCarteItem: (values: FetchCarteItemParams) => void;
    saveCarte: (values: CarteEditModel) => void;
}
interface RouteParams {
    foodProductsType: string;
    date: string;
    standardId: string;
}
declare type IProps = StateProps & DispatchProps & FormComponentProps & RouteComponentProps<RouteParams>;
interface PageState {
    carteItem: CarteDetailModel;
    submitResponse: ResponseModel;
    foodProductsType: string;
    date: number;
    mealStandardId: number;
    fileList: UploadFile[];
    previewImage?: string;
}
declare class MealStandardCarteEdit extends PureComponent<IProps, PageState> {
    constructor(props: IProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: IProps, prevState: PageState): PageState;
    _handleSubmit(): void;
    _onChangePicture: (value: any) => void;
    _onPreview: (file: any) => void;
    handleCancelPreview: () => void;
    _onRemovePicture: (value: any) => void;
    _renderUpload(carteItem: CarteDetailModel): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Meal_Publicity: MealPublicityState;
}
export declare const mapState: ({ Module_Meal_Publicity, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof MealStandardCarteEdit, Pick<IProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
