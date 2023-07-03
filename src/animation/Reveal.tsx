import React, { useEffect, useRef } from "react";
import { motion, useAnimate, useAnimation, useInView } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
    });
    const mainControls = useAnimation();
    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    return (
        <div ref={ref} className={`relative w-${width} overflow-hidden`}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden" //mapping to variants
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
                className=""
            >
                {children}
            </motion.div>
        </div>
    );
};
