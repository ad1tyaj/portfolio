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
                background: "var(--bg)",
                position: "relative",
            }}
        >
            {/* Grid background */}
            <div className="grid-bg" style={{ position: "absolute", inset: 0 }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
                {/* Section header */}
                <div style={{ marginBottom: 64, textAlign: "left", borderLeft: "4px solid var(--accent)", paddingLeft: 24 }}>
                    <span className="section-label" style={{ marginBottom: 12 }}>
                        SECTION: 02_EXPERIENCE
                    </span>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--text)",
                        }}
                    >
                        PREV_DEPLOYMENTS
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
                            className="terminal-card bracket-tl"
                            style={{
                                padding: 36,
                                background: "var(--surface)",
                                border: `1px solid ${exp.featured ? `var(--accent)` : "var(--border)"}`,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    flexWrap: "wrap",
                                    gap: 16,
                                    marginBottom: 32,
                                }}
                            >
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                                        <h3
                                            style={{
                                                fontSize: "1.2rem",
                                                fontWeight: 800,
                                                color: "var(--text)",
                                                letterSpacing: "0.05em",
                                            }}
                                        >
                                            {exp.role.toUpperCase()}
                                        </h3>
                                        {exp.current && (
                                            <span
                                                style={{
                                                    padding: "2px 10px",
                                                    background: "var(--success)",
                                                    color: "var(--bg)",
                                                    fontSize: "0.65rem",
                                                    fontWeight: 800,
                                                }}
                                            >
                                                ACTIVE
                                            </span>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'JetBrains Mono', monospace" }}>
                                        <span
                                            style={{
                                                fontSize: "0.9rem",
                                                fontWeight: 700,
                                                color: "var(--accent)",
                                            }}
                                        >
                                            @{exp.company.toUpperCase()}
                                        </span>
                                        <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
                                            // {exp.subtitle.toUpperCase()}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            display: "flex",
                                            gap: 20,
                                            marginTop: 12,
                                            color: "var(--text-muted)",
                                            fontSize: "0.7rem",
                                            fontWeight: 700,
                                            textTransform: "uppercase",
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
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        style={{
                                            padding: "16px 24px",
                                            background: "var(--accent-muted)",
                                            border: "1px solid var(--accent)",
                                            textAlign: "center",
                                            minWidth: 160,
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                gap: 8,
                                                marginBottom: 4,
                                            }}
                                        >
                                            <TrendingUp size={16} style={{ color: "var(--accent)" }} />
                                            <span
                                                style={{
                                                    fontSize: "1.8rem",
                                                    fontWeight: 800,
                                                    color: "var(--text)",
                                                }}
                                            >
                                                {exp.featuredStat.value}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: "0.6rem", color: "var(--accent)", fontWeight: 800, textTransform: "uppercase" }}>
                                            {exp.featuredStat.label}
                                        </p>
                                    </motion.div>
                                )}
                            </div>

                            {/* Bullets */}
                            <ul style={{ listStyle: "none", padding: 0, marginBottom: 32, borderTop: "1px solid var(--border)", paddingTop: 24 }}>
                                {exp.bullets.map((b, i) => (
                                    <li
                                        key={i}
                                        style={{
                                            paddingLeft: 24,
                                            position: "relative",
                                            marginBottom: 16,
                                            color: "var(--text-muted)",
                                            fontSize: "0.9rem",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        <span
                                            style={{
                                                position: "absolute",
                                                left: 0,
                                                top: 6,
                                                color: "var(--accent)",
                                                fontWeight: 800,
                                            }}
                                        >
                                            &gt;
                                        </span>
                                        <span dangerouslySetInnerHTML={{ __html: b.replace(/<span class='hl-green'>(.*?)<\/span>/g, "<span style='color:var(--success);font-weight:700'>$1</span>").replace(/<span class='hl-cyan'>(.*?)<\/span>/g, "<span style='color:var(--accent);font-weight:700'>$1</span>").replace(/<span class='hl-purple'>(.*?)<\/span>/g, "<span style='color:var(--text);font-weight:700'>$1</span>") }} />
                                    </li>
                                ))}
                            </ul>

                            {/* Stack tags */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {exp.stack.map((tag) => (
                                    <span
                                        key={tag}
                                        style={{
                                            padding: "2px 10px",
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
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
