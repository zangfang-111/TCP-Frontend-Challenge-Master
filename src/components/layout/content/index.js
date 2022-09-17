import { useState } from 'react';

import DesignForm from './DesignForm';
import ContentHeader from './header';

const TemporaryPage = () => (
  <div className='content-area__body'>
    Comming Soon
  </div>
);

function ContentArea() {
  const [activeTab, setActive] = useState(0);

  return (
    <div className='content-area'>
      <ContentHeader activeTab={activeTab} setActive={setActive} />
      {activeTab === 0
        ? <DesignForm />
        : <TemporaryPage />}
    </div>
  );
};

export default ContentArea;
