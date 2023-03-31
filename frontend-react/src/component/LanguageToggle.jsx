import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa";

const LanguageToggle = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <FaGlobeAmericas className="w-6 h-6 cursor-pointer text-white" />
      </button>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-light-beige">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu"
          >
            <button
              onClick={() => changeLanguage("en")}
              className="block px-4 py-2 text-sm text-dark-slate-gray hover:bg-soft-teal hover:text-white focus:outline-none"
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => changeLanguage("zhtw")}
              className="block px-4 py-2 text-sm text-dark-slate-gray hover:bg-soft-teal hover:text-white focus:outline-none"
              role="menuitem"
            >
              繁體中文
            </button>
            {/* Add more languages as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageToggle;
