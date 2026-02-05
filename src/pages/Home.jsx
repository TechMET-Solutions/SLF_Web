import React from "react";
import HeroSection from "../components/home/HeroSection";
import GoldSchemes from "../components/home/GoldSchemes";
import StepsSection from "../components/home/StepsSection";
import Expertise from "../components/home/Expertise";
import BankingPartners from "../components/home/BankingPartners";

const Home = () => {
    return (
        <>
            <HeroSection />
            <GoldSchemes />
            <StepsSection />
            <Expertise />
            <BankingPartners/>
        </>
    );
};
export default Home;