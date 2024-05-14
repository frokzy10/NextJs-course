import React from 'react';
import cls from "./Catalog.module.scss";
import Image from "next/image";

const Catalog = () => {
    return (
        <div>
            <h2 className={cls.heading}>Catalog</h2>
            <Image src="/next.svg" alt="img" width={100} height={100}/>
        </div>
    );
};

export default Catalog;