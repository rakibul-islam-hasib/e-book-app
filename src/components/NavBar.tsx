'use client';
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import NavLink from './functions/NavLink';
import '../style/Navbar.css';
import Link from 'next/link';

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
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            if (position > 1000) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <nav className={` font-teko pt-2 w-full bg-white backdrop-blur-3xl bg-opacity-40 ${isScrolled && 'fixed'}`}>
            <div className="max-w-screen-xl flex items-center justify-between py-3 mx-auto">
                <Link href='/'>
                    <div className="logo  cursor-pointer">
                        <h1>Ebuker</h1>
                    </div>
                </Link>

                <div className="links hidden md:block">
                    <ul className='flex nav-links items-center space-x-4 text-lg '>
                        {
                            navLinks.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <NavLink activeClass='active-link' className='hover:text-primary duration-300' href={link.path}>{link.name}</NavLink>
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