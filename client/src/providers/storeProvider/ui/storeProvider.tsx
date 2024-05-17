"use client"
import React, {useRef} from 'react';
import {AppStore, createReduxStore} from "@/providers/storeProvider/store/store";
import {Provider} from "react-redux";

const StoreProvider = ({children}:{children:React.ReactNode}) => {
    const storeRef = useRef<AppStore>()
    if (!storeRef.current) {
        storeRef.current = createReduxStore();
    }
    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
};
export default StoreProvider;