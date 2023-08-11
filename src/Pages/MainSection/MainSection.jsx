import React from 'react';

const MainSection = () => {
  return (
    <div className='mt-48'>


      <div className='pt-10 '></div>
      <div className="flex flex-col lg:flex-row container p-20 items-center pt-10">

        <div className='w-full lg:w-[50%]  relative bottom-[-3px] left-[-10%] bg-black '>
          <img className="hidden md:block absolute -z-10 top-[-28%] md:-top-[60%] left-0 lg:max-w-[600px]" src="https://bubbledefi.com/image/whybabble.png" alt="Why Babble" />
          <img className="lg:hidden md:sr-only absolute -z-10 top-[-28%] md:-top-[60%] left-0" src="https://bubbledefi.com/image/whybubblemobile.png" alt="Why Babble" />
        </div>

        <div class="w-full lg:w-[65%]  z-50 text-center md:text-left mt-[20rem] md:mt-32 lg:mt-20  space-y-7">
          <h1 class="text-[1.5em] font-bold md:text-[2.5em] uppercase font-sandro">The Ultimate Governance & Utility Token</h1>
          <div class="md:ml-14 ml-0">
            <p class="text-[0.875em] md:text-[1.25em]">..."Join the revolution and take control of your financial future with Bubble's $BUB token."<span class="text-[#00D0AA]">With delegated community governance and stake-based earnings</span>", you can now vote on proposals and earn passive income from the protocol's generated revenue. Empower yourself and become a part of the decentralized financial movement with Bubble."</p>
          </div>
        </div>
      </div>





    </div>


  );
};

export default MainSection;