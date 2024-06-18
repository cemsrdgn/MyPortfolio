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
                        (the section with the necessary information about you)
                    </Typography>

                    {/* You can add your CV or any documents here*/}
                    <Link href="/documents/defaultCV.pdf" passHref legacyBehavior>
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
