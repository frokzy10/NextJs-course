import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';

const LoginRegisterLayout = ({ children }: PropsWithChildren<unknown>) => {
    const router = useRouter();

    if (router.pathname === '/register' && router.pathname !== undefined) {
        return <div>{children}</div>;
    }

    return (
        <div>
            Auth
            {children}
        </div>
    );
};

export default LoginRegisterLayout;
