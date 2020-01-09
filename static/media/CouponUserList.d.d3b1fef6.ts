import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { CouponUserModel, StatisticsParams, StatisticsResult, SearchStatisticsParams } from '../Services/CouponUserService';
import { RouteComponentProps } from 'react-router';
import 'moment/locale/zh-cn';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
interface OwenrProps {
    couponId: number;
}
interface OwnerPrams {
    id: string;
}
export interface StateProps {
    couponUserList: PageContent<CouponUserModel>;
    loading: boolean;
    businessList: Array<SimpleModel>;
    statisticsUsedCouponResult: StatisticsResult;
}
export interface HomeState {
    searchParams: SearchStatisticsParams;
    statisticsParams?: StatisticsParams;
}
export interface DispatchProps {
    fetch: (values?: SearchStatisticsParams) => void;
    fetchBusiness: () => void;
    statisticsUsedCoupon: (values: StatisticsParams) => void;
}
declare type HomeProps = FormComponentProps & StateProps & DispatchProps & OwenrProps & RouteComponentProps<OwnerPrams>;
declare class CouponUserList extends PureComponent<HomeProps, HomeState> {
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
        render: (_: void, record: CouponUserModel) => JSX.Element;
    })[];
    constructor(props: HomeProps);
    componentWillMount(): void;
    componentDidMount(): void;
    _showCouponTypes(record: CouponUserModel): string;
    _handleFormReset(): void;
    _handleSubmit(): void;
    _showDate(record: CouponUserModel): string;
    _showCouponType(record: CouponUserModel): "商家优惠券" | "平台优惠券";
    _showcouponStatus(record: CouponUserModel): "已使用" | "未使用";
    _renderSimpleForm(): JSX.Element;
    _onPaginationChange(page: number, pageSize?: number): void;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof CouponUserList, Pick<HomeProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef" | "couponId">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
