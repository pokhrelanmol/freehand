"use client";
import { EyeIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
const Awareness = () => {
    return (
        <div className="flex justify-around p-14 shadow-md">
            <motion.div
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeIn", duration: "0.5" }}
                className="space-y-4"
            >
                <h1 className=" text-lg text-center md:text-3xl font-bold w-96">
                    Let Us Come Together To Make a Difference
                </h1>
                <p className="text-gray-500 text-center md:w-[400px] text-sm md:text-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo.
                </p>
                {/* misson and vision */}
                <div className="flex md:flex-row  flex-col gap-10">
                    <div className="bg-amber-200 rounded p-5 ">
                        <span className="flex gap-2 text-lg text-amber-500">
                            <ShieldCheckIcon className="h-5 w-5" />
                            Our Mission
                        </span>
                        <p className="text-gray-500 w-48">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam
                        </p>
                    </div>
                    <div className="bg-amber-200 rounded p-5">
                        <span className="flex gap-2 text-lg text-amber-500">
                            <EyeIcon className="h-5 w-5" />
                            Our Vision
                        </span>
                        <p className="text-gray-500 w-48">
                            Lorem ipsum dolor sit amet, consetetur sadipscing
                            elitr, sed diam
                        </p>
                    </div>
                </div>
            </motion.div>
            {/* right image */}
            <motion.div
                initial={{ x: 1000 }}
                animate={{ x: 0 }}
                transition={{ ease: "easeIn", duration: "0.5" }}
            >
                <Image
                    className="object-cover rounded-md"
                    src="/donation.jpeg"
                    width={550}
                    height={500}
                    alt="Donation"
                />
            </motion.div>
        </div>
    );
};

export default Awareness;
