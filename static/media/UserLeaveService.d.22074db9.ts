import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
export interface UserLeaveModel {
    id: number;
    /**
     * 用餐时间
     */
    leaveDate: Date;
    /**
     * 关联用户id
     */
    associatedUserId: number;
    /**
     * 关联用户id
     */
    associatedUserName: string;
    /**
     * 手机号
     */
    mobile: string;
    /**
     * 学校名称
     */
    schoolName: string;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 班级名称
     */
    classesName: string;
    /**
     * 发起时间
     */
    createdDate: Date;
    /**
     * 发起方
     */
    mealLeaveMethod: string;
    /**
     * 请假状态
     */
    leaveStatus: string;
}
export declare const MealLeaveMethod: {
    User: string;
    Business: string;
};
export declare const LeaveStatus: {
    Confirm: string;
    Cancel: string;
};
/**
 * 用户请假记录
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<UserLeaveModel>>;
/**
 * 导出请假记录
 * @param params
 */
declare function exportMealLeave(params: Pagable): Promise<any>;
/**
 * 获取服务学校商家列表
 * @param params
 */
declare function getBusinessList(): Promise<any>;
declare const _default: {
    getList: typeof getList;
    exportMealLeave: typeof exportMealLeave;
    getBusinessList: typeof getBusinessList;
};
export default _default;
