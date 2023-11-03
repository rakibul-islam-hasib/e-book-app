'use client';
import { books } from '@/utils';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import Image from 'next/image';
import React, { FC, useState } from 'react';

const TabsForTopBooks: FC = () => {
    const [active, setActive] = useState<any>('music');
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <Tabs selectedKey={active} onSelectionChange={setActive} aria-label="Options" color='primary'>

                    <Tab key="photos" title="Photos">
                        <div className="border w-full">
                            {
                                books.map((book) => <div key={book._id} className="">
                                    <Image src={book.img} width={350} height={500} alt='Image ' />
                                    <h1>{book.title}</h1>
                                </div>)
                            }
                        </div>
                    </Tab>
                    <Tab key="music" title="Music">
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
                    <Tab key="videos" title="Videos">
                        <Card>
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>
                </Tabs>
            </div>
        </section>
    );
};

export default TabsForTopBooks;