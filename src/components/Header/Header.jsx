import React from 'react';
import h from'./Header.module.css';
/*import logo from './images.png';*/

const Header = () => {
  return <header className={h.header}>
          {/*<img src={logo} alt="1"/>*/}
          <h2>STARTNET</h2>
        </header>
  }
export default Header;