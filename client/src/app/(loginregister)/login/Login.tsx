'use client'
import React, {FC} from 'react';
import {Field, Form, Formik} from "formik";
import cls from "@/app/(loginregister)/Validation.module.scss";
import clsx from "classnames";
import {validatePassword, validateUsername} from "@/app/(loginregister)/validation";
import Link from "next/link";

const LoginPage: FC = () => {
    return (
        <Formik
            initialValues={{
                username: "",
                password: "",
            }}
            onSubmit={(values, {resetForm}) => {
                console.log(values);
                resetForm();
            }}
        >
            {({errors, touched}) => (
                <Form className={cls.formContainer}>
                    <h1 className={cls.formTitle}>Вход</h1>
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
                        validate={validatePassword}
                    />
                    <button className={cls.submitBtn} type="submit">
                        Отправить
                    </button>
                    <span className={cls.account}>Нету аккаунта?<Link href="/register">
                        Создать
                    </Link></span>

                </Form>
            )}
        </Formik>
    );
};

export default LoginPage;