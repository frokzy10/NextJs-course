import React from 'react';
import cls from "./Hero.module.scss";
import HeroRight from "@/widgets/hero/heroRight/HeroRight";
import HeroLeft from "@/widgets/hero/heroLeft/HeroLeft";

const Hero = () => {
    return (
        <section className={cls.hero}>
            <div className={cls.heroContainer}>
                <HeroLeft/>
                <HeroRight/>
            </div>
        </section>
    );
};

export default Hero;