'use client'
import React, { useEffect, useState, useRef } from 'react';
import Herosection from '@/app/Herosection/Herosection';
// import Nav from './components/Nav';
import Aboutsection from './components/aboutsection';
import Projects from './components/projects';
import Contactsection from './components/contactsecction';
import CircularGallery from '@/components/CircularGallery/CircularGallery';
// Simple mobile detection
function isMobileDevice() {
  if (typeof window === 'undefined') return false;
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const HomePage = () => {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const handleViewWorkClick = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    setHasMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  if (!hasMounted) {
    // Avoid rendering anything that uses browser-only APIs until after mount
    return null;
  }

  const showCustomCursor = !isMobile;

  return (
    <div
      className={`bg-black min-h-screen w-full${showCustomCursor ? ' cursor-none' : ''}`}
      onMouseMove={showCustomCursor ? handleMouseMove : undefined}
      style={{ position: 'relative' }}
    >
      {/* Custom Mouse Dot Cursor (global) */}
      {showCustomCursor && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x,
            top: mousePosition.y,
            width: '14px',
            height: '14px',
            background: 'rgba(110,156,245,0.95)',
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 9999,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 2px 8px 2px rgba(110,156,245,0.25)',
            transition: 'background 0.2s',
          }}
        />
      )}
      {/* <Nav/> */}
      <Herosection onViewWorkClick={handleViewWorkClick} />
      <Aboutsection />
      <div className='container  mx-auto' style={{ height: '600px', position: 'relative' }}  ref={projectsRef}>
        {/* <Projects /> */}
        <CircularGallery  bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
      <Contactsection />
    </div>
  );
};

export default HomePage