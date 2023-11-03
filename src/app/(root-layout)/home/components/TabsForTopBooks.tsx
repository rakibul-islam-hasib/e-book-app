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
                        <div className="border w-full grid gap-12 grid-cols-5">
                            {
                                books.map((book) => <div key={book._id} className="">
                                    <Image className='h-[280px] w-[180px]' src={book.img} width={350} height={500} alt={'image of ' + book.title + 'book'} />
                                    <h1>{book.title}</h1>
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