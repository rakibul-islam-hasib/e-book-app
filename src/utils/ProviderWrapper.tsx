'use client';
import { NextUIProvider } from '@nextui-org/react';
import { FC, ReactNode } from 'react';

type ProviderWrapperProps = {
    children: ReactNode;
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
    return <NextUIProvider>
        {children}
    </NextUIProvider>;
};

export default ProviderWrapper;