import React from "react";
import { BsCircleFill } from "react-icons/bs";
import img1 from "../../assets/body-img1.png";
import img2 from "../../assets/body-img2.png";
import img3 from "../../assets/body-img3.png";
import img4 from "../../assets/img4.jpeg";

const LandingPage = () => {
  return (
    <div className="bg-black text-white">
      <div className="w-[44rem] mx-auto text-center">
        <h3 className="text-[2.5rem] font-bold">
          Stand out with a free Business Profile
        </h3>
        <p className="text-[1.25rem] pt-3 font-thin">
          Turn people who find you on this website into new customers with a
          free Business Profile for your storefront or service area.Personalise
          your profile with promotion product photos, offers, posts, and more.
        </p>
      </div>
      <div className="w-[46rem] mx-auto mt-[4rem] text-center">
        <h3 className="text-[2.5rem] font-bold">
          First impression is the last impresion
        </h3>
        <p className="text-[1.25rem] pt-3 font-thin">
          Highlight essential info and show what makes your business unique,
          right on your Business Profile.
        </p>
      </div>
      <div className="flex flex-row space-x-[4rem] justify-center py-[15rem] px-[5rem] ">
        <div className="flex-row space-x-2 inline-flex w-[30rem] h-[34rem] ">
          <div className="text-[3.5rem] text-[#dabb59] pr-1">
            <div className="relative items-center flex">
              <BsCircleFill />
              <p className="text-white absolute text-[2.5rem] ml-4">1</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg bg-[#3d3d3d] max-w-sm ">
              <div className="pt-3 px-4">
                <h5 className="text-white text-[1.25rem] font-medium  pt-2">
                  Add essential information
                </h5>
              </div>
              <img
                className="rounded-t-lg px-6 pt-8"
                src={img1}
                alt="an illustrtaion for information"
              />
              <div className="px-4 pt-[1rem]">
                <p className="text-white text-[1.075rem]">
                  Let customers know info like phone number, products you sell,
                  health and safety measures so customers know what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-row space-x-2 inline-flex w-[30rem] h-[34rem] ">
          <div className="text-[3.5rem] text-[#dabb59]">
            <div className="relative items-center flex">
              <BsCircleFill />
              <p className="text-white absolute text-[2.5rem] ml-4">2</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg bg-[#3d3d3d] max-w-sm ">
              <div className="pt-2 px-4">
                <h5 className="text-white text-[1.25rem] font-medium mb-2 pt-2">
                  Share product photos, brand logo and your goals
                </h5>
              </div>
              <img
                className="rounded-t-lg px-6 pt-1"
                src={img2}
                alt="an illustration for branding and awareness"
              />

              <div className="px-4 pt-[1rem]">
                <p className="text-white text-[1.075rem] text-base ">
                  Showcase your brand logo, product photos and what are your
                  goals for their business to stand out more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-row space-x-2 inline-flex w-[30rem] h-[34rem] ">
          <div className="text-[3.5rem] text-[#dabb59]">
            <div className="relative items-center flex">
              <BsCircleFill />
              <p className="text-white absolute text-[2.5rem] ml-4">3</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg bg-[#3d3d3d] max-w-sm ">
              <div className="px-4 pt-2">
                <h5 className="text-white text-[1.25rem] font-medium  pt-2">
                  Add sale info
                </h5>
              </div>
              <img
                className="rounded-t-lg px-6 pt-8"
                src={img3}
                alt="an illustration for sale"
              />
              <div className="px-4 pt-[1rem]">
                <p className="text-white text-[1.075rem] text-base">
                  Add info about your sale so customers can set a reminder and
                  miss it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white pb-28 pt-12">
        <div className="w-[72rem] mx-auto flex justify-between items-center pb-20">
          <div>
            <h2 className="text-[2.275rem]">Easily connect with customers</h2>
            <p className="text-[1.075rem] pt-3">
              Update customers with the latest via posts, offers and more. These
              business reviews will improve your business's search engine
              visibility and increase the odds that local customers will find
              you.
            </p>
          </div>
          <div className="pl-40">
            <img src={img4} alt="body img" className="rounded-xl"></img>
          </div>
        </div>
        <div className="w-[72rem] mx-auto flex justify-between items-center py-20">
          <div className="pr-40">
            <img src={img4} alt="body img" className="rounded-xl"></img>
          </div>
          <div>
            <h2 className="text-[2.275rem]">
              Show what you sell from clothing to electronics
            </h2>
            <p className="text-[1.075rem] pt-3">
              Whether you're a small business owner operating from the comfort
              of your home or a service provider your profile helps customers do
              business with you easily and contact directly with you.
            </p>
          </div>
        </div>
        <div className="w-[72.5rem] mx-auto flex justify-between items-center py-20">
          <div>
            <h2 className="text-[2.275rem]">
              Invite your customers to rate your business
            </h2>
            <p className="text-[1.075rem] pt-3 w-[42rem]">
              Invite your customers to rate your products and your brand.
              Collecting reviews and responding to them shows that you care
              about customers feedback. More reviews will help you rank higher
              and get better reach. Taking remedy steps to correct a bad review
              will build more customer loyality in the long run.
            </p>
          </div>
          <div className="pl-36">
            <img src={img4} alt="body img" className="rounded-xl"></img>
          </div>
        </div>
      </div>
      <div className="w-[44rem] mx-auto text-center">
        <h3 className="text-[2.5rem] font-bold">
          Show the best of your business
        </h3>
        <p className="text-[1.25rem] pt-3 font-thin">
          Reach more customers in these simple steps with your free Business
          Profile so customers get the info they need to choose you.
        </p>
      </div>
      <div className="flex flex-row space-x-[4rem] justify-center py-[15rem] px-[5rem] ">
        <div className="flex-row space-x-2 inline-flex w-[30rem] h-[30rem] ">
          <div className="text-[3.5rem] text-[#dabb59] pr-1">
            <div className="relative items-center flex">
              <BsCircleFill />
              <p className="text-white absolute text-[2.5rem] ml-4">1</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg bg-[#3d3d3d] max-w-sm ">
              <div className="pt-3 px-4">
                <h5 className="text-white text-[1.25rem] font-medium pt-2">
                  Create
                </h5>
              </div>
              <img
                className="rounded-t-lg px-6 pt-3"
                src={img1}
                alt="an illustrtaion for information"
              />
              <div className="px-4 pt-[1rem]">
                <p className="text-white text-[1.075rem]">
                  Create a Business Profile or manage an existing profile.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-row space-x-2 inline-flex w-[30rem] h-[30rem] ">
          <div className="text-[3.5rem] text-[#dabb59]">
            <div className="relative items-center flex">
              <BsCircleFill />
              <p className="text-white absolute text-[2.5rem] ml-4">2</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg bg-[#3d3d3d] max-w-sm ">
              <div className="pt-2 px-4">
                <h5 className="text-white text-[1.25rem] font-medium mb-2 pt-2">
                  Personalize
                </h5>
              </div>
              <img
                className="rounded-t-lg px-6 pt-1"
                src={img2}
                alt="an illustration for branding and awareness"
              />

              <div className="px-4 pt-[1rem]">
                <p className="text-white text-[1.075rem] text-base ">
                  Add contact info product photos and other details to get
                  discoverd by customers near you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-row space-x-2 inline-flex w-[30rem] h-[30rem] ">
          <div className="text-[3.5rem] text-[#dabb59]">
            <div className="relative items-center flex">
              <BsCircleFill />
              <p className="text-white absolute text-[2.5rem] ml-4">3</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="rounded-xl shadow-lg bg-[#3d3d3d] max-w-sm ">
              <div className="px-4 pt-2">
                <h5 className="text-white text-[1.25rem] font-medium pt-2">
                  Manage
                </h5>
              </div>
              <img
                className="rounded-t-lg px-6 pt-4"
                src={img3}
                alt="an illustration for sale"
              />
              <div className="px-4 pt-[1rem]">
                <p className="text-white text-[1.075rem] text-base">
                  Share updates regarding sale respond to reviews and connect
                  with customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[44rem] mx-auto pb-40 text-center">
        <h3 className="text-[2.5rem] font-bold">
          Offer more ways to shop your products
        </h3>
        <p className="text-[1.25rem] pt-3 pb-20 mb-font-thin">
          Show whether you shop in store shopping, store pickup or home delivery
        </p>
        <a className="bg-slate-700 pt-2 hover:text-white font-bold py-3 px-4 rounded">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
