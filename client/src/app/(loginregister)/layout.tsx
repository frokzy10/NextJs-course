import React, { PropsWithChildren } from 'react';

const LoginRegisterLayout = ({ children }: PropsWithChildren<unknown>) => {
    return (
        <div>
            Auth
            {children}
        </div>
    );
};

export default LoginRegisterLayout;
