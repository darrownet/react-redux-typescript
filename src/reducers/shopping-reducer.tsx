import * as types from '../actions/action-types';
import * as interfaces from '../interfaces/shopping-interfaces';

let newCart: interfaces.ShoppingCart,
    existingCartItem: interfaces.CartItem | undefined,
    existingCartItemIndex: number,

    initialState: interfaces.StoreState = {
      catalog: [],
      cart: []
    };

const addProductToCart = (cart: interfaces.ShoppingCart, obj: interfaces.CartItem): interfaces.ShoppingCart => {
  newCart = [...cart];
  existingCartItem = newCart.find(prod => prod.product.sku === obj.product.sku);

  if (existingCartItem) {
    existingCartItem.qty = Number(existingCartItem.qty) + Number(obj.qty);
  } else {
    newCart.push({qty: 1, ...obj});
  }

  return newCart;
};

const removeProductFromCart = (cart: interfaces.ShoppingCart, obj: interfaces.CartItem): interfaces.ShoppingCart => {
  newCart = [...cart];

  existingCartItemIndex = newCart.findIndex(prod => prod.product.sku === obj.product.sku);

  newCart.splice(existingCartItemIndex, 1);

  return newCart;
};

const updateProductInCart = (cart: interfaces.ShoppingCart, obj: interfaces.CartItem): interfaces.ShoppingCart => {
  newCart = [...cart];
  existingCartItem = newCart.find(prod => prod.product.sku === obj.product.sku);
  if (existingCartItem) {
    existingCartItem.qty = obj.qty;
  }

  return newCart;
};

export function shoppingReducer(state: interfaces.StoreState = initialState,
                                action: interfaces.LoadCatalogAction |
                                    interfaces.AddToCartAction |
                                    interfaces.RemoveFromCartAction |
                                    interfaces.UpdateQuantityAction) {

  switch (action.type) {

    case types.LOAD_CATALOG:
      return {...state, catalog: action.value};

    case types.ADD_TO_CART:
      return {...state, cart: addProductToCart(state.cart, action.value)};

    case types.REMOVE_FROM_CART:
      return {...state, cart: removeProductFromCart(state.cart, action.value)};

    case types.UPDATE_QUANTITY:
      return {...state, cart: updateProductInCart(state.cart, action.value)};

    default:
      return state;
  }
}