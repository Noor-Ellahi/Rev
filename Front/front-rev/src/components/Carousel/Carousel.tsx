
import { useRef } from "react";

// Icons
import { FaArrowLeft, FaArrowRight, FaDumbbell, FaRunning, FaAppleAlt } from "react-icons/fa";


const Carousel = () => {

    const sliderRef = useRef < HTMLDivElement | null > (null);

    // Scroll button:
    const slide = (direction: "left" | "right"): void => {
        if (!sliderRef.current) return;

        const scrollAmount = direction === "left" ? -200 : 200;

        sliderRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <div className='bg-[#0b0803]'>
            <div className='flex justify-between px-40 max-xl:px-20 max-lg:px-7.5 pt-20 pb-15 max-xl:pb-10 max-lg:pb-5'>
                <h1 className='text-[#fff] font-semibold max-lg:text-3xl text-4xl'>Explore Our Program</h1>
                <div className='flex gap-5'>
                    <button onClick={() => slide("left")} className='hover:bg-[#EF4444] cursor-pointer transition duration-400 rounded-full p-3.5  text-xl bg-[#fff]'><FaArrowLeft /></button>
                    <button onClick={() => slide("right")} className=' hover:bg-[#EF4444] cursor-pointer transition duration-400 rounded-full p-3.5 text-xl bg-[#fff]'><FaArrowRight /></button>
                </div>
            </div>


            <div className='pl-40 max-xl:pl-20 max-lg:pl-6.5 py-10'>
                <div className='flex gap-5  overflow-hidden' ref={sliderRef}>

                    <div className='bg-[#171716] group cursor-pointer transition duration-400 hover:bg-[#EF4444] max-w-[45vh] px-5 h-60 flex-shrink-0 flex flex-col justify-center rounded-2xl'>
                        <h3 className='pb-4 text-[#fff]  text-2xl font-semibold flex items-center gap-2'><span className='bg-[#2b2b2b] group-hover:bg-[#F87171] transition duration-400 rounded-full p-2'><FaRunning className='text-lg' /></span> One week</h3>
                        <p className='text-[#8c8c8c]/70 text-lg transition duration-400 group-hover:text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Possimus eaque facilis magni reiciendis itaque, et quas consectetur adipisicing elit. Nemo, aut.</p>
                    </div>

                    <div className='bg-[#171716] group cursor-pointer transition duration-400 hover:bg-[#EF4444] max-w-[35vh] px-5 h-60  flex-shrink-0 flex justify-center  flex-col rounded-2xl'>
                        <h3 className='pb-4 text-[#fff] text-2xl font-semibold flex items-center gap-2'><span className='bg-[#2b2b2b] group-hover:bg-[#F87171] transition duration-400 rounded-full p-2'><FaDumbbell className='text-lg' /></span> Three weeks</h3>
                        <p className='text-[#8c8c8c]/70 text-lg transition duration-400 group-hover:text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Possimue Lorem ipsum dolor sit amet consectetur adipis vel?</p>
                    </div>

                    <div className='bg-[#171716] group cursor-pointer transition duration-400 hover:bg-[#EF4444] max-w-[45vh] px-5 h-60 flex-shrink-0 flex flex-col justify-center rounded-2xl'>
                        <h3 className='pb-4 text-[#fff] text-2xl font-semibold flex items-center gap-2'><span className='bg-[#2b2b2b] group-hover:bg-[#F87171] transition duration-400 rounded-full p-2'><FaAppleAlt className='text-lg' /></span> One Month</h3>
                        <p className='text-[#8c8c8c]/70 text-lg transition duration-400 group-hover:text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Possimus eaque facilis magni reiciendis itaque, et quas quia vero eius iure?</p>
                    </div>

                    <div className='bg-[#171716] group cursor-pointer transition duration-400 hover:bg-[#EF4444] max-w-[45vh] px-5 h-60 flex-shrink-0 flex flex-col justify-center rounded-2xl'>
                        <h3 className='pb-4 text-[#fff] text-2xl font-semibold flex items-center gap-2'><span className='bg-[#2b2b2b] group-hover:bg-[#F87171] transition duration-400 rounded-full p-2'><FaAppleAlt className='text-lg' /></span> One Month</h3>
                        <p className='text-[#8c8c8c]/70 text-lg transition duration-400 group-hover:text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Possimus eaque facilis magni reiciendis itaque, et quas quia vero eius iure?</p>
                    </div>

                    <div className='bg-[#171716] group cursor-pointer transition duration-400 hover:bg-[#EF4444] max-w-[45vh] px-5 h-60 flex-shrink-0 flex flex-col justify-center rounded-2xl'>
                        <h3 className='pb-4 text-[#fff] text-2xl font-semibold flex items-center gap-2'><span className='bg-[#2b2b2b] group-hover:bg-[#F87171] transition duration-400 rounded-full p-2'><FaAppleAlt className='text-lg' /></span> One Month</h3>
                        <p className='text-[#8c8c8c]/70 text-lg transition duration-400 group-hover:text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Possimus eaque facilis magni reiciendis itaque, et quas quia vero eius iure?</p>
                    </div>
                </div>

            </div>


        </div>
    )
}


export default Carousel