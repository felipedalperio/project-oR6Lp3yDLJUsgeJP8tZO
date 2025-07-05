import React from 'react';

const About = () => {
  return (
    <div
  className="
            w-full
            bg-[#f8f9fa] pt-[64px] pr-[64px] pb-[64px] pl-[64px] 
          md:pt-[64px] md:pr-[64px] md:pb-[64px] md:pl-[64px] 
          lg:pt-[80px] lg:pr-[64px] lg:pb-[80px] lg:pl-[64px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] 
          md:mt-[0px] md:mr-[0px] md:mb-[0px] md:ml-[0px] 
          lg:mt-[0px] lg:mr-[0px] lg:mb-[0px] lg:ml-[0px]"
>
  <div className="max-w-4xl mx-auto text-center">
    <img
      src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      alt="Profile"
      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
    />
    <h2 className="text-[34px] md:text-[34px] lg:text-[34px]  font-bold mb-2">
      <SafeText text="<p>About Me</p>" />
    </h2>
    <p className="text-[20px] md:text-[20px] lg:text-[20px]  mb-6 opacity-75">
      <SafeText text="<p>Web Developer &amp; Designer</p>" />
    </p>
    <p className="text-[18px] md:text-[18px] lg:text-[18px]  mb-8 ">
      <SafeText text="<p>Passionate web developer with experience in creating modern and responsive websites.</p>" />
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <span className="px-4 py-2 bg-white rounded-full shadow-md">
        React
      </span>
      <span className="px-4 py-2 bg-white rounded-full shadow-md">
        Node.js
      </span>
      <span className="px-4 py-2 bg-white rounded-full shadow-md">
        UI/UX Design
      </span>
      <span className="px-4 py-2 bg-white rounded-full shadow-md">
        TypeScript
      </span>
    </div>
  </div>
</div>
  );
};

export default About;