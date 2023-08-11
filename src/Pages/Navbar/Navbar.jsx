import React, { useState } from 'react';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log(showMobileMenu);

  return (
    <div className="navbar bg-base-100 text-white">
      <div className="navbar-start">
        {/* Mobile Menu Trigger */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
        </div>
        {/* Mobile Dropdown Content */}

        {showMobileMenu && <ul className="menu menu-sm lg:hidden absolute top-[40px] z-50 p-2 shadow bg-base-100 text-white rounded-box w-52">
          <li><a>BubbleSwap</a></li>
          <li><a>Farming</a></li>
          <li><a>Arbitrum</a></li>
          <li><a>Protocol</a></li>
          <li><a>Tokenomics</a></li>
          <li><a>Contract</a></li>
          <li><a>Partners</a></li>
        </ul>
        }


        {/* Logo */}
        <img src='https://bubbledefi.com/image/logo.png' className="btn btn-ghost normal-case text-xl"></img>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>BubbleSwap</a></li>
          <li><a>Farming</a></li>
          <li><a>Arbitrum</a></li>
          <li><a>Protocol</a></li>
          <li><a>Tokenomics</a></li>
          <li><a>Contract</a></li>
          <li><a>Partners</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <button class="btn-ghost bg-slate-800 p-2 rounded-md hover:bg-slate-400 uppercase">Launch Testnet</button>
      </div>
    </div>
  );
};

export default Navbar;
