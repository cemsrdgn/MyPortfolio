import {Button, Container, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Projects.module.css';
import React from "react";
import { Carousel } from 'react-responsive-carousel';

export default function Projects() {

    const projects = [
        {
            title: 'Project 1',
            description: 'Description of project 1.',
            github: 'https://github.com/your-profile/project1',
            image: '/images/project1.png' // Replace with your image path
        },
        {
            title: 'Project 2',
            description: 'Description of project 2.',
            github: 'https://github.com/your-profile/project2',
            image: '/images/project2.png' // Replace with your image path
        },
        {
            title: 'Project 3',
            description: 'Description of project 3.',
            github: 'https://github.com/your-profile/project3',
            image: '/images/project3.png' // Replace with your image path
        },
        {
            title: 'Project 4',
            description: 'Description of project 4.',
            github: 'https://github.com/your-profile/project4',
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
