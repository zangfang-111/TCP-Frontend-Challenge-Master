import Logo from '../../../assets/logo.png';
import ProfileImg from '../../../assets/profile.jpg';
import { GrNotification } from 'react-icons/gr';

const tabs = ['Design Form', 'Form Settings', 'Data Model'];

function ContentHeader({ activeTab = 0, setActive }) {
  return (
    <div className='content-area__header'>
      <div className='content-area__header-title--section'>
        <div className='content-area__header-logo--wrapper'>
          <img src={Logo} alt='TCP Logo' />
          <h1>TCP</h1>
        </div>
        <input placeholder='Form title Goes Here' />
        <div className='content-area__header-profile--wrapper'>
          <GrNotification size='20px' />
          <img src={ProfileImg} alt='Zhang Profile' />
        </div>
      </div>
      <div className='content-area__header-tabs--section'>
        {tabs.map((item, i) => (
          <div
            className={`content-area__header-tab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentHeader;
