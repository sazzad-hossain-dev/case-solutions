import { useState } from "react";
import HeroSection from "./HeroSection";

const Carousel = () => {
    // Set up state to manage which HeroSection to display
    const [activeIndex, setActiveIndex] = useState(0);

    // Define the HeroSection data (you can extend this as needed)
    const heroSections = [
        {
            imagePosition: "right-0",
            title: "Calidad y Servicio",
            description:
                "Elaboramos estrategias integrales que impulsan la productividad en su negocio.",
            buttonText: "Conocer más",
            imageUrl: "/assets/herooverly.png",
            bgImageUrl: "/assets/herobg.png",
        },
        {
            imagePosition: "left-0",
            title: "Ofrecemos atención personalizada",
            description:
                "Desarrollamos productos que se adaptan a las necesidades de nuestros clientes.",
            buttonText: "¡Contáctanos hoy mismo!",
            imageUrl: "/assets/herooverly.png",
            bgImageUrl: "/assets/herobgtwo.png",
        },
        {
            imagePosition: "left-0",
            title: "Conoce nuestros productos",
            description: "Administre sus recursos de una forma práctica.",
            buttonText: "Ver Productos",
            imageUrl: "/assets/herooverly.png",
            bgImageUrl: "/assets/herobgthree.png",
        },
    ];

    // Function to handle button click and change active index
    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="relative">
            {/* Pass handleButtonClick to HeroSection */}
            <HeroSection
                {...heroSections[activeIndex]} // Spread the data of the current section
                onButtonClick={handleButtonClick} // Pass the function to change the content
            />
        </div>
    );
};

export default Carousel;
