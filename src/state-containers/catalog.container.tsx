import Catalog from '../components/catalog';

import { connect, Dispatch } from 'react-redux';

import { CartItem, StoreState } from '../interfaces/shopping-interfaces';
import { shoppingActions } from '../actions/action-creators';

export function mapStateToProps ({ catalog }: StoreState) {
  return {
    catalog
  };
}

export function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    addToCart: (value: CartItem) => {
      dispatch(shoppingActions.addToCart(value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);