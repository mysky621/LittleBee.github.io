import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RcFile, UploadChangeParam } from 'antd/lib/upload/interface';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
import { UserParams, StudentSimpleModel, OrderPaymentEditModel, OrderPaymentUserModelEdit } from '../../Services/OrderPaymentServices';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export interface OwnerPrams extends FormComponentProps {
    id: string;
    next: (id: number) => void;
    previous: () => void;
}
export interface StateProps {
    userList: Array<SimpleModel>;
    orderPaymentUsers: Array<StudentSimpleModel>;
    currentOrderPaymentEditModel: OrderPaymentEditModel;
    addOrderPaymentUserResponseModel: ResponseModel;
}
export interface DispatchProps {
    fetchUserList: (values: UserParams) => void;
    fetchOrderPaymentUser: (values: number) => void;
    addOrderPaymentUser: (values: OrderPaymentUserModelEdit) => void;
}
declare type OrderPaymentEditProps = StateProps & DispatchProps & OwnerPrams;
interface HomeState {
    visible: boolean;
    accessToken: string;
    tokenType?: string;
    fileList: RcFile[];
    uploadButton: boolean;
    importFile: string;
    checkUserList: Array<number>;
    orderPaymentUsers: Array<StudentSimpleModel>;
    userList: Array<SimpleModel>;
    addOrderPaymentUserResponseModel: ResponseModel;
    userNum: number;
}
declare class Edit2 extends PureComponent<OrderPaymentEditProps, HomeState> {
    static getDerivedStateFromProps(nextProps: OrderPaymentEditProps, prevState: HomeState): {
        userList: SimpleModel[];
        orderPaymentUsers?: undefined;
        checkUserList?: undefined;
        userNum?: undefined;
    } | {
        orderPaymentUsers: StudentSimpleModel[];
        checkUserList: number[];
        userNum: number;
        userList?: undefined;
    } | {
        userList?: undefined;
        orderPaymentUsers?: undefined;
        checkUserList?: undefined;
        userNum?: undefined;
    };
    columnsList: {
        title: string;
        dataIndex: string;
        key: string;
        width: number;
    }[];
    constructor(props: OrderPaymentEditProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleCancel: () => void;
    handleOk: () => void;
    convert(base64Str: string): ArrayBuffer;
    _onChange(file: UploadChangeParam): void;
    imports(): void;
    downTemplate(): void;
    _uploadRender(): JSX.Element;
    handleSubmit(): void;
    _selectUserIds(value: any): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Edit2, Pick<OrderPaymentEditProps, "form" | "next" | "id" | "wrappedComponentRef" | "previous">>, Pick<OwnerPrams, "next" | "id" | "wrappedComponentRef" | "previous">>;
export default _default;
