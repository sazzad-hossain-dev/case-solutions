import Image from "next/image";
import React from "react";

const CustomBtn = ({ text }) => {
    return (
        <button className="bg-white mt-8 font-bold font-urbanist text-[#1B2954] inline-flex items-center rounded-full px-3 py-2 w-auto sm:px-4 sm:py-2 md:px-4 md:py-2">
            <span className="flex items-center gap-2 text-sm  md:text-lg">
                {text}
                <Image
                    alt="button logo"
                    src="/assets/buttonlogo.png"
                    height={20}
                    width={20}
                    className="sm:h-6 sm:w-6 md:h-7 md:w-7 h-5 w-5"
                />
            </span>
        </button>
    );
};

export default CustomBtn;
