import * as React from 'react';

import '../App.css';

interface Props {
  loadCatalog: () => void;
}

class App extends React.Component<Props> {

  componentWillMount() {
    this.props.loadCatalog();
  }

  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}

export default App;
