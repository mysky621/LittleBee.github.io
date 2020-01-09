import { LoginParams, UserDetail, UserRestPasswordParams, SimpleModel, ChangUserPasswordModel } from '../Services/UserService';
import { EffectsParams, Action, MapObject } from './createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '../interfaces';
import { Pagable } from '../Utils/pagingRequest';
import ResponseModel from '../Utils/ResponseModel';
export declare enum UserActions {
    fetch = "User/fetch",
    fetchPageContent = "User/fetchPageContent",
    fetchCurrent = "User/fetchCurrent",
    fetchUserInfo = "User/fetchUserInfo",
    login = "User/login",
    logout = "User/logout",
    resetPassword = "User/resetPassword",
    changeLoginStatus = "User/changeLoginStatus",
    updateUserInfo = "User/updateUserInfo",
    updatePassword = "User/updatePassword"
}
export interface LoginStatus {
    status?: boolean;
    error?: boolean;
    submitting?: boolean;
    accountNew?: boolean;
}
export interface UserState {
    currentUser: UserDetail;
    list?: Array<UserDetail>;
    login: LoginStatus;
    error: MapObject<Error>;
    userInfo: UserDetail;
    pageContent: PageContent<SimpleModel>;
    responseModel: ResponseModel;
}
declare const _default: {
    namespace: string;
    state: {
        list: never[];
        currentUser: null;
        userInfo: {};
        login: {};
        error: {};
        pageContent: {};
        responsemodel: {};
    };
    effects: {
        fetch(_: EffectsParams<void>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
        fetchCurrent(_: EffectsParams<void>, { call, put, select }: EffectsCommandMap): Generator<any, void, LoginStatus>;
        fetchUserInfo({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<any, void, unknown>;
        login({ payload }: EffectsParams<LoginParams>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
        logout(_: EffectsParams<number>, command: EffectsCommandMap): Generator<any, void, unknown>;
        resetPassword({ payload }: EffectsParams<UserRestPasswordParams>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchPageContent({ payload }: EffectsParams<Pagable>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        updateUserInfo({ payload }: EffectsParams<UserDetail>, command: EffectsCommandMap): Generator<any, void, unknown>;
        updatePassword({ payload }: EffectsParams<ChangUserPasswordModel>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        save(state: UserState, action: Action<UserDetail[]>): {
            list: UserDetail[];
            currentUser: UserDetail;
            login: LoginStatus;
            error: MapObject<Error>;
            userInfo: UserDetail;
            pageContent: PageContent<SimpleModel>;
            responseModel: ResponseModel;
        };
        saveCurrentUser(state: UserState, action: Action<UserDetail>): {
            currentUser: UserDetail;
            list?: UserDetail[] | undefined;
            login: LoginStatus;
            error: MapObject<Error>;
            userInfo: UserDetail;
            pageContent: PageContent<SimpleModel>;
            responseModel: ResponseModel;
        };
        saveUserInfo(state: UserState, action: Action<UserDetail>): {
            userInfo: UserDetail;
            currentUser: UserDetail;
            list?: UserDetail[] | undefined;
            login: LoginStatus;
            error: MapObject<Error>;
            pageContent: PageContent<SimpleModel>;
            responseModel: ResponseModel;
        };
        saveUser(state: UserState, action: Action<UserDetail>): {
            currentUser: UserDetail;
            list?: UserDetail[] | undefined;
            login: LoginStatus;
            error: MapObject<Error>;
            userInfo: UserDetail;
            pageContent: PageContent<SimpleModel>;
            responseModel: ResponseModel;
        };
        changeLoginStatus(state: UserState, { payload }: Action<LoginStatus>): {
            login: LoginStatus;
            currentUser: UserDetail;
            list?: UserDetail[] | undefined;
            error: MapObject<Error>;
            userInfo: UserDetail;
            pageContent: PageContent<SimpleModel>;
            responseModel: ResponseModel;
        };
        error(state: UserState, action: EffectsCommandMap): {
            error: any;
            currentUser: UserDetail;
            list?: UserDetail[] | undefined;
            login: LoginStatus;
            userInfo: UserDetail;
            pageContent: PageContent<SimpleModel>;
            responseModel: ResponseModel;
        };
        setLogout(state: UserState, action: EffectsCommandMap): {
            currentUser: any;
            userInfo: any;
            currentIdentity: any;
            list?: UserDetail[] | undefined;
            login: LoginStatus;
            error: MapObject<Error>;
            pageContent: PageContent<SimpleModel>;
            responseModel: ResponseModel;
        };
        setPageContent(state: UserState, action: EffectsCommandMap): void;
        setUpdatePassword(state: UserState, action: EffectsCommandMap): void;
    };
};
export default _default;
