import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { DefaultState } from '@school/meal-react-framework/Models/createModel';
import IncidentModel from '../Services/IncidentModel';
export declare const Namespace = "Module_Incident";
export declare enum ModuleIncidentAction {
    fetch = "Module_Incident/fetch",
    fetchItem = "Module_Incident/fetchItem"
}
export interface ModuleIncidentState extends DefaultState<IncidentModel> {
    pageContent: PageContent<IncidentModel>;
}
declare const _default: {
    namespace: string;
    state: {
        list: never[];
        current: {};
        error: {};
        loading: {};
    };
    effects: {
        fetch({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<any>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchItem({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        save({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<ModuleIncidentState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: import("@school/meal-react-framework/Models/createModel").EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<IncidentModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<IncidentModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<IncidentModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<IncidentModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<IncidentModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<IncidentModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
export interface IncidentSearchParams {
    unitId?: number;
    incidentType?: string;
}
