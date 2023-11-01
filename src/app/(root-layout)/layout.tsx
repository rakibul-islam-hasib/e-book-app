import NavBar from '@/components/NavBar';
import React from 'react';

type Props = {
    children: React.ReactNode

}
const HomeLayout: React.FC<Props> = ({ children }) => {
    return (
        <main>
            <NavBar />
            {children}
        </main>
    );
};

export default HomeLayout;