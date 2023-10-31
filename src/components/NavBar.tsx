import Link from 'next/link';
import React, { FC } from 'react';

type NavLinks = {
    id: number;
    name: string;
    path: string;
}

const NavBar: FC = () => {
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
        }
    ]


    return (
        <nav>
            <div className="max-w-screen-xl flex items-center justify-between py-3 mx-auto">
                <div className="logo">
                    <h1>Ebuker</h1>
                </div>
                <div className="search">
                    <input type="text" className='outline-none' spellCheck={false} placeholder="Search" />
                </div>
                <div className="links">
                    <ul className='flex items-center space-x-4 text-lg'>
                        {
                            navLinks.map((link) => {
                                return (
                                    <li key={link.id}>
                                        <Link href={link.path}>{link.name}</Link>
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