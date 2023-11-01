import React, { FC } from 'react';
import { FaDownload } from 'react-icons/fa';

const Feature: FC = () => {
    const cardsData = [
        {
            id: 1,
            title: 'Free Download',
            icon: <FaDownload />,
            description: 'You can download and read our free books and articles. There is no limit to the number of books you can download.'
        },
        {
            id: 2,
            title: 'Premium Books',
            icon: <FaDownload />,
            description: 'We have also premium books and articles. You can buy them at a very low price. And enjoy reading them.'
        },
        {
            id: 3,
            title: 'Professional Writers',
            icon: <FaDownload />,
            description: 'We have professional writers who write books and articles for us. You can also write for us. And earn money.'
        }
    ]

    return (
        <section className='max-w-screen-xl w-[90%] md:w-full mx-auto pb-52'>
            <div className="py-8">
                <h1 className='text-4xl text-center font-semibold text-primary-600'>Features</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod unde optio voluptates quasi consequuntur cum incidunt repellat dicta odio, impedit accusamus iste fugit. Itaque aliquid quisquam odit veniam, temporibus sit!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {cardsData.map((card) => (
                    <div key={card.id} className='bg-tertiary hover:-translate-y-2 duration-250 flex justify-center items-center flex-col min-h-[229px] rounded-tr-none rounded-bl-none overflow-hidden group relative rounded-tl-[40px] rounded-br-[40px] font-teko shadow-lg p-4'>
                        <div className="z-10 absolute h-full w-full pt-2 ">
                            <div className='flex items-center justify-center'>
                                <div className='text-4xl p-4 bg-gray-200 rounded-full group-hover:rotate-[360deg] duration-250 text-light-blue'>{card.icon}</div>
                            </div>
                            <div className='mt-4 text-center px-4'>
                                <h3 className='text-xl uppercase text-primary-600  font-semibold'>{card.title}</h3>
                                <p className='mt-4 whitespace-normal text-gray-600'>{card.description}</p>
                            </div>
                        </div>
                        <div className="h-full z-[5] w-full rounded-lg absolute -bottom-[400px] group-hover:bottom-0 duration-250 left-0 bg-secondary">

                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Feature;