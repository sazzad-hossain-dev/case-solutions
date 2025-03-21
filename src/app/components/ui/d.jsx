// "use client";
// import Image from "next/image";
// import { useState } from "react";

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     // Navigation links array
//     const navlinks = [
//         "Inicio",
//         "Quiénes somos",
//         "Servicios",
//         "Productos",
//         "Casos de éxito",
//         "Contacto",
//     ];

//     return (
//         <header className="bg-white py-5 shadow-md">
//             {/* Header Container */}
//             <div className="container mx-auto flex gap-20 items-center">
//                 {/* Hamburger Menu (Mobile Only) */}

//                 <div className="md:hidden flex items-center pl-12">
//                     <button
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         className={`text-[#2B2F67] text-2xl `}
//                     >
//                         {isMenuOpen ? "X" : " ☰"}
//                     </button>
//                 </div>

//                 {/* Logo Section desktop */}
//                 <div className=" hidden md:block">
//                     <Image
//                         src="/assets/logo.png"
//                         alt="Logo"
//                         height={50}
//                         width={150}
//                     />
//                 </div>

//                 {/* Logo Section mobile */}
//                 <div className="md:hidden flex items-center justify-center w-full">
//                     <Image
//                         src="/assets/logo.png"
//                         alt="Logo"
//                         height={50}
//                         width={150}
//                     />
//                 </div>

//                 {/* Right Content Section */}
//                 <div className="hidden md:block w-full">
//                     {/* Slogan & Contact Info */}
//                     <div className="flex justify-between items-center">
//                         {/* Business Slogan */}
//                         <p className="text-[#2B2F67] text-lg font-urbanist font-bold italic border-b border-[#C9C9C9] ">
//                             La solución tecnológica a la medida de tu negocio
//                         </p>

//                         {/* Contact Details */}
//                         <div className="flex items-center gap-6">
//                             {/* First Contact Info */}
//                             <div className="text-[#8F092F] text-base ">
//                                 <p className=" font-bold font-urbanist">
//                                     correo@casesolutions.mx
//                                 </p>
//                                 <p className="flex items-start gap-4 font-normal">
//                                     <span>
//                                         <Image
//                                             src="/assets/mail.png"
//                                             alt="Message Icon"
//                                             height={20}
//                                             width={20}
//                                         />
//                                     </span>
//                                     Mandar un mensaje
//                                 </p>
//                             </div>

//                             {/* Divider between contact details */}

//                             {/* Second Contact Info */}
//                             <div className="text-[#8F092F] text-base border-l pl-4 border-[#8F092F]">
//                                 <p className=" font-bold font-urbanist">
//                                     (55) 1107-0478
//                                 </p>
//                                 <p className="flex items-start gap-4 font-normal">
//                                     <span>
//                                         <Image
//                                             src="/assets/phone.png"
//                                             alt="Phone Icon"
//                                             height={20}
//                                             width={20}
//                                         />
//                                     </span>
//                                     Mandar un mensaje
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navigation Menu */}
//                     <nav className=" mt-4 pt-3">
//                         <ul className="flex justify-between items-center  text-[#2B2F67] font-bold font-urbanist text-lg">
//                             {navlinks.map((link) => (
//                                 <li
//                                     key={link}
//                                     className="cursor-pointer hover:border-b-2 border-[#2B2F67] transition-all duration-150"
//                                 >
//                                     {link}
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>
//                 </div>
//             </div>

//             {isMenuOpen && (
//                 <div className="md:hidden bg-[#fff] absolute top-40 left-0 w-full h-full  z-10 flex flex-col ">
//                     {/* Company Slogan */}
//                     <div className="text-white bg-[#2B2F67] text-base font-urbanist font-bold italic border-b border-[#C9C9C9] p-4 text-center">
//                         La solución tecnológica a la medida de tu negocio
//                     </div>

//                     {/* Navigation Links */}
//                     <nav className="flex flex-col  mt-4 ml-8">
//                         <ul>
//                             {navlinks.map((link) => (
//                                 <li
//                                     key={link}
//                                     className="cursor-pointer text-[#2B2F67] text-lg font-urbanist py-2 font-bold"
//                                 >
//                                     {link}
//                                 </li>
//                             ))}
//                         </ul>
//                     </nav>

//                     {/* Logo and Contact Details (Centered) */}
//                     <div className="flex flex-col items-center mt-8">
//                         {/* Logo */}
//                         <div>
//                             <Image
//                                 src="/assets/logo.png"
//                                 alt="Logo"
//                                 height={50}
//                                 width={150}
//                             />
//                         </div>

//                         {/* Contact Info */}
//                         <div className="text-[#8F092F] text-base mt-4">
//                             <p className="font-bold font-urbanist">
//                                 correo@casesolutions.mx
//                             </p>
//                             <p className="flex items-start gap-4 font-normal">
//                                 <span>
//                                     <Image
//                                         src="/assets/mail.png"
//                                         alt="Message Icon"
//                                         height={20}
//                                         width={20}
//                                     />
//                                 </span>
//                                 Mandar un mensaje
//                             </p>

//                             <p className="font-bold font-urbanist">
//                                 (55) 1107-0478
//                             </p>
//                             <p className="flex items-start gap-4 font-normal">
//                                 <span>
//                                     <Image
//                                         src="/assets/phone.png"
//                                         alt="Phone Icon"
//                                         height={20}
//                                         width={20}
//                                     />
//                                 </span>
//                                 Mandar un mensaje
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </header>
//     );
// };

// export default Header;
