"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, ExternalLink, TrendingUp } from "lucide-react";

const experiences = [
    {
        role: "AI Engineer",
        company: "VantageFlow",
        subtitle: "AI Commerce Venture",
        location: "Mumbai, India",
        period: "Aug 2025 – Present",
        current: true,
        accent: "#6366f1",
        featured: true,
        featuredStat: { value: "170+", label: "Live Orders Processed" },
        bullets: [
            "Architected and deployed an <strong>autonomous B2B commerce platform</strong> enabling end-to-end WhatsApp-to-fulfillment workflows — processing 170+ live orders with <span class='hl-green'>99%+ accuracy and zero downtime</span>.",
            "Designed a <strong>multimodal vision pipeline</strong> using Gemini 1.5 Flash, achieving <span class='hl-cyan'>95%+ attribute extraction accuracy</span> across 190+ SKUs and reducing merchant onboarding from 2 weeks to under 1 day.",
            "Built <strong>idempotent webhook infrastructure</strong> for Shopify, Razorpay, and Shiprocket integrations with retry logic and duplicate detection for reliable financial reconciliation.",
            "Implemented <strong>immutable audit-trail logging</strong> and real-time observability across distributed services for production-grade monitoring.",
        ],
        stack: ["Gemini 1.5 Flash", "FastAPI", "Redis", "Shopify API", "Razorpay", "Shiprocket", "Docker"],
    },
    {
        role: "Machine Learning Developer",
        company: "Prisma.ai",
        subtitle: "Internship",
        location: "Mumbai, India",
        period: "Dec 2023 – Feb 2024",
        current: false,
        accent: "#22d3ee",
        featured: false,
        featuredStat: null,
        bullets: [
            "Trained and optimized object detection and classification models for edge deployment, improving accuracy by <span class='hl-cyan'>20%</span>.",
            "Reduced production inference latency by <span class='hl-green'>200ms</span> through model compression and architecture optimization.",
            "Lowered cloud infrastructure costs by <span class='hl-purple'>15%</span> via optimized model weight tuning for scalable inference workloads.",
        ],
        stack: ["TensorFlow", "PyTorch", "OpenCV", "Edge AI", "Model Compression"],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
    return (
        <section
            id="experience"
            style={{
                padding: "100px 24px",
                background: "rgba(13, 17, 23, 0.3)",
                position: "relative",
            }}
        >
            {/* Dot grid */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "radial-gradient(circle, rgba(99,102,241,0.07) 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
                {/* Section header */}
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
            // 02. experience
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.02em",
                            color: "#e2e8f0",
                        }}
                    >
                        Where I&apos;ve Worked
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    style={{ display: "flex", flexDirection: "column", gap: 32 }}
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.company}
                            variants={itemVariants}
                            style={{
                                padding: 36,
                                background: "rgba(13, 17, 23, 0.7)",
                                border: `1px solid ${exp.featured ? `rgba(99,102,241,0.25)` : "rgba(255,255,255,0.07)"}`,
                                borderRadius: 20,
                                backdropFilter: "blur(16px)",
                                position: "relative",
                                overflow: "hidden",
                                boxShadow: exp.featured
                                    ? "0 0 40px rgba(99,102,241,0.07)"
                                    : "none",
                            }}
                        >
                            {/* Accent top bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: 2,
                                    background: `linear-gradient(90deg, ${exp.accent}, transparent)`,
                                    borderRadius: "20px 20px 0 0",
                                }}
                            />

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    flexWrap: "wrap",
                                    gap: 16,
                                    marginBottom: 24,
                                }}
                            >
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                                        <h3
                                            style={{
                                                fontSize: "1.3rem",
                                                fontWeight: 700,
                                                color: "#e2e8f0",
                                            }}
                                        >
                                            {exp.role}
                                        </h3>
                                        {exp.current && (
                                            <span
                                                style={{
                                                    padding: "2px 10px",
                                                    background: "rgba(16, 185, 129, 0.12)",
                                                    border: "1px solid rgba(16, 185, 129, 0.3)",
                                                    borderRadius: 999,
                                                    fontSize: "0.7rem",
                                                    color: "#6ee7b7",
                                                    fontWeight: 600,
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                }}
                                            >
                                                CURRENT
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                                        <span
                                            style={{
                                                fontSize: "1rem",
                                                fontWeight: 600,
                                                color: exp.accent,
                                            }}
                                        >
                                            {exp.company}
                                        </span>
                                        <span style={{ color: "#475569", fontSize: "0.875rem" }}>
                                            · {exp.subtitle}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 16,
                                            marginTop: 8,
                                            color: "#475569",
                                            fontSize: "0.8rem",
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                            <MapPin size={12} /> {exp.location}
                                        </span>
                                        <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                            <Calendar size={12} /> {exp.period}
                                        </span>
                                    </div>
                                </div>

                                {/* Featured stat */}
                                {exp.featuredStat && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        style={{
                                            padding: "16px 24px",
                                            background: "rgba(99, 102, 241, 0.08)",
                                            border: "1px solid rgba(99, 102, 241, 0.2)",
                                            borderRadius: 14,
                                            textAlign: "center",
                                            minWidth: 140,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 6,
                                                marginBottom: 4,
                                            }}
                                        >
                                            <TrendingUp size={16} style={{ color: "#6366f1" }} />
                                            <span
                                                style={{
                                                    fontSize: "2rem",
                                                    fontWeight: 800,
                                                    fontFamily: "'Space Grotesk', sans-serif",
                                                    background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                    backgroundClip: "text",
                                                }}
                                            >
                                                {exp.featuredStat.value}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "0.72rem", color: "#64748b", fontWeight: 500 }}>
                                            {exp.featuredStat.label}
                                        </p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Bullets */}
                            <ul style={{ listStyle: "none", padding: 0, marginBottom: 24 }}>
                                {exp.bullets.map((b, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            paddingLeft: 20,
                                            position: "relative",
                                            marginBottom: 12,
                                            color: "#94a3b8",
                                            fontSize: "0.93rem",
                                            lineHeight: 1.75,
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 10,
                                                width: 6,
                                                height: 6,
                                                borderRadius: "50%",
                                                background: exp.accent,
                                                display: "inline-block",
                                            }}
                                        />
                                        <span dangerouslySetInnerHTML={{ __html: b.replace(/<span class='hl-green'>(.*?)<\/span>/g, "<span style='color:#6ee7b7'>$1</span>").replace(/<span class='hl-cyan'>(.*?)<\/span>/g, "<span style='color:#67e8f9'>$1</span>").replace(/<span class='hl-purple'>(.*?)<\/span>/g, "<span style='color:#d8b4fe'>$1</span>") }} />
                                    </li>
                                ))}
                            </ul>

                            {/* Stack tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {exp.stack.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "3px 10px",
                                            background: "rgba(99, 102, 241, 0.08)",
                                            border: "1px solid rgba(99, 102, 241, 0.18)",
                                            borderRadius: 6,
                                            fontSize: "0.72rem",
                                            color: "#a5b4fc",
                                            fontFamily: "'JetBrains Mono', monospace",
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
