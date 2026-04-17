"use client";

import { motion } from "framer-motion";
import { Brain, Server, Cloud, Code2, Zap } from "lucide-react";

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
        id: "product",
        icon: <Zap size={20} />,
        category: "SaaS & Product",
        description: "Building, validating, and scaling SaaS products.",
        accent: "#10b981",
        accentBg: "rgba(16,185,129,0.06)",
        accentBorder: "rgba(16,185,129,0.2)",
        tags: ["SaaS Architecture", "Product Validation", "Dodo Payments", "B2B Outreach", "UAT Testing"],
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
        <section id="skills" style={{ padding: "100px 24px", background: "var(--bg)" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                {/* Section Header */}
                <div style={{ marginBottom: 64, textAlign: "left", borderLeft: "4px solid var(--accent)", paddingLeft: 24 }}>
                    <span className="section-label" style={{ marginBottom: 12 }}>
                        SECTION: 03_SKILLS
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--text)",
                        }}
                    >
                        TECH_STACK.CONFIG
                    </h2>
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
                        className="terminal-card bracket-tl"
                        style={{
                            gridColumn: "1 / 8",
                            gridRow: "1 / 3",
                            padding: 36,
                            background: "var(--surface)",
                            border: "1px solid var(--accent)",
                        }}
                    >
                        <div style={{ position: "relative", zIndex: 1 }}>
                            <div
                                style={{
                                    width: 52,
                                    height: 52,
                                    background: "var(--accent-muted)",
                                    border: "1px solid var(--accent)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--accent)",
                                    marginBottom: 20,
                                }}
                            >
                                {bentoItems[0].icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: "1.25rem",
                                    fontWeight: 800,
                                    color: "var(--text)",
                                    marginBottom: 8,
                                    letterSpacing: "0.05em",
                                }}
                            >
                                {bentoItems[0].category.toUpperCase()}
                            </h3>
                            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: 28, lineHeight: 1.6 }}>
                                [DESC]: {bentoItems[0].description.toUpperCase()}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {bentoItems[0].tags.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "4px 12px",
                                            border: "1px solid var(--border)",
                                            fontSize: "0.7rem",
                                            color: "var(--accent)",
                                            fontWeight: 700,
                                        }}
                                    >
                                        &gt; {tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Backend – medium */}
                    <motion.div
                        variants={cardVariants}
                        className="terminal-card"
                        style={{
                            gridColumn: "8 / 13",
                            gridRow: "1",
                            padding: 28,
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid var(--border)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--text)",
                                marginBottom: 16,
                            }}
                        >
                            {bentoItems[1].icon}
                        </div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "0.05em" }}>
                            {bentoItems[1].category.toUpperCase()}
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {bentoItems[1].tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "3px 10px",
                                        border: "1px solid var(--border)",
                                        fontSize: "0.65rem",
                                        color: "var(--text-muted)",
                                        fontWeight: 700,
                                    }}
                                >
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Cloud – medium */}
                    <motion.div
                        variants={cardVariants}
                        className="terminal-card"
                        style={{
                            gridColumn: "8 / 13",
                            gridRow: "2",
                            padding: 28,
                            background: "var(--surface)",
                            border: "1px solid var(--border)",
                        }}
                    >
                        <div
                            style={{
                                width: 44,
                                height: 44,
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid var(--border)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "var(--text)",
                                marginBottom: 16,
                            }}
                        >
                            {bentoItems[2].icon}
                        </div>
                        <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "var(--text)", marginBottom: 8, letterSpacing: "0.05em" }}>
                            {bentoItems[2].category.toUpperCase()}
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                            {bentoItems[2].tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "3px 10px",
                                        border: "1px solid var(--border)",
                                        fontSize: "0.65rem",
                                        color: "var(--text-muted)",
                                        fontWeight: 700,
                                    }}
                                >
                                    {tag.toUpperCase()}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Languages – small */}
                    <motion.div
                        variants={cardVariants}
                        className="terminal-card bracket-tr"
                        style={{
                            gridColumn: "1 / 13",
                            gridRow: "3",
                            padding: 24,
                            background: "var(--surface)",
                            border: "1px solid var(--accent)",
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
                                    background: "var(--accent-muted)",
                                    border: "1px solid var(--accent)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--accent)",
                                    flexShrink: 0,
                                }}
                            >
                                {bentoItems[3].icon}
                            </div>
                            <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "var(--text)", minWidth: 100, letterSpacing: "0.05em" }}>
                                {bentoItems[3].category.toUpperCase()}
                            </span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {bentoItems[3].tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        padding: "4px 14px",
                                        border: "1px solid var(--accent)",
                                        fontSize: "0.75rem",
                                        color: "var(--accent)",
                                        fontWeight: 800,
                                    }}
                                >
                                    {tag.toUpperCase()}
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
