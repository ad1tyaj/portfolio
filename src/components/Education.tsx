"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Trophy, Users, Gamepad2 } from "lucide-react";

const education = [
    {
        institution: "Vellore Institute of Technology (VIT)",
        degree: "B.Tech in Computer Science",
        period: "2021 – 2025",
        location: "Vellore, India",
        grade: "CGPA: 7.6/10",
        accent: "#6366f1",
    },
    {
        institution: "Narayana Junior College",
        degree: "Higher Secondary (Class XII)",
        period: "2019 – 2021",
        location: "India",
        grade: "91.83%",
        accent: "#22d3ee",
    },
];

const achievements = [
    {
        icon: <Code2 size={20} />,
        title: "250+ Problems Solved",
        description: "Advanced algorithmic problems on LeetCode and CodeChef",
        accent: "#6366f1",
        stat: "250+",
    },
    {
        icon: <Trophy size={20} />,
        title: "AI Product Validation",
        description: "Conducted 20+ structured interviews with e-commerce sellers to validate AI-driven WhatsApp commerce",
        accent: "#22d3ee",
        stat: "20+",
    },
    {
        icon: <Users size={20} />,
        title: "VIT Board Gamers Club",
        description: "Led a 2-year outreach campaign, increasing community engagement by 40%",
        accent: "#a855f7",
        stat: "40%↑",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Education() {
    return (
        <section
            id="education"
            style={{ padding: "100px 24px", background: "var(--bg)", position: "relative" }}
        >
            <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
                {/* Section header */}
                <div style={{ marginBottom: 64, textAlign: "left", borderLeft: "4px solid var(--accent)", paddingLeft: 24 }}>
                    <span className="section-label" style={{ marginBottom: 12 }}>
                        SECTION: 05_EDUCATION
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--text)",
                        }}
                    >
                        LEARNING_HISTORY
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
                    {education.map((edu, i) => (
                        <motion.div
                            key={edu.institution}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="terminal-card bracket-tl"
                            style={{
                                padding: 36,
                                background: "var(--surface)",
                                border: "1px solid var(--border)",
                            }}
                        >
                            <div style={{ marginBottom: 24 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                                    <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--text)" }}>
                                        {edu.institution.toUpperCase()}
                                    </h3>
                                </div>
                                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--accent)", fontFamily: "var(--font-mono)", marginBottom: 12 }}>
                                    @{edu.degree.toUpperCase()}
                                </div>
                                <div style={{ display: "flex", gap: 16, color: "var(--text-muted)", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase" }}>
                                    <span>{edu.period}</span>
                                    <span>{edu.location}</span>
                                </div>
                            </div>

                            <div
                                style={{
                                    padding: "10px 16px",
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid var(--border)",
                                    fontSize: "0.85rem",
                                    color: "var(--accent)",
                                    fontFamily: "var(--font-mono)",
                                    fontWeight: 800,
                                }}
                            >
                                [RESULT: {edu.grade}]
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Achievements */}
                <div style={{ marginTop: 80 }}>
                    <div style={{ marginBottom: 32, display: "flex", alignItems: "center", gap: 12 }}>
                        <Award size={20} style={{ color: "var(--accent)" }} />
                        <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--text)", letterSpacing: "0.05em" }}>
                            LEADERSHIP_LOG
                        </h3>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                        {achievements.map((a) => (
                            <motion.div
                                key={a.title}
                                whileHover={{ borderColor: "var(--accent)" }}
                                className="terminal-card"
                                style={{
                                    padding: 24,
                                    background: "var(--surface)",
                                    border: "1px solid var(--border)",
                                    display: "flex",
                                    gap: 18,
                                    alignItems: "flex-start",
                                }}
                            >
                                <div style={{ color: "var(--accent)", flexShrink: 0 }}>
                                    {a.icon}
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                        <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--text)" }}>
                                            {a.title.toUpperCase()}
                                        </span>
                                        <span style={{ fontSize: "1rem", fontWeight: 900, color: "var(--accent)" }}>
                                            {a.stat}
                                        </span>
                                    </div>
                                    <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                                        {a.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
