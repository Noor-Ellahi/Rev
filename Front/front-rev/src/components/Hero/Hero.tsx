
// import bgImg from '../../images/builder2.png'
// import Image from 'next/image';

// const Hero = () => {

//     return (
//         <div className="flex pt-40 relative justify-center max-xl:h-[68vh]  max-xl:pt-35 max-lg:h-[63vh] max-lg:pt-33  max-md:h-[40vh] max-md:pt-20 max-sm:h-[25vh] max-sm:pt-11  h-[80vh] bg-black-300">

//             <Image
//                 className='absolute h-[67vh] max-2xl:h-[65vh] max-2xl:top-[18.7%] max-xl:h-[55.3vh]  max-lg:h-[51.3vh] max-xl:w-[55vh] max-md:w-[40.5vh] max-md:h-[32.5vh] max-sm:h-[20.3vh] max-sm:w-[30vh] w-[68vh] top-[16%] '
//                 alt='true'
//                 src={bgImg}
//                 height={1080}
//                 width={1920}
//             />
//             <div className="flex text-center">
//                 <h1 className="text-6xl tracking-wider font-bold max-xl:text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-[22px] max-[390px]:text-[18px]! text-white/50 ">ELEVATE YOUR <span className='pl-20 max-lg:pl-15 max-sm:pl-10'>FITNESS FOR</span><br /><span className='pr-20 max-lg:pr-15 max-sm:pr-10'>HEALTH N </span>VITALITY</h1>
//                 {/* <p className="text-white">We are the most reliable fitness trainer in US</p>
//           <div>
//             <button className="border-2 text-white rounded- border-white p-5">GET STARTED</button>
//             <button>More!</button>
//           </div> */}
//             </div>
//         </div>
//     )
// }

// export default Hero


import bgImg from "../../images/builder2.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full flex justify-center items-center pt-20 lg:pt-32">

      {/* IMAGE (controls height of section) */}
      <div className="relative w-[70%] max-w-[900px]">
        <Image
          src={bgImg}
          alt="fitness"
          className="w-full h-auto object-contain"
          priority
        />

        {/* TEXT OVER IMAGE */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white/60 font-bold tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            ELEVATE YOUR{" "}
            <span className="block lg:pl-20">FITNESS FOR</span>
            <span className="block lg:pr-20">HEALTH N VITALITY</span>
          </h1>
        </div>
      </div>

    </section>
  );
};

export default Hero;