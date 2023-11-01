import React, { FC, ReactNode } from 'react';

type ProviderWrapperProps = {
    children: ReactNode;
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default ProviderWrapper;