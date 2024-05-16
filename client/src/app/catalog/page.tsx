import {Metadata} from "next";
import Catalog from "@/widgets/catalog/Catalog";
import {GetProductService} from "@/features/getProductList/service/getProduct.service";

export const metadata: Metadata = {
    title: 'Catalog',
}

async function getProducts() {
    const data = await GetProductService.getAll()
    return data
}

export default async function CatalogPage() {
    const data = await getProducts()

    return <Catalog isFull={false} products={data} />
}
