import './Form.scss';
import { useState } from 'react';
import Button from '../../../shared/Button';
import { AlertIcon } from '../../../svgs/icons';

export default function Form({ isMobile }) {
  const [inputValue, setInputValue] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(inputValue)) {
      setIsError(true);
    } else if (isError) {
      setIsError(false);
      setInputValue('');
    } else {
      setInputValue('');
    }
  };

  return (
    <form
      className={`newsletter__form ${
        !isMobile ? 'newsletter__form--desktop' : ''
      }`}
      onSubmit={onSubmit}
    >
      <div
        className={`newsletter__form-input-container ${isError ? 'error' : ''}`}
      >
        <input
          type="text"
          className={`newsletter__form-input ${isError ? 'error' : ''}`}
          value={inputValue}
          onChange={handleChange}
        />
        {isError && (
          <div className="newsletter__form-alert-icon">
            <AlertIcon />
          </div>
        )}
        {isError && (
          <p className="newsletter__form-error">
            Whoops, make sure it&#39;s an email
          </p>
        )}
      </div>
      <Button mode="action" width="100%">
        Contact Us
      </Button>
    </form>
  );
}
