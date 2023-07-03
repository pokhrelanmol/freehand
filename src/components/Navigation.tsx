"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navigation = () => {
    const session = useSession();
    return (
        <div className="p-5 float-right">
            <ul>
                {!session?.data?.user?.email ? (
                    <Link
                        href="/signin"
                        className="
mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full
                        "
                    >
                        Login
                    </Link>
                ) : (
                    <>
                        <div>HI, {session?.data?.user?.name}</div>
                        <li
                            className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                            onClick={() => signOut()}
                        >
                            Logout
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Navigation;
