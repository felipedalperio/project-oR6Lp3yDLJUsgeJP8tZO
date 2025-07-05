import React from 'react';

const Hero = () => {
  return (
    <section
  id="heros1"
  className="
          w-full bg-[#ffffff] text-[#585858] pt-[0px] pr-[0px] pb-[0px] pl-[0px] 
          md:pt-[0px] md:pr-[0px] md:pb-[0px] md:pl-[0px] 
          lg:pt-[0px] lg:pr-[0px] lg:pb-[0px] lg:pl-[0px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] 
          md:mt-[0px] md:mr-[0px] md:mb-[0px] md:ml-[0px] 
          lg:mt-[0px] lg:mr-[0px] lg:mb-[0px] lg:ml-[0px]"
>
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="Título-font sm:text-4xl text-3xl mb-4 font-medium">
        <SafeText text="<p><strong>Before they<span style=&quot;color: rgb(17, 126, 59);&quot;> sold out </span>readymade gluten</strong></p>" />
      </h1>
      <div className="mb-8 leading-relaxed">
        <SafeText text="<p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent t</p>" />
      </div>
      <div className="flex justify-center">
        <button className="inline-flex text-[#ffffff] bg-[#62996c] border-0 py-2 px-6 focus:outline-none hover:brightness-75 transition rounded text-lg">
          <span>Button</span>
        </button>
        <button className="ml-4 inline-flex text-[#ffffff] bg-[#c7c7c7] border-0 py-2 px-6 focus:outline-none hover:brightness-75 transition rounded text-lg">
          <span>Button</span>
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      />
    </div>
  </div>
</section>
  );
};

export default Hero;