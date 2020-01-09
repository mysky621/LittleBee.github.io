import { Effect } from "dva";
import { Reducer } from "redux";
export declare const ProductActions: {
    getProducts: string;
    switchProduct: string;
    toggleDrawer: string;
};
export interface Product {
    id: string;
    name: string;
    url: string;
    icon?: string;
    avatar: string;
}
export interface ProductModelState {
    products?: Product[];
    currentProduct?: Product;
    drawerVisible?: boolean;
}
export interface ProductModelType {
    namespace: string;
    state: ProductModelState;
    effects: {
        getProducts: Effect;
        switchProduct: Effect;
        toLoginPage: Effect;
    };
    reducers: {
        setProducts: Reducer<ProductModelState>;
        toggleDrawer: Reducer<ProductModelState>;
    };
}
declare const Modal: ProductModelType;
export default Modal;
