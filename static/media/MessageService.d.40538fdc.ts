export interface MessageModel {
    id: number;
    name: string;
    mobile: string;
    message: string;
    type: string;
}
export interface MessageSearchModel {
    id?: number;
    name?: string;
    mobile?: string;
    size?: number;
    page?: number;
    type?: string;
}
export interface MessageEditModel extends MessageModel {
    id: number;
    name: string;
    mobile: string;
    message: string;
}
export interface MessageSaveModel extends MessageModel {
    name: string;
    mobile: string;
    message: string;
}
/**
 * 留言类型
 */
export declare const MessageType: {
    /**
     * 手机
     */
    App: string;
    /**
     * 官网
     */
    Web: string;
};
export interface SimpleModel {
    id: number;
    name: string;
}
declare function get(id: number): Promise<any>;
/**
 * 获取留言列表
 * @param params
 */
declare function getList(params: MessageSearchModel): Promise<any>;
/**
 * 保存留言
 * @param msg
 */
declare function save(msg: MessageSaveModel): Promise<any>;
/**
 * 删除留言
 * @param messageId
 */
declare function deleteMessage(messageId: number): Promise<number>;
/**
 * 获取学校列表
 * @param params
 */
declare function getSchoolList(): Promise<any>;
/**
 * 获取学校班级列表
 * @param unitId
 */
declare function getGradeList(unitId: Number): Promise<any>;
/**
 * 获取学校班级列表
 * @param gradeId
 */
declare function getClassList(gradeId: Number): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteMessage;
    getSchoolList: typeof getSchoolList;
    getGradeList: typeof getGradeList;
    getClassList: typeof getClassList;
};
export default _default;
