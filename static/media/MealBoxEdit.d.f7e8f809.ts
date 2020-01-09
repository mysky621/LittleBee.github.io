import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { UploadFile } from 'antd/lib/upload/interface';
import { MealBoxEditModel, DishesModel, DishesWeightModel, ImageModel } from '../Services/MealBoxService';
import { ModuleMealBoxState } from '../Models/MealBox';
interface OwnerProps {
}
interface OwnerPrams {
    id: string;
}
interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    updateError: Error;
    mealBoxEditModel: MealBoxEditModel;
    dishesList: DishesModel[];
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    mealBoxEditModel: MealBoxEditModel;
    foodProductsType: string;
    dishes: DishesModel[];
    visible: boolean;
    previewVisible: boolean;
    previewImage: string;
    fileList: UploadFile[];
    filesLength: number;
    mealDishes: DishesWeightModel[];
    ageBegin: number;
    ageEnd: number;
    showVisible: boolean;
    materials: ImageModel[];
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: MealBoxEditModel) => void;
    fetchDishse: (values: string) => void;
    clean: () => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class MealBoxEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        mealBoxEditModel: MealBoxEditModel;
        filesLength: number;
        region: string[];
        materials: ImageModel[];
        mealDishes: {
            id: number;
            dishesId: number;
            dishesName: string;
            key: number;
            weight: string;
        }[];
        fileList: {
            response: import("@school/meal-react-framework/Services/AttachmentService").AttachmentModel;
            url: string;
            uid: number;
            size: number;
            name: string;
            type: string;
        }[];
        saveError?: undefined;
        submitting?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        mealBoxEditModel?: undefined;
        filesLength?: undefined;
        region?: undefined;
        materials?: undefined;
        mealDishes?: undefined;
        fileList?: undefined;
    };
    handleSubmit(): void;
    handleChange: (key: any, value: any) => void;
    weightChange: (index: any, value: any, dishesId: any) => void;
    onChangeFoodProductsType: (e: any) => void;
    showModal: () => void;
    showVisibalModal: () => void;
    handleCancel: () => void;
    visibaCancel: () => void;
    handlePreview: (file: any) => void;
    removePicture: (value: any) => void;
    onChangePicture: (value: any) => void;
    delRow: (key: any) => void;
    ageBeginChage: (value: any) => void;
    ageEndChage: (value: any) => void;
    addChange: () => void;
    _renderUpload(): JSX.Element;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_MealBox: ModuleMealBoxState;
}
export declare const mapState: ({ Module_MealBox, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof MealBoxEdit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
