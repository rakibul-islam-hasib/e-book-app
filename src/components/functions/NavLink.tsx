'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

type NavLinkProps = {
    href: string;
    activeClass?: string;
    [key: string]: any;
};

const NavLink: FC<NavLinkProps> = ({ children, href, activeClass, ...props }) => {
    const path = usePathname();
    const active = path === href;
    const classNames = (...args: any[]) => args.filter(Boolean).join(' ');
    const classes = classNames(props.className, active && activeClass);
    if (classes) props.className = classes;
    return <Link href={href} {...props}>
        {children}
    </Link>;
};

export default NavLink;