import React from 'react'
import {BsCircleFill} from 'react-icons/bs';
import img1 from "../../assets/body-img1.png";
import img2 from "../../assets/body-img2.png";
import img3 from "../../assets/body-img3.png";

const LandingPage=()=> {
    return(
        <div className='bg-black text-white'>
            <div className='w-[36rem] mx-auto text-center'>
            <h3 className='text-[2rem] font-bold'>Stand out with a free Business Profile</h3>
            <p className='text-[1rem] pt-3 font-thin'>Turn people who find you on this website into new customers with a free Business Profile for your 
                storefront or service area.Personalise your profile with promotion product photos,offers,posts,and more.</p>
            </div>
            <div  className='w-[36rem] mx-auto mt-[4rem] text-center'>
                <h3 className='text-[2rem] font-bold'>First impression is the last impresion</h3>
                <p  className='text-[1rem] pt-3 font-thin'>Highlight essential info and show what makes your business unique,right on your Business Profile.</p>
            </div>
            <div className='flex flex-row space-x-2 justify-evenly pt-[8rem] px-[12rem]'>
                <div className='flex-row space-x-2 inline-flex'>
                    <div className="text-[2.5rem] text-yellow-400">
                        <div className='relative items-center flex'>
                         <BsCircleFill  />
                         <p className='text-white absolute text-[2rem] ml-3'>1</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                      <div class="rounded-lg shadow-lg bg-black max-w-sm ">
                        <div class="p-2">
                          <h5 class="text-white text-xl font-medium mb-2">Add essential information</h5>
                        </div>
                        <a href="#!">
                          <img class="rounded-t-lg p-2" src={img1} alt=""/>
                        </a>
                        <div class="p-6">
                          <p class="text-white text-base mb-4">
                            Let customers know info like hone number,products you sell,health and safety
                            measures so customers know what to expect.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>

                <div className='flex-row space-x-2 inline-flex'>
                    <div className="text-[2.5rem] text-yellow-400">
                        <div className='relative items-center flex'>
                         <BsCircleFill  />
                         <p className='text-white absolute text-[2rem] ml-3'>2</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                      <div class="rounded-lg shadow-lg bg-black max-w-sm ">
                        <div class="p-2">
                          <h5 class="text-white text-xl font-medium mb-2">Share product photos,logo and goals</h5>
                        </div>
                        <a href="#!">
                          <img class="rounded-t-lg p-2" src={img2} alt=""/>
                        </a>
                        <div class="p-6">
                          <p class="text-white text-base mb-4">
                            Showcase your brand logo,product photos and what are your goals for their business to stand out more.
                          </p>
                        </div>
                      </div>
                    </div>
                </div>


                <div className='flex-row space-x-2 inline-flex'>
                    <div className="text-[2.5rem] text-yellow-400">
                        <div className='relative items-center flex'>
                         <BsCircleFill  />
                         <p className='text-white absolute text-[2rem] ml-3'>3</p>
                        </div>
                    </div>
                    <div class="flex justify-center">
                      <div class="rounded-lg shadow-lg bg-black max-w-sm ">
                        <div class="p-2">
                          <h5 class="text-white text-xl font-medium mb-2">Add sale info</h5>
                        </div>
                        <a href="#!">
                          <img class="rounded-t-lg p-2" src={img3} alt=""/>
                        </a>
                        <div class="p-6">
                          <p class="text-white text-base mb-4">
                            Add info about your sale so customers can set a remainder and miss it!
                          </p>
                        </div>
                      </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LandingPage