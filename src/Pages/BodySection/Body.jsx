import React from 'react';
// import BagSection from './BagSection.css'
import './bagSection.css'
const Body = () => {
      return (
            <>
                  <div
                        id="farming"
                        className="w-[90%] flex flex-col-reverse  lg:flex-row  gap-y-10 px-8 lg:px-12 py-3 rounded-0 md:rounded-3xl mx-auto shadow-lg mt-[10px]"
                        style={{
                              backgroundImage: "linear-gradient(155.94deg, rgba(58, 109, 187, 0.1) -34.45%, rgba(225, 223, 219, 0) 55.98%)",
                              backgroundColor: "rgba(225, 223, 219, 0.05)"
                        }}
                  >
                        {/* Your content here */}


                        <div className='w-full text-left'>

                              <h1 className='text-3xl mt-3'>LIQUIDITY YIELD FARMING</h1>
                              <h5 className=' mt-3'>Join the revolution and take control of your financial future with Bubble's $BUB token.</h5>
                              <p className='mt-3 text-sm' >With delegated community governance and stake-based earnings, you can now vote on proposals and earn passive income from the protocol's generated revenue. Empower yourself and become a part of the decentralized financial movement with Bubble.</p>
                        </div>
                        <div className='w-full'><img src='https://bubbledefi.com/image/farming.png'></img></div>
                  </div>

                  {/* card */}
                  <section className="mt-14 w-[90%]  mx-auto p-2">
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                              <div className=" rounded-lg p-4 " style={{
                                    backgroundImage: "linear-gradient(0deg, rgba(225, 223, 219, 0.56), rgba(225, 223, 219, 0.56)), conic-gradient(from 2deg at 17.76% -94.66%, rgb(225, 223, 219) 0deg, rgb(168, 162, 154) 16.7deg, rgb(223, 219, 216) 24.27deg, rgb(154, 148, 140) 47.25deg, rgb(121, 227, 247) 60.32deg, rgb(128, 249, 231) 72deg, rgb(150, 255, 230) 86.4deg, rgb(160, 255, 231) 97.2deg, rgb(168, 255, 233) 115.2deg, rgb(178, 255, 233) 129.6deg, rgb(225, 223, 219) 156.38deg, rgb(115, 174, 245) 187.01deg, rgb(213, 210, 207) 203.99deg, rgb(224, 221, 217) 219.78deg, rgb(219, 216, 213) 230.4deg, rgb(216, 213, 209) 270deg, rgb(225, 223, 219) 360deg)",
                                    backgroundColor: "initial",
                                    boxShadow: "rgba(49, 55, 57, 0.09) 0px 100px 80px, rgba(49, 55, 57, 0.06) 0px 41.7776px 33.4221px, rgba(49, 55, 57, 0.06) 0px 22.3363px 17.869px, rgba(49, 55, 57, 0.04) 0px 12.5216px 10.0172px, rgba(49, 55, 57, 0.04) 0px 6.6501px 5.32008px, rgba(49, 55, 57, 0.02) 0px 2.76726px 2.21381px"
                              }}>
                                    <h2 className="text-2xl font-semibold mb-2">SYNTHETIC YIELD FARMING</h2>
                                    <p className=" pt-4">The BubbleSwap protocol enables users to maximize their profits by staking their liquidity provider (LP) tokens and earning synthetic yield rewards.</p>
                                    <p className="text-gray-600 text-sm pt-4">These rewards are determined by a liquidity provider tax, but are significantly increased when users lock their tokens for a specific duration. With this innovative form of yield farming, users can amplify their earnings while investing a smaller portion of their capital.</p>
                              </div>
                              <div className=" rounded-lg p-4 " style={{
                                    backgroundImage: "linear-gradient(0deg, rgba(225, 223, 219, 0.56), rgba(225, 223, 219, 0.56)), conic-gradient(from 2deg at 17.76% -94.66%, rgb(225, 223, 219) 0deg, rgb(168, 162, 154) 16.7deg, rgb(223, 219, 216) 24.27deg, rgb(154, 148, 140) 47.25deg, rgb(121, 227, 247) 60.32deg, rgb(128, 249, 231) 72deg, rgb(150, 255, 230) 86.4deg, rgb(160, 255, 231) 97.2deg, rgb(168, 255, 233) 115.2deg, rgb(178, 255, 233) 129.6deg, rgb(225, 223, 219) 156.38deg, rgb(115, 174, 245) 187.01deg, rgb(213, 210, 207) 203.99deg, rgb(224, 221, 217) 219.78deg, rgb(219, 216, 213) 230.4deg, rgb(216, 213, 209) 270deg, rgb(225, 223, 219) 360deg)",
                                    backgroundColor: "initial",
                                    boxShadow: "rgba(49, 55, 57, 0.09) 0px 100px 80px, rgba(49, 55, 57, 0.06) 0px 41.7776px 33.4221px, rgba(49, 55, 57, 0.06) 0px 22.3363px 17.869px, rgba(49, 55, 57, 0.04) 0px 12.5216px 10.0172px, rgba(49, 55, 57, 0.04) 0px 6.6501px 5.32008px, rgba(49, 55, 57, 0.02) 0px 2.76726px 2.21381px"
                              }}>
                                    <h2 className="text-2xl font-semibold mb-2">BUBBLE PROTOCOL FARMING</h2>
                                    <p className=" pt-4">TJoin the innovative BubbleDeFi protocol and start earning real yield with your Bubble tokens</p>
                                    <p className="text-gray-600 text-sm pt-4">These rewards are determined by a liquidity provider tax, but are significantly increased when users lock their tokens for a specific duration. With this innovative form of yield farming, users can amplify their earnings while investing a smaller portion of their capital.</p>
                              </div>
                        </div>
                  </section>
                  <section>
                        <div className=' grid px-4 lg:px-14 grid-cols-1  lg:grid-cols-2'>
                              <div>
                                    <img src='https://bubbledefi.com/image/Arbitrum.png' ></img>
                              </div>
                              <div className="relative w-full lg:max-w-[560px]">
                                    <div className="space-y-4 text-center md:text-left lg:absolute top-[36%]">
                                          <h1 className="text-[1.5em] font-bold md:text-[2em] font-sandro">UNLOCK A NEW FRONTIER WITH BUBBLE & ARBITRUM</h1>

                                          <p class="text-[0.875em] md:text-[1.25em]">

                                                <span></span><span class="text-[#00D0AA]">"cutting-edge DeFi movement "</span>"by bridging the gap between two thriving chains."
                                          </p>
                                          <p class="text-[0.75em] md:text-[0.875em] text-[#C3C9DA]">
                                                "Integrating the Arbitrum bridge, Bubble users now have the opportunity to trade their tokens on both the Ethereum and Arbitrum chains, unlocking a whole new realm of possibilities and potential rewards. Take advantage of this game-changing integration and be a part of the next evolution in DeFi."
                                          </p>

                                    </div>
                              </div>

                        </div>


                  </section>
                  <section className="relative mt-10 mb-10 ">
                        <div className="absolute top-[10%] md:top-[5%] lg:-top-[10%] z-10 left-0 ">
                              <img className="w-full" src="https://bubbledefi.com/image/contrctlight.png" alt="Contract Light" />
                        </div>
                        <div className="relative z-20 w-[90%] mx-auto">
                              <div>
                                    <div className="">
                                          <p className="text-sm md:text-base lg:text-lg m-5 md:m-10 font-sans text-white">
                                                {/* Your text content here */}"Maximize Liquidity & Earn " <br></br>" Passive Rewards with BubbleSwap"
                                          </p>
                                    </div>
                                    <img className='hidden lg:block' src='https://bubbledefi.com/image/contract.png'></img>
                                    <img className='lg:hidden' src='https://bubbledefi.com/image/bubblemobile.png'></img>

                                    <div className='lg:flex my-1'>
                                          <div className='w-[40%]  '></div>
                                          <div className='w-[60%]  text-center mx-auto md:text-left'>
                                                <p class="text-[14px] md:text-[16px]  leading-snug">"BubbleSwap is a revolutionary DeFi protocol that offers a unique liquidity tax of 5% — increasing your LP tokens' value with every trade. The LP tokens collected are burned forever, guaranteeing maximum liquidity and 100% safety. Join the new era of yield farming and earn passive rewards with BubbleSwap's liquidity crunch-proof technology."

                                                </p> <a href="/" class="text-center right-[15%] md:absolute md:text-right"><img src='https://bubbledefi.com/checkout.png'></img> </a>

                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div>
                              <div className="w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    <div className="z-20 lg:h-[70%]  bg-white p-6 rounded-lg shadow" style={{
                                          backgroundImage: "linear-gradient(0deg, rgba(225, 223, 219, 0.56), rgba(225, 223, 219, 0.56)), conic-gradient(from 2deg at 17.76% -94.66%, rgb(225, 223, 219) 0deg, rgb(168, 162, 154) 16.7deg, rgb(223, 219, 216) 24.27deg, rgb(154, 148, 140) 47.25deg, rgb(121, 227, 247) 60.32deg, rgb(128, 249, 231) 72deg, rgb(150, 255, 230) 86.4deg, rgb(160, 255, 231) 97.2deg, rgb(168, 255, 233) 115.2deg, rgb(178, 255, 233) 129.6deg, rgb(225, 223, 219) 156.38deg, rgb(115, 174, 245) 187.01deg, rgb(213, 210, 207) 203.99deg, rgb(224, 221, 217) 219.78deg, rgb(219, 216, 213) 230.4deg, rgb(216, 213, 209) 270deg, rgb(225, 223, 219) 360deg)",
                                          backgroundColor: "initial",
                                          boxShadow: "rgba(49, 55, 57, 0.09) 0px 100px 80px, rgba(49, 55, 57, 0.06) 0px 41.7776px 33.4221px, rgba(49, 55, 57, 0.06) 0px 22.3363px 17.869px, rgba(49, 55, 57, 0.04) 0px 12.5216px 10.0172px, rgba(49, 55, 57, 0.04) 0px 6.6501px 5.32008px, rgba(49, 55, 57, 0.02) 0px 2.76726px 2.21381px"
                                    }}>
                                          <div className='flex flex-col justify-center items-center'> <h1 class="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">5%</h1>
                                                <p class="text-[#3A5168] text-[0.813em] font-sandro">on all $BUB pairs</p></div>
                                    </div>
                                    <div className="z-20 lg:h-[70%]  lg:mt-10 bg-white p-6 rounded-lg shadow" style={{
                                          backgroundImage: "linear-gradient(0deg, rgba(225, 223, 219, 0.56), rgba(225, 223, 219, 0.56)), conic-gradient(from 2deg at 17.76% -94.66%, rgb(225, 223, 219) 0deg, rgb(168, 162, 154) 16.7deg, rgb(223, 219, 216) 24.27deg, rgb(154, 148, 140) 47.25deg, rgb(121, 227, 247) 60.32deg, rgb(128, 249, 231) 72deg, rgb(150, 255, 230) 86.4deg, rgb(160, 255, 231) 97.2deg, rgb(168, 255, 233) 115.2deg, rgb(178, 255, 233) 129.6deg, rgb(225, 223, 219) 156.38deg, rgb(115, 174, 245) 187.01deg, rgb(213, 210, 207) 203.99deg, rgb(224, 221, 217) 219.78deg, rgb(219, 216, 213) 230.4deg, rgb(216, 213, 209) 270deg, rgb(225, 223, 219) 360deg)",
                                          backgroundColor: "initial",
                                          boxShadow: "rgba(49, 55, 57, 0.09) 0px 100px 80px, rgba(49, 55, 57, 0.06) 0px 41.7776px 33.4221px, rgba(49, 55, 57, 0.06) 0px 22.3363px 17.869px, rgba(49, 55, 57, 0.04) 0px 12.5216px 10.0172px, rgba(49, 55, 57, 0.04) 0px 6.6501px 5.32008px, rgba(49, 55, 57, 0.02) 0px 2.76726px 2.21381px"
                                    }}>
                                          <div className='flex flex-col justify-center items-center'> <h1 class="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">All</h1><p class="text-[#3A5168]  text-[0.813em] font-sandro">LP tokens burned forever</p>
                                          </div>
                                    </div>
                                    <div className="z-20 lg:h-[70%]  lg:mt-16 bg-white p-6 rounded-lg shadow" style={{
                                          backgroundImage: "linear-gradient(0deg, rgba(225, 223, 219, 0.56), rgba(225, 223, 219, 0.56)), conic-gradient(from 2deg at 17.76% -94.66%, rgb(225, 223, 219) 0deg, rgb(168, 162, 154) 16.7deg, rgb(223, 219, 216) 24.27deg, rgb(154, 148, 140) 47.25deg, rgb(121, 227, 247) 60.32deg, rgb(128, 249, 231) 72deg, rgb(150, 255, 230) 86.4deg, rgb(160, 255, 231) 97.2deg, rgb(168, 255, 233) 115.2deg, rgb(178, 255, 233) 129.6deg, rgb(225, 223, 219) 156.38deg, rgb(115, 174, 245) 187.01deg, rgb(213, 210, 207) 203.99deg, rgb(224, 221, 217) 219.78deg, rgb(219, 216, 213) 230.4deg, rgb(216, 213, 209) 270deg, rgb(225, 223, 219) 360deg)",
                                          backgroundColor: "initial",
                                          boxShadow: "rgba(49, 55, 57, 0.09) 0px 100px 80px, rgba(49, 55, 57, 0.06) 0px 41.7776px 33.4221px, rgba(49, 55, 57, 0.06) 0px 22.3363px 17.869px, rgba(49, 55, 57, 0.04) 0px 12.5216px 10.0172px, rgba(49, 55, 57, 0.04) 0px 6.6501px 5.32008px, rgba(49, 55, 57, 0.02) 0px 2.76726px 2.21381px"
                                    }}>
                                          <div className='flex flex-col justify-center items-center'> <h1 class="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">100%</h1><p class="text-[#3A5168] text-[0.813em] font-sandro">LP tokens burned forever</p>
                                          </div>
                                    </div>
                                    <div className="z-20 lg:h-[70%] lg:mt-24 bg-white p-6 rounded-lg shadow" style={{
                                          backgroundImage: "linear-gradient(0deg, rgba(225, 223, 219, 0.56), rgba(225, 223, 219, 0.56)), conic-gradient(from 2deg at 17.76% -94.66%, rgb(225, 223, 219) 0deg, rgb(168, 162, 154) 16.7deg, rgb(223, 219, 216) 24.27deg, rgb(154, 148, 140) 47.25deg, rgb(121, 227, 247) 60.32deg, rgb(128, 249, 231) 72deg, rgb(150, 255, 230) 86.4deg, rgb(160, 255, 231) 97.2deg, rgb(168, 255, 233) 115.2deg, rgb(178, 255, 233) 129.6deg, rgb(225, 223, 219) 156.38deg, rgb(115, 174, 245) 187.01deg, rgb(213, 210, 207) 203.99deg, rgb(224, 221, 217) 219.78deg, rgb(219, 216, 213) 230.4deg, rgb(216, 213, 209) 270deg, rgb(225, 223, 219) 360deg)",
                                          backgroundColor: "initial",
                                          boxShadow: "rgba(49, 55, 57, 0.09) 0px 100px 80px, rgba(49, 55, 57, 0.06) 0px 41.7776px 33.4221px, rgba(49, 55, 57, 0.06) 0px 22.3363px 17.869px, rgba(49, 55, 57, 0.04) 0px 12.5216px 10.0172px, rgba(49, 55, 57, 0.04) 0px 6.6501px 5.32008px, rgba(49, 55, 57, 0.02) 0px 2.76726px 2.21381px"
                                    }}>
                                          <div className='flex flex-col justify-center items-center'><h1 class="text-[36px] font-bold lg:text-[3em] font-sandro text-pink-500">100%</h1><p class="text-[#3A5168] text-[0.813em] font-sandro">SAFU</p>
                                          </div>
                                    </div>
                                    {/* Repeat the above structure for other grid divs */}
                              </div>

                        </div>
                  </section>

                  <section>
                        <img className="hidden lg:block" src='https://bubbledefi.com/image/Tokenomics.png'></img>
                        <img className="lg:hidden " src='https://bubbledefi.com/image/tokenmicsmobile.png'></img>
                  </section>

                  <section className='pt-20 mb-7'>
                        <div className='relative'>
                              <img src='https://bubbledefi.com/image/bubble.png'></img>
                              <div class="absolute top-[30%] left-[50%] w-32 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src='https://bubbledefi.com/image/discard.png'></img>

                              </div>
                              <div class="absolute top-[55%] left-[40%] w-32 transform -translate-x-1/2 -translate-y-1/2">

                                    <img src='https://bubbledefi.com/image/telegram.png'></img>

                              </div>
                              <div class="absolute top-[60%] left-[60%] w-32 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src='https://bubbledefi.com/image/twitter.png'></img>

                              </div>
                              <div class="absolute top-[35%] left-[85%] w-32 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src='https://bubbledefi.com/image/medium.png'></img>

                              </div>
                              <div class="absolute top-[57%] left-[8%] w-32 transform -translate-x-1/2 -translate-y-1/2">
                                    <img src='https://bubbledefi.com/image/getbook.png'></img>

                              </div>
                              <button
                                    className="absolute top-[70%] rounded-lg bg-orange-400 left-[80%] flex justify-center mt-6 btn-primary px-9 py-4"
                                    style={{
                                          backgroundImage:
                                                "linear-gradient(rgba(225, 223, 219, 0.3) 0%, rgba(225, 223, 219, 0) 100%), linear-gradient(106.27deg, rgb(197, 57, 137) 16.3%, rgb(197, 82, 57) 87.94%)",
                                          backgroundColor: "initial",
                                          boxShadow: "rgba(226, 83, 165, 0.4) 0px 7px 21px"
                                    }}
                              >
                                    <span className="tezr">PITCH DECK</span>
                              </button>




                        </div>


                  </section>

                  <section className='mb-16 relative'>
                        <h1 className='text-gray-500 text-center text-3xl font-bold mb-4 p-2'>OUR PARTNERS</h1>

                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-[95%] mx-auto'>
                              <div className='bg-black rounded-md p-4 shadow-lg '>
                                    <img src='https://bubbledefi.com/image/pinksale.png' alt='Image' className='w-full h-auto' />
                              </div>
                              <div className='bg-black rounded-md p-4 shadow-lg'>
                                    <img src='https://bubbledefi.com/image/dexview.png' alt='Image' className='w-full h-auto' />
                              </div>
                              <div className='bg-black rounded-md p-4 shadow-lg'>
                                    <img src='https://bubbledefi.com/image/gotbit.png' alt='Image' className='w-full h-auto' />
                              </div>
                              <div className='bg-black rounded-md p-4 shadow-lg'>
                                    <img src='https://bubbledefi.com/image/catapult.svg' alt='Image' className='w-full h-auto' />
                              </div>
                        </div>
                        <div className='lg:block flex items-center justify-center z-50 absolute bottom-[46%] right-10 top-[100%] rounded-full border-black'>
                              <button className='border-2 rounded-full'>
                                    <svg className='black' width='36' height='36' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                          <path
                                                d='M22 12.6667L31.3333 22M22 12.6667V31.3333M22 12.6667L12.6667 22'
                                                stroke='#000000'
                                                strokeLinecap='round'
                                                strokeLinejoin='round'
                                          />
                                    </svg>
                              </button>
                        </div>



                  </section>
            </>

      );
};

export default Body;