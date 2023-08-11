import React from 'react';

const HeaderSection = () => {
  return (
    <div className='relative mb-40 lg:mb-4'>
      <div className=''>
        <div className=''>
          <div className='relative'>
            <img className='w-full h-1/2' src='https://bubbledefi.com/image/hero-bg.png' alt='Background' />

            <div className='absolute z-20 py-16 top-0 bg-base-100 text-white grid grid-cols-1 font-sandro lg:grid-cols-2 gap-2 items-center justify-center'>
              <div>
                <h1 className='text-4xl font-sa'>
                  <p className='ms-4'>UNLEASH THE POWER</p>
                </h1>
                <div className=''>
                  <p className='text-2xl ms-6 '>with Bubble DeF!</p>

                  <div className='text-left m-6'>
                    <h2 className='text-xl mt-6'>Get ready to experience the future of decentralized trading with Bubble DeFi.</h2>
                    <p>
                      Our revolutionary Liquid DEX Trading platform offers deeper liquidity, smarter trades, and higher rewards. Say goodbye to suboptimal trades and hello to efficient, secure, and profitable market activity.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img className='hidden lg:block' src='https://bubbledefi.com/image/collectwallat.png' alt='Image' />
                <img className='lg:hidden' src='https://bubbledefi.com/image/collectwalletmobile.png' alt='Mobile Image' />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='hidden lg:block flex items-center justify-center z-50 absolute bottom-[46%] left-[50%] rounded-full border-white'>
            <button className='border rounded-full'>
              <svg className='white' width='36' height='36' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M22 31.3333L12.6667 22M22 31.3333V12.6667M22 31.3333L31.3333 22'
                  stroke='#FFFFFF'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img
          className='z-50 top-[-28%] md:-top-[60%]  lg:hidden '
          src='https://bubbledefi.com/image/whybubblemobile.png'
          alt='Why Babble Mobile'
        />
        <div className='relative flex flex-col lg:flex-row items-center  '>
          <div className='w-full lg:w-[40%]  '>


            <img
              className='z-50 relative hidden lg:block  md:-top-[60%]  bottom-10 '
              src='https://bubbledefi.com/image/whybabble.png'
            ></img>
            <img
              className='z-50 lg:hidden  md:-top-[60%] '
              src='https://bubbledefi.com/image/whybubblemobile.png'
            ></img>
          </div>


          <div class='w-full top-[70%] lg:w-[65%] absolute lg:relative   text-center md:text-left '>
            <h1 class='text-[1.5em] font-bold md:text-[2.5em] uppercase font-sandro'>
              The Ultimate Governance & Utility Token
            </h1>
            <div class='md:ml-14 ml-0'>
              <p class='text-[0.875em] md:text-[1.25em]'>
                ... "Join the revolution and take control of your financial future with Bubble's $BUB token."
                <span class='text-[#00D0AA]'>
                  With delegated community governance and stake-based earnings
                </span>
                ", you can now vote on proposals and earn passive income from the protocol's generated revenue.
                Empower yourself and become a part of the decentralized financial movement with Bubble."
              </p>
              <div class="btn-group w-full flex gap-y-3 flex-col md:flex-row items-center gap-x-2">
                <button
                  className="rounded-lg w-[90%] lg:w-[40%]  bg-orange-400 left-[80%] flex justify-center items-center mt-6 btn-primary px-9 py-4 gap-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(225, 223, 219, 0.3) 0%, rgba(225, 223, 219, 0) 100%), linear-gradient(106.27deg, rgb(197, 57, 137) 16.3%, rgb(197, 82, 57) 87.94%)",
                    backgroundColor: "initial",
                    boxShadow: "rgba(226, 83, 165, 0.4) 0px 7px 21px",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    className="hoverIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      "--darkreader-inline-fill": "currentColor",
                      "--darkreader-inline-stroke": "currentColor"
                    }}
                  >
                    <path
                      d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                    ></path>
                  </svg>
                  <span className="tezr">PITCH DECK</span>
                </button>


                <button
                  className="rounded-lg  w-[90%] lg:w-[40%]  bg-orange-400 left-[80%] flex justify-center items-center mt-6 btn-primary px-9 py-4 gap-2 "
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(225, 223, 219, 0.3) 0%, rgba(225, 223, 219, 0) 100%), linear-gradient(106.27deg, rgb(197, 57, 137) 16.3%, rgb(197, 82, 57) 87.94%)",
                    backgroundColor: "initial",
                    boxShadow: "rgba(226, 83, 165, 0.4) 0px 7px 21px",
                  }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="hoverIcon"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      "--darkreader-inline-fill": "currentColor",
                      "--darkreader-inline-stroke": "currentColor"
                    }}
                  >
                    <path
                      d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
                    ></path>
                  </svg>
                  <span className="tezr">PITCH DECK</span>
                </button>

              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HeaderSection;
