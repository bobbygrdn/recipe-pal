import React from 'react';
import logo from '../../assets/logo.png';
import './Header.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

interface HeaderProps {
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode }) => {
  return (
    <header className="app-header">
      <img src={logo} alt="App Logo" id="app-logo" />
      <h1 id='company-name'>Recipe Pal</h1>
      <ThemeToggle toggleDarkMode={toggleDarkMode} />
    </header>
  );
};

export default Header;
