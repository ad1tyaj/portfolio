"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Shield, BarChart3, Terminal } from "lucide-react";

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
        <section
            id="about"
            style={{ padding: "100px 24px", background: "var(--bg)", position: "relative" }}
        >
            <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
                {/* Section header */}
                <div style={{ marginBottom: 64, textAlign: "left", borderLeft: "4px solid var(--accent)", paddingLeft: 24 }}>
                    <span className="section-label" style={{ marginBottom: 12 }}>
                        SECTION: 01_ABOUT
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--text)",
                        }}
                    >
                        BIOMETRIC_PROFILE
                    </h2>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
                    {/* Bio Card */}
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="terminal-card bracket-tl"
                        style={{
                            padding: 40,
                            background: "var(--surface)",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                marginBottom: 24,
                                color: "var(--accent)",
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: "0.8rem",
                                fontWeight: 800,
                            }}
                        >
                            <Terminal size={16} />
                            INITIALIZING_IDENTITY_SCAN... [OK]
                        </div>
                        <p style={{ fontSize: "1.05rem", color: "var(--text)", lineHeight: 1.8, marginBottom: 24 }}>
                            I am a <span style={{ color: "var(--accent)", fontWeight: 800 }}>Founder & AI Systems Engineer</span> based in India. 
                            My work lives at the intersection of high-performance backend systems and autonomous AI agents. 
                            As the creator of <span style={{ color: "var(--accent)", fontWeight: 800 }}>JSAQuick</span>, I build production-ready 
                            AI solutions that solve $10k+ compliance problems for industrial workforces.
                        </p>
                        <p style={{ fontSize: "1rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 32 }}>
                            From scaling WhatsApp commerce platforms to implementing edge computer vision for safety, 
                            my focus is on <span style={{ color: "var(--text)" }}>Product-Led Engineering</span>. 
                            I solve complex orchestration problems by bridging the gap between cutting-edge LLM flows 
                            and sustainable, scalable SaaS infrastructure.
                        </p>

                        {/* Highlights grid */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                                gap: 12,
                            }}
                        >
                            {highlights.map((h) => (
                                <div
                                    key={h.text}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                        padding: "12px 16px",
                                        background: "rgba(255,255,255,0.02)",
                                        border: "1px solid var(--border)",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    <span style={{ color: "var(--accent)" }}>{h.icon}</span>
                                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase" }}>
                                        {h.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
