import Image from "next/image";
import { useState } from "react";
import CustomBtn from "./CustomBtn";

const HeroSection = ({
    imagePosition,
    title,
    description,
    buttonText,
    imageUrl,
    bgImageUrl,
    onButtonClick,
}) => {
    const [activeButton, setActiveButton] = useState(null);

    // Function to handle button click
    const handleButtonClick = (index) => {
        setActiveButton(index); // Set the clicked button as active
        onButtonClick(index); // Trigger the parent button click handler
    };
    return (
        <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImageUrl})` }} // Dynamic background image here
        >
            <div className="flex max-w-7xl mx-auto px-6 md:px-10 h-full items-center">
                {/* Image Section */}
                <div className={`absolute ${imagePosition} top-0`}>
                    <Image
                        src={imageUrl}
                        alt="overlay"
                        height={400}
                        width={800}
                        className="object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="relative flex flex-col items-start space-y-6 md:space-y-8 z-10 font-urbanist text-white">
                    <h1 className="font-bold text-[min(36px,6vw)] sm:text-[min(48px,8vw)] md:text-[min(56px,6vw)] lg:text-[60px] uppercase">
                        {title}
                    </h1>
                    <p className="font-medium text-[min(16px,2vw)] sm:text-[min(18px,1.5vw)] md:text-[min(20px,2vw)] lg:text-[20px]">
                        {description}
                    </p>
                    <CustomBtn text={buttonText} />

                    {/* Buttons to switch content */}
                    <div className="flex justify-center space-x-4 mt-8">
                        <button
                            onClick={() => handleButtonClick(0)}
                            className={`h-2 w-16 sm:h-3 sm:w-12 md:h-2 md:w-16 lg:h-2 lg:w-18 ${
                                activeButton === 0 ? "bg-white" : "bg-[#898984]"
                            } transition-all`}
                        ></button>
                        <button
                            onClick={() => handleButtonClick(1)}
                            className={`h-2 w-16 sm:h-3 sm:w-12 md:h-2 md:w-16 lg:h-2 lg:w-18 ${
                                activeButton === 1 ? "bg-white" : "bg-[#898984]"
                            } transition-all`}
                        ></button>
                        <button
                            onClick={() => handleButtonClick(2)}
                            className={`h-2 w-16 sm:h-3 sm:w-12 md:h-2 md:w-16 lg:h-2 lg:w-18 ${
                                activeButton === 2 ? "bg-white" : "bg-[#898984]"
                            } transition-all`}
                        ></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
