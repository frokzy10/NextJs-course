import {IFormSchema} from "@/entities/Form/model/types/FormTypes";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IFormSchema = {
    username: "",
    password: "",
    isLoading: false,
    isAuth: false,
}

const FormSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        setUsernameAction: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPasswordAction: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setIsLoadingAction: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setIsAuthAction: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload
        }
    }
});
export const {setUsernameAction, setPasswordAction, setIsLoadingAction,setIsAuthAction} = FormSlice.actions;
export const {
    name: FormName,
    reducer: FormReducer,
    actions: FormActions
} = FormSlice