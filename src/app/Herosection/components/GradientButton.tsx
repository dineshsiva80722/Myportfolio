
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "primary" | "secondary";
}

const GradientButton = ({ 
  children, 
  onClick, 
  className = "", 
  type = "primary" 
}: GradientButtonProps) => {
  const baseClasses = "relative px-6 py-3 rounded-lg font-medium overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const gradientClasses = type === "primary"
    ? "bg-gradient-to-r from-port-purple to-port-blue hover:from-port-blue hover:to-port-purple focus:ring-port-purple/50"
    : "bg-gradient-to-r from-port-blue to-port-pink hover:from-port-pink hover:to-port-blue focus:ring-port-blue/50";
    
  return (
    <button 
      onClick={onClick}
      className={`group ${baseClasses} ${gradientClasses} ${className}`}
    >
      <span className="relative z-10 text-purple-600">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-port-purple/80 to-port-blue/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-0 left-0 h-1 w-full bg-white/20 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300" />
    </button>
  );
};

export default GradientButton;
