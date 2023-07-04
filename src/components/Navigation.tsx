"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { IProductProps } from "./ProductCard";
import { productData } from "@/helper/dummyData";

interface IFormData extends IProductProps {}

const Navigation = () => {
    const session = useSession();
    const [formData, setFormData] = React.useState<IFormData>({} as IFormData);
    const [image, setImage] = React.useState<File | null>(null);
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(e.target.files[0]);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleAddItem = async (e: React.FormEvent<HTMLFormElement>) => {
        productData.push(formData);
    };
    return (
        <div className="flex justify-between p-5 items-center">
            {/* logo */}
            <div>
                <Image src="/logo1.png" width={100} height={50} alt="logo" />
            </div>
            {/* links */}
            {!session?.data?.user?.email ? (
                <ul className="space-x-2">
                    <Link
                        href="/signin"
                        className="
 px-4 py-2 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700  text-white/70 font-semibold drop-shadow-lg rounded-full
                        "
                    >
                        Login
                    </Link>
                    <Dialog>
                        <DialogTrigger asChild>
                            <button
                                className="
 px-4 py-2 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700  text-white/70 font-semibold drop-shadow-lg rounded-full
                        "
                            >
                                Add Item
                            </button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>Add Items</DialogTitle>
                            </DialogHeader>
                            <form
                                onSubmit={handleAddItem}
                                className="grid gap-4 py-4"
                            >
                                <div className="flex flex-col mt-2">
                                    <label htmlFor="image" className="">
                                        Upload Image
                                    </label>
                                    <input
                                        onChange={(e) => handleImage(e)}
                                        type="file"
                                        className="border"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="title" className="">
                                        Title
                                    </label>
                                    <input
                                        name="title"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.title}
                                        className="border"
                                    />
                                </div>
                                <div className="flex flex-col ">
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        className="border"
                                        cols={20}
                                        rows={5}
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="contact" className="">
                                        Contact No
                                    </label>
                                    <input
                                        name="contactInfo"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.contactInfo}
                                        className="border"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="location" className="">
                                        Location
                                    </label>
                                    <input
                                        name="location"
                                        onChange={(e) => handleChange(e)}
                                        value={formData.location}
                                        className="border"
                                    />
                                </div>
                            </form>
                            <DialogFooter>
                                <button
                                    className="
 px-4 py-2 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700  text-white/70 font-semibold drop-shadow-lg rounded-full
                        "
                                    type="submit"
                                >
                                    Add Item
                                </button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </ul>
            ) : (
                <ul>
                    <div>HI, {session?.data?.user?.name}</div>
                    <li
                        className="mt-8 px-12 py-3 bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-xl text-white/70 font-semibold drop-shadow-lg rounded-full"
                        onClick={() => signOut()}
                    >
                        Logout
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Navigation;
