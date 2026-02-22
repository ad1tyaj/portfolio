"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MessageCircle, Eye, Zap } from "lucide-react";

type Category = "All" | "AI/ML" | "Backend" | "Automation";

const projects = [
    {
        id: "whatsapp-commerce",
        title: "WhatsApp Commerce Platform",
        subtitle: "Multi-tenant B2B SaaS",
        category: "Backend" as Category,
        secondaryCategory: "Automation" as Category,
        description:
            "Autonomous end-to-end WhatsApp-to-fulfillment platform for a production client, processing 170+ live orders with automated onboarding, payment reconciliation, and logistics orchestration.",
        metrics: [
            { label: "Live Orders", value: "170+" },
            { label: "Uptime", value: "99%+" },
            { label: "SKU Accuracy", value: "95%+" },
        ],
        stack: ["Gemini 1.5 Flash", "FastAPI", "Redis", "Shopify", "Razorpay", "Shiprocket", "Docker"],
        icon: <MessageCircle size={22} />,
        accent: "#6366f1",
        featured: true,
    },
    {
        id: "lead-bot",
        title: "WhatsApp Lead Qualification Bot",
        subtitle: "Automotive Sector",
        category: "Automation" as Category,
        secondaryCategory: "Backend" as Category,
        description:
            "Autonomous WhatsApp bot with a 5-step conversational flow, Redis session state management, and rule-based lead scoring (HOT/WARM/COLD) using budget alignment, timeline, and intent signals.",
        metrics: [
            { label: "Uptime", value: "99%+" },
            { label: "Lead Signals", value: "3" },
            { label: "Flow Steps", value: "5" },
        ],
        stack: ["Flask", "Meta WhatsApp API", "Redis"],
        icon: <Zap size={22} />,
        accent: "#22d3ee",
        featured: false,
    },
    {
        id: "violence-detection",
        title: "Autonomous Violence Detection System",
        subtitle: "Edge AI Surveillance",
        category: "AI/ML" as Category,
        secondaryCategory: null,
        description:
            "Real-time edge-based surveillance system using MobileNetV2 + CNN-LSTM for violence detection in video streams, with automated Telegram alert pipeline streaming incident frames to security personnel.",
        metrics: [
            { label: "Inference", value: "Edge" },
            { label: "Alerts", value: "Real-time" },
            { label: "Model", value: "CNN-LSTM" },
        ],
        stack: ["MobileNetV2", "CNN-LSTM", "TensorFlow", "OpenCV", "Telegram API"],
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
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "radial-gradient(circle, rgba(99,102,241,0.05) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
                {/* Header */}
                <div style={{ marginBottom: 56, textAlign: "center" }}>
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
            // 04. projects
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
                        Selected Projects
                    </h2>
                    <p style={{ color: "#64748b", fontSize: "1rem", marginBottom: 36 }}>
                        Production systems built from scratch to solve real business problems
                    </p>

                    {/* Filter tabs */}
                    <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap" }}>
                        {filters.map((f) => (
                            <motion.button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                style={{
                                    padding: "8px 22px",
                                    borderRadius: 999,
                                    border: "1px solid",
                                    borderColor:
                                        activeFilter === f ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.08)",
                                    background:
                                        activeFilter === f
                                            ? "rgba(99,102,241,0.15)"
                                            : "rgba(255,255,255,0.03)",
                                    color: activeFilter === f ? "#a5b4fc" : "#64748b",
                                    fontSize: "0.85rem",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    fontFamily: "'Inter', sans-serif",
                                    transition: "all 0.2s",
                                }}
                            >
                                {f}
                            </motion.button>
                        ))}
                    </div>
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
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.92, y: -10 }}
                                transition={{ duration: 0.35 }}
                                whileHover={{
                                    scale: 1.02,
                                    borderColor: `${project.accent}50`,
                                    boxShadow: `0 0 40px ${project.accent}15`,
                                }}
                                style={{
                                    padding: 32,
                                    background: "rgba(13, 17, 23, 0.7)",
                                    border: `1px solid ${project.featured ? `${project.accent}30` : "rgba(255,255,255,0.07)"}`,
                                    borderRadius: 20,
                                    backdropFilter: "blur(16px)",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Top accent line */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: `linear-gradient(90deg, ${project.accent}, transparent)`,
                                        borderRadius: "20px 20px 0 0",
                                    }}
                                />

                                {/* Featured badge */}
                                {project.featured && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 16,
                                            right: 16,
                                            padding: "3px 10px",
                                            background: "rgba(99,102,241,0.12)",
                                            border: "1px solid rgba(99,102,241,0.3)",
                                            borderRadius: 6,
                                            fontSize: "0.65rem",
                                            fontWeight: 700,
                                            color: "#a5b4fc",
                                            fontFamily: "'JetBrains Mono', monospace",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        PRODUCTION
                                    </div>
                                )}

                                {/* Icon */}
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: 13,
                                        background: `${project.accent}15`,
                                        border: `1px solid ${project.accent}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: project.accent,
                                        marginBottom: 20,
                                    }}
                                >
                                    {project.icon}
                                </div>

                                <h3
                                    style={{
                                        fontSize: "1.15rem",
                                        fontWeight: 700,
                                        color: "#e2e8f0",
                                        marginBottom: 4,
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: "0.8rem",
                                        color: project.accent,
                                        fontWeight: 600,
                                        marginBottom: 14,
                                        fontFamily: "'JetBrains Mono', monospace",
                                    }}
                                >
                                    {project.subtitle}
                                </p>
                                <p
                                    style={{
                                        fontSize: "0.875rem",
                                        color: "#94a3b8",
                                        lineHeight: 1.7,
                                        marginBottom: 24,
                                        flex: 1,
                                    }}
                                >
                                    {project.description}
                                </p>

                                {/* Metrics */}
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(3, 1fr)",
                                        gap: 8,
                                        marginBottom: 20,
                                    }}
                                >
                                    {project.metrics.map((m) => (
                                        <div
                                            key={m.label}
                                            style={{
                                                textAlign: "center",
                                                padding: "8px 4px",
                                                background: "rgba(255,255,255,0.03)",
                                                border: "1px solid rgba(255,255,255,0.06)",
                                                borderRadius: 8,
                                            }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: "1.1rem",
                                                    fontWeight: 700,
                                                    color: project.accent,
                                                    fontFamily: "'Space Grotesk', sans-serif",
                                                }}
                                            >
                                                {m.value}
                                            </div>
                                            <div style={{ fontSize: "0.65rem", color: "#475569", marginTop: 2 }}>
                                                {m.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Stack */}
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                    {project.stack.map((tag) => (
                                        <span
                                            key={tag}
                                            style={{
                                                padding: "2px 8px",
                                                background: "rgba(255,255,255,0.04)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                borderRadius: 5,
                                                fontSize: "0.68rem",
                                                color: "#64748b",
                                                fontFamily: "'JetBrains Mono', monospace",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
