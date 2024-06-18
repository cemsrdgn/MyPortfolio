import {Button, Container, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/About.module.css';
import React from "react";
import { FileDownloadTwoTone } from '@mui/icons-material';

export default function About() {
    return (
        <section id="about">
            <Container className={styles.customAboutContainer}>

                {/* Here is a default image, you can change it if you wish */}
                <div className={styles.customAboutImage}>
                    <Image
                        src="/images/aboutPhoto.webp"
                        alt="A person working on a laptop"
                        width={500}
                        height={500}
                        className={styles.customAboutImage}
                    />
                </div>
                <div className={styles.customAboutContent}>
                    <Typography variant="h2" className={styles.customAboutHeader}>
                        About Me
                    </Typography>
                    <Typography variant="body1" className={styles.customAboutSubheader}>
                        My Introduction
                    </Typography>

                    <Typography variant="body1" className={styles.customAboutText}>
                        I am a fourth-year Computer Science student with a keen interest in web development and software engineering.
                        My journey in the tech world has been marked by my enthusiasm for learning and building innovative solutions.
                        During my studies, I have gained extensive experience in developing web applications,
                        utilizing various technologies and frameworks. I had the privilege of interning at TUBITAK Bilgem,
                        where I honed my skills .
                    </Typography>

                    {/* You can add your CV or any documents here*/}
                    <Link href="/documents/CV-CemSaridogan(English).pdf" passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className={styles.customAboutButton}>
                            <Button style={{ color:'white'}}>
                                Download CV <FileDownloadTwoTone/>
                            </Button>
                        </a>
                    </Link>
                </div>
            </Container>
        </section>
    );
}
