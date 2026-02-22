"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ExternalLink, Code2, ArrowRight } from "lucide-react";

const contactLinks = [
    {
        icon: <Mail size={22} />,
        label: "Email",
        value: "adj0071@gmail.com",
        href: "mailto:adj0071@gmail.com",
        accent: "#6366f1",
    },
    {
        icon: <Linkedin size={22} />,
        label: "LinkedIn",
        value: "linkedin.com/in/aditya-jha",
        href: "https://linkedin.com/in/aditya-jha",
        accent: "#22d3ee",
    },
    {
        icon: <Code2 size={22} />,
        label: "LeetCode",
        value: "leetcode.com/",
        href: "https://leetcode.com/",
        accent: "#a855f7",
    },
    {
        icon: <Phone size={22} />,
        label: "Phone",
        value: "+91-9321833403",
        href: "tel:+919321833403",
        accent: "#10b981",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
    return (
        <section
            id="contact"
            style={{
                padding: "100px 24px 80px",
                background: "rgba(13, 17, 23, 0.4)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background glow */}
            <div
                style={{
                    position: "absolute",
                    bottom: -200,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 600,
                    height: 400,
                    borderRadius: "50%",
                    background:
                        "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: "center", marginBottom: 64 }}
                >
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
            // 06. contact
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            marginBottom: 16,
                            background: "linear-gradient(135deg, #e2e8f0, #94a3b8)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Let&apos;s Build Something
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "1.05rem",
                            lineHeight: 1.7,
                            maxWidth: 520,
                            margin: "0 auto",
                        }}
                    >
                        Open to AI engineering roles, freelance projects, and interesting collaborations.
                        Currently based in{" "}
                        <span style={{ color: "#94a3b8" }}>Mumbai, India</span>.
                    </p>
                </motion.div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        padding: 48,
                        background: "rgba(13, 17, 23, 0.8)",
                        border: "1px solid rgba(99,102,241,0.2)",
                        borderRadius: 24,
                        backdropFilter: "blur(20px)",
                        textAlign: "center",
                        marginBottom: 40,
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    {/* Gradient top */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 2,
                            background: "linear-gradient(90deg, #6366f1, #22d3ee, #a855f7)",
                            borderRadius: "24px 24px 0 0",
                        }}
                    />

                    <p style={{ fontSize: "1.1rem", color: "#94a3b8", marginBottom: 28, lineHeight: 1.7 }}>
                        I&apos;m actively looking for opportunities where I can build production-grade AI
                        systems at scale. If you have a challenging problem involving LLMs, agentic workflows,
                        or real-time data systems — let&apos;s talk.
                    </p>

                    <motion.a
                        href="mailto:adj0071@gmail.com"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(99,102,241,0.35)" }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "16px 40px",
                            background: "linear-gradient(135deg, #6366f1, #a855f7)",
                            border: "none",
                            borderRadius: 12,
                            color: "#fff",
                            fontSize: "1rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            fontFamily: "'Inter', sans-serif",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <Mail size={18} />
                        Send Me an Email
                        <ArrowRight size={16} />
                    </motion.a>
                </motion.div>

                {/* Contact links grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: 16,
                    }}
                >
                    {contactLinks.map((link) => (
                        <motion.a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.04,
                                borderColor: `${link.accent}40`,
                                boxShadow: `0 0 20px ${link.accent}15`,
                            }}
                            style={{
                                padding: "20px 20px",
                                background: "rgba(13, 17, 23, 0.6)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                borderRadius: 14,
                                backdropFilter: "blur(12px)",
                                textDecoration: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                                transition: "all 0.3s ease",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <span style={{ color: link.accent }}>{link.icon}</span>
                                <ExternalLink size={13} style={{ color: "#334155" }} />
                            </div>
                            <div>
                                <p style={{ fontSize: "0.72rem", color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 3 }}>
                                    {link.label}
                                </p>
                                <p style={{ fontSize: "0.82rem", color: "#94a3b8", fontFamily: "'JetBrains Mono', monospace" }}>
                                    {link.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Footer */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: "center",
                        marginTop: 60,
                        color: "#334155",
                        fontSize: "0.8rem",
                        fontFamily: "'JetBrains Mono', monospace",
                    }}
                >
                    Built with Next.js · Tailwind CSS · Framer Motion · © 2025 Aditya Jha
                </motion.p>
            </div>
        </section>
    );
}
