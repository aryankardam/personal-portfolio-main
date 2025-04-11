import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = '< ARYAN KARDAM />';

  useEffect(() => {
    let index = 1;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="ml-1 animate-blink">|</span>
      </div>

      <div className="w-48 h-1 bg-gray-800 rounded overflow-hidden relative">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 animate-loading-bar" />
        </div>
    </div>
  );
};

export default LoadingScreen;
