import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { CouponUserModel, StatisticsResult } from '../Services/CouponUserService';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export declare const Namespace = "Module_Coupon_User";
export declare enum ModuleCouponUserActions {
    fetch = "Module_Coupon_User/fetchPageContent",
    fetchBusiness = "Module_Coupon_User/fetchBusiness",
    statisticsUsedCoupon = "Module_Coupon_User/statisticsUsedCoupon"
}
export interface ModuleCouponUserState extends DefaultState<CouponUserModel> {
    pageContent: PageContent<CouponUserModel>;
    businessList: SimpleModel[];
    statisticsUsedCouponResult: StatisticsResult;
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
        save({ payload }: EffectsParams<ModuleCouponUserState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<CouponUserModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<CouponUserModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<CouponUserModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<CouponUserModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<CouponUserModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<CouponUserModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
