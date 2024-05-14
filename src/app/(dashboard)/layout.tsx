import React, {PropsWithChildren} from 'react';

const DashboardLayout = ({children}:PropsWithChildren<unknown>) => {
    return (
        <div>
            Dashboard Layout
            {children}
        </div>
    );
};

export default DashboardLayout;