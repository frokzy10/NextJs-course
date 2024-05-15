import type {Metadata} from "next";
import Hero from "@/widgets/hero/ui/Hero";
import Catalog from "@/widgets/catalog/Catalog";
import {GetProductService} from "@/features/getProductList/service/getProduct.service";

export const metadata: Metadata = {
    title: "Home Page",
    description:"Home Page Description"
}

async function getProduct(){
    const data = await GetProductService.getAll();
    return data
}

export default async function Home() {
    const data = await getProduct()
    return (
        <div>
            <Hero/>
            <Catalog products={data} isFull={false}/>
        </div>
    );
}
