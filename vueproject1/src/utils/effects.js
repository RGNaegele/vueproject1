import { useEffect, useState } from 'react';
import { debounce } from './lodash';

export const useResize = cb =>
  useEffect(() => {
    cb();
    window.addEventListener('resize', cb);
    return () => window.removeEventListener('resize', cb);
  }, []); // eslint-disable-line

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    height: 2000,
    width: 2000,
  });

  useResize(
    debounce(
      () =>
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        }),
      50,
    ),
  );

  return dimensions;
};

export const useDevice = () => {
  const { width } = useDimensions();
  const isMobile = width <= 750;
  const isMini = width <= 500;
  const isDesktop = !isMobile;
  return { isMobile, isDesktop, isMini };
};
