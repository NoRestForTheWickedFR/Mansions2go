//This took me way to look.... I wanted to stop before implementing this, then I for some reason figured it is going to be easy....
//Took me hours of searching through all internet posts and then through ChatGPT and then through posts again... I did not give up, and I got did it.....

import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } 

      else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return isVisible;
};

export default useScrollPosition;
