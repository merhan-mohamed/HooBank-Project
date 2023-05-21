import React from "react";
import { Discount, robot } from "../assets";
import styles from "../style";
import Getstarted from "./Getstarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex items-center px-4 py-[6px] bg-discount-gradient rounded-[10px] mb-2">
          <img src={Discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 font-poppins`}>
            <span className="text-white">20% </span>DISCOUNT FOR{" "}
            <span className="text-white">1 MONTH </span>ACCOUNT
          </p>
        </div>

        <div className={`${styles.flexStart}`}>
          <h1 className="text-white text-[52px] ss:text-[72px] font-poppins font-semibold">
            The Next <br />
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <Getstarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] ">
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`flex ${styles.flexCenter} md:my-0 my-10 relative `}>
        <img
          src={robot}
          alt="billing"
          className="relative z-[5] w-[100%] h-[100%]"
        />

        {/* gradient start*/}
        <div className="absolute pink__gradient z-[0] w-[40%] h-[35%] top-0 "></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
        {/* gradient start*/}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Getstarted />
      </div>
    </section>
  );
};

export default Hero;
