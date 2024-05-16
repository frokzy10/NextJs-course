"use client"
import React, {FC} from 'react';
import {IProductInterface} from "@/types/product.interface";
import CatalogItem from "@/widgets/catalog/ui/CatalogItem/CatalogItem";

interface ICatalog {
    isFull?: boolean,
    products: IProductInterface[]
}

const Catalog: FC<ICatalog> = (props) => {
    const {products, isFull = true} = props;

    const latestProducts = isFull ? products : products.slice(0, 4);
    return (
        <div style={{padding:"2%"}}>

            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                {latestProducts.map(product => (
                    <CatalogItem key={product._id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default Catalog;