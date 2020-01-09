import { Moment } from 'moment';
export interface SettingEditModel {
    id: number;
    businessId: number;
    schoolId: number;
    orderType: string;
    orderTime: Moment;
    leaveType: string;
    leaveTime: Moment;
    dayOrder: boolean;
    monthOrder: boolean;
    offline: boolean;
}
/**
 * 时段
 */
export declare const TimeIntervalSetting: {
    Today: string;
    Yesterday: string;
};
declare function get(payload: {
    businessId: number;
    schoolId: number;
}): Promise<any>;
declare function save(payload: SettingEditModel): Promise<any>;
declare const _default: {
    get: typeof get;
    save: typeof save;
};
export default _default;
