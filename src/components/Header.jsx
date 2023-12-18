import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
    <div className="container">
        <img src="./Images/logo_2..jpg" alt="logo_sync" className="logo_sync" />
    </div>
    <div className="logo"></div>
    <nav>
        <ul>
            <li><a href="download.html"><strong>DESCRIPTION</strong></a></li>
            <li><a href="download.html"><strong>FEATURES</strong></a></li>
            <li><a href="download.html"><strong> SCREEN</strong></a></li>
            <li><a href="download.html"><strong> EXTRA</strong><i className="fa fa-caret-down"></i></a></li>
        </ul>
        <button onClick={() => window.location.href='https://factoriaf5.org/'} className="button_1"> <strong>DOWNLOAD</strong></button>
    </nav>
</header>
);
}

export default Header