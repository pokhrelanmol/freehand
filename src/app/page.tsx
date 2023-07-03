import Awareness from "@/components/Awareness";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useSession } from "next-auth/react";

export default function Home() {
    return (
        <div className="mg:max-w-7xl md:mx-auto">
            <Navigation />
            <Hero />
            <Awareness />
            <Products />
            <Footer />
        </div>
    );
}
