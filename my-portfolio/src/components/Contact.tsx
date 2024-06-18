import { Container, Typography } from '@mui/material';
import { LocationOn, Email, Phone } from '@mui/icons-material';
import styles from '../styles/Contact.module.css';
import React from "react";

export default function Contact() {
    return (
        <section id="contact">
            <Container className={styles.customContactContainer}>
                <Typography variant="h2" className={styles.customContactHeader}>
                    Contact Me
                </Typography>
                <Typography  className={styles.customContactSubHeader}>
                    Get in touch
                </Typography>
                <div className={styles.customContactInfo}>
                    <div className={styles.contactField}>
                        <LocationOn className={styles.contactIconPlace} />
                        <Typography variant="body1" className={styles.contactText}>
                            Ankara, TURKEY
                        </Typography>
                    </div>
                    <div className={styles.contactField}>
                        <Email className={styles.contactIconMail} />
                        <Typography variant="body1" className={styles.contactText}>
                            cemsrdgn@gmail.com
                        </Typography>
                    </div>
                    <div className={styles.contactField}>
                        <Phone className={styles.contactIconPhone} />
                        <Typography variant="body1" className={styles.contactText}>
                            +90 539 882 00 74
                        </Typography>
                    </div>
                </div>
            </Container>
        </section>
    );
}
