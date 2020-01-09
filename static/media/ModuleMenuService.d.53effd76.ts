export interface ModuleMenuListModel {
    id: number;
    text: string;
    sref: number;
    sort: number;
    submenu: ModuleMenuModel[];
}
export interface ModuleMenuModel extends ModuleMenuListModel {
    userTypes: string[];
    moduleId: number;
    parentId: number;
    icon: string;
    iconUrl: string;
    label: string;
    click: string;
    translate: string;
    moduleUrl: string;
    permission: number;
}
export interface ModuleMenuFetchParams {
    moduleId: number;
    menuId: number;
}
declare function getList(moduleId: number): Promise<ModuleMenuModel[]>;
declare function save(values: ModuleMenuModel): Promise<any>;
declare function deleteMenu(values: ModuleMenuFetchParams): Promise<number>;
declare function get(values: ModuleMenuFetchParams): Promise<any>;
declare const _default: {
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteMenu;
    get: typeof get;
};
export default _default;
