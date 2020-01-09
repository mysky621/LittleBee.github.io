import { EffectsCommandMap } from 'dva';
import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { UnitUserModel } from '../Services/UnitUserService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
export declare const Namespace = "Module_Plat_Form_Unit_User";
export declare enum PlatFormUnitUserAction {
    fetch = "Module_Plat_Form_Unit_User/fetch",
    fetchItem = "Module_Plat_Form_Unit_User/fetchItem",
    update = "Module_Plat_Form_Unit_User/save",
    delete = "Module_Plat_Form_Unit_User/delete",
    resetPassword = "Module_Plat_Form_Unit_User/resetPassword",
    cleanData = "Module_Plat_Form_Unit_User/cleanData"
}
export interface PlatFormUnitUserState extends DefaultState<UnitUserModel> {
    delBackData: ResponseModel;
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
        save({ payload }: EffectsParams<PlatFormUnitUserState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<UnitUserModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<UnitUserModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<UnitUserModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<UnitUserModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<UnitUserModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<UnitUserModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
