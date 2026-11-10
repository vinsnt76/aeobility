'use client';

import React, { useEffect, useRef } from 'react';

export function GraphVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const nodeCount = 18;
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label?: string;
    }> = [];

    const labels = [
      'AI Search',
      'ChatGPT',
      'Google Maps',
      'Claude',
      'Perplexity',
      'LinkedIn',
      'Social Leads',
      'New Clients',
    ];

    for (let i = 0; i < nodeCount; i++) {
      const isLabeled = i < labels.length;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: isLabeled ? 5 : Math.random() * 2 + 1,
        color: isLabeled ? (i % 2 === 0 ? '#00f0ff' : '#bd00ff') : '#ffffff',
        label: isLabeled ? labels[i] : undefined,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      ctx.lineWidth = 0.7;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.18;
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(
              0,
              nodes[i].color === '#ffffff'
                ? `rgba(255,255,255,${alpha})`
                : `${nodes[i].color}${Math.floor(alpha * 255)
                    .toString(16)
                    .padStart(2, '0')}`
            );
            grad.addColorStop(
              1,
              nodes[j].color === '#ffffff'
                ? `rgba(255,255,255,${alpha})`
                : `${nodes[j].color}${Math.floor(alpha * 255)
                    .toString(16)
                    .padStart(2, '0')}`
            );
            ctx.strokeStyle = grad;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = node.label ? 8 : 0;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw labels for key nodes
        if (node.label) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.font = '10px system-ui';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }

        // Update positions
        node.x += node.vx;
        node.y += node.vy;

        // Boundary checks
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-aeo-cyan glow-blur opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-aeo-purple glow-blur opacity-25 pointer-events-none"></div>
      <canvas ref={canvasRef} className="w-full h-full rounded-2xl" />
    </div>
  );
}

export default GraphVisual;
