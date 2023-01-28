import React, { FC } from 'react';
import MobileNavigation from './mobileNavigation';
import Navigation from './navigation';



const Navbar: FC = () => {
  return (
    <div >
      <MobileNavigation />
      <Navigation/>
    </div>
    
  );
};

export default Navbar;
