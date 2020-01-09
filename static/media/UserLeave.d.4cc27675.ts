import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { UserLeaveModel } from '../Services/UserLeaveService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export declare const Namespace = "Module_Meal_User_Leave";
export declare enum MealUserLeaveActions {
    fetch = "Module_Meal_User_Leave/fetchPageContent",
    exportMealLeave = "Module_Meal_User_Leave/exportMealLeave",
    getBusinessList = "Module_Meal_User_Leave/getBusinessList"
}
export interface MealUserLeaveState extends DefaultState<UserLeaveModel> {
    pageContent: PageContent<UserLeaveModel>;
    exportMealLeaveResponseModel: ResponseModel;
    businessList: Array<SimpleModel>;
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
        save({ payload }: EffectsParams<MealUserLeaveState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<UserLeaveModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<UserLeaveModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<UserLeaveModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<UserLeaveModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<UserLeaveModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<UserLeaveModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
