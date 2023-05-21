import React from "react";
import { footerLinks, socialMedia } from "../constants/index";
import { logo, instagram, facebook, twitter, linkedin } from "../assets";
import styles from "../style";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart}  md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex-col justify-start mr-10">
        <img
          src={logo}
          alt=""
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] flex flex-row justify-between md:mt-0 mt-10  flex-wrap w-full">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px]">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                   ${index != footerlink.links.length - 1 ? "mb-4" : "mb-0"}`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-between w-full md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        A new way to make the payments easy, reliable and secure.
      </p>

      <div className="flex flex-row justify-between items-center md:mt-0 mt-6">
        {socialMedia.map((media, index) => (
          <img
            src={media.icon}
            key={media.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== media.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(media.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
