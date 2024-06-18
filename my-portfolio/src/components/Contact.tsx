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
                            Your Location
                        </Typography>
                    </div>
                    <div className={styles.contactField}>
                        <Email className={styles.contactIconMail} />
                        <Typography variant="body1" className={styles.contactText}>
                            your-email@example.com
                        </Typography>
                    </div>
                    <div className={styles.contactField}>
                        <Phone className={styles.contactIconPhone} />
                        <Typography variant="body1" className={styles.contactText}>
                            +1 (234) 567-8901
                        </Typography>
                    </div>
                </div>
            </Container>
        </section>
    );
}
