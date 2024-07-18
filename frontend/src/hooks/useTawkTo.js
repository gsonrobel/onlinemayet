// frontend/src/hooks/useTawkTo.js
import { useEffect } from 'react';

const useTawkTo = () => {
  useEffect(() => {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://embed.tawk.to/Your_Tawk_ID/1i2gome13';
    s.charset = 'UTF-8';
    s.setAttribute('crossorigin', '*');
    document.head.appendChild(s);

    return () => {
      document.head.removeChild(s);
    };
  }, []);
};

export default useTawkTo;
