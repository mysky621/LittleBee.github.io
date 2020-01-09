import { FormComponentProps } from 'antd/lib/form';
import { PureComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { RefundRuleSaveModel, SchoolModel } from '../../Services/RefundRuleService';
import { CheckboxValueType, CheckboxOptionType } from 'antd/lib/checkbox/Group';
export interface StateProps {
    loading: boolean;
    submitting: boolean;
    saveError: Error;
    refundRuleSaveModel: RefundRuleSaveModel;
    schoolList: Array<SchoolModel>;
}
export interface DispatchProps {
    save: (values: RefundRuleSaveModel) => void;
    fetchRefundRule: (id: number) => void;
    clean: () => void;
    fetchSchool: (id: number) => void;
}
export interface MatchPathParams {
    id: string;
}
declare type ModuleEditProps = FormComponentProps & StateProps & DispatchProps & RouteComponentProps<MatchPathParams>;
interface HomeState {
    refundRule: RefundRuleSaveModel;
    checkedList: CheckboxValueType[];
    indeterminate: boolean;
    checkAll: boolean;
    plainOptions: Array<CheckboxOptionType>;
    defaultCheckedList: CheckboxValueType[];
    valueList: Array<number>;
}
declare class RefundRuleEdit extends PureComponent<ModuleEditProps, HomeState> {
    state: HomeState;
    constructor(props: ModuleEditProps);
    /**
     * 页面加载时执行方法
     */
    componentWillMount(): void;
    /**
     * 保存结果返回
     */
    componentWillReceiveProps(nextProps: ModuleEditProps): {
        saveError: Error;
        submitting: boolean;
        plainOptions: CheckboxOptionType[];
        indeterminate: boolean;
        refundRuleSaveModel?: undefined;
    } | {
        saveError: Error;
        submitting: boolean;
        refundRuleSaveModel: RefundRuleSaveModel;
        plainOptions?: undefined;
        indeterminate?: undefined;
    };
    /**
     * 点击保存
     */
    handleSubmit(): void;
    componentWillUnmount(): void;
    /**
     * 点击取消
     */
    goBack(): void;
    /**
     * 点击复选框的时候
     */
    onChange: (checkedList: any) => void;
    /**
     * 点击全部
     */
    onCheckAllChange: (e: any) => void;
    /**
     * 页面加载
     */
    render(): JSX.Element;
}
declare const _default: import("antd/lib/form/interface").ConnectedComponentClass<import("react-redux").ConnectedComponentClass<typeof RefundRuleEdit, Pick<ModuleEditProps, "form" | "match" | "location" | "history" | "staticContext" | "wrappedComponentRef">>, Pick<FormComponentProps<any>, "wrappedComponentRef">>;
export default _default;
