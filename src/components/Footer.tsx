import React from "react";
import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

export const Footer = () => {
    return (
        <div className="p-5 my-10 shadow-md flex flex-col items-center justify-center gap-3">
            {/*social icons  */}
            <div className="flex gap-5">
                <BsFacebook className="cursor-pointer hover:text-gray-500 h-8 w-8" />
                <BsTwitter className="cursor-pointer hover:text-gray-500 h-8 w-8" />
                <BsInstagram className="cursor-pointer hover:text-gray-500 h-8 w-8" />
                <BsYoutube className="cursor-pointer hover:text-gray-500 h-8 w-8" />
            </div>
            {/* links */}
            <div className="flex gap-8 mt-5">
                <a
                    href="#"
                    className="text-xl text-gray-700 hover:text-gray-500"
                >
                    About
                </a>
                <a
                    href="#"
                    className="text-xl text-gray-700 hover:text-gray-500"
                >
                    Contact
                </a>
                <a
                    href="#"
                    className="text-xl text-gray-700 hover:text-gray-500"
                >
                    Privacy Policy
                </a>
                <a
                    href="#"
                    className="text-xl text-gray-700 hover:text-gray-500"
                >
                    Mission
                </a>
            </div>
            <div>Copyright©2023 freehand.com</div>
        </div>
    );
};
