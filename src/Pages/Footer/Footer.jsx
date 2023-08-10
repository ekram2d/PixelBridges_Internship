import React from 'react';

const Footer = () => {
      return (
            <div className='mt-14 w-[90%] mx-auto border rounded-md  hidden   lg:flex justify-between items-center p-4 '>
                  <div>
                        <p class="text-[13px]">2023 — BubbleSwap</p>
                  </div>
                  <div>
                        <ul className='flex items-center gap-5'>
                              <li><a className='hover:btn'>Home</a></li>
                              <li> <a className='hover:btn'>BubbleSwap</a></li>
                              <li><a className='hover:btn'>Farming</a></li>
                              <li><a className='hover:btn'>Arbitrum</a></li>
                              <li><a className='hover:btn'>Protocol</a></li>
                              <li><a className='hover:btn'>Contract</a></li>
                              <li><a className='hover:btn'>Tokenomics</a></li>
                              <li><a className='hover:btn'>Partners</a></li>

                        </ul>
                  </div>
                  <div>
                        <ul className='flex items-center gap-x-3 '>
                              <li>
                                    <a href="#">
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
                                    </a>
                              </li>

                              <li>
  <a
    className="text-slate-600 hover:text-slate-50 text-[26px]"
    href="https://t.me/BubbleDefiPortal"
    target="_blank"
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
  </a>
</li>
<li>
  <a
    className="text-slate-600 hover:text-slate-50 text-[26px]"
    href="https://twitter.com/YourTwitterHandle"
    target="_blank"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
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
        fillRule="evenodd"
        d="M22.46 5.54c-.81.36-1.68.6-2.6.71 1.06-.63 1.87-1.62 2.25-2.8-.99.58-2.08 1-3.25 1.23-.93-1-2.25-1.64-3.73-1.64-2.82 0-5.11 2.29-5.11 5.11 0 .4.04.79.12 1.16-4.24-.21-8.01-2.24-10.54-5.33-.44.76-.69 1.64-.69 2.57 0 1.77.9 3.33 2.28 4.24-.84-.03-1.63-.26-2.31-.64v.06c0 2.47 1.75 4.53 4.07 5-.42.15-.86.24-1.31.24-.32 0-.63-.03-.94-.09.64 1.92 2.5 3.32 4.7 3.36-1.73 1.36-3.9 2.18-6.26 2.18-.41 0-.81-.02-1.22-.05 2.23 1.43 4.86 2.26 7.69 2.26 9.22 0 14.27-7.63 14.27-14.27 0-.22 0-.44-.01-.66.98-.71 1.83-1.58 2.5-2.58l-.03-.01z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</li>

<li>
  <a
    className="text-slate-600 hover:text-slate-50 text-[26px]"
    href="https://medium.com/@Bubble_DeFi"
    target="_blank"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
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
        d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
        clipRule="evenodd"
      />
    </svg>
  </a>
</li>
<li>
  <a
    className="text-slate-600 hover:text-slate-50 text-[26px]"
    href="https://docs.bubbledefi.xyz"
    target="_blank"
  >
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
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
        d="M10.802 17.77a.703.703 0 11-.002 1.406.703.703 0 01.002-1.406m11.024-4.347a.703.703 0 11.001-1.406.703.703 0 01-.001 1.406m0-2.876a2.176 2.176 0 00-2.174 2.174c0 .233.039.465.115.691l-7.181 3.823a2.165 2.165 0 00-1.784-.937c-.829 0-1.584.475-1.95 1.216l-6.451-3.402c-.682-.358-1.192-1.48-1.138-2.502.028-.533.212-.947.493-1.107.178-.1.392-.092.62.027l.042.023c1.71.9 7.304 3.847 7.54 3.956.363.169.565.237 1.185-.057l11.564-6.014c.17-.064.368-.227.368-.474 0-.342-.354-.477-.355-.477-.658-.315-1.669-.788-2.655-1.25-2.108-.987-4.497-2.105-5.546-2.655-.906-.474-1.635-.074-1.765.006l-.252.125C7.78 6.048 1.46 9.178 1.1 9.397.457 9.789.058 10.57.006 11.539c-.08 1.537.703 3.14 1.824 3.727l6.822 3.518a2.175 2.175 0 002.15 1.862 2.177 2.177 0 002.173-2.14l7.514-4.073c.38.298.853.461 1.337.461A2.176 2.176 0 0024 12.72a2.176 2.176 0 00-2.174-2.174"
        clipRule="evenodd"
      />
    </svg>
  </a>
</li>



                        </ul>

                  </div>
            </div>
      );
};

export default Footer;