import React from 'react';

const Gallery = () => {
  return (
    <div
  className="
            w-full
            text-[#000000]
            bg-[#ffffff] pt-[16px] pr-[16px] pb-[16px] pl-[16px] 
          md:pt-[16px] md:pr-[16px] md:pb-[16px] md:pl-[16px] 
          lg:pt-[50px] lg:pr-[16px] lg:pb-[50px] lg:pl-[16px] mt-[0px] mr-[0px] mb-[0px] ml-[0px] 
          md:mt-[0px] md:mr-[0px] md:mb-[0px] md:ml-[0px] 
          lg:mt-[0px] lg:mr-[0px] lg:mb-[0px] lg:ml-[0px]
          flex flex-col justify-center items-center"
>
  <h2 className="text-[30px] md:text-[34px] lg:text-[34px]  font-bold mb-4 text-center">
    <SafeText text="<p>Simple Gallery</p>" />
  </h2>
  <div className="text-[20px] md:text-[20px] lg:text-[20px]  mb-6 opacity-75 text-center">
    <SafeText text="<p>Just a simple description for a simple gallery.</p>" />
  </div>
  <div
    className="
            grid gap-[1rem]
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
          "
  >
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[200px]  max-w-[500px] md:max-w-[500px] lg:max-w-[500px]  max-h-[200px] md:max-h-[200px] lg:max-h-[400px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="Image 1"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Image 1
      </div>
    </div>
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[200px]  max-w-[500px] md:max-w-[500px] lg:max-w-[500px]  max-h-[200px] md:max-h-[200px] lg:max-h-[400px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="Image 2"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Image 2
      </div>
    </div>
    <div className="relative flex group overflow-hidden rounded-none min-w-[200px] md:min-w-[200px] lg:min-w-[200px]  max-w-[500px] md:max-w-[500px] lg:max-w-[500px]  max-h-[200px] md:max-h-[200px] lg:max-h-[400px]  min-h-[autopx] md:min-h-[autopx] lg:min-h-[autopx] ">
      <img
        src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="Image 3"
        loading="lazy"
        className="w-full bg-gray-100 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
        Image 3
      </div>
    </div>
  </div>
</div>
  );
};

export default Gallery;