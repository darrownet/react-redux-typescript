import { ThunkAction } from 'redux-thunk';
import * as types from '../actions/action-types';

// General Interfaces...
export interface Product {
  prodColor: string;
  prodName: string;
  prodPrice: number;
  sku: string;
}

export interface CartItem {
  product: Product;
  qty: number;
}

export interface ProductCatalog extends Array<Product> {}

export interface ShoppingCart extends Array<CartItem> {}

// Action Interfaces...
export interface LoadCatalogAction {
  type: types.LOAD_CATALOG;
  value: ProductCatalog;
}

export interface AddToCartAction {
  type: types.ADD_TO_CART;
  value: CartItem;
}

export interface RemoveFromCartAction {
  type: types.REMOVE_FROM_CART;
  value: CartItem;
}

export interface UpdateQuantityAction {
  type: types.UPDATE_QUANTITY;
  value: CartItem;
}

export interface ShoppingActions {
  loadCatalog: () => ThunkAction<void, LoadCatalogAction, void>;
  addToCart: (value: CartItem) => AddToCartAction;
  removeFromCart: (value: CartItem) => RemoveFromCartAction;
  updateQuantity: (value: CartItem) => UpdateQuantityAction;
}

// Store Interface...
export interface StoreState {
  catalog: ProductCatalog;
  cart: ShoppingCart;
}