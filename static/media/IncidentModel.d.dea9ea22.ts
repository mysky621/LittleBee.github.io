/**
 * 事项模型
 */
export default interface IncidentModel {
    id: number;
    date: number;
    incidentType: string;
    remark: string;
    scopes: Array<IncidentScopeModel>;
}
/**
 * 事项对应范围模型
 */
export interface IncidentScopeModel {
    id?: number;
    unitId: number;
    unitName?: string;
    gradeId: number;
    gradeName?: string;
}
/**
 * 创建事项模型
 */
export interface IncidentCreateModel {
    startDate: number;
    endDate: number;
    incidentType: string;
    remark: string;
    scopes: Array<IncidentScopeModel>;
}
