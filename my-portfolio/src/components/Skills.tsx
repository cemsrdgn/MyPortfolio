import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';

export default function Skills() {
    return (
        <section id="skills">
            <Container className={styles.customSkillsContainer}>
                <Typography variant="h2" className={styles.customSkillsHeader}>
                    Skills
                </Typography>
                <Typography  className={styles.customSkillsSubHeader}>
                    My Technical Level
                </Typography>

                {/*This section contains a table where you can add and display your skills.
                   There are a few sample logos for skills.
                   You can add or remove this part as you wish. */}
                <table className={styles.skillsTable}>
                    <tbody>
                    <tr>
                        <td><Image src="/logos/c.png" alt="C Logo" className={styles.skillLogo} width={80} height={80}/>C Programming</td>
                        <td><Image src="/logos/csharp.png" alt="C# Logo" className={styles.skillLogo} width={80} height={80}/>C# Programming</td>
                        <td><Image src="/logos/cplus.png" alt="C++ Logo" className={styles.skillLogo} width={80} height={80}/>C++ Programming</td>
                    </tr>
                    <tr>
                        <td><Image src="/logos/html.png" alt="HTML Logo" className={styles.skillLogo} width={80} height={80}/>HTML5</td>
                        <td><Image src="/logos/css.png" alt="CSS Logo" className={styles.skillLogo} width={80} height={80}/>CSS3</td>
                        <td><Image src="/logos/js.webp" alt="JS Logo" className={styles.skillLogo} width={80} height={80}/>JavaScript</td>
                    </tr>
                    <tr>
                        <td><Image src="/logos/java.png" alt="Java Logo" className={styles.skillLogo} width={80} height={80}/>Java Programming</td>
                        <td><Image src="/logos/react.png" alt="React Logo" className={styles.skillLogo} width={80} height={80}/>React</td>
                        <td><Image src="/logos/dotnet.png" alt=".NET Logo" className={styles.skillLogo} width={80} height={80}/>ASP.net</td>
                    </tr>
                    <tr>
                        <td><Image src="/logos/oop.png" alt="OOP Logo" className={styles.skillLogo} width={80} height={80}/>Object Oriented Programming</td>
                        <td><Image src="/logos/dataStructure.png" alt="DataStructure Logo" className={styles.skillLogo} width={80} height={80}/>Data Structure</td>
                        <td><Image src="/logos/sql.png" alt=".SQL Logo" className={styles.skillLogo} width={80} height={80} />SQL</td>
                    </tr>
                    <tr>
                        <td><Image src="/logos/web.png" alt="WEB Logo" className={styles.skillLogo} width={80} height={80}/>Web Development</td>
                        <td><Image src="/logos/githubTable.png" alt="Github Logo" className={styles.skillLogo} width={80} height={80} />Github</td>
                    </tr>
                    </tbody>
                </table>
            </Container>
        </section>
    );
}
