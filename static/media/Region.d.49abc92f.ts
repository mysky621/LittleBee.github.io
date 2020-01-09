import { RegionCascaderModel } from '../Services/RegionServices';
import { EffectsParams } from './createModel';
import { EffectsCommandMap } from 'dva';
export declare enum CascaderRegionAction {
    fetch = "Cascader_Region/fetch",
    fethcdefault = "Cascader_Region/fetchdefault"
}
export interface CascaderRegionState {
    list: RegionCascaderModel[];
    options: RegionCascaderModel[];
}
declare const _default: {
    namespace: string;
    state: {
        options: never[];
        list: never[];
    };
    effects: {
        fetch({ payload }: EffectsParams<{
            id: string;
            leaf: boolean;
            series: number;
            targetOptions: string[];
        }>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
        fetchdefault({ payload }: EffectsParams<string[]>, { call, put }: EffectsCommandMap): Generator<any, void, unknown>;
    };
    reducers: {
        saveDefault(state: CascaderRegionState, action: EffectsCommandMap): void;
        save(state: CascaderRegionState, action: EffectsCommandMap): void;
    };
};
export default _default;
