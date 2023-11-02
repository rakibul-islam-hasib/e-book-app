import React from 'react';
import '@/style/Hero.css'

const Hero: React.FC = () => {
    return (
        <div className='h-screen w-full font-Bebas_Neue flex justify-center items-center'>
            <div className="">
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
                <div className="">
                    <h2 className='text-5xl font-fast-track'>Hello</h2>
                </div>
            </div>
        </div>
    );
};

export default Hero;
