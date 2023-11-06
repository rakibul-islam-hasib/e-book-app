'use client';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';
import NavLink from './functions/NavLink';
import '../style/Navbar.css';
import Link from 'next/link';
import { BiMailSend } from "react-icons/bi";
import RegisterFrom from "./auth/RegisterFrom";
import LoginFrom from "./auth/LoginFrom";

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
    }
]
const NavBar: FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isRegisterOpen, onOpen: onRegisterOpen, onOpenChange: onRegisterOpenChange } = useDisclosure();


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
        <>
            <nav className={`z-50 font-teko pt-2 w-full bg-white backdrop-blur-3xl bg-opacity-40 ${isScrolled && 'fixed'}`}>
                <div className="max-w-screen-xl flex items-center justify-between py-3 mx-auto">
                    <Link href='/'>
                        <div className="logo  cursor-pointer">
                            <h1 className='text-2xl font-fast-track text-primary'>PapyrusPDFs</h1>
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
                            <li>
                                <a onClick={onOpen} className='hover:text-primary duration-300'>Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <RegisterFrom
                isRegisterOpen={isRegisterOpen}
                onLoginOpen={onOpen}
                onRegisterOpenChange={onRegisterOpenChange}
            />
            <LoginFrom
                isOpen={isOpen}
                onRegisterOpen={onRegisterOpen}
                onOpenChange={onOpenChange}
            />

        </>
    );
};

export default NavBar;