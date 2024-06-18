import { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpTwoToneIcon from '@mui/icons-material/KeyboardDoubleArrowUpTwoTone';
import styles from '../styles/ScrollToTopButton.module.css';

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <button
            className={`${styles.scrollToTop} ${visible ? styles.show : ''}`}
            onClick={scrollToTop}
        >
            <KeyboardDoubleArrowUpTwoToneIcon className={styles.scrollToTopIcon} />
        </button>
    );
}
