
import { useEffect, useRef } from "react";

const RotatingCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let animationFrameId: number;
    let angle = 0;
    
    const size = 100;
    const rotationSpeed = 0.01;
    
    const resizeCanvas = () => {
      canvas.width = size * 2;
      canvas.height = size * 2;
    };
    
    const drawCube = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Center point
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Calculate cube points (simplified 3D)
      const points = [];
      
      // Front face (clockwise from top-left)
      points.push({x: -size/2, y: -size/2, z: size/2});
      points.push({x: size/2, y: -size/2, z: size/2});
      points.push({x: size/2, y: size/2, z: size/2});
      points.push({x: -size/2, y: size/2, z: size/2});
      
      // Back face (clockwise from top-left)
      points.push({x: -size/2, y: -size/2, z: -size/2});
      points.push({x: size/2, y: -size/2, z: -size/2});
      points.push({x: size/2, y: size/2, z: -size/2});
      points.push({x: -size/2, y: size/2, z: -size/2});
      
      // Rotate points around Y and X axis
      const rotatedPoints = points.map(point => {
        // Rotate around Y axis
        const rotY = {
          x: point.x * Math.cos(angle) + point.z * Math.sin(angle),
          y: point.y,
          z: -point.x * Math.sin(angle) + point.z * Math.cos(angle)
        };
        
        // Rotate around X axis
        return {
          x: rotY.x,
          y: rotY.y * Math.cos(angle/2) - rotY.z * Math.sin(angle/2),
          z: rotY.y * Math.sin(angle/2) + rotY.z * Math.cos(angle/2)
        };
      });
      
      // Project 3D points to 2D
      const projectedPoints = rotatedPoints.map(point => {
        const scale = 1.5; // Perspective scale
        return {
          x: centerX + point.x,
          y: centerY + point.y,
          z: point.z
        };
      });
      
      // Draw faces with gradients
      // Front face
      drawFace(projectedPoints.slice(0, 4), "#9b87f5", "#6e9cf5");
      
      // Back face
      drawFace(projectedPoints.slice(4, 8), "#6e9cf5", "#D946EF");
      
      // Connect front to back
      drawEdge(projectedPoints[0], projectedPoints[4], "#9b87f5");
      drawEdge(projectedPoints[1], projectedPoints[5], "#6e9cf5");
      drawEdge(projectedPoints[2], projectedPoints[6], "#D946EF");
      drawEdge(projectedPoints[3], projectedPoints[7], "#9b87f5");
      
      angle += rotationSpeed;
    };
    
    const drawFace = (points: {x: number, y: number, z: number}[], colorStart: string, colorEnd: string) => {
      // Sort faces by depth for basic z-sorting
      const avgZ = points.reduce((sum, p) => sum + p.z, 0) / points.length;
      
      // Only draw faces facing the camera (basic culling)
      if (avgZ < 0) return;
      
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      
      ctx.closePath();
      
      // Create gradient
      const gradient = ctx.createLinearGradient(
        points[0].x, points[0].y,
        points[2].x, points[2].y
      );
      gradient.addColorStop(0, colorStart);
      gradient.addColorStop(1, colorEnd);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add subtle strokes for edges
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
      ctx.lineWidth = 1;
      ctx.stroke();
    };
    
    const drawEdge = (p1: {x: number, y: number, z: number}, p2: {x: number, y: number, z: number}, color: string) => {
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };
    
    const animate = () => {
      drawCube();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    animate();
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-10 right-10 w-48 h-48 opacity-80 z-20 pointer-events-none"
    />
  );
};

export default RotatingCube;
