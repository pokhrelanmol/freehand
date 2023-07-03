"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { motion, useScroll, useTransform } from "framer-motion";
export interface IProductProps {
    id: number;
    title: string;
    description: string;
    image: string;
    contactInfo: string;
    location: string;
}
const ProductCard = ({
    title,
    description,
    image,
    contactInfo,
    location,
}: IProductProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }} // Scale up on hover
            whileTap={{ scale: 0.9 }} // Scale down on tap (optional)
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col shadow-md cursor-pointer rounded-md p-5 "
        >
            <div>
                <Image
                    width={300}
                    height={20}
                    src={image}
                    alt="productImage"
                    className="object-cover rounded-md"
                />
            </div>
            <div className="space-y-2">
                <h1 className="text-gray-700 font-semibold">{title}</h1>
                <p className="text-gray-500">{description}</p>
                <p className="text-semibold text-gray-500">
                    Contact information:{" "}
                    <span className="text-gray-400">{contactInfo}</span>
                </p>
                <p className="flex">
                    <MapPinIcon className="h-5 w-5" />
                    {location}
                </p>
            </div>
        </motion.div>
    );
};

export default ProductCard;
