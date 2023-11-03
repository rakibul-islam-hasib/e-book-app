import ProviderWrapper from '@/utils/ProviderWrapper';
import React, { FC } from 'react';
import TabsForTopBooks from './components/TabsForTopBooks';

const TopBooks: FC = () => {
    return (
        <section>
            <div className="text-center">
                <h1 className='text-4xl title-s w-fit mx-auto text-center uppercase font-semibold text-primary'>Top Books</h1>
                <p>Here we have showcase some . Free and premium top books for that loved by many users</p>
            </div>
            <div className="">
                <ProviderWrapper>
                    <TabsForTopBooks />
                </ProviderWrapper>
            </div>
        </section>
    );
};

export default TopBooks;