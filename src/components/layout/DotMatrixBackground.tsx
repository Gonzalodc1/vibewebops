'use client';

import { useEffect, useRef } from 'react';

interface DotMatrixBackgroundProps {
    opacity?: number;
}

export default function DotMatrixBackground({ opacity = 1 }: DotMatrixBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;
        let points: { x: number; y: number; originX: number; originY: number }[] = [];

        // Config
        const spacing = 32;
        const dotSize = 1.25;
        const hoverRadius = 100;
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            points = [];
            for (let x = 0; x < width + spacing; x += spacing) {
                for (let y = 0; y < height + spacing; y += spacing) {
                    const offsetX = (y / spacing) % 2 === 0 ? 0 : spacing / 2; // Honeycombish offset (optional, using grid here)
                    // Actually let's stick to a strict grid for that technical look
                    points.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                    });
                }
            }
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            const time = Date.now() * 0.0005;

            ctx.fillStyle = '#333'; // Fallback color, though we use global alpha

            points.forEach((point) => {
                // Subtle drift
                const driftX = Math.sin(time + point.y * 0.05) * 2;
                const driftY = Math.cos(time + point.x * 0.05) * 2;

                let targetX = point.originX + driftX;
                let targetY = point.originY + driftY;

                // Mouse interaction (repel or attract - subtle)
                const dx = mouse.x - targetX;
                const dy = mouse.y - targetY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                let alpha = 0.15; // Base opacity

                if (distance < hoverRadius) {
                    // Slight shift away from mouse
                    const force = (hoverRadius - distance) / hoverRadius;
                    const angle = Math.atan2(dy, dx);
                    targetX -= Math.cos(angle) * force * 15;
                    targetY -= Math.sin(angle) * force * 15;
                    alpha = 0.4; // Brighten near mouse
                }

                ctx.globalAlpha = alpha;
                ctx.beginPath();
                ctx.arc(targetX, targetY, dotSize, 0, Math.PI * 2);
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ opacity }}
        />
    );
}
