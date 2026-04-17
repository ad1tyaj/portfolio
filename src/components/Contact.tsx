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
        value: "linkedin.com/in/aditya-adj",
        href: "https://www.linkedin.com/in/aditya-adj/",
        accent: "#22d3ee",
    },
    {
        icon: <Code2 size={22} />,
        label: "GitHub",
        value: "github.com/ad1tyaj",
        href: "https://github.com/ad1tyaj",
        accent: "#6366f1",
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
            style={{ padding: "100px 24px 80px", background: "var(--bg)", position: "relative" }}
        >
            <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />

            <div style={{ maxWidth: 900, margin: "0 auto", position: "relative" }}>
                {/* Header */}
                <div style={{ textAlign: "left", marginBottom: 64, borderLeft: "4px solid var(--accent)", paddingLeft: 24 }}>
                    <span className="section-label" style={{ marginBottom: 12 }}>
                        SECTION: 06_CONTACT
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--text)",
                        }}
                    >
                        INITIALIZE_HANDSHAKE
                    </h2>
                </div>

                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="terminal-card bracket-tl"
                    style={{
                        padding: 48,
                        background: "var(--surface)",
                        border: "1px solid var(--accent)",
                        textAlign: "center",
                        marginBottom: 48,
                    }}
                >
                    <div
                        style={{
                            fontSize: "0.75rem",
                            color: "var(--accent)",
                            fontFamily: "var(--font-mono)",
                            fontWeight: 800,
                            marginBottom: 20,
                            letterSpacing: "0.2em",
                        }}
                    >
                        [CONNECTION_STATUS: READY]
                    </div>
                    
                    <p style={{ fontSize: "1.1rem", color: "var(--text)", marginBottom: 32, lineHeight: 1.7 }}>
                        I&apos;m actively looking for opportunities where I can build production-grade AI
                        systems at scale. If you have a challenging problem involving LLMs, agentic workflows,
                        or real-time data systems — let&apos;s talk.
                    </p>

                    <motion.a
                        href="mailto:adj0071@gmail.com"
                        whileHover={{ background: "var(--text)", color: "var(--bg)" }}
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "16px 48px",
                            background: "var(--accent)",
                            color: "var(--bg)",
                            fontSize: "0.85rem",
                            fontWeight: 800,
                            textDecoration: "none",
                            fontFamily: "var(--font-mono)",
                            border: "none",
                            transition: "all 0.2s ease",
                        }}
                    >
                        <Mail size={18} />
                        START_HANDSHAKE
                    </motion.a>
                </motion.div>

                {/* Contact links grid */}
                <div
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
                            className="terminal-card"
                            whileHover={{ borderColor: "var(--accent)" }}
                            style={{
                                padding: 24,
                                background: "var(--surface)",
                                border: "1px solid var(--border)",
                                textDecoration: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: 12,
                                transition: "all 0.2s ease",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <span style={{ color: "var(--accent)" }}>{link.icon}</span>
                                <div style={{ fontSize: "0.6rem", color: "var(--accent)", fontWeight: 800 }}>[EXT_LINK]</div>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                                    {link.label}
                                </p>
                                <p style={{ fontSize: "0.85rem", color: "var(--text)", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                                    {link.value}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <div
                    style={{
                        marginTop: 100,
                        paddingTop: 40,
                        borderTop: "1px solid var(--border)",
                        textAlign: "center",
                        color: "var(--text-muted)",
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        fontWeight: 700,
                    }}
                >
                    DESIGNED_AND_COMPILED_BY_ADITYA_JHA // © 2024_ALL_SYSTEMS_OPERATIONAL
                </div>
            </div>
        </section>
    );
}
