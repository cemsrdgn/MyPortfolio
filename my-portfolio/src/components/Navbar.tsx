import {MouseEvent, useEffect, useState} from 'react';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@mui/material';

import Link from 'next/link';

import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import {BusinessCenter, ContactMail, HighlightOffTwoTone, PersonPinRounded, Share} from "@mui/icons-material";

import styles from '../styles/Navbar.module.css';
import {fontSize} from "@mui/system";


export default function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
        // @ts-ignore
        document.getElementById("mySidenav").style.width = "250px";
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
        // @ts-ignore
        document.getElementById("mySidenav").style.width = "0";
    };


    const handleScroll = (e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>, target: string) => {
        e.preventDefault();
        const offset = 130;
        const element = document.getElementById(target);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        } else {
            console.error(`Element with ID ${target} not found.`);
        }
        setSidebarOpen(false);
    };


    return (
        <>
            <AppBar position="sticky" className={styles.customNavbar}>
                <Toolbar>
                    <Typography className={styles.customLogo} variant="h6" sx={{ flexGrow: 1 }}>
                        Your logo here
                    </Typography>
                    <div className={styles.hideOnSmallScreen}>
                        <a href="#home" className={styles.customNavbarItem} onClick={(e) => handleScroll(e, 'home')}>Home</a>
                        <a href="#about" className={styles.customNavbarItem} onClick={(e) => handleScroll(e, 'about')}>About</a>
                        <a href="#skills" className={styles.customNavbarItem} onClick={(e) => handleScroll(e, 'skills')}>Skills</a>
                        <a href="#projects" className={styles.customNavbarItem} onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
                        <a href="#contact" className={styles.customNavbarLastItem} onClick={(e) => handleScroll(e, 'contact')}>Contact Me</a>
                    </div>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        className={styles.showOnSmallScreen}
                        onClick={openSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <div id="mySidenav" className={styles.sidenav}>
                <div>
                    <a href="#home" onClick={(e) => handleScroll(e, 'home')}><HomeIcon />Home</a>
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')}><PersonPinRounded />About</a>
                    <a href="#skills" onClick={(e) => handleScroll(e, 'skills')}><BusinessCenter />Skills</a>
                    <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}><Share />Projects</a>
                    <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}><ContactMail />Contact Me</a>
                </div>
                <a href="javascript:void(0)" className={styles.closebtn} onClick={closeSidebar}>
                    <HighlightOffTwoTone />
                </a>
            </div>
        </>
    );
}
