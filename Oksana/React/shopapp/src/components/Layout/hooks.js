import { useEffect,useState } from 'react';

export const useOnClickOutside = (node, setOpen) => {
 
  useEffect(() => {
    const listener = event => {
        if (!node.current || node.current.contains(event.target  )  ) {
        return;
            }
  
            setOpen(event);
            };
      
      document.addEventListener('mousedown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
    };

  },
    [node, setOpen],
  );
};

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return  width;
};