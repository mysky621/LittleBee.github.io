export interface AgreementModel {
    id: number;
    name: string;
    content: string;
    serviceStatus: string;
    userAgreementObject: string;
    userAgreementType: string;
}
export interface AgreementSearchModel {
    id?: number;
    name?: string;
    size?: number;
    page?: number;
}
export interface AgreementEditModel extends AgreementModel {
}
export interface AgreementSaveModel extends AgreementModel {
}
export declare const UserAgreementObject: {
    Parent: string;
    Business: string;
    School: string;
    Teacher: string;
};
export declare const ServiceStatus: {
    Normal: string;
    Stop: string;
};
export declare const UserAgreementType: {
    Open: string;
    Privacy: string;
};
declare function get(id: number): Promise<any>;
declare function getList(params: AgreementSearchModel): Promise<any>;
declare function save(msg: AgreementSaveModel): Promise<any>;
declare function deleteAgreement(agreementId: number): Promise<number>;
declare function setServiceStatus(agreementId: number): Promise<any>;
declare const _default: {
    get: typeof get;
    getList: typeof getList;
    save: typeof save;
    delete: typeof deleteAgreement;
    setServiceStatus: typeof setServiceStatus;
};
export default _default;
