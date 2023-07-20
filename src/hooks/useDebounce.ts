import { useRef, useEffect } from "react";

export const useDebounce = () => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  const debounce =
    (func: any, wait: number) =>
    (...args: any) => {
      timeout.current && clearTimeout(timeout.current);
      timeout.current = setTimeout(() => func(...args), wait);
    };

  useEffect(() => {
    return () => {
      if (!timeout.current) return;
      clearTimeout(timeout.current);
    };
  }, []);

  return { debounce };
};


