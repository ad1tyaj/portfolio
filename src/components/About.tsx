"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Shield, BarChart3 } from "lucide-react";

const highlights = [
    { icon: <Cpu size={18} />, text: "Autonomous AI Systems", color: "#6366f1" },
    { icon: <Zap size={18} />, text: "LLM-Powered Workflows", color: "#22d3ee" },
    { icon: <Shield size={18} />, text: "Production-Grade Infrastructure", color: "#a855f7" },
    { icon: <BarChart3 size={18} />, text: "Distributed Backend Systems", color: "#10b981" },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
    return (
        <section id="about" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {/* Section header */}
                <motion.div variants={itemVariants} style={{ marginBottom: 56, textAlign: "center" }}>
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
            // 01. about
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            color: "#e2e8f0",
                        }}
                    >
                        Who I Am
                    </h2>
                </motion.div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: 32,
                    }}
                >
                    {/* Summary card */}
                    <motion.div
                        variants={itemVariants}
                        style={{
                            padding: 40,
                            background: "rgba(13, 17, 23, 0.6)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            borderRadius: 20,
                            backdropFilter: "blur(16px)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        {/* Decorative line */}
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 2,
                                background: "linear-gradient(90deg, #6366f1, #22d3ee, #a855f7)",
                                borderRadius: "20px 20px 0 0",
                            }}
                        />

                        <p
                            style={{
                                fontSize: "1.1rem",
                                lineHeight: 1.85,
                                color: "#94a3b8",
                                marginBottom: 32,
                            }}
                        >
                            I&apos;m a{" "}
                            <strong style={{ color: "#e2e8f0", fontWeight: 600 }}>
                                Production-focused AI Engineer
                            </strong>{" "}
                            specializing in autonomous AI systems, LLM-powered workflows, and computer
                            vision pipelines. I&#39;ve built and deployed a multi-tenant WhatsApp commerce
                            platform that processes{" "}
                            <strong
                                style={{
                                    background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                170+ real customer orders
                            </strong>{" "}
                            with automated onboarding, payment reconciliation, and logistics orchestration.
                        </p>

                        <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "#64748b" }}>
                            With a strong foundation in{" "}
                            <span style={{ color: "#a5b4fc" }}>distributed backend systems</span>,{" "}
                            <span style={{ color: "#67e8f9" }}>Redis-based state management</span>, and
                            resilient API integrations across commerce and fintech ecosystems — I bridge the
                            gap between cutting-edge AI research and real-world production systems.
                        </p>

                        {/* Highlights grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: 12,
                                marginTop: 36,
                            }}
                        >
                            {highlights.map((h) => (
                                <motion.div
                                    key={h.text}
                                    whileHover={{ scale: 1.02, borderColor: `${h.color}40` }}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        padding: "12px 16px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        borderRadius: 10,
                                        transition: "all 0.2s",
                                        cursor: "default",
                                    }}
                                >
                                    <span style={{ color: h.color }}>{h.icon}</span>
                                    <span style={{ fontSize: "0.85rem", color: "#94a3b8", fontWeight: 500 }}>
                                        {h.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
