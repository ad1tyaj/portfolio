"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone, Terminal } from "lucide-react";

const stats = [
    { value: "170+", label: "Live Orders Processed" },
    { value: "95%+", label: "ML Accuracy" },
    { value: "99%+", label: "System Uptime" },
    { value: "250+", label: "LeetCode Problems" },
];

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles: Array<{
            x: number; y: number; vx: number; vy: number; r: number; opacity: number;
        }> = [];

        for (let i = 0; i < 80; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }

        let animId: number;
        function draw() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(99,102,241,${p.opacity})`;
                ctx.fill();
            });

            // Draw connections
            particles.forEach((a, i) => {
                particles.slice(i + 1).forEach((b) => {
                    const dist = Math.hypot(a.x - b.x, a.y - b.y);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(99,102,241,${0.05 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                });
            });

            animId = requestAnimationFrame(draw);
        }

        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section
            style={{
                minHeight: "100vh",
                position: "relative",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Particle canvas */}
            <canvas
                ref={canvasRef}
                style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.8 }}
            />

            {/* Gradient blobs */}
            <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
                <div
                    style={{
                        position: "absolute",
                        width: 600,
                        height: 600,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
                        top: "-200px",
                        left: "-100px",
                        animation: "float 6s ease-in-out infinite",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        width: 500,
                        height: 500,
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
                        bottom: "-150px",
                        right: "-100px",
                        animation: "float 8s ease-in-out infinite reverse",
                    }}
                />
            </div>

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
                {/* Top badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: 28 }}
                >
                    <span
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "6px 16px",
                            background: "rgba(99, 102, 241, 0.1)",
                            border: "1px solid rgba(99, 102, 241, 0.25)",
                            borderRadius: 999,
                            fontSize: "0.8rem",
                            fontFamily: "'JetBrains Mono', monospace",
                            color: "#a5b4fc",
                        }}
                    >
                        <Terminal size={12} />
                        Available for Opportunities
                        <span
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "#10b981",
                                display: "inline-block",
                                animation: "pulse-ring 1.5s ease-out infinite",
                            }}
                        />
                    </span>
                </motion.div>

                {/* Name & Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 5rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        marginBottom: 20,
                        letterSpacing: "-0.02em",
                    }}
                >
                    Aditya Jha
                    <br />
                    <span
                        style={{
                            background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 50%, #a855f7 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        AI Engineer
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: "clamp(1rem, 2vw, 1.2rem)",
                        color: "#94a3b8",
                        maxWidth: 600,
                        marginBottom: 40,
                        lineHeight: 1.7,
                    }}
                >
                    Production-focused specialist in{" "}
                    <span style={{ color: "#a5b4fc" }}>autonomous AI systems</span>,{" "}
                    <span style={{ color: "#67e8f9" }}>LLM-powered workflows</span>, and{" "}
                    <span style={{ color: "#d8b4fe" }}>computer vision pipelines</span>.
                    Built and deployed multi-tenant commerce infrastructure processing{" "}
                    <strong style={{ color: "#e2e8f0" }}>170+ live orders</strong> with
                    zero downtime.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 60 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99,102,241,0.4)" }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() =>
                            document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                        }
                        style={{
                            padding: "14px 32px",
                            background: "linear-gradient(135deg, #6366f1, #a855f7)",
                            border: "none",
                            borderRadius: 10,
                            color: "#fff",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            cursor: "pointer",
                            fontFamily: "'Inter', sans-serif",
                        }}
                    >
                        View Projects
                    </motion.button>
                    <motion.a
                        href="mailto:adj0071@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                            padding: "14px 32px",
                            background: "transparent",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: 10,
                            color: "#e2e8f0",
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            textDecoration: "none",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            fontFamily: "'Inter', sans-serif",
                        }}
                    >
                        <Mail size={16} />
                        Get in Touch
                    </motion.a>
                </motion.div>

                {/* Contact links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 80 }}
                >
                    {[
                        { icon: <Linkedin size={16} />, label: "LinkedIn", href: "https://linkedin.com/in/aditya-jha" },
                        { icon: <Mail size={16} />, label: "adj0071@gmail.com", href: "mailto:adj0071@gmail.com" },
                        { icon: <Phone size={16} />, label: "+91-9321833403", href: "tel:+919321833403" },
                        { icon: <Github size={16} />, label: "LeetCode", href: "https://leetcode.com/" },
                    ].map((item) => (
                        <motion.a
                            key={item.label}
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            whileHover={{ color: "#a5b4fc" }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                color: "#64748b",
                                fontSize: "0.85rem",
                                textDecoration: "none",
                                transition: "color 0.2s",
                                fontFamily: "'JetBrains Mono', monospace",
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                        gap: 16,
                        maxWidth: 700,
                    }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + i * 0.08 }}
                            style={{
                                padding: "20px 16px",
                                background: "rgba(13, 17, 23, 0.6)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                borderRadius: 12,
                                backdropFilter: "blur(10px)",
                                textAlign: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "1.8rem",
                                    fontWeight: 700,
                                    fontFamily: "'Space Grotesk', sans-serif",
                                    background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    marginBottom: 4,
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 500 }}>
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    style={{
                        position: "absolute",
                        bottom: 30,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                        color: "#475569",
                    }}
                >
                    <span style={{ fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace" }}>
                        scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <ArrowDown size={16} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
