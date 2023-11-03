'use client';
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import React, { FC, useState } from 'react';

const TabsForTopBooks: FC = () => {
    const [active, setActive] = useState('music');
    return (
        <section>
            <div className="flex flex-col justify-center items-center">
                <Tabs selectedKey={active} onSelectionChange={setActive} aria-label="Options" color='primary'>

                    <Tab key="photos" title="Photos">
                        <div className="">
                            <h1>Bols </h1>
                        </div>
                    </Tab>
                    <Tab key="music" title="Music">
                        <Card>
                            <CardBody>
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </CardBody>
                        </Card>
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