import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { BusinessServiceUnitEditModel, SimpleModel } from '../Services/BusinessServiceUnitService';
import { PageContent } from '@school/meal-react-framework/interfaces';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Meal_Business_Service_Unit";
export declare enum MealBusinessServiceUnitActions {
    fetch = "Module_Meal_Business_Service_Unit/fetchPageContent",
    fetchItem = "Module_Meal_Business_Service_Unit/fetchItem",
    save = "Module_Meal_Business_Service_Unit/save",
    delete = "Module_Meal_Business_Service_Unit/delete",
    getSchoolList = "Module_Meal_Business_Service_Unit/getSchoolList",
    getSchoolGradeList = "Module_Meal_Business_Service_Unit/getSchoolGradeList",
    cleanData = "Module_Meal_Business_Service_Unit/cleanData",
    cleanSaveBackData = "Module_Meal_Business_Service_Unit/cleanSaveBackData",
    updateStatus = "Module_Meal_Business_Service_Unit/updateStatus"
}
export interface MealBusinessServiceUnitState extends DefaultState<BusinessServiceUnitEditModel> {
    pageContent: PageContent<BusinessServiceUnitEditModel>;
    schools: Array<SimpleModel>;
    grades: Array<SimpleModel>;
    businessServiceUnitDetail: BusinessServiceUnitEditModel;
    saveBackData: ResponseModel;
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
        save({ payload }: EffectsParams<MealBusinessServiceUnitState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<BusinessServiceUnitEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<BusinessServiceUnitEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<BusinessServiceUnitEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<BusinessServiceUnitEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<BusinessServiceUnitEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<BusinessServiceUnitEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
