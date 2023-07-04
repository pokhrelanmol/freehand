"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/animation/Reveal";
import Navigation from "./Navigation";
const Hero = () => {
    return (
        <div className="w-full h-[600px] bg-[url(/hero.jpg)] bg-cover ">
            <div
                className={` brightness-90 flex justify-center items-center p-10`}
            >
                <Reveal>
                    <div className="flex flex-col  lg:text-6xl md:text-5xl text-3xl justify-center h-full w-full items-center gap-2">
                        {" "}
                        <h1 className="text-center  font-bold drop-shadow-lg">
                            WELCOME TO
                            <span className="text-center bg-gradient-to-r text-white font-thin rounded from-amber-500   ml-3">
                                FREEHAND.COM
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-5 text-center md:text-lg lg:text-xl  text-sm w-1/2 opacity-70 text-gray-700"
                        >
                            Free hand is a place where you can donate your
                            unused items to the needy people.The person will
                            contact you if they found the item you listed
                            useful.
                        </motion.p>
                        <motion.a
                            initial={{ y: -1000 }}
                            animate={{ y: 0 }}
                            transition={{
                                duration: 0.8,
                                type: "spring",
                                damping: 10,
                            }}
                            className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                            href="#"
                        >
                            Get Started
                        </motion.a>
                    </div>
                </Reveal>
            </div>
        </div>
    );
};

export default Hero;
