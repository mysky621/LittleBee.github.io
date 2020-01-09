import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export interface OrderPaymentModel {
    id: number;
    createDate: Date;
    startDate: Date;
    endDate: Date;
    money: number;
    payMoney: number;
    orderPayMethod: string;
    orderPaymentStatus: string;
}
export interface OrderPaymentListModel extends OrderPaymentModel {
    createUserName: string;
    unitName: string;
    gradeList: Array<SimpleModel>;
    payDetail: string;
    overdueDate: Date;
}
/**
 * 创建缴费单model
 */
export interface OrderPaymentEditModel extends OrderPaymentModel {
    unitId: number;
    gradeList: Array<SimpleModel>;
    mealDates: Array<string>;
    mealNum: number;
    mealStandard: MealStandard;
    userList: Array<SimpleModel>;
    overdueDate: Date;
    name: string;
    firstData: string;
    remarkData: string;
    orderPaymentType: string;
    mealStandardDetailModel: MealStandard;
    paymentBeginDate: Date;
    gradeIds: Array<number>;
}
export interface MealStandard {
    id: number;
    name: string;
    price: number;
}
export declare const OrderPaymentStatus: {
    Unpublished: string;
    Published: string;
    Publishing: string;
};
export declare const OrderPayMethod: {
    Online: string;
    Offline: string;
};
export interface OrderPaymentHolidayQueryModel {
    beginDate: Date;
    endDate: Date;
    workStatuses: Array<string>;
}
export interface UserParams {
    id: number;
    unitId: number;
    gradeIds: Array<number>;
    startDate: string;
    endDate: string;
}
export interface TermRange {
    startDate: Date;
    endDate: Date;
}
export interface DefaultTemplateMessage {
    firstData: string;
    remarkData: string;
}
export interface OrderPaymentTemplateMessage extends DefaultTemplateMessage {
    orderPaymentId: number;
}
export interface StudentSimpleModel {
    /**
     * 用户id
     */
    userId: number;
    /**
     * 关联用户id
     */
    associatedUserId: number;
    /**
     * 用户名称
     */
    name: string;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 班级名称
     */
    classesName: string;
}
export interface OrderPaymentUserModelEdit {
    orderPaymentId: number;
    userIds: Array<number>;
}
/**
 * 关联用户model
 */
export interface AssociatedUserModel {
    /**
     * 关联用户id
     */
    associatedUserId: number;
    /**
     * 名字
     */
    name: string;
    /**
     * 年级名称
     */
    gradeName: string;
    /**
     * 班级名称
     */
    classesName: string;
}
export interface SearchStudentParams {
    name: string;
    grades: number[];
    pagesize: number;
}
export interface OrderSupplementEditModel {
    id: number;
    orderPaymentId: number;
    associatedUserIds: Array<number>;
    foodProductsType: string;
}
export interface OrderPaymentSupplementDeleteModel {
    orderPaymentId: number;
    orderIds: Array<number>;
}
/**
 * 创建缴费单
 */
declare function save(ordePaymentEditModel: OrderPaymentEditModel): Promise<any>;
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<OrderPaymentModel>>;
declare function get(id: number): Promise<any>;
/**
 * 删除缴费单
 * @param id
 */
declare function del(id: number): Promise<any>;
/**
 * 发布缴费单
 * @param id
 */
declare function publish(id: number): Promise<any>;
declare function fetchGradeList(unitId: number): Promise<any>;
declare function fetchMealStandard(gradeIds: Array<number>): Promise<any>;
declare function fetchUserList(params: UserParams): Promise<any>;
declare function getHolidayDate(params: OrderPaymentHolidayQueryModel): Promise<any>;
declare function fetchCurrentTerm(unitId: number): Promise<any>;
/**
 * 获取默认模板消息内容
 */
declare function getDefaultTemplateMessage(params: {
    unitId: number;
    orderPaymentId: number;
}): Promise<DefaultTemplateMessage>;
/**
 * 缴费提醒
 *
 * @param orderPayment
 */
declare function remind(orderPaymentId: number): Promise<ResponseModel>;
declare function getOrderPaymentUser(orderPaymentId: number): Promise<Array<StudentSimpleModel>>;
declare function addOrderPaymentUser(params: OrderPaymentUserModelEdit): Promise<ResponseModel>;
declare function addOrderPaymentTemplateMessage(params: OrderPaymentTemplateMessage): Promise<ResponseModel>;
declare function getOrderSupplementUser(params: SearchStudentParams): Promise<StudentSimpleModel>;
declare function supplementOrder(params: OrderSupplementEditModel): Promise<ResponseModel>;
declare function delSupplementOrder(params: OrderPaymentSupplementDeleteModel): Promise<ResponseModel>;
declare function fetchCurrentServiceSchoolList(): Promise<any>;
declare const _default: {
    save: typeof save;
    getList: typeof getList;
    get: typeof get;
    delete: typeof del;
    fetchGradeList: typeof fetchGradeList;
    fetchMealStandard: typeof fetchMealStandard;
    fetchUserList: typeof fetchUserList;
    publish: typeof publish;
    getHolidayDate: typeof getHolidayDate;
    fetchCurrentTerm: typeof fetchCurrentTerm;
    getDefaultTemplateMessage: typeof getDefaultTemplateMessage;
    remind: typeof remind;
    getOrderPaymentUser: typeof getOrderPaymentUser;
    addOrderPaymentUser: typeof addOrderPaymentUser;
    addOrderPaymentTemplateMessage: typeof addOrderPaymentTemplateMessage;
    getOrderSupplementUser: typeof getOrderSupplementUser;
    supplementOrder: typeof supplementOrder;
    delSupplementOrder: typeof delSupplementOrder;
    fetchCurrentServiceSchoolList: typeof fetchCurrentServiceSchoolList;
};
export default _default;
