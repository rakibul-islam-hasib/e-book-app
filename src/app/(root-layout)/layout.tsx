import NavBar from '@/components/NavBar';
import { Bebas_Neue } from 'next/font/google';
import React from 'react';

const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'], variable: '--bebas-neue' })

const HomeLayout: React.FC<Props> = ({ children }) => {
    return (
        <main className={bebasNeue.variable}>
            <NavBar />
            {children}
        </main>
    );
};

export default HomeLayout;


type Props = {
    children: React.ReactNode

}