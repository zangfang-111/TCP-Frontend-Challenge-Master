import LogoHorizontal from '../../assets/logo_horizontal.svg';

function Footer() {
  return (
    <div className="footer">
      <div className='footer-section__wrapper'>
        <img src={LogoHorizontal} alt='TCP Logo Horizontal' />
        <p>
          The most advanced Trade Finance
          Platform built specifically for Emerging
          Markets that lets you access capital on
          Your own terms.
        </p>
      </div>
      <div className='footer-section__wrapper'>
        <h4>Contact Us</h4>
        <p>
          Address: DD-15-134-004 - 007, Level 15,
          Wework Hub71, Al Khatem Tower, ADGM
          Square, Al Maryah Island, Abu Dhabi, United
          Arab Emirates;
        </p>
      </div>
      <div className='footer-section__wrapper'>
        <h4>Links</h4>
        <p>
          <a href='/'>Privacy Policy</a>
          <a href='/'>Terms & Conditions</a>
          <a href='/'>Website</a>
          <a href='/'>Support</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
