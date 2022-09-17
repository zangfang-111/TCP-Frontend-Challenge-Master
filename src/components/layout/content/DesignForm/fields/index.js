import { useState } from 'react';

import AccountForm from './account';
import { RiArrowLeftSLine } from 'react-icons/ri';

const fieldTabs = ['Account', 'Company', 'Deal', 'Other'];

const TemporaryPage = () => (
  <div className=''>
    Comming Soon
  </div>
);

function FormFields() {
  const [activeTab, setActive] = useState(0);

  return (
    <div className='design-form__fields'>
      <div className='design-form__fields-title'>
        <p>Available Fields</p>
        <RiArrowLeftSLine />
      </div>
      <div className='design-form__fields-tabs'>
        {fieldTabs.map((item, i) => (
          <div
            className={`design-form__fields-tab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActive(i)}
            key={i}
          >
            {item}
          </div>
        ))}
      </div>
      {activeTab === 0
        ? <AccountForm />
        : <TemporaryPage />
      }
    </div>
  );
};

export default FormFields;
