import React from 'react';

const Header = () => {
  return (
    <div
  className="flex flex-wrap bg-[#fff] pt-[0px] pr-[0px] pb-[0px] pl-[0px] 
          md:pt-[0px] md:pr-[0px] md:pb-[0px] md:pl-[0px] 
          lg:pt-[px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] 
          md:mt-[0px] md:mr-[0px] md:mb-[0px] md:ml-[0px] 
          lg:mt-[0px] lg:mr-[0px] lg:mb-[0px] lg:ml-[0px]"
>
  <div
    className="w-full sm:w-8/12 mb-10 pt-[10px] pr-[0px] pb-[0px] pl-[0px] 
          md:pt-[10px] md:pr-[0px] md:pb-[0px] md:pl-[0px] 
          lg:pt-[30px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px]"
  >
    <div className="container mx-auto h-full">
      <nav className="flex px-4 justify-between items-center">
        <div className="text-4xl font-bold text-[#1f273b]">
          <span></span>
        </div>
      </nav>
      <header className="container px-4 mt-10 items-center h-full">
        <div className="w-full">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#1f273b]">
            <SafeText text="<br><br>" />
            {' '}
            <span className="text-[#75bf64]">
              <span>Controle Financeiro</span>
            </span>
            {' '}
            <SafeText text="<p>Simplificado</p>" />
          </h1>
          <div className="w-20 h-2 bg-[#75bf64] my-4" />
          <p className="text-xl mb-10 text-[#1f273b]">
            <SafeText text="Transforme sua relação com o dinheiro. Organize suas finanças, acompanhe seus gastos e alcance seus objetivos com nossa plataforma intuitiva e poderosa.<br>" />
          </p>
          <button className="bg-[#75bf64] text-[#fff] text-2xl font-medium px-4 py-2 rounded shadow">
            <span>Saiba Mais</span>
          </button>
        </div>
      </header>
    </div>
  </div>
  <img
    src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    alt="Leafs"
    className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
  />
</div>
  );
};

export default Header;