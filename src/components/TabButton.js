import React from "react";
import { motion } from "framer-motion";
import { HeadAnimation } from "./motion";

export default function TabButton({ children, onSelect, isSelected }) {

    return (
        <motion.div
            {...HeadAnimation("up", 0.1)}
        >
            <div className="glassmorphism rounded-md">
                <button className={isSelected ? "items-center rounded-md bg-primary text-light  p-2 px-6 text-lg border-2 border-primary border-solid md:text-base duration-500 font-[50] tracking-[0.075rem]" :  "items-center rounded-md  text-primary hover:bg-primary p-2 px-6 text-lg border-2 border-primary border-solid hover:text-light  md:text-base duration-500 font-[50] tracking-[0.075rem]"} onClick={onSelect}>{children}</button>
            </div>
        </motion.div>
    );
}