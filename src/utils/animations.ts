import anime from "animejs/lib/anime.es.js";

export const animate = {
    fadeIn: (targets: any, delay: number = 0) => {
        return anime({
            targets,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay,
        });
    },
    slideUp: (targets: any, delay: number = 0) => {
        return anime({
            targets,
            translateY: [20, 0],
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 800,
            delay,
        });
    },
    staggerCards: (targets: any) => {
        return anime({
            targets,
            translateY: [20, 0],
            opacity: [0, 1],
            delay: anime.stagger(100),
            easing: "easeOutExpo",
            duration: 800,
        });
    }
};
