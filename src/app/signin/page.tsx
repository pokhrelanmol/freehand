"use client";
import { authOptions } from "@/helper/authOptions";
import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";
const Signin = () => {
    return (
        <div
            className="flex justify-center items-center h-screen shadow-md cursor-pointer border"
            onClick={() => signIn("google")}
        >
            <FcGoogle className="text-2xl" /> Sign in with Google
        </div>
    );
};

export default Signin;
