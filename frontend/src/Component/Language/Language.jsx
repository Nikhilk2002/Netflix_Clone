import React, { useState } from 'react';
import { FaLanguage } from 'react-icons/fa'; 
import { IoMdArrowDropdown } from 'react-icons/io'; 
import './Language.css';

function Language() {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button className="dropdown-button" onClick={() => setDropdownOpen(!dropdownOpen)}>
        <FaLanguage /> {language} <IoMdArrowDropdown />
      </button>
      {dropdownOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => handleLanguageChange('English')}>
            English
          </li>
          <li onClick={() => handleLanguageChange('Hindi')}>
            Hindi
          </li>
        </ul>
      )}
    </div>
  );
}

export default Language;
