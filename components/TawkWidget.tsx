import React, { useEffect } from 'react';

const TawkWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = 'https://embed.tawk.to/69161393fd8dcd195946f907/1j9v3oujf';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    const s0 = document.getElementsByTagName("script")[0];
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(script, s0);
    }

    return () => {
      // Cleanup if necessary (Tawk.to usually handles itself, but we can remove the script tag if unmounting)
      // script.remove(); 
    };
  }, []);

  return null;
};

export default TawkWidget;