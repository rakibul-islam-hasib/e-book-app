import Link from 'next/link';
import React from 'react';

const MainPage: React.FC = () => {
  return (
    <div>
      <span>To view all elements Click here <Link href='/datas'>Gooooo</Link></span>
    </div>
  );
};

export default MainPage;