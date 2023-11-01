'use client';
import ContactPageWork from '@/components/ContactPage';
import { Button, NextUIProvider } from '@nextui-org/react';
import React, { FC } from 'react';

const ContactPage: FC = () => {
    return (
        <div>
            <h1>Contact page here</h1>
            <NextUIProvider className='bg-tertiary'>
                <main className='bg-tertiary'>
                    <ContactPageWork />
                </main>
            </NextUIProvider>
        </div>
    );
};

export default ContactPage;