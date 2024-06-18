import { Container, Typography } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.customFooter}>
            <Container className={styles.footerContent}>
                <div className={styles.socialMediaIcons}>
                    <a href="https://github.com/cemsrdgn" target="_blank" rel="noopener noreferrer">
                        <GitHub className={styles.socialMediaIcon} />
                    </a>
                    <a href="https://www.linkedin.com/in/cem-sar%C4%B1do%C4%9Fan-59b901260/" target="_blank" rel="noopener noreferrer">
                        <LinkedIn className={styles.socialMediaIcon} />
                    </a>
                    <a href="https://x.com/cemsrdgn1" target="_blank" rel="noopener noreferrer">
                        <Twitter className={styles.socialMediaIcon} />
                    </a>
                </div>
                <Typography variant="body1" className={styles.footerText}>
                    Thank you for visiting my portfolio website.
                </Typography>
                <Typography variant="body2" className={styles.footerCopyright}>
                    &copy; {new Date().getFullYear()} Cem Sarıdoğan. All rights reserved.
                </Typography>
            </Container>
        </footer>
    );
}
