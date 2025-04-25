
import { useEffect, useRef, useState } from "react";
import HeroBackground from "./components/HeroBackround";
import FloatingShapes from "./components/FloatingShapes";
import TypewriterEffect from "./components/TypewriterEffect";
import GradientButton from "./components/GradientButton";
import RotatingCube from "./components/RotatingCube";
import { useIsMobile } from "@/hooks/use-mobile";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";


type HeroSectionProps = {
  onViewWorkClick?: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ onViewWorkClick }) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Handle parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse move for interactive elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      // Normalize coordinates to be between -1 and 1
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePosition({ x, y });
    }
  };

  // Calculate transforms based on mouse position
  const titleTransform = `translate(${mousePosition.x * 10}px, ${mousePosition.y * 5}px)`;
  const subtitleTransform = `translate(${mousePosition.x * -5}px, ${mousePosition.y * -3}px)`;
  const cubeTransform = `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`;

  // Titles with different sections for gradient effects
  const title = "Dinesh Siva";
  const subtitle = "Web Developer";

  // Calculate parallax effect based on scroll
  const parallaxOffset = scrollY * 0.5;



  return (
    <div
      ref={heroRef}
      className="relative min-h-screen w-full  bg-gradient-to-b from-port-dark to-[#14121F] flex items-center justify-center"
      onMouseMove={!isMobile ? handleMouseMove : undefined}
    >
      {/* Background elements */}
      <HeroBackground />
      <FloatingShapes />

      {/* Center content container with parallax */}
      <div
        className="relative z-10 container mx-auto px-8 py-16 flex flex-col items-center"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      >
        {/* Avatar */}
        <div className="relative mb-8 rounded-full w-32 h-32 md:w-40 md:h-40 overflow-hidden border-4 border-white/10 shadow-2xl animate-appear" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-port-purple via-port-blue to-port-pink animate-gradient-x"></div>
          <div className="absolute inset-[3px] bg-port-dark rounded-full flex items-center justify-center text-4xl md:text-5xl text-white font-bold font-space">
            P
          </div>
        </div>

        {/* Main heading with gradient and transform effect */}

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70 mb-4 text-center relative"
          style={{ transform: titleTransform, transition: 'transform 0.1s ease-out' }}
        >
          <span className="inline-block animate-appear" style={{ animationDelay: '0.4s' }}>
            <TypewriterEffect className="text-white" text={title} delay={80} />
          </span>
        </h1>

        {/* Subtitle with gradient and opposite transform */}
        <h2
          className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-port-purple to-port-blue mb-8 md:mb-10 text-center relative font-outfit"
          style={{ transform: subtitleTransform, transition: 'transform 0.1s ease-out' }}
        >
          <span className="inline-block text-white animate-appear" style={{ animationDelay: '0.8s' }}>
            {subtitle}
          </span>
        </h2>

        {/* Gradient line separator */}
        <div className="w-24 h-1 bg-gradient-to-r from-port-purple to-port-blue rounded-full mb-8 animate-appear" style={{ animationDelay: '1s' }}></div>

        {/* Description with staggered animation */}
        <p className="text-white/80 max-w-2xl text-center mb-10 font-outfit leading-relaxed animate-appear" style={{ animationDelay: '1.2s' }}>
          I love creating websites and digital products from scratch in code. Turning creative designs into real, interactive experiences makes me feel truly awesome—there’s nothing like seeing an idea come to life on the web!
        </p>

        {/* CTA Buttons with staggered animation */}
        <div className="flex flex-col sm:flex-row gap-4 animate-appear" style={{ animationDelay: '1.4s' }}>
          <GradientButton type="primary" className=" cursor-none" onClick={onViewWorkClick}>
            View My Work
          </GradientButton>
          <GradientButton className=" cursor-none" type="secondary">
            Contact Me
          </GradientButton>
        </div>

        {/* Visual indicator to scroll down */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      {/* Interactive rotating cube */}
      <div
        className="hidden lg:block"
        style={{ transform: cubeTransform, transition: 'transform 0.2s ease-out' }}
      >
        <RotatingCube />
      </div>

      {/* Floating badge/label */}
      <div className="absolute top-10 right-10 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-outfit text-white/80 text-sm animate-float">
        <span className="inline-block w-2 h-2 bg-green-500 bg-port-purple rounded-full mr-2"></span>
        Available for projects
      </div>

      <div style={{ overflowY: 'hidden' }} className="absolute z-50 -bottom-10 -rotate-3 flex w-full bg-transparent flex-col text-white h-20  items-center justify-center overflow-hidden">
        <VelocityScroll>
          React &nbsp; Next.js &nbsp; Tailwind CSS &nbsp; HTML &nbsp; CSS &nbsp; JavaScript &nbsp; TypeScript &nbsp; Framer Motion &nbsp; Shadcn UI &nbsp; GSAP &nbsp; UI/UX &nbsp; Animations
        </VelocityScroll>
      </div>
    </div>
  );
};

export default HeroSection;