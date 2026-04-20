"use client"

// Components
import Carousel from "@/components/Carousel/Carousel";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";







export default function Home() {

  

  return (
    <div>
      <div className={`h-full bg-[url('../images/bg.jpg')] bg-no-repeat bg-top bg-cover`}>
        <Header/>
        <Hero/>
      </div>

      <Carousel/>

      
    </div>
    
  );
}
