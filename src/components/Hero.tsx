"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Terminal, Cpu } from "lucide-react";

const stats = [
    { value: "01", label: "SaaS_LAUNCHED" },
    { value: "98%+", label: "JSA_ACCURACY" },
    { value: "170+", label: "LOG_ORDS" },
    { value: "95%+", label: "VISION_ACC" },
];

export default function Hero() {
    return (
        <section
            style={{
                minHeight: "100vh",
                position: "relative",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                background: "var(--bg)",
            }}
        >
            {/* Terminal Grid Background */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0, zIndex: 0 }} />

            <div
                style={{
                    maxWidth: 1200,
                    margin: "0 auto",
                    padding: "120px 24px 80px",
                    position: "relative",
                    zIndex: 1,
                    width: "100%",
                }}
            >
                {/* Top status line */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--accent)" }}>
                    <span className="section-label">SYSTEM_INITIALIZED</span>
                    <span style={{ opacity: 0.5 }}>STATUS: ACTIVE</span>
                    <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                </div>

                {/* Main Content Card */}
                <div style={{ position: "relative" }}>
                    {/* Brackets */}
                    <div className="bracket-tl" style={{ top: -20, left: -20 }} />
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: 20 }}
                    >
                        <span
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "4px 12px",
                                border: "1px solid var(--border)",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                color: "var(--text-muted)",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            <Terminal size={12} />
                            root@aditya_jha:~/portfolio$
                        </span>
                    </motion.div>

                    {/* Name & Title */}
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="animate-glitch"
                        style={{
                            fontSize: "clamp(3rem, 8vw, 6rem)",
                            fontWeight: 800,
                            lineHeight: 0.9,
                            marginBottom: 24,
                            color: "var(--text)",
                            letterSpacing: "-0.04em",
                        }}
                    >
                        ADITYA JHA
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            display: "inline-block",
                            background: "var(--accent)",
                            color: "var(--bg)",
                            padding: "4px 16px",
                            fontSize: "1.2rem",
                            fontWeight: 800,
                            marginBottom: 32,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                        }}
                    >
                        AI_SYSTEMS_ENGINEER
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            fontSize: "1rem",
                            color: "var(--text-muted)",
                            maxWidth: 600,
                            marginBottom: 48,
                            lineHeight: 1.6,
                            borderLeft: "2px solid var(--border)",
                            paddingLeft: 24,
                        }}
                    >
                        <span style={{ color: "var(--accent)" }}>[INFO]</span> SPECIALIZING IN AUTONOMOUS AGENTIC SYSTEMS, 
                        LLM-POWERED WORKFLOWS, AND COMPUTER VISION. FOUNDER OF <span style={{ color: "var(--text)", fontWeight: 700 }}>JSAQUICK.COM</span> — 
                        AN AI COMPLIANCE PLATFORM BUILT IN <span style={{ color: "var(--accent)" }}>FASTAPI/GEMINI</span>.<span className="blinking-cursor"></span>
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        style={{ display: "flex", gap: 0, flexWrap: "wrap", marginBottom: 64 }}
                    >
                        <button
                            onClick={() =>
                                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="terminal-card"
                            style={{
                                padding: "16px 32px",
                                background: "var(--accent)",
                                border: "1px solid var(--accent)",
                                color: "var(--bg)",
                                fontSize: "0.85rem",
                                fontWeight: 800,
                                cursor: "pointer",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            EXECUTE init_projects()
                        </button>
                        <a
                            href="mailto:adj0071@gmail.com"
                            className="terminal-card"
                            style={{
                                padding: "16px 32px",
                                background: "transparent",
                                border: "1px solid var(--border)",
                                borderLeft: "none",
                                color: "var(--text)",
                                fontSize: "0.85rem",
                                fontWeight: 800,
                                textDecoration: "none",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 10,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            <Mail size={16} />
                            CONTACT.REQUEST
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                            gap: 1,
                            background: "var(--border)",
                            padding: 1,
                            maxWidth: 700,
                        }}
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                style={{
                                    padding: "20px 16px",
                                    background: "var(--surface)",
                                    textAlign: "center",
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: 800,
                                        color: "var(--accent)",
                                        marginBottom: 4,
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div style={{ fontSize: "0.6rem", color: "var(--text-muted)", fontWeight: 700, letterSpacing: "0.1em" }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{
                        position: "absolute",
                        bottom: 40,
                        right: 24,
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        color: "var(--text-muted)",
                        transform: "rotate(90deg)",
                        transformOrigin: "right bottom",
                    }}
                >
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em" }}>
                        SCROLL_TO_DISCOVER
                    </span>
                    <div style={{ width: 40, height: 1, background: "var(--accent)" }} />
                </motion.div>
            </div>
        </section>
    );
}

