import { Container, Typography } from '@mui/material';
import { ArrowDropDownTwoTone } from "@mui/icons-material";
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        const bubbleContainer = document.createElement('div');
        bubbleContainer.className = styles.bubbleContainer;
        document.getElementById('home')?.appendChild(bubbleContainer);

        const createBubble = () => {
            const bubble = document.createElement('div');
            bubble.className = styles.bubble;

            const sizes = [40, 60, 80];
            const size = sizes[Math.floor(Math.random() * sizes.length)];
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;

            bubble.style.left = `${Math.random() * (window.innerWidth - size)}px`;
            bubble.style.top = `${Math.random() * (window.innerHeight - size)}px`;

            const xMove = Math.random() * 100 - 50;
            const yMove = Math.random() * 100 - 50;
            // @ts-ignore
            bubble.style.setProperty('--x-move', xMove);
            // @ts-ignore
            bubble.style.setProperty('--y-move', yMove);

            bubbleContainer.appendChild(bubble);

            const popBubble = () => {
                bubble.classList.add(styles.popped);
                createParticles(bubble);
                setTimeout(() => {
                    bubble.remove();
                }, 0);
            };

            bubble.addEventListener('mouseover', popBubble);

            setTimeout(() => {
                popBubble();
            }, 20000);
        };

        const createParticles = (bubble: HTMLDivElement) => {
            const particleCount = 10;
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = styles.particle;
                particle.style.left = `${bubble.offsetLeft + bubble.clientWidth / 2}px`;
                particle.style.top = `${bubble.offsetTop + bubble.clientHeight / 2}px`;

                const angle = Math.random() * 2 * Math.PI;
                const radius = Math.random() * 50;
                particle.style.transform = `translate(${radius * Math.cos(angle)}px, ${radius * Math.sin(angle)}px)`;

                bubbleContainer.appendChild(particle);

                setTimeout(() => {
                    particle.remove();
                }, 2000);
            }
        };
        const interval = setInterval(createBubble, 2000);
        return () => {
            clearInterval(interval);
            bubbleContainer.remove();
        };
    }, []);

    const scrollToAbout = () => {
        const offset = 130;
        const element = document.getElementById('about');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="home" style={{ position: 'relative' }}>
            <Container className={styles.customContainer}>
                <div>
                    <Typography className={styles.customP}>
                        Hi! I am Cem
                    </Typography>
                    <Typography className={styles.customP2}>
                        Computer Science 4th Year Student
                    </Typography>
                    <Typography className={styles.customP3}>
                        A highly motivated and innovative Full Stack Developer,
                        driven by a passion for continuous learning and creating transformative solutions.
                        With extensive hands-on experience in various programming languages and technologies,
                        I am dedicated to building scalable and efficient applications.
                    </Typography>
                    <div className={styles.logoContainer}>
                        {/* Your GitHub profile link */}
                        <a href="https://github.com/cemsrdgn" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/github.png" alt="GitHub Logo" className={styles.customLogo} />
                        </a>
                        {/* Your LinkedIn profile link */}
                        <a href="https://www.linkedin.com/in/cem-sar%C4%B1do%C4%9Fan-59b901260/" target="_blank" rel="noopener noreferrer">
                            <img src="/logos/linkedin.png" alt="LinkedIn Logo" className={styles.customLogo} />
                        </a>
                    </div>
                </div>
                {/* Your profile photo here */}
                <img src="/images/myPhoto.jpg" alt="profilePhoto" className={styles.customPhoto} />
            </Container>
            <div className={styles.scrollContainer} onClick={scrollToAbout}>
                <img src="/logos/mouse.png" alt="Scroll Down Logo" className={styles.scrollDown} />
                <Typography className={styles.scrollText}>Scroll Down <ArrowDropDownTwoTone /></Typography>
            </div>
        </section>
    );
}
