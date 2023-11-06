'use client';
import { books } from '@/utils';
import { Tab, Tabs } from '@nextui-org/react';
import moment from 'moment';
import Image from 'next/image';
import React, { FC, useState } from 'react';

const TabsForTopBooks: FC = () => {
    const [active, setActive] = useState<any>('music');
    return (
        <section className='pb-40 mx-2'>
            <div className="flex flex-col justify-center items-center">
                <Tabs selectedKey={active} onSelectionChange={setActive} aria-label="Options" color='primary'>

                    <Tab key="photos" title="Photos">
                        <div className="w-full grid lg:gap-14 grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
                            {
                                books.map((book) => <div key={book._id} className="relative border border-primary p-2 group overflow-hidden">
                                    <div className="">
                                        <Image className='h-[380px] w-[250px]' src={book.img} width={350} height={500} alt={'image of ' + book.title + 'book'} />

                                    </div>
                                    <div className="absolute text-white text-center px-2 bg-black bg-opacity-70 group-hover:bottom-0 -bottom-[400px] left-0 w-full h-full duration-200">

                                        <h1 className='text-3xl uppercase'>{book.title}</h1>
                                    </div>
                                </div>)
                            }
                        </div>
                    </Tab>
                    <Tab key="music" title="Music">
                        <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-7">
                            {
                                books.map((book) =>
                                    <div key={book._id} className="relative gap-3 p-2 border border-primary group overflow-hidden flex flex-row">
                                        <div className="">
                                            <Image className='h-[250px] w-[160px] max-h-[350px] max-w-[250px] sm:h-[350px] sm:w-[250px]' src={book.img} width={350} height={500} alt={'image of ' + book.title + 'book'} />
                                        </div>
                                        <div className="block md:hidden w-full ">
                                            <div className="flex flex-col  justify-between">
                                                <div>
                                                    <h1 className='text-2xl sm:text-4xl text-black font-bold uppercase font-Bebas_Neue'>{book.title}</h1>
                                                    <p className=''>{book.description.slice(0, 60)}...</p>
                                                    <p>{moment(book.published).format('DD MMMM YYYY')}</p>
                                                    <p>By <span className='text-primary'>{book.author}</span></p>
                                                    <p>Rating : <span className='text-primary'>{book.rating}</span></p>
                                                    <p>Category : <span className='text-primary'>{book.category}</span></p>
                                                </div>
                                                <div>
                                                    <button className='w-full text-black py-2 rounded bg-primary mt-auto bottom-0'>Details</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-gray-500 max-w-[250px] h-full relative w-full hidden sm:block">

                                            <h1 className='text-2xl sm:text-4xl text-black font-bold uppercase font-Bebas_Neue'>{book.title}</h1>
                                            <p className=''>{book.description.slice(0, 60)}...</p>
                                            <p>{moment(book.published).format('DD MMMM YYYY')}</p>
                                            <p>By <span className='text-primary'>{book.author}</span></p>
                                            <p>Rating : <span className='text-primary'>{book.rating}</span></p>
                                            <p>Category : <span className='text-primary'>{book.category}</span></p>
                                            <button className='w-full text-black py-2 rounded bg-primary mt-auto absolute bottom-0'>Details</button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </Tab>
                    <Tab key="videos" title="Videos">
                        <div className="w-full grid lg:gap-14 grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
                            {
                                books.map((book) => <div key={book._id} className="relative group overflow-hidden">
                                    <div className="">
                                        <Image className='h-[380px] w-[250px]' src={book.img} width={350} height={500} alt={'image of ' + book.title + 'book'} />

                                    </div>
                                    <div className="absolute text-white text-center px-2 bg-black bg-opacity-70 group-hover:bottom-0 -bottom-[400px] left-0 w-full h-full duration-200">

                                        <h1 className='text-3xl uppercase'>{book.title}</h1>
                                    </div>
                                </div>)
                            }
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default TabsForTopBooks;