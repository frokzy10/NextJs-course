"use server"
import {IValuesTypes} from "@/app/(loginregister)/types";
import axios from "axios";

export const handleRegister = async (username:string, password:string) => {
    try {
        await axios.post("http://localhost:6000/register", {
            username,
            password
        }).then(res => {
            if (res.data.message === "exist") {
                alert("gey")
            } else if (res.data.message === "notexist") {
                alert("idinahui")
            }
        })
    } catch (e) {
        console.log(e)
    }
}