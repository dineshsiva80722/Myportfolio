
import { useEffect, useState } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterEffect = ({ text, delay = 100, className = "" }: TypewriterEffectProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [index, delay, text]);

  return (
    <div className={`relative inline-block ${className}`}>
      <span>{text.slice(0, index)}</span>
      {index < text.length && (
        <span className="absolute h-full w-1 bg-green-500 right-[-4px] top-0 animate-blink"></span>
      )}
    </div>
  );
};

export default TypewriterEffect;
