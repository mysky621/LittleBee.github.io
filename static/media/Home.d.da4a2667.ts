import { FormComponentProps } from 'antd/lib/form';
import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { PureComponent } from 'react';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { CouponModel, CouponEditModel } from '../Services/CouponService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
interface OwenrProps {
    unitId: number;
}
export interface StateProps {
    couponList: PageContent<CouponModel>;
    loading: boolean;
    deleting: boolean;
    responseModel: ResponseModel;
}
export interface HomeState {
    searchParams?: Pagable;
    couponModel?: CouponModel;
}
export interface DispatchProps {
    fetch: (values?: Pagable) => void;
    delete: (values: number) => void;
    saveGive: (values: number) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & OwenrProps;
declare class Coupon extends PureComponent<HomeProps, HomeState> {
    columnsList: ({
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: CouponEditModel) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: boolean) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: CouponModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    constructor(props: HomeProps);
    componentWillMount(): void;
    componentWillReceiveProps(nexProps: HomeProps): void;
    componentDidMount(): void;
    _loadData(): void;
    _showDel(record: CouponModel): "" | JSX.Element;
    _detail(record: CouponEditModel): JSX.Element | "-";
    _ifDelete(record: CouponModel): JSX.Element;
    _handleFormReset(): void;
    _tralate(text: string): "" | "商家" | "平台";
    _giveTraslate(text: boolean): "已发放" | "未发放";
    _giveSave(id: number): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    delete(record: CouponModel): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof Coupon, Pick<HomeProps, "form" | "wrappedComponentRef" | "unitId">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
