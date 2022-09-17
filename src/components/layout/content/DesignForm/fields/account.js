import { MdAlternateEmail, MdOutlineTitle, MdAttachFile } from 'react-icons/md';
import { RiPhoneFill, RiLockPasswordLine } from 'react-icons/ri';
import { FaAddressCard } from 'react-icons/fa';
import { FiType } from 'react-icons/fi';
import { GiPositionMarker } from 'react-icons/gi';

const accountFieldsItems = [{
  id: 'firstName',
  icon: FiType,
  name: 'First Name'
}, {
  id: 'lastName',
  icon: FiType,
  name: 'Last Name'
}, {
  id: 'phoneNumber',
  icon: RiPhoneFill,
  name: 'Phone Number'
}, {
  id: 'email',
  icon: MdAlternateEmail,
  name: 'Email'
}, {
  id: 'title',
  icon: MdOutlineTitle,
  name: 'Title'
}, {
  id: 'address',
  icon: FaAddressCard,
  name: 'Address'
}, {
  id: 'personalId',
  icon: FiType,
  name: 'Personal ID'
}, {
  id: 'password',
  icon: RiLockPasswordLine,
  name: 'Password'
}, {
  id: 'position',
  icon: GiPositionMarker,
  name: 'Position'
}, {
  id: 'accountType',
  icon: FiType,
  name: 'Account Type'
}, {
  id: 'attachment',
  icon: MdAttachFile,
  name: 'Attachment'
}]

function FieldsAccountItem({ Icon, name }) {
  return (
    <div className='design-form__fields-account--item'>
      <Icon />
      <p>{name}</p>
    </div>
  );
};

function AccountForm() {
  return (
    <div className='design-form__fields-account'>
      {accountFieldsItems.map((item, k) => (
        <FieldsAccountItem Icon={item.icon} name={item.name} key={k} />
      ))}
    </div>
  );
};

export default AccountForm;
