import React from "react";
import Image from "next/image";
import ContactInfo from "./address_title_icons";
import location_icon from "../../public/Images/icons/location.svg";
import phone_icon from "../../public/Images/icons/phone.svg";
import whatsapp_icon from "../../public/Images/icons/whatsapp.svg";
import email_icon from "../../public/Images/icons/email.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#5E5E3C] py-10">
      <div className="grid grid-cols-1 pl-10 md:grid-cols-3 gap-8">
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <div className="text-2xl font-bold text-white">Clinic Name</div>
          <p className="w-[50%] mx-auto md:w-[100%] text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="flex flex-col space-y-4 items-center md:items-left">
          <div className="text-2xl font-bold text-white flex">Contact Us</div>
          <ContactInfo
            image={location_icon}
            title="Location: "
            subTitle="4517 Washington Ave. Manchester, Kentucky 39495"
            customColor="ligth"
          />
          <ContactInfo
            image={phone_icon}
            title="Phone: "
            subTitle="(432) 123446098"
            customColor="ligth"
          />
          <ContactInfo
            image={whatsapp_icon}
            title="Whatsapp: "
            subTitle="+923 123446098"
            customColor="ligth"
          />
          <ContactInfo
            image={email_icon}
            title="Email: "
            subTitle="clinicsmail44@gmail.com"
            customColor="ligth"
          />
        </div>
        <div className="flex flex-col space-y-4 items-center md:items-left">
          <div className="text-2xl font-bold text-white">Explore Us</div>
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Our Team
            </a>
            <a href="#" className="text-sm text-gray-300 hover:text-white">
              Services
            </a>
          </div>
          <div className="flex space-x-10 text-white pt-10">
            <FaTwitter
              className=" border border-white rounded p-1"
              style={{ fontSize: "30px" }}
            />
            <FaFacebookF
              className="border border-white rounded p-1"
              style={{ fontSize: "30px" }}
            />
            <FaLinkedinIn
              className="border border-white rounded p-1"
              style={{ fontSize: "30px" }}
            />
            <FaInstagram
              className="border border-white rounded p-1"
              style={{ fontSize: "30px" }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
