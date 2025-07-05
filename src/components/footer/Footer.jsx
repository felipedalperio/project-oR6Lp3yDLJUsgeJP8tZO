import React from 'react';

const Footer = () => {
  return (
    <footer
  className="w-full bg-[#151515] text-[#3b3939] pt-[64px] pr-[32px] pb-[64px] pl-[32px] 
          md:pt-[64px] md:pr-[32px] md:pb-[64px] md:pl-[32px] 
          lg:pt-[64px] lg:pr-[32px] lg:pb-[64px] lg:pl-[32px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] 
          md:mt-[0px] md:mr-[0px] md:mb-[0px] md:ml-[0px] 
          lg:mt-[0px] lg:mr-[0px] lg:mb-[0px] lg:ml-[0px]"
>
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <h2 className="text-2xl font-bold mb-4">
          <SafeText text="<p>Your Company</p>" />
        </h2>
        <p className="text-gray-400 mb-6">
          <SafeText text="<p>We create digital experiences for brands and companies by using technology.</p>" />
        </p>
        <div className="flex space-x-4">
          <a
            href=""
            className="text-gray-400 hover:text-[#224d1e] transition-colors"
          >
            <i className="fa-brands fa-instagram mr-2" />
            <span>Twitter</span>
          </a>
          <a
            href=""
            className="text-gray-400 hover:text-[#224d1e] transition-colors"
          >
            <i className="fa-brands fa-instagram mr-2" />
            <span>LinkedIn</span>
          </a>
          <a
            href=""
            className="text-gray-400 hover:text-[#224d1e] transition-colors"
          >
            <i className="fa-brands fa-instagram mr-2" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Contact Info
        </h3>
        <div className="space-y-3 text-gray-400">
          <p>
            <SafeText text="<p>contact@example.com</p>" />
          </p>
          <p>
            <SafeText text="<p>+1 234 567 890</p>" />
          </p>
          <p>
            <SafeText text="<p>123 Street Name, City, Country</p>" />
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Newsletter
        </h3>
        <div className="flex flex-col space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="bg-gray-800 text-white px-4 py-2 rounded"
          />
          <button className="bg-[#224d1e] text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      <p>
        © 2025
        <SafeText text="<p>Your Company</p>" />
        . All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
};

export default Footer;