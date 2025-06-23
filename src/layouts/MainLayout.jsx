import { Outlet, useLocation } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes('login')
      return (
        <div className="max-w-7xl mx-auto">
   
        {noHeaderFooter ||  <Navbar></Navbar>}
          <Outlet></Outlet>
        {noHeaderFooter ||  <Footer></Footer>}
        </div>
      );
};

export default MainLayout;