import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import * as types from './action-types';
import * as interfaces from '../interfaces/shopping-interfaces';

import { apiService } from '../services/api.service';

type ResponseObject = {
  data: interfaces.ProductCatalog;
};

type ResponseError = {};

export const shoppingActions: interfaces.ShoppingActions = {
  loadCatalog: function (): ThunkAction<void, interfaces.LoadCatalogAction, void> {

    return (dispatch: Dispatch<{}>): void => {

      apiService.getProducts().then(success, fail);

      function success (res: ResponseObject): void {
        dispatch({
          type: types.LOAD_CATALOG,
          value: res.data
        });
      }

      function fail (err: ResponseError): void {
        throw(err);
      }

    };

  },
  addToCart: function (value: interfaces.CartItem): interfaces.AddToCartAction {
    return {
      type: types.ADD_TO_CART,
      value
    };
  },
  removeFromCart: function (value: interfaces.CartItem): interfaces.RemoveFromCartAction {
    return {
      type: types.REMOVE_FROM_CART,
      value
    };
  },
  updateQuantity: function (value: interfaces.CartItem): interfaces.UpdateQuantityAction {
    return {
      type: types.UPDATE_QUANTITY,
      value
    };
  }
};