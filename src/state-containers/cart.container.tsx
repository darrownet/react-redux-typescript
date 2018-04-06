import Cart from '../components/cart';

import { connect, Dispatch } from 'react-redux';

import { CartItem, StoreState } from '../interfaces/shopping-interfaces';
import { shoppingActions } from '../actions/action-creators';

export function mapStateToProps ({ cart }: StoreState) {
  return {
    cart
  };
}

export function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    removeFromCart: (value: CartItem) => {
      dispatch(shoppingActions.removeFromCart(value));
    },
    updateQuantity: (value: CartItem) => {
      dispatch(shoppingActions.updateQuantity(value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);