import React, {FC} from 'react';
import {IProductInterface} from "@/types/product.interface";
import cls from "./CatalogItem.module.scss";

const CatalogItem: FC<{ product: IProductInterface }> = ({product}) => {
    return (
        <div className={cls.cardContainer}>
            <img src={product.images} alt="img"/>
            <div>{product.name}</div>
        </div>
    );
};

export default CatalogItem;