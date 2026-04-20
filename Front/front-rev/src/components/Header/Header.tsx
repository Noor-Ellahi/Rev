import { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="flex justify-between py-10 max-lg:py-7.5 max-xl:px-20 max-lg:px-5 px-40">
                <div>
                    {/* ♀d☼£◄↕►‼↕◄♫/:;K╖║┤╢↨╣╡┤- */}
                    <h1 className="text-4xl max-lg:text-3xl text-white flex items-center">F<span className="text-3xl text-[#991B1B]">║</span>TNESS</h1>
                </div>
                <div className="flex justify-between items-center gap-20 max-lg:hidden">
                    <ul className="flex gap-10 font-semibold  text-[#fff] text-[17px]">
                        <li className="hover:text-[#8c8c8c] cursor-pointer transition duration-300 ">Home</li>
                        <li className="hover:text-[#8c8c8c] cursor-pointer transition duration-300">Program</li>
                        <li className="hover:text-[#8c8c8c] cursor-pointer transition duration-300">Pricing</li>
                        <li className="hover:text-[#8c8c8c] cursor-pointer transition duration-300">Contact</li>
                    </ul>
                    <div className="flex gap-2">
                        <button className="border-[#fff] transition hover:bg-[#fff] hover:text-[#000] duration-500 border-1 text-[#fff] text-lg font-semibold px-6 items-center flex justify-center py-2 rounded-full">Login</button>
                        <button className="border-[#991B1B] cursor-pointer transition duration-500 hover:bg-[#EF4444] hover:border-[#EF4444] border-1 text-[#fff] text-lg font-semibold px-6 items-center flex justify-center py-2 rounded-full">Register</button>
                    </div>
                </div>
                <div className="min-lg:hidden text-white text-3xl">
                    <HiMenu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
                </div>


            </div>
            
            <div
                className={`
                    min-lg:hidden
                absolute left-0 w-full z-50
                transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]
                ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
                `}>
                <ul className="px-7 pb-6 bg-black/95 backdrop-blur-md ">

                    <li className="group cursor-pointer py-3 flex justify-between items-center transition-all duration-300">
                        <span className="relative text-gray-300 group-hover:text-white transition duration-300">
                            Home
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#991B1B] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>

                    <li className="group cursor-pointer py-3 flex justify-between items-center transition-all duration-300">
                        <span className="relative text-gray-300 group-hover:text-white transition duration-300">
                            Program
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#991B1B] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>

                    <li className="group cursor-pointer py-3 flex justify-between items-center transition-all duration-300">
                        <span className="relative text-gray-300 group-hover:text-white transition duration-300">
                            Pricing
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#991B1B] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>

                    <li className="group cursor-pointer py-3 flex justify-between items-center transition-all duration-300">
                        <span className="relative text-gray-300 group-hover:text-white transition duration-300">
                            Contact
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#991B1B] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </li>

                </ul>
            </div>

        </>
    )
}


export default Header











