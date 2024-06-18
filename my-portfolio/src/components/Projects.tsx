import {Button, Container, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Projects.module.css';
import React from "react";
import { Carousel } from 'react-responsive-carousel';

export default function Projects() {

    const projects = [
        {
            title: 'Fitness-Challenge-App',
            description: 'Web application that allows users to participate in fitness challenges and track their progress.' +
                ' Users can join challenges with friends or other users to compete against each other and stay motivated.',
            github: 'https://github.com/cemsrdgn/Fitness-Challenge-App',
            image: '/images/project1.png' // Replace with your image path
        },
        {
            title: 'Reservation System',
            description: 'Basic project for making reservations and creating rooms.Working with SQL database. ',
            github: 'https://github.com/cemsrdgn/Ceng382_23_24_s_202011065',
            image: '/images/project2.png' // Replace with your image path
        },
        {
            title: 'My Portfolio Project',
            description: 'A modern and responsive portfolio website built with React, Next.js, and MUI. ' +
                'This project showcases your profile photo, brief description, detailed about me section,' +
                ' skills, projects, and contact information.',
            github: 'https://github.com/cemsrdgn/MyPortfolio',
            image: '/images/project3.png' // Replace with your image path
        },
        {
            title: 'Work Compliance Analysis System',
            description: 'The Work Compliance Analysis System is a platform that evaluates and categorizes the' +
                ' qualifications of university graduates and matches them with the most suitable job positions.' +
                ' Users discover the most suitable jobs for them based on their educational background, skill sets,' +
                ' experience and many other factors.' +
                ' Work Compliance Analysis System also provides users with specially created job offers.',
            github: 'https://github.com/cemsrdgn/Work_Compliance_Analysis_System',
            image: '/images/project4.png' // Replace with your image path
        }
    ];

    return (
        <section id="projects">
            <Container className={styles.customProjectsContainer}>
                    <Typography variant="h2" className={styles.customProjectsHeader}>
                        My Projects
                    </Typography>
                    <Typography  className={styles.customProjectsSubHeader}>
                        Most Recent
                    </Typography>

                {/*This section provides a carousel where you can display your projects.
                   You can put information about your project and GitHub link */}
                <Carousel showArrows={true} infiniteLoop={true} useKeyboardArrows={true} showThumbs={false}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
                            <div className={styles.projectContent}>
                                <Typography variant="h4" className={styles.projectTitle}>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1" className={styles.projectDescription}>
                                    {project.description}
                                </Typography>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubButton}>
                                    See on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </Container>
        </section>
    );
}
