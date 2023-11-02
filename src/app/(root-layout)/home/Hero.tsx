import React from 'react';
import '@/style/Hero.css';
import { MdOutlineExplore } from 'react-icons/md';
import { GiArchiveResearch } from 'react-icons/gi';

const Hero: React.FC = () => {
    return (
        <div className='h-screen max-h-[700px] w-full font-Bebas_Neue flex justify-center items-center'>
            <div className="flex justify-center items-center flex-col">

                <div className="mb-8 text-center">
                    <h1 className='font-fast-track mb-10 text-primary text-5xl'>PapyrusPDFs <span className='text-primary-600'>Free</span> And <span className='text-primary-600'>Freemium</span> PDF Books </h1>
                    <p className='text-gray-500'>You can download free PDF books here. You can also purchase many books at low prices. We offer Freemium Services</p>
                    <p className='mt-4 text-gray-500'>We have 100+ active writers. </p>
                </div>


                <div className="container">
                    <div className="content">
                        <div className="content__container">
                            <p className="content__container__text">
                                Hello
                            </p>

                            <ul className="content__container__list">
                                <li className="content__container__list__item">world !</li>
                                <li className="content__container__list__item">coder !</li>
                                <li className="content__container__list__item">users !</li>
                                <li className="content__container__list__item">uiverse</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex items-center gap-6">
                    <button
                        className='px-8 relative overflow-hidden pb-3 pt-[14px] group bg-primary inline-flex items-center gap-1 text-white rounded-full  duration-250'
                    >
                        <span className='inline-flex  z-10 h-full w-full items-center gap-1'>
                            <MdOutlineExplore className="text-2xl" />
                            Explore
                        </span>
                        <span className='absolute bottom-0 bg-primary-600 z-[5] left-0 h-0 w-full group-hover:h-full duration-400 transition-all ease-in-out  rounded-full'></span>
                    </button>
                    <button
                        className='px-8 relative overflow-hidden pb-3 pt-[14px] group outline-none bg-primary-600 inline-flex items-center gap-1 text-white rounded-full  duration-250'
                    >
                        <span className='inline-flex  z-10 h-full w-full items-center gap-1'>
                            <GiArchiveResearch className="text-2xl" />
                            Search
                        </span>
                        <span className='absolute bottom-0 bg-primary z-[5] left-0 h-0 w-full group-hover:h-full duration-400 transition-all ease-in-out  rounded-full'></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
