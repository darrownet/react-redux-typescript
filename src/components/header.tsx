import * as React from 'react';

const logo = require('../logo.svg');
const reduxLogo = require('../redux-logo.png');
const typescriptLogo = require('../typescript-logo.png');

const Header: React.SFC<{}> = () => {
  return(
    <header className="App-header">
      <span><img src={logo} className="App-logo" alt="logo"/></span>
      <span><img src={reduxLogo} height="70" width="auto" alt="logo"/></span>
      <span><img src={typescriptLogo} height="70" width="auto" alt="logo"/></span>
      <h1 className="App-title">Welcome to React with Redux and TypeScript!</h1>
    </header>
  );
};

export default Header;