"use client"
import React from 'react';
import {Field, Form, Formik} from 'formik';
import Link from 'next/link';
import cls from '../Validation.module.scss';
import clsx from 'classnames';
import {validatePassword, validateUsername} from '@/app/(loginregister)/validation';
import {useAppDispatch, useTypedAppSelector} from '@/shared/hooks/reduxHooks/reduxHooks';
import {setIsAuthAction, setPasswordAction, setUsernameAction} from '@/entities/Form/model/reducer/FormReducer';
import {redirect} from "next/navigation";

const RegisterPage = () => {
    const dispatch = useAppDispatch();

    // Access state from Redux store
    const {username, password, isAuth} = useTypedAppSelector(state => state.form);


    return (
        <Formik
            initialValues={{
                username: username,
                password: password,
            }}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(false);
                dispatch(setUsernameAction(values.username));
                dispatch(setPasswordAction(values.password));
                dispatch(setIsAuthAction(true));
                resetForm();
            }}
        >
            {({errors, touched, handleChange}) => ( // Use handleChange provided by Formik
                <Form className={cls.formContainer}>
                    <h1 className={cls.formTitle}>Вход</h1>
                    <label
                        className={clsx(cls.label, {[cls.errorLabel]: errors.username && touched.username})}
                    >
                        {errors.username ? (
                            <div className={cls.errorLabel}>{errors.username}</div>
                        ) : (
                            <div>Имя пользователя</div>
                        )}
                    </label>
                    <Field
                        onChange={handleChange} // Use handleChange to manage form state
                        className={clsx(cls.field, {[cls.errorField]: errors.username && touched.username})}
                        name="username"
                        validate={validateUsername}
                    />
                    <label
                        className={clsx(cls.label, {[cls.errorLabel]: errors.password && touched.password})}
                    >
                        {errors.password ? (
                            <div className={cls.errorLabel}>{errors.password}</div>
                        ) : (
                            <div>Ваш пароль</div>
                        )}
                    </label>
                    <Field
                        onChange={handleChange}
                        className={clsx(cls.field, {[cls.errorField]: errors.password && errors.password})}
                        name="password"
                        validate={validatePassword}
                    />
                    <button onClick={() => dispatch(setIsAuthAction(true))} className={cls.submitBtn} type="submit">
                        Отправить
                    </button>
                    <span className={cls.account}>
                        Нету аккаунта?
                        <Link href="/register">Создать</Link>
                    </span>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterPage;
