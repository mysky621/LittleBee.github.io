import { Pagable } from '@school/meal-react-framework/Utils/pagingRequest';
import { MapObject } from '@school/meal-react-framework/Models/createModel';
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
    name: string;
    /**
     * 法人
     */
    legalPerson: string;
    /**
     * 联系电话
     */
    officeTelephone: string;
    /**
     * 学校地址
     */
    unitAddress: string;
    /**
     * 加入时间
     */
    createdDate: Date;
    /**
     * 状态
     */
    statusType: string;
    /**
     * 学校类型
     */
    schoolType: Array<SchoolTypeModel>;
}
/**
 * 学校编辑model
 */
export interface SchoolEditModel {
    /**
     * 学校id
     */
    id: number;
    /**
     * 学校名称
     */
    name: string;
    /**
     * 法人
     */
    legalPerson: string;
    /**
     * 联系电话
     */
    officeTelephone: string;
    /**
     * 学校地址
     */
    unitAddress: string;
    /**
     * 省/市/县
     */
    region: string;
    /**
     * 省
     */
    province: string;
    /**
     * 市
     */
    city: string;
    /**
     * 县
     */
    area: string;
    /**
     * 街道
     */
    street: string;
    /**
     * 经度
     */
    longitude: number;
    /**
     * 纬度
     */
    latitude: number;
    /**
     * 状态
     */
    statusType: string;
    /**
     * 学校类型
     */
    schoolType: Array<SchoolTypeModel>;
}
/**
 * 学校类型
 */
export interface SchoolTypeModel {
    years: number;
    schoolTypes: string;
}
/**
 * 状态
 */
export declare const StatusType: {
    Normal: string;
    Delete: string;
    Disabled: string;
};
/**
 * 学段
 */
export declare const SchoolTypeView: {
    Kindergarten: string;
    SixYearOfPrimary: string;
    FiveYearOfPrimary: string;
    ThreeYearOfJunior: string;
    FourYearOfJunior: string;
    NineYear6: string;
    NineYear5: string;
    Senior: string;
    InTheEnd: string;
};
export declare const SchoolMealType: {
    Catering: string;
    Canteen: string;
};
/**
 * 学段转换
 */
export declare const SchoolTypes: MapObject<SchoolTypeModel[]>;
/**
 * 获取学校列表
 * @param params
 */
declare function getList(params: Pagable): Promise<import("@school/meal-react-framework/interfaces").PageContent<SchoolModel>>;
/**
 * 获取学校信息
 * @param id
 */
declare function get(id: number): Promise<any>;
/**
 * 添加/更新学校
 * @param params
 */
declare function save(params: SchoolModel): Promise<any>;
/**
 * 删除学校
 * @param id
 */
declare function del(id: number): Promise<any>;
declare const _default: {
    getList: typeof getList;
    get: typeof get;
    save: typeof save;
    delete: typeof del;
};
export default _default;
