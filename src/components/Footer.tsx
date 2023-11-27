import React from 'react';
import { twMerge } from 'tailwind-merge';

const Footer = () => {
    return (
        <footer className=' mx-auto  relative'>
            <div className=" absolute -top-[60px] flex w-full justify-center items-center">
                <div className="w-[70%] text-white px-4 items-center flex justify-between rounded-xl bg-primary h-[100px] mx-auto">
                    <div>
                        <h1 className='text-2xl'>Newsletter</h1>
                        <p className='leading-3 font-light  text-md'>Subscribe for daily our new books and another resource update. </p>
                    </div>
                    <div className="">
                        {/* <h1>Please Support us  for new update   </h1> */}
                    </div>
                    <div className="w-3/12">
                        <div className="relative w-full "  >
                            <input spellCheck={false} className='bg-white outline-none text-black rounded-md px-2 py-[8px] w-full' type="text" placeholder='Your email address' />
                            <button className='bg-secondary absolute right-[3.5px] top-[3.5px] text-black rounded-md px-2 py-1'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-secondary h-40 w-full ">


            </section>
            <section className='max-w-screen-xl  mx-auto'>
                <h1>Footer</h1>
            </section>
        </footer>
    );
};

export default Footer;