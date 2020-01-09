import { EffectsCommandMap } from 'dva';
export interface Action<T> {
    type: string;
    payload: T;
}
export interface EffectsParams<T> {
    payload: T;
}
export interface MapObject<T> {
    [key: string]: T;
}
export interface Service {
    get?: any;
    getList?: any;
    save?: any;
    delete?: any;
}
export interface CreateModelParams {
    namespace: string;
    state?: MapObject<any>;
    service: Service;
}
/**
 * 默认的state对象
 */
export interface DefaultState<T> {
    list: T[];
    current: T;
    error: MapObject<Error>;
    loading: MapObject<boolean>;
}
/**
 * Model里面的state对象，必须有id属性
 */
export interface BaseModel<IDX> {
    id: IDX;
}
export declare function process<T>(payload: T, { call, put }: EffectsCommandMap, service: Function, actionName: string, errorName: string): Generator<any, void, unknown>;
/**
 * 创建model对象
 * @param param0
 */
export default function createModel<IDX, T extends BaseModel<IDX>, S extends DefaultState<T>>({ namespace, service }: CreateModelParams): (newModel?: any) => {
    namespace: string;
    state: {
        list: never[];
        current: {};
        error: {};
        loading: {};
    };
    effects: {
        /**
         * 获取列表
         * @param param0
         * @param param1
         */
        fetch({ payload }: EffectsParams<any>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        /**
         * 根据id获取对象
         * @param param0
         * @param param1
         */
        fetchItem({ payload }: EffectsParams<IDX>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        save({ payload }: EffectsParams<S>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<IDX>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<T>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<T>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<T>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<T>, action: EffectsCommandMap) => void;
        error(state: DefaultState<T>, action: EffectsCommandMap): void;
        loading(state: DefaultState<T>, action: EffectsCommandMap): void;
    };
};
