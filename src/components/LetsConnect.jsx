import React from 'react';
import ArrowUpIcon from '../assets/arrow-up.svg';

const LetsConnect = () => {
  const handleClick = () => {
    window.open(
      'https://www.linkedin.com/in/aryan-kardam-b94b16296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-#0a0a0a p-[2px] cursor-pointer border-2 border-white"
    >
      <div className="flex flex-col justify-center items-center bg-primary w-full h-full rounded-full">
        <div className="flex items-center space-x-2">
          <span className="font-poppins font-medium text-[18px] leading-[23px] text-white">
            Let's
          </span>
          <img
            src={ArrowUpIcon}
            alt="arrow up"
            className="w-[23px] h-[23px]"
          />
        </div>
        <div className="mt-1">
          <span className="font-poppins font-medium text-[18px] leading-[23px] text-white">
            Connect
          </span>
        </div>
      </div>
    </div>
  );
};

export default LetsConnect;
