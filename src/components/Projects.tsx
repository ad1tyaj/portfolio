"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MessageCircle, Eye, Zap, Terminal, Github } from "lucide-react";

type Category = "All" | "AI/ML" | "Backend" | "Automation";

const projects = [
    {
        id: "jsaquick",
        title: "JSAQuick",
        subtitle: "AI Safety Compliance SaaS",
        category: "AI/ML" as Category,
        secondaryCategory: "Backend" as Category,
        description:
            "A high-precision multi-agent RAG pipeline for automated OSHA-compliant safety reporting. Integrates robust compliance auditing and seamless Dodo Payments orchestration.",
        metrics: [
            { label: "Compliance", value: "OSHA" },
            { label: "Accuracy", value: "98%+" },
            { label: "Release", value: "BETA" },
        ],
        stack: ["FastAPI", "Gemini 1.5 Pro", "PostgreSQL", "Dodo Payments", "React"],
        icon: <Zap size={22} />,
        accent: "#f59e0b",
        featured: true,
        links: {
            demo: "https://www.jsaquick.com",
            github: "https://github.com/ad1tyaj"
        }
    },
    {
        id: "whatsapp-commerce",
        title: "VantageFlow",
        subtitle: "Multi-tenant B2B AI SaaS",
        category: "Backend" as Category,
        secondaryCategory: "AI/ML" as Category,
        description:
            "Autonomous WhatsApp-to-fulfillment commerce platform processing 170+ live orders with multimodal vision pipelines and automated logistics orchestration.",
        metrics: [
            { label: "Orders", value: "170+" },
            { label: "Uptime", value: "99%+" },
            { label: "Vision", value: "95%+" },
        ],
        stack: ["FastAPI", "Redis", "Shopify API", "Razorpay", "Docker"],
        icon: <MessageCircle size={22} />,
        accent: "#6366f1",
        featured: true,
    },
    {
        id: "lead-bot",
        title: "AI Lead Validator",
        subtitle: "Conversational Automation",
        category: "Automation" as Category,
        secondaryCategory: "Backend" as Category,
        description:
            "Qualifies high-intent leads via WhatsApp using rule-based scoring and intent signaling across a 5-step conversational flow for automotive clients.",
        metrics: [
            { label: "Steps", value: "5" },
            { label: "State", value: "Redis" },
            { label: "Signals", value: "3" },
        ],
        stack: ["Flask", "Meta API", "Redis"],
        icon: <Zap size={22} />,
        accent: "#22d3ee",
        featured: false,
    },
    {
        id: "violence-detection",
        title: "Edge Surveillance AI",
        subtitle: "Computer Vision",
        category: "AI/ML" as Category,
        secondaryCategory: null,
        description:
            "Real-time edge-based violence detection using MobileNetV2 + CNN-LSTM with an automated Telegram alert pipeline for immediate security response.",
        metrics: [
            { label: "Inference", value: "Edge" },
            { label: "Latency", value: "Low" },
            { label: "Model", value: "CNN" },
        ],
        stack: ["TensorFlow", "OpenCV", "Telegram API"],
        icon: <Eye size={22} />,
        accent: "#a855f7",
        featured: false,
    },
];

const filters: Category[] = ["All", "AI/ML", "Backend", "Automation"];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState<Category>("All");

    const filtered = projects.filter(
        (p) =>
            activeFilter === "All" ||
            p.category === activeFilter ||
            p.secondaryCategory === activeFilter
    );

    return (
        <section
            id="projects"
            style={{
                padding: "100px 24px",
                background: "rgba(13, 17, 23, 0.4)",
                position: "relative",
            }}
        >
            <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
                {/* Header */}
                <div style={{ marginBottom: 64, textAlign: "left", borderLeft: "4px solid var(--accent)", paddingLeft: 24 }}>
                    <span className="section-label" style={{ marginBottom: 12 }}>
                        SECTION: 04_PROJECTS
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--text)",
                        }}
                    >
                        LIVE_DEPLOYMENTS
                    </h2>
                </div>

                {/* Filter tabs */}
                <div style={{ display: "flex", gap: 0, marginBottom: 48, background: "var(--border)", padding: 1, width: "fit-content" }}>
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            style={{
                                padding: "10px 24px",
                                background: activeFilter === f ? "var(--accent)" : "var(--surface)",
                                color: activeFilter === f ? "var(--bg)" : "var(--text-muted)",
                                border: "none",
                                fontSize: "0.75rem",
                                fontWeight: 800,
                                cursor: "pointer",
                                transition: "all 0.2s",
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Project cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                        gap: 24,
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                className="terminal-card bracket-tl"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    background: "var(--surface)",
                                    border: `1px solid ${project.featured ? project.accent || "var(--accent)" : "var(--border)"}`,
                                    boxShadow: project.featured ? `0 0 35px ${project.accent ? "rgba(245, 158, 11, 0.8)" : "var(--accent-muted)"}` : "none",
                                }}
                            >
                                {/* Project image mockup */}
                                <div
                                    style={{
                                        height: 180,
                                        width: "100%",
                                        background: "var(--surface2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderBottom: "1px solid var(--border)",
                                        position: "relative",
                                        overflow: "hidden",
                                    }}
                                >
                                    <Terminal size={48} style={{ color: "var(--accent)", opacity: 0.15 }} />
                                    <div
                                        className="pulse-text"
                                        style={{
                                            position: "absolute",
                                            bottom: 12,
                                            left: 12,
                                            padding: "2px 0px",
                                            color: "var(--accent)",
                                            fontSize: "0.6rem",
                                            fontWeight: 800,
                                        }}
                                    >
                                        [DEPLOY_STATUS: PROD]
                                    </div>
                                </div>

                                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                                    <div style={{ marginBottom: 12 }}>
                                        <h3
                                            style={{
                                                fontSize: "1.1rem",
                                                fontWeight: 800,
                                                color: "var(--text)",
                                                marginBottom: 4,
                                            }}
                                        >
                                            {project.title.toUpperCase()}
                                        </h3>
                                        <span style={{ color: "var(--accent)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", fontWeight: 700 }}>
                                            // {project.subtitle.toUpperCase()}
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                            fontSize: "0.85rem",
                                            color: "var(--text-muted)",
                                            lineHeight: 1.6,
                                            marginBottom: 20,
                                            flex: 1,
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                                        {project.stack.map((s) => (
                                            <span
                                                key={s}
                                                style={{
                                                    fontSize: "0.6rem",
                                                    fontWeight: 700,
                                                    color: "var(--text-muted)",
                                                    padding: "2px 8px",
                                                    border: "1px solid var(--border)",
                                                }}
                                            >
                                                {s.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Metrics */}
                                    <div
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: "repeat(3, 1fr)",
                                            gap: 8,
                                            padding: 12,
                                            background: "rgba(255,255,255,0.02)",
                                            border: "1px solid var(--border)",
                                            marginBottom: 20,
                                        }}
                                    >
                                        {project.metrics.map((m) => (
                                            <div key={m.label} style={{ textAlign: "center" }}>
                                                <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--accent)" }}>
                                                    {m.value}
                                                </div>
                                                <div style={{ fontSize: "0.55rem", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 700 }}>
                                                    {m.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div style={{ display: "flex", gap: 0, background: "var(--border)", padding: 1 }}>
                                        <motion.a
                                            href={(project as any).links?.github || "#"}
                                            style={{
                                                flex: 1,
                                                padding: "10px",
                                                background: "var(--surface)",
                                                textAlign: "center",
                                                textDecoration: "none",
                                                color: "var(--text)",
                                                fontSize: "0.7rem",
                                                fontWeight: 800,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 8,
                                            }}
                                        >
                                            <Github size={14} /> SRC
                                        </motion.a>
                                        <motion.a
                                            href={(project as any).links?.demo || "#"}
                                            style={{
                                                flex: 1,
                                                padding: "10px",
                                                background: "var(--accent)",
                                                textAlign: "center",
                                                textDecoration: "none",
                                                color: "var(--bg)",
                                                fontSize: "0.7rem",
                                                fontWeight: 800,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 8,
                                            }}
                                        >
                                            <ExternalLink size={14} /> LIVE
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
