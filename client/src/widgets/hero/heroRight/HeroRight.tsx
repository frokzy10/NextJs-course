import React from 'react';
import cls from "./HeroRight.module.scss"
import Image from "next/image";

const HeroRight = () => {
    return (
        <div className={cls.heroRight}>
            <Image
                src="/nike.webp"
                alt="img"
                width={600}
                height={600}
            />
        </div>
    );
};

export default HeroRight;