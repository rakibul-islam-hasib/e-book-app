import React from 'react';
import '@/style/Hero.css'

const Hero: React.FC = () => {
    return (
        <div className='h-screen max-h-[700px] w-full font-Bebas_Neue flex justify-center items-center'>
            <div className="flex justify-center items-center flex-col">

                <div className="mb-8">
                    <h1 className='font-fast-track text-primary text-5xl'>PapyrusPDFs <span className='text-primary-600'>Free</span> And <span className='text-primary-600'>Freemium</span> PDF Books </h1>
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
            </div>
        </div>
    );
};

export default Hero;
