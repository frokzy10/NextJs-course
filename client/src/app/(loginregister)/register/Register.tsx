'use client'
import React from 'react';
import cls from "../Validation.module.scss";
import { Field, Form, Formik } from "formik";
import { validatePassword, validateUsername } from "@/app/(loginregister)/validation";
import clsx from "classnames";
import Link from "next/link";
import axios from "axios";
import {IValuesTypes} from "@/app/(loginregister)/types";

const RegisterPage = () => {
    const handleSubmit = async (values:any) => {
        try {
            await axios.post("http://localhost:6000/register",{
                values
            })
                .then(res => {
                    if (res.data.message === "exist"){
                        alert("gey")
                    }else if(res.data.message === "notexist"){
                        alert("idinahui")
                    }
                })
                .catch(e=>{
                    alert("чо то нето")
                })
        }catch (e){

        }
    };

    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            onSubmit={(values,{ resetForm }) => {
                resetForm();
                handleSubmit(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className={cls.formContainer}>
                    <h1 className={cls.formTitle}>Регистрация</h1>
                    <label className={clsx(
                        cls.label, {[cls.errorLabel]: errors.username && touched.username}
                    )}>{errors.username ? <div className={cls.errorLabel}>{errors.username}</div> :
                        <div>Имя пользователя</div>}</label>
                    <Field
                        className={clsx(
                            cls.field, {[cls.errorField]: errors.username && touched.username}
                        )}
                        name="username"
                        validate={validateUsername}
                    />
                    <label className={clsx(
                        cls.label, {[cls.errorLabel]: errors.password && touched.password}
                    )}>{errors.password ? <div className={cls.errorLabel}>{errors.password}</div> :
                        <div>Ваш пароль</div>}</label>
                    <Field
                        className={clsx(cls.field, {[cls.errorField]: errors.password && errors.password})}
                        name="password"
                        type="password"
                        validate={validatePassword}
                    />
                    <button className={cls.submitBtn} type="submit">
                        Отправить
                    </button>
                    <span className={cls.account}>Есть аккаунт?<Link href="/login">
                        Войти
                    </Link></span>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterPage;
