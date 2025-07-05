import React from 'react';

const Contact = () => {
  return (
    <section
  className="
            w-full  bg-[#ffffff] text-[#111827] pt-[48px] pr-[48px] pb-[48px] pl-[48px] 
          md:pt-[48px] md:pr-[48px] md:pb-[48px] md:pl-[48px] 
          lg:pt-[100px] lg:pr-[48px] lg:pb-[100px] lg:pl-[48px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] 
          md:mt-[0px] md:mr-[0px] md:mb-[0px] md:ml-[0px] 
          lg:mt-[0px] lg:mr-[0px] lg:mb-[0px] lg:ml-[0px]"
>
  <div className="max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-4 text-center">
      <SafeText text="<p>Entre em Contato</p>" />
    </h2>
    <p className="text-xl mb-8 text-center">
      <SafeText text="<p>Preencha o formulário abaixo e entraremos em contato o mais breve possível.</p>" />
    </p>
    <form className="space-y-6">
      <div>
        <input
          type="text"
          placeholder="Seu Nome"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Seu Email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div>
        <textarea
          placeholder="Sua Mensagem"
          rows="4"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className=" bg-[#23592d] px-6 py-3 text-[#ffffff] rounded-lg font-semibold hover:brightness-75 transition-colors"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</section>
  );
};

export default Contact;