"use client";

import { motion } from "framer-motion";
import { Brain, Server, Cloud, Code2 } from "lucide-react";

const bentoItems = [
    {
        id: "ai",
        icon: <Brain size={28} />,
        category: "AI & Machine Learning",
        description: "Multimodal LLMs, agentic systems, computer vision, and deep learning.",
        accent: "#6366f1",
        accentBg: "rgba(99,102,241,0.08)",
        accentBorder: "rgba(99,102,241,0.2)",
        tags: [
            "Gemini 1.5 Flash",
            "Agentic RAG",
            "LLM Fine-Tuning (LoRA)",
            "CNN-LSTM",
            "MobileNetV2",
            "OpenCV",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
        ],
        size: "large",
        glow: "rgba(99,102,241,0.15)",
    },
    {
        id: "backend",
        icon: <Server size={24} />,
        category: "Backend & Systems",
        description: "Distributed systems, APIs, state management, and containerization.",
        accent: "#22d3ee",
        accentBg: "rgba(34,211,238,0.06)",
        accentBorder: "rgba(34,211,238,0.2)",
        tags: ["FastAPI", "Flask", "REST APIs", "Redis", "PostgreSQL", "Docker", "Linux", "systemd"],
        size: "medium",
        glow: "rgba(34,211,238,0.12)",
    },
    {
        id: "cloud",
        icon: <Cloud size={24} />,
        category: "Cloud & Integrations",
        description: "Cloud platforms, commerce APIs, payment gateways, and webhooks.",
        accent: "#a855f7",
        accentBg: "rgba(168,85,247,0.06)",
        accentBorder: "rgba(168,85,247,0.2)",
        tags: ["Google Cloud Platform", "Shopify API", "WhatsApp Business API", "Razorpay Webhooks", "Shiprocket API"],
        size: "medium",
        glow: "rgba(168,85,247,0.12)",
    },
    {
        id: "languages",
        icon: <Code2 size={20} />,
        category: "Languages",
        description: "Core languages I work with daily.",
        accent: "#10b981",
        accentBg: "rgba(16,185,129,0.06)",
        accentBorder: "rgba(16,185,129,0.2)",
        tags: ["Python", "TypeScript", "SQL", "Bash"],
        size: "small",
        glow: "rgba(16,185,129,0.1)",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

export default function Skills() {
    return (
        <section id="skills" style={{ padding: "100px 24px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Section Header */}
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
            // 03. skills
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            color: "#e2e8f0",
                            marginBottom: 16,
                        }}
                    >
                        Technical Expertise
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "1rem" }}>
                        Full-stack AI engineering — from model training to production deployment
                    </p>
                </div>

                {/* Bento Box Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gridTemplateRows: "auto",
                        gap: 16,
                    }}
                >
                    {/* Large tile — AI/ML */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.01,
                            borderColor: "rgba(99,102,241,0.4)",
                            boxShadow: `0 0 40px ${bentoItems[0].glow}`,
                        }}
                        style={{
                            gridColumn: "1 / 8",
                            gridRow: "1 / 3",
                            padding: 36,
                            background: bentoItems[0].accentBg,
                            border: `1px solid ${bentoItems[0].accentBorder}`,
                            borderRadius: 20,
                            backdropFilter: "blur(16px)",
                            cursor: "default",
                            transition: "all 0.3s ease",
                            position: "relative",
                            overflow: "hidden",
                        }}
                        className="bento-large"
                    >
                        {/* Decorative gradient */}
                        <div
                            style={{
                                position: "absolute",
                                top: -60,
                                right: -60,
                                width: 200,
                                height: 200,
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)",
                                pointerEvents: "none",
                            }}
                        />
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    borderRadius: 14,
                                    background: "rgba(99,102,241,0.15)",
                                    border: "1px solid rgba(99,102,241,0.3)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#a5b4fc",
                                    marginBottom: 20,
                                }}
                            >
                                {bentoItems[0].icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 700,
                                    color: "#e2e8f0",
                                    marginBottom: 8,
                                }}
                            >
                                {bentoItems[0].category}
                            </h3>
                            <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: 28, lineHeight: 1.6 }}>
                                {bentoItems[0].description}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {bentoItems[0].tags.map((tag) => (
                                    <motion.span
                                        key={tag}
                                        whileHover={{ scale: 1.05, backgroundColor: "rgba(99,102,241,0.2)" }}
                                        style={{
                                            padding: "5px 12px",
                                            background: "rgba(99,102,241,0.1)",
                                            border: "1px solid rgba(99,102,241,0.2)",
                                            borderRadius: 8,
                                            fontSize: "0.78rem",
                                            color: "#a5b4fc",
                                            fontFamily: "'JetBrains Mono', monospace",
                                            cursor: "default",
                                            transition: "all 0.2s",
                                        }}
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend – medium */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: `0 0 30px ${bentoItems[1].glow}`,
                        }}
                        style={{
                            gridColumn: "8 / 13",
                            gridRow: "1",
                            padding: 28,
                            background: bentoItems[1].accentBg,
                            border: `1px solid ${bentoItems[1].accentBorder}`,
                            borderRadius: 20,
                            backdropFilter: "blur(16px)",
                            cursor: "default",
                            transition: "all 0.3s ease",
                        }}
                        className="bento-medium"
                    >
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                background: "rgba(34,211,238,0.12)",
                                border: "1px solid rgba(34,211,238,0.25)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#67e8f9",
                                marginBottom: 16,
                            }}
                        >
                            {bentoItems[1].icon}
                        </div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>
                            {bentoItems[1].category}
                        </h3>
                        <p style={{ fontSize: "0.82rem", color: "#64748b", marginBottom: 16, lineHeight: 1.6 }}>
                            {bentoItems[1].description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {bentoItems[1].tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "3px 10px",
                                        background: "rgba(34,211,238,0.08)",
                                        border: "1px solid rgba(34,211,238,0.18)",
                                        borderRadius: 6,
                                        fontSize: "0.72rem",
                                        color: "#67e8f9",
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cloud – medium */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: `0 0 30px ${bentoItems[2].glow}`,
                        }}
                        style={{
                            gridColumn: "8 / 13",
                            gridRow: "2",
                            padding: 28,
                            background: bentoItems[2].accentBg,
                            border: `1px solid ${bentoItems[2].accentBorder}`,
                            borderRadius: 20,
                            backdropFilter: "blur(16px)",
                            cursor: "default",
                            transition: "all 0.3s ease",
                        }}
                        className="bento-medium"
                    >
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                borderRadius: 12,
                                background: "rgba(168,85,247,0.12)",
                                border: "1px solid rgba(168,85,247,0.25)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#d8b4fe",
                                marginBottom: 16,
                            }}
                        >
                            {bentoItems[2].icon}
                        </div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e2e8f0", marginBottom: 8 }}>
                            {bentoItems[2].category}
                        </h3>
                        <p style={{ fontSize: "0.82rem", color: "#64748b", marginBottom: 16, lineHeight: 1.6 }}>
                            {bentoItems[2].description}
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {bentoItems[2].tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "3px 10px",
                                        background: "rgba(168,85,247,0.08)",
                                        border: "1px solid rgba(168,85,247,0.18)",
                                        borderRadius: 6,
                                        fontSize: "0.72rem",
                                        color: "#d8b4fe",
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages – small */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: `0 0 20px ${bentoItems[3].glow}`,
                        }}
                        style={{
                            gridColumn: "1 / 13",
                            gridRow: "3",
                            padding: 24,
                            background: bentoItems[3].accentBg,
                            border: `1px solid ${bentoItems[3].accentBorder}`,
                            borderRadius: 16,
                            backdropFilter: "blur(16px)",
                            cursor: "default",
                            transition: "all 0.3s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: 24,
                            flexWrap: "wrap",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <div
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 10,
                                    background: "rgba(16,185,129,0.12)",
                                    border: "1px solid rgba(16,185,129,0.25)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#6ee7b7",
                                    flexShrink: 0,
                                }}
                            >
                                {bentoItems[3].icon}
                            </div>
                            <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#e2e8f0", minWidth: 80 }}>
                                {bentoItems[3].category}
                            </span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {bentoItems[3].tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "4px 14px",
                                        background: "rgba(16,185,129,0.08)",
                                        border: "1px solid rgba(16,185,129,0.2)",
                                        borderRadius: 8,
                                        fontSize: "0.82rem",
                                        color: "#6ee7b7",
                                        fontFamily: "'JetBrains Mono', monospace",
                                        fontWeight: 500,
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Responsive overrides */}
                <style>{`
          @media (max-width: 768px) {
            .bento-large { grid-column: 1 / 13 !important; }
            .bento-medium { grid-column: 1 / 13 !important; grid-row: auto !important; }
          }
        `}</style>
            </div>
        </section>
    );
}
