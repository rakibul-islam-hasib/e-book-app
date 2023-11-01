'use client';
import { useRouter } from 'next/navigation';
import React, { FC } from 'react';
import NavLink from './functions/NavLink';
import '@/style/NavBar.css';

type NavLinks = {
    id: number;
    name: string;
    path: string;
}
const navLinks: NavLinks[] = [
    {
        id: 1,
        name: 'Home',
        path: '/'
    },
    {
        id: 2,
        name: 'About',
        path: '/about'
    },
    {
        id: 3,
        name: 'Contact',
        path: '/contact'
    },
    {
        id: 4,
        name: 'Login',
        path: '/login'
    },
    {
        id: 5,
        name: 'Signup',
        path: '/signup'
    }
]
const NavBar: FC = () => {

    const router = useRouter();

    return (
        <nav className=' w-full bg-white backdrop-blur-2xl bg-opacity-50'>
            <div className="max-w-screen-xl flex items-center justify-between py-3 mx-auto">
                <div onClick={() => router.push('/')} className="logo  cursor-pointer">
                    <h1>Ebuker</h1>
                </div>

                <div className="links">
                    <ul className='flex items-center space-x-4 text-lg'>
                        {
                            navLinks.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <NavLink activeClass='active-link' href={link.path}>{link.name}</NavLink>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;