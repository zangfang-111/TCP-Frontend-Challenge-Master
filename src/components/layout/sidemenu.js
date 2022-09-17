import { useState } from 'react';

import { FaRegUser } from 'react-icons/fa';
import { BiMessage } from 'react-icons/bi';
import {
  FiSettings,
  FiHelpCircle,
  FiArrowRight,
  FiArrowLeft,
} from 'react-icons/fi';

function SideMenu() {
  const [collaps, setCollaps] = useState(false);

  const menuItem = (Icon, itemName, size) => (
    <div className='side-menu__item'>
      <div className='side-menu__item-icon--wrapper'>
        <Icon size={size} />
      </div>
      <p className={`side-menu__item-name ${collaps ? '' : 'is-hidden'}`}>
        {itemName}
      </p>
    </div>
  );

  const arrowBtn = () => (
    <div
      className='side-menu__arrow-btn'
      onClick={() => setCollaps(!collaps)}
    >
      {collaps
        ? <>&#9675;<FiArrowLeft /></>
        : <><FiArrowRight />&#9675;</>}
    </div>
  );

  return (
    <div className='side-menu'>
      <div className='side-menu__top-wrapper'>
        <div className='side-menu__items-wrapper'>
          {menuItem(FaRegUser, 'User', '16px')}
          {arrowBtn()}
        </div>
        <div className='side-menu__items-wrapper'>
          {menuItem(FaRegUser, 'User', '16px')}
          {menuItem(FiSettings, 'Settings', '22px')}
        </div>
      </div>
      <div className='side-menu__footer-wrapper'>
        {menuItem(FiHelpCircle, 'Help', '22px')}
        {menuItem(BiMessage, 'Message', '22px')}
      </div>
    </div>
  );
};

export default SideMenu;
