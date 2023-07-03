"use client";
import { productData } from "@/helper/dummyData";

import React from "react";
import ProductCard from "./ProductCard";
import { motion } from "framer-motion";
import { Reveal } from "@/animation/Reveal";
const Products = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center p-5">Recent Items</h1>
            <Reveal>
                <div className="grid grid-col-1 lg:grid-cols-4 md:grid-cols-2 gap-8 p-5">
                    {productData.map((item) => (
                        <ProductCard {...item} />
                    ))}
                </div>
            </Reveal>
        </div>
    );
};

export default Products;
