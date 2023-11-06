import React from 'react';

const LoginPage = () => {
    return (
        <section className='h-screen w-full flex justify-center items-center'>
            <div className="w-1/2">
                <h1 className='text-3xl font-bold mb-4'>Login</h1>
                <form className='flex flex-col w-full'>
                    <label className='mb-2'>Email</label>
                    <input className='border border-gray-400 p-2 w-full mb-4' type="text" />
                    <label className='mb-2'>Password</label>
                    <input className='border border-gray-400 p-2 mb-4' type="password" />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LoginPage;
