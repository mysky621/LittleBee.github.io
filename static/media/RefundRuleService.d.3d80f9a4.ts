import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
/**
 * 退费规则模型
 */
export interface RefundRuleModel {
    /**
     * id
     */
    id: number;
    /**
     * 规则名称
     */
    name: string;
    /**
     * 天数
     */
    days: number;
    /**
     * 退费周期
     */
    refundPeriod: string;
    /**
     * 规则类型
     */
    type: string;
    /**
     * 规则描述
     */
    ruleDescribe: string;
    unitList: Array<SchoolModel>;
}
export interface RefundRuleSimpleModel extends SimpleModel {
    unitList: Array<SimpleModel>;
}
/**
 * 学校model
 */
export interface SchoolModel {
    /**
     * 学校id
     */
    id: number;
    /**
     * 学校名称
     */
    name?: string;
}
/**
 * 退费规则搜索模型
 */
export interface RefundRuleSearchModel extends Pagable {
    /**
     * 规则名称
     */
    name: string;
}
/**
 * 规则类型
 */
export declare const RuleType: {
    /**
     * 连续
     */
    Continuity: string;
    /**
     * 累积
     */
    Accumulate: string;
};
/**
 * 退费周期
 */
export declare const RefundPeriod: {
    /**
     * 月
     */
    Month: string;
};
/**
 * 退费规则保存模型
 */
export interface RefundRuleSaveModel extends RefundRuleModel {
}
/**
 * 根据id查询退费规则
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 保存退费规则
 * @param msg
 */
declare function save(msg: RefundRuleSaveModel): Promise<any>;
/**
 * 删除退费规则
 */
declare function deleteRefundRule(refundRuleId: number): Promise<any>;
/**
 * 获取退费规则数据
 */
declare function getList(params: RefundRuleSearchModel): Promise<import("@school/meal-react-framework/interfaces").PageContent<RefundRuleModel>>;
/**
 * 获取学校
 */
declare function getSchoolList(id: number): Promise<any>;
/**
 * 获取当前单位所有规则
 */
declare function fetchSimpleRuleList(): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    getSchoolList: typeof getSchoolList;
    delete: typeof deleteRefundRule;
    fetchSimpleRuleList: typeof fetchSimpleRuleList;
};
/**
 * 默认导出方法
 */
export default _default;
