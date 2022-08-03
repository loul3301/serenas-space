import Navbar from '../Navigation';
import { ReactNode } from 'react';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
