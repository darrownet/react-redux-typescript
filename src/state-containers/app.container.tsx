import App from '../components/app';

import { connect, Dispatch } from 'react-redux';

import { shoppingActions } from '../actions/action-creators';

export function mapDispatchToProps(dispatch: Dispatch<{}>) {
  return {
    loadCatalog: () => {
      dispatch(shoppingActions.loadCatalog());
    }
  };
}

export default connect(null, mapDispatchToProps)(App);