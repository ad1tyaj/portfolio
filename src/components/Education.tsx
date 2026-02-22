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
        <section id="education" style={{ padding: "100px 24px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Header */}
                <div style={{ marginBottom: 64, textAlign: "center" }}>
                    <span
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "0.8rem",
                            color: "#6366f1",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: 12,
                        }}
                    >
            // 05. education & achievements
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            color: "#e2e8f0",
                        }}
                    >
                        Education & Achievements
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    {/* Education cards */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: 20,
                            marginBottom: 40,
                        }}
                    >
                        {education.map((edu) => (
                            <motion.div
                                key={edu.institution}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, borderColor: `${edu.accent}40` }}
                                style={{
                                    padding: 32,
                                    background: "rgba(13, 17, 23, 0.6)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                    borderRadius: 18,
                                    backdropFilter: "blur(16px)",
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: `linear-gradient(90deg, ${edu.accent}, transparent)`,
                                        borderRadius: "18px 18px 0 0",
                                    }}
                                />

                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        background: `${edu.accent}15`,
                                        border: `1px solid ${edu.accent}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: edu.accent,
                                        marginBottom: 18,
                                    }}
                                >
                                    <GraduationCap size={22} />
                                </div>

                                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e2e8f0", marginBottom: 6 }}>
                                    {edu.institution}
                                </h3>
                                <p style={{ fontSize: "0.9rem", color: "#94a3b8", marginBottom: 12 }}>{edu.degree}</p>

                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <span
                                        style={{
                                            fontFamily: "'JetBrains Mono', monospace",
                                            fontSize: "0.75rem",
                                            color: "#475569",
                                        }}
                                    >
                                        {edu.period} · {edu.location}
                                    </span>
                                    <span
                                        style={{
                                            padding: "4px 12px",
                                            background: `${edu.accent}12`,
                                            border: `1px solid ${edu.accent}25`,
                                            borderRadius: 8,
                                            fontSize: "0.8rem",
                                            fontWeight: 700,
                                            color: edu.accent,
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        {edu.grade}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Achievements */}
                    <motion.div variants={itemVariants}>
                        <h3
                            style={{
                                fontSize: "1.25rem",
                                fontWeight: 700,
                                color: "#e2e8f0",
                                marginBottom: 20,
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                            }}
                        >
                            <Award size={20} style={{ color: "#6366f1" }} />
                            Leadership & Achievements
                        </h3>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                gap: 16,
                            }}
                        >
                            {achievements.map((a) => (
                                <motion.div
                                    key={a.title}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.02, borderColor: `${a.accent}40` }}
                                    style={{
                                        padding: 24,
                                        background: "rgba(13, 17, 23, 0.5)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        borderRadius: 16,
                                        backdropFilter: "blur(12px)",
                                        display: "flex",
                                        gap: 18,
                                        alignItems: "flex-start",
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 12,
                                            background: `${a.accent}12`,
                                            border: `1px solid ${a.accent}25`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: a.accent,
                                            flexShrink: 0,
                                        }}
                                    >
                                        {a.icon}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                            <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#e2e8f0" }}>
                                                {a.title}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: "1.1rem",
                                                    fontWeight: 800,
                                                    color: a.accent,
                                                    fontFamily: "'Space Grotesk', sans-serif",
                                                    marginLeft: 8,
                                                }}
                                            >
                                                {a.stat}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>
                                            {a.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
