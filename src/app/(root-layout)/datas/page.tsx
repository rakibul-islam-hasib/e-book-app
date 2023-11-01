import Link from 'next/link';
import React from 'react';

const Datas: React.FC = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/', {
        cache: 'no-cache',
    });
    const json = await data.json();

    return (
        <div>
            <Link href='/'>Home</Link>
            {
                json.map((item: any) => {
                    return (
                        <div key={item.id}>
                            <span>{item.title}</span>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Datas;