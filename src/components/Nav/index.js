import React from 'react';

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <h1 className='display-1 m-2'>Josiah Douglass</h1>
      <nav>
        <a href='/' className='nav-item m-2'>About Me</a>
        <a href='/portfolio' className='nav-item m-2'>Portfolio</a>
        <a href='/resume' className='nav-item m-2'>Resume</a>
        <a href='/contact' className='nav-item m-2'>Contact Me</a>
      </nav>
    </header>
  );
}

export default Nav;
