import React from 'react';

const Menu = () => {
  return (
    <header
  className="
            bg-[#1f273b]
            text-[#ffffff] 
            py-4 sticky top-0 z-50"
>
  <div className="container mx-auto flex justify-between items-center px-4">
    <h1 className="text-2xl font-bold">
      <SafeText text="<p>Portfólio</p>" />
    </h1>
    <nav className="hidden md:flex space-x-6">
      <ul className="flex gap-4">
        <li>
          <a href="/">
            HOME
          </a>
        </li>
        <li>
          <a href="/Teste">
            ABOUT
          </a>
        </li>
        <li>
          <a href="#">
            PORTFOLIO
          </a>
        </li>
        <li>
          <a href="#">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
    <a
      href="#"
      className="bg-[#ffffff] text-[#1f273b]  px-4 py-2 rounded hover:bg-blue-100 font-semibold"
    >
      <span>Login</span>
    </a>
  </div>
</header>
  );
};

export default Menu;