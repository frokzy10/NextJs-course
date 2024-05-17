"use client"
import type {Metadata} from "next";
import Hero from "@/widgets/hero/ui/Hero";
import Catalog from "@/widgets/catalog/Catalog";
import {GetProductService} from "@/features/getProductList/service/getProduct.service";
import {redirect} from "next/navigation";
import {Provider} from "react-redux";
import {store} from "@/providers/storeProvider";
import {useAppDispatch, useTypedAppSelector} from "@/shared/hooks/reduxHooks/reduxHooks";
import {useEffect} from "react";
import {useRouter} from "next/router";


// async function getProduct(){
//     const data = await GetProductService.getAll();
//     return data
// }

export default async function Home() {
    // const data = await getProduct()
    const router = useRouter();
    const {isAuth} = useTypedAppSelector(state => state.form);

    if (isAuth === false) {
        return redirect("/register");
    } else if (isAuth) {
        return router.push("/")
    }

    return (
        <div>
            <Hero/>
            {/*<Catalog products={data} isFull={false}/>*/}
        </div>
    );
}

