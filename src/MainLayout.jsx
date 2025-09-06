// layouts/MainLayout.js
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import IntroNavbar from './components/navbar/Navbar';
import DashboardNavbar from './components/dashboardNavbar/DashboardNavbar';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isPlaying = location.pathname.startsWith('/playing-video');
  const [showNav, setShowNav] = useState(false)

  return (
    <>
      {isPlaying ? <>{children}</> :
        <>
          {isDashboard ? <IntroNavbar /> : <DashboardNavbar showSidebar={showNav} setShowSidebar={setShowNav} />}

          <div className={showNav ? "main-content activeSidebar" : "main-content"}>
            {!isDashboard && <Sidebar show={showNav} setShow={setShowNav} />}
            <div className='content'>
              {children}
            </div>

          </div>
          <Footer />
        </>
      }
    </>
  );
};

export default MainLayout;