import { FC, ReactNode } from 'react';

type ProviderWrapperProps = {
    children: ReactNode;
}

const ProviderWrapper: FC<ProviderWrapperProps> = ({ children }) => {
    return children as JSX.Element;
};

export default ProviderWrapper;