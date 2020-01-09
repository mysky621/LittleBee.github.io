import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { BusinessModel, UnitSettingsContent } from '../Services/BusinessService';
import { PageContent } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Business";
export declare enum MealBusinessActions {
    save = "Module_Meal_Business/save",
    fetchItem = "Module_Meal_Business/fetchItem",
    fetch = "Module_Meal_Business/fetchPageContent",
    delete = "Module_Meal_Business/delete",
    getUnitSettings = "Module_Meal_Business/getUnitSettings",
    saveUnitSettings = "Module_Meal_Business/saveUnitSettings",
    updateEditable = "Module_Meal_Business/updateEditable",
    auditBusiness = "Module_Meal_Business/auditBusiness"
}
export interface MealBusinessState extends DefaultState<BusinessModel> {
    pageContent: PageContent<BusinessModel>;
    unitSettings: UnitSettingsContent;
    businessDetail: BusinessModel;
    resultMessage: ResponseModel;
    response: ResponseModel;
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
        fetch({ payload }: EffectsParams<any>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        fetchItem({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        save({ payload }: EffectsParams<MealBusinessState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<BusinessModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<BusinessModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<BusinessModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<BusinessModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<BusinessModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<BusinessModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
