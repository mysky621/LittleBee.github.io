import { PureComponent } from 'react';
import { Action, Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { Loading } from '@school/meal-react-web-framework';
import { FormComponentProps } from 'antd/lib/form';
import { DishesEditModel, MaterialModel, DishesMaterialModel } from '../Services/DishesService';
import { ModuleDishesState } from '../Models/Dishes';
import { SelectValue } from 'antd/lib/select';
import { UploadFile } from 'antd/lib/upload/interface';
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
    dishesEditModel: DishesEditModel;
    materials: MaterialModel[];
}
interface HomeState {
    submitting: boolean;
    saveError: Error;
    title: string;
    dishesEditModel: DishesEditModel;
    foodProductsType: string;
    dishesType: string;
    materialModels: DishesMaterialModel[];
    materials: MaterialModel[];
    visible: boolean;
    dishesMaterialNames: SelectValue;
    previewVisible: boolean;
    previewImage: string;
    fileList: UploadFile[];
    filesLength: number;
}
/**
 * action的props
 */
export interface DispatchProps {
    get: (values: number) => void;
    save: (values: DishesEditModel) => void;
    fetchMaterials: () => void;
    fetchMaterial: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & RouteComponentProps<OwnerPrams> & OwnerProps & DispatchProps;
declare class DishesEdit extends PureComponent<HomeProps, HomeState> {
    constructor(props: HomeProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: HomeProps, prevState: HomeState): {
        filesLength: number;
        fileList: {
            response: import("@school/meal-react-framework/Services/AttachmentService").AttachmentModel;
            url: string;
            uid: number;
            size: number;
            name: string;
            type: string;
        }[];
        region: string[];
        dishesEditModel: DishesEditModel;
        materialModels: DishesMaterialModel[];
        dishesMaterialNames: SelectValue;
        saveError?: undefined;
        submitting?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        filesLength?: undefined;
        fileList?: undefined;
        region?: undefined;
        dishesEditModel?: undefined;
        materialModels?: undefined;
        dishesMaterialNames?: undefined;
    };
    handleSubmit(): void;
    handleChange(value: SelectValue): void;
    onChangeFoodProductsType: (e: any) => void;
    onChangeDishesType: (e: any) => void;
    delPeriod: (key: SelectValue) => void;
    showModal: () => void;
    handleCancel: () => void;
    handlePictureCancel: () => void;
    handlePreview: (file: any) => void;
    removePicture: (value: any) => void;
    onChange1: (value: any) => void;
    render(): JSX.Element;
}
interface StateParams {
    loading: Loading;
    Module_Dishes: ModuleDishesState;
}
export declare const mapState: ({ Module_Dishes, loading }: StateParams) => StateProps;
export declare const mapDispatch: (dispatch: Dispatch<Action>) => DispatchProps;
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof DishesEdit, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
