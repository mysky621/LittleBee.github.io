import { PageContent } from '@school/meal-react-framework/interfaces';
import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RefundRuleModel, RefundRuleSearchModel } from '../../Services/RefundRuleService';
import { UserDetail } from '@school/meal-react-framework/Services/UserService';
export interface HomeState {
    searchParams: RefundRuleSearchModel;
}
export interface StateProps {
    refundRuleList: PageContent<RefundRuleModel>;
    loading: boolean;
    deleting: boolean;
    currentUser?: UserDetail;
}
/**
 * action的props
 */
export interface DispatchProps {
    fetch: (values?: RefundRuleSearchModel) => void;
    delete: (values: number) => void;
}
declare type RefundRuleProps = FormComponentProps & StateProps & DispatchProps;
declare class RefundRuleList extends PureComponent<RefundRuleProps, HomeState> {
    listColumns: ({
        title: string;
        dataIndex: string;
        key: string;
        render?: undefined;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (text: string) => JSX.Element;
    } | {
        title: string;
        dataIndex: string;
        key: string;
        render: (_: void, record: RefundRuleModel) => JSX.Element;
    } | {
        title: string;
        key: string;
        render: (_: void, record: RefundRuleModel) => JSX.Element;
        dataIndex?: undefined;
    })[];
    /**
     * 构造方法
     */
    constructor(props: RefundRuleProps);
    /**
     * 页面加载
     */
    componentWillMount(): void;
    /**
     * 删除规则
     */
    delete(id: number): void;
    /**
     * 查询数据
     * @param refundRuleSearchModel
     */
    loadData(refundRuleSearchModel: RefundRuleSearchModel): void;
    /**
     * 重置查询条件
     */
    handleFormReset(): void;
    _onPaginationChange(page: number, pageSize?: number): void;
    getParams(): {
        params: {
            [x: string]: any;
        };
        name: string;
        page: number;
        size?: number | undefined;
    };
    /**
     * 检索搜索
     */
    handleSubmit(): void;
    renderSimpleForm(): JSX.Element;
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof RefundRuleList, Pick<RefundRuleProps, "form" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
