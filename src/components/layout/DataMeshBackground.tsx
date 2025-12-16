'use client';

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export default function DataMeshBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme, systemTheme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // determine actual theme
        const currentTheme = theme === 'system' ? systemTheme : theme;
        const isDark = currentTheme === 'dark';

        // Config based on theme
        const nodeColor = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(15, 23, 42, 0.7)';
        const lineColor = isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.15)';
        const connectionDist = 200;
        // Upgrade: density
        const numNodes = window.innerWidth < 768 ? 100 : 250;

        let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
        let width = 0;
        let height = 0;
        let animationFrameId: number;

        const resize = () => {
            // Upgrade: Oversize canvas to avoid clipped corners during rotation
            const dpr = window.devicePixelRatio || 1;
            // Hypotenuse size ensuring coverage at any rotation
            const maxSize = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2);

            width = maxSize * 1.2; // Extra buffer
            height = maxSize * 1.2;

            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            // Init nodes centered
            nodes = [];
            for (let i = 0; i < numNodes; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3
                });
            }
        };

        const draw = () => {
            // Clear entire canvas
            ctx.clearRect(0, 0, width, height);

            const scrollY = window.scrollY;

            // Upgrade: Rotation Logic
            const rotation = scrollY * 0.0005; // 0.0005 radians per pixel

            ctx.save();
            // Pivot around center
            ctx.translate(width / 2, height / 2);
            ctx.rotate(rotation);
            ctx.translate(-width / 2, -height / 2);

            // Update positions & Draw
            for (const node of nodes) {
                node.x += node.vx;
                node.y += node.vy;

                // Bounce (Standard rect bounce)
                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.fill();

                // Draw Links
                for (const other of nodes) {
                    const dx = node.x - other.x;
                    const dy = node.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < connectionDist) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 0.8;
                        const alpha = 1 - (dist / connectionDist);
                        ctx.globalAlpha = alpha;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            ctx.restore();

            animationFrameId = requestAnimationFrame(draw);
        };

        const handleVisibility = () => {
            if (document.hidden) {
                cancelAnimationFrame(animationFrameId);
            } else {
                draw();
            }
        };

        window.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', handleVisibility);

        resize();
        draw();

        return () => {
            window.removeEventListener('resize', resize);
            document.removeEventListener('visibilitychange', handleVisibility);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme, systemTheme]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
            // Centered fixed position to allow rotation without offset drift
            style={{ opacity: 0.8 }}
        />
    );
}
