import * as React from 'react';
import { Action } from 'redux';
export declare function registerModel(model: any): void;
export { default as createModel } from './createModel';
/**
 * 组件依赖Model的封装
 * @param models
 */
export declare function wrapperModel<P>(models: {
    namespace: string;
}[]): (WrappedComponent: React.ComponentClass<P, any>) => React.ComponentClass<P, any>;
export interface PayloadAction extends Action {
    payload?: any;
}
