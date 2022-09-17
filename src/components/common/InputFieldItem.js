import { MdOutlineModeEdit } from 'react-icons/md';
import { BiDotsVerticalRounded } from 'react-icons/bi';

/**
 * Optimized Input formatted with this project input style.
 *
 * @param {String} placeholder
 * @param {Function} onChange
 * @param {String} value
 * @param {String} name
 * @param {String} type // optional
 * @param {String} disabled // optional
 * @param {String} classes // optional
 *
 * @return {Component}
 *
 */

 function InputFieldItem ({
  placeholder,
  type,
  onChange,
  value,
  name,
  disabled,
  classes = '',
}) {
  return (
    <div className={`input-field-item ${classes}`}>
      <div className='input-field-item__title'>
        <p>Name</p>
        <div className='input-field-item__settings'>
          <div><MdOutlineModeEdit /></div>
          <div><BiDotsVerticalRounded /></div>
        </div>
      </div>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        onChange={e => onChange(name, e)}
        value={value}
        name={name}
        disabled={disabled || false}
        data-testid={name}
      />
    </div>
  )
}

export default InputFieldItem
