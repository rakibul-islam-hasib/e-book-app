import LoginModal from '@/components/LoginModal';
import React from 'react';

const LoginPage = () => {
    return (
        <section className='h-screen w-full flex justify-center items-center'>
            <div className="w-1/2">
                <LoginModal />
            </div>
        </section>
    );
};

export default LoginPage;
