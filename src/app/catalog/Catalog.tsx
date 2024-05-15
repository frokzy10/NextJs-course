"use client"
import React, {FC} from 'react';
import cls from "./Catalog.module.scss";
import Image from "next/image";

const Catalog: FC<{ data: any }> = ({data}) => {

    return (
        <div>
            <h2 className={cls.heading}>Catalog</h2>
            <Image src="/next.svg" alt="img" width={100} height={100}/>
            {data.map((i:any) => (
                <div key={i.id}>{i.title}</div>
            ))}
        </div>
    );
};

export default Catalog;