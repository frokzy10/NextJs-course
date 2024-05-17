"use client"

import {TypedUseSelectorHook, useDispatch, useSelector, useStore} from "react-redux";
import {AppDispatch, AppStore, RootState} from "@/providers/storeProvider/store/store";

export const useAppDispatch: () => AppDispatch = useDispatch
export const useTypedAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore