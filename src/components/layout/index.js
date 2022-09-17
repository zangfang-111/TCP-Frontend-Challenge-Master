import ContentArea from './content';
import Footer from './footer';
import SideMenu from './sidemenu';

function Layout() {
  return (
    <div className='layout'>
      <div className='container'>
        <SideMenu />
        <ContentArea />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
