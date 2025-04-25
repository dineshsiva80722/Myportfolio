
const FloatingShapes = () => {
    return (
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated geometric shapes with different animations */}
        <div className="absolute top-1/4 left-1/5 w-24 h-24 rounded-full bg-port-purple/20 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 left-1/4 w-32 h-32 rounded-full bg-port-blue/10 animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 backdrop-blur-md bg-port-pink/15 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full border border-port-purple/20 backdrop-blur-sm animate-spin-slow" />
        
        {/* Larger blurred gradient areas */}
        <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-port-purple/20 to-port-blue/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-port-blue/15 to-port-pink/10 blur-3xl" />
        
        {/* Shape with gradient border */}
        <div className="absolute top-1/2 right-1/5 w-28 h-28 rounded-xl bg-transparent border-2 border-port-pink/30 backdrop-blur-lg animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Additional floating elements */}
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-gradient-to-r from-port-purple/20 to-port-blue/20 rounded-full animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-2/3 right-2/3 w-12 h-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-md rotate-12 animate-float" style={{ animationDelay: '3s' }} />
      </div>
    );
  };
  
  export default FloatingShapes;
  