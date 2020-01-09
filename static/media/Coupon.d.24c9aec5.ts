import { DefaultState, EffectsParams } from '@school/meal-react-framework/Models/createModel';
import { EffectsCommandMap } from 'dva';
import { PageContent } from '@school/meal-react-framework/interfaces';
import { CouponEditModel, CouponModel, AssociatedUserModel } from './../Services/CouponService';
import ResponseModel from '@school/meal-react-framework/Utils/ResponseModel';
import { SimpleModel } from '@school/meal-react-framework/Services/UserService';
export declare const Namespace = "Module_Coupon";
export declare enum ModuleCouponActions {
    fetch = "Module_Coupon/fetchPageContent",
    fetchItem = "Module_Coupon/fetchItem",
    save = "Module_Coupon/save",
    delete = "Module_Coupon/delete",
    clean = "Module_Coupon/clean",
    cleanData = "Module_Coupon/cleanData",
    cleanSaveBackData = "Module_Coupon/cleanSaveBackData",
    fetchBusiness = "Module_Coupon/fetchBusiness",
    fetchSchoolList = "Module_Coupon/fetchSchoolList",
    fetchGradeList = "Module_Coupon/fetchGradeList",
    fetchClassList = "Module_Coupon/fetchClassList",
    fetchStudentList = "Module_Coupon/fetchStudentList",
    fetchTeacherList = "Module_Coupon/fetchTeacherList",
    fetchAssociatedUserList = "Module_Coupon/fetchAssociatedUserList",
    cleanGrade = "Module_Coupon/cleanGrade",
    cleanClass = "Module_Coupon/cleanClass",
    cleanSchoolData = "Module_Coupon/cleanSchoolData",
    saveGive = "Module_Coupon/saveGive"
}
export interface ModuleCouponState extends DefaultState<CouponEditModel> {
    pageContent: PageContent<CouponEditModel>;
    getCoupons: CouponModel[];
    saveBackData: ResponseModel;
    businessList: SimpleModel[];
    schoolList: Array<SimpleModel>;
    gradeList: Array<SimpleModel>;
    classList: Array<SimpleModel>;
    studentList: Array<AssociatedUserModel>;
    teacherList: Array<AssociatedUserModel>;
    associatedUserList: Array<SimpleModel>;
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
        save({ payload }: EffectsParams<ModuleCouponState>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
        delete({ payload }: EffectsParams<number>, command: EffectsCommandMap): Generator<Generator<any, void, unknown>, void, unknown>;
    };
    reducers: {
        setList(state: DefaultState<CouponEditModel>, action: EffectsCommandMap): void;
        setItem(state: DefaultState<CouponEditModel>, action: EffectsCommandMap): void;
        updateList: (state: DefaultState<CouponEditModel>, action: EffectsCommandMap) => void;
        remove: (state: DefaultState<CouponEditModel>, action: EffectsCommandMap) => void;
        error(state: DefaultState<CouponEditModel>, action: EffectsCommandMap): void;
        loading(state: DefaultState<CouponEditModel>, action: EffectsCommandMap): void;
    };
};
export default _default;
