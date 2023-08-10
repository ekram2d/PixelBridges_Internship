import React from 'react';

const Navbar = () => {
      return (
            <div className="navbar bg-base-100 text-white">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Home</a></li>
                <li><a>BubbleSwap</a></li>
                <li><a>Farming</a></li>
                <li><a>Arbitrum</a></li>
                <li><a>Protocol</a></li>
                <li><a>Tokenomics</a></li>
                <li><a>Contract</a></li>
                <li><a>Partners</a></li>
                  
                </ul>
              </div>
              <img src='https://bubbledefi.com/image/logo.png' className="btn btn-ghost normal-case text-xl"></img>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                <li><a>BubbleSwap</a></li>
                <li><a>Farming</a></li>
                <li><a>Arbitrum</a></li>
                <li><a>Protocol</a></li>
                <li><a>Tokenomics</a></li>
                <li><a>Contract</a></li>
                <li><a>Partners</a></li>
             
                
                <li tabIndex={0}>
                  {/* <details>
                    <summary>Home</summary>
                    <ul className="p-2">
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </details> */}
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <div className="navbar-end">
            <button class="btn-ghost bg-slate-800 p-2 rounded-md hover:bg-slate-400 uppercase">Launch Testnet</button>
            </div>
          </div>
      );
};

export default Navbar;