import { useState } from 'react';
import { motion } from 'framer-motion';
import "./app.css";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const projects = [
        {
            id: 1,
            title: "Portfolio Website",
            description: "A modern, responsive portfolio showcasing my work with smooth animations.",
            tech: ["VS Code", "HTML", "CSS", "JavaScript", "React", "JSON"]
        },
        {
            id: 2,
             title: "Employee Management System",
             description: "Full-stack application for managing employee information and records.",
             tech: ["VS Code","HTML", "CSS", "JavaScript", "PHP", "MySQL"]
        },
        {
            id: 3,
            title: "Adventure to Eldengrove:The Mystic World of Odyssey",
            description: "A captivating 2D adventure game set in a mystical world filled with challenges and secrets.",
            tech: ["VS Code", "Unity", "C#", "JSON"]
        },
    ];

    const skillsWithProficiency = [
        { name: "HTML", icon: "🏗️", proficiency: 95 },
        { name: "CSS", icon: "🎨", proficiency: 90 },
        { name: "JavaScript", icon: "⚡", proficiency: 85 },
        { name: "React", icon: "⚛️", proficiency: 80 },
        { name: "Git", icon: "🔄", proficiency: 85 },
        { name: "Responsive Design", icon: "📱", proficiency: 90 }
    ];

    const skills = [
        "HTML5", "CSS3", "JavaScript", "React", 
        "Framer Motion", "Responsive Design", "Git & GitHub",
        "Node.js", "MongoDB", "Firebase", "Tailwind CSS", "UI/UX Design"
    ];

    return (
        <div className={darkMode ? "app dark-mode" : "app"}>
            <motion.nav 
                className="navbar"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="nav-left">
                    <h1>Rico Bryan Paderes</h1>
                </div>
                <button 
                    className="dark-mode-toggle" 
                    onClick={toggleDarkMode}
                >
                    {darkMode ? "☀️ Light" : "🌙 Dark"}
                </button>
            </motion.nav>

            <motion.section 
                className="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div 
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.img 
                        src="profile.jpeg.jfif" 
                        alt="Rico Bryan" 
                        className="profile-img"
                        variants={itemVariants}
                    />
                    <motion.h1 variants={itemVariants}>
                        Hi, I'm Rico Bryan Paderes 👋
                    </motion.h1>
                    <motion.h2 variants={itemVariants}>
                        Frontend Developer
                    </motion.h2>
                    <motion.p variants={itemVariants}>
                        I build responsive, modern and user-friendly websites with stunning animations.
                    </motion.p>
                </motion.div>
            </motion.section>

        
            <motion.section 
                className="section about"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        About Me
                    </motion.h2>
                    <motion.div 
                        className="about-content"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p variants={itemVariants}>
                            Hello, my name is Rico Bryan Paderes, a fresh graduate of Bachelor of Science in Information Technology at STI College Kalibo.
                            I'm a Frontend Developer who enjoys turning ideas into interactive and responsive websites.
                            With solid foundations in HTML, CSS, and JavaScript, I focus on creating clean designs and functional user interfaces.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            I continuously improve my skills and leverage modern development tools, including React, Framer Motion, and AI-assisted coding workflows,
                            to enhance productivity and build high-quality web applications efficiently. I'm passionate about creating engaging user experiences with smooth animations.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="section skills"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Technical Skills
                    </motion.h2>
                    <motion.div 
                        className="skills-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {skillsWithProficiency.map((skill, index) => (
                            <motion.div 
                                key={index}
                                className="skill-card"
                                variants={itemVariants}
                                whileHover={{ y: -8, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }}
                            >
                                <div className="skill-header">
                                    <span className="skill-icon">{skill.icon}</span>
                                    <h3>{skill.name}</h3>
                                </div>
                                <div className="progress-bar">
                                    <motion.div 
                                        className="progress-fill"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.proficiency}%` }}
                                        transition={{ duration: 1, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                                <span className="proficiency-text">{skill.proficiency}%</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

        
            <motion.section 
                className="section projects"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Projects
                    </motion.h2>
                    <motion.div 
                        className="projects-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project) => (
                            <motion.div 
                                key={project.id}
                                className="project-card"
                                variants={itemVariants}
                                whileHover={{ 
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

        
            <motion.section 
                className="section resume"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <motion.div 
                        className="resume-content"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2 
                            variants={itemVariants}
                            className="resume-title"
                        >
                            Download My Resume
                        </motion.h2>
                        <motion.p 
                            variants={itemVariants}
                            className="resume-description"
                        >
                            Get a complete overview of my professional experience, skills, and accomplishments.
                            Download my resume to learn more about my background and expertise.
                        </motion.p>
                        <motion.a 
                            href="/RESUME_PADERES.pdf" 
                            download="RESUME_PADERES.pdf"
                            className="resume-button"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            📥 Download CV
                        </motion.a>
                    </motion.div>
                </div>
            </motion.section>

        
            <motion.section 
                className="section contact"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="container">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Contact Me
                    </motion.h2>
                    <motion.div 
                        className="contact-content"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p variants={itemVariants}>
                            Email: <a href="mailto:ricobryanpaderes@gmail.com">ricobryanpaderes@gmail.com</a>
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            GitHub: <a href="https://github.com/ricssxxx" target="_blank" rel="noopener noreferrer">github.com/ricssxxx</a>
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            LinkedIn: <a href="https://www.linkedin.com/in/rico-bryan-paderes-086319387/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rico-bryan-paderes</a>
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Phone: <a href="tel:+639608119449">+639608119449</a>
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}

export default App;