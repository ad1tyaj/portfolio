"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [active, setActive] = useState("");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href: string) => {
        setActive(href);
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 100,
                    padding: "0 24px",
                    transition: "all 0.3s ease",
                    background: scrolled
                        ? "rgba(7, 11, 18, 0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(20px)" : "none",
                    borderBottom: scrolled
                        ? "1px solid rgba(255,255,255,0.06)"
                        : "none",
                }}
            >
                <div
                    style={{
                        maxWidth: 1200,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: 64,
                    }}
                >
                    {/* Logo */}
                    <motion.a
                        href="#"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        whileHover={{ scale: 1.02 }}
                        style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            cursor: "pointer",
                        }}
                    >
                        AJ.
                    </motion.a>

                    {/* Desktop Nav */}
                    <nav style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        {links.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleClick(link.href)}
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: active === link.href ? "#6366f1" : "#94a3b8",
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    padding: "6px 14px",
                                    cursor: "pointer",
                                    borderRadius: 8,
                                    transition: "all 0.2s",
                                    fontFamily: "'Inter', sans-serif",
                                    display: "none",
                                }}
                                className="nav-link"
                                onMouseEnter={(e) =>
                                    ((e.target as HTMLElement).style.color = "#e2e8f0")
                                }
                                onMouseLeave={(e) =>
                                ((e.target as HTMLElement).style.color =
                                    active === link.href ? "#6366f1" : "#94a3b8")
                                }
                            >
                                {link.label}
                            </button>
                        ))}

                        {/* Desktop links via CSS */}
                        <style>{`
              @media (min-width: 768px) {
                .nav-link { display: block !important; }
                .mobile-menu-btn { display: none !important; }
              }
            `}</style>

                        {/* Hire Me CTA */}
                        <motion.a
                            href="mailto:adj0071@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                display: "none",
                                padding: "8px 20px",
                                background: "rgba(99, 102, 241, 0.1)",
                                border: "1px solid rgba(99, 102, 241, 0.4)",
                                borderRadius: 8,
                                color: "#a5b4fc",
                                fontSize: "0.875rem",
                                fontWeight: 600,
                                textDecoration: "none",
                                transition: "all 0.2s",
                                marginLeft: 8,
                            }}
                            className="nav-link"
                        >
                            Hire Me
                        </motion.a>

                        {/* Mobile toggle */}
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#94a3b8",
                                cursor: "pointer",
                                padding: 8,
                            }}
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            top: 64,
                            left: 0,
                            right: 0,
                            zIndex: 99,
                            background: "rgba(7, 11, 18, 0.97)",
                            backdropFilter: "blur(20px)",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            padding: "16px 24px 24px",
                        }}
                    >
                        {links.map((link, i) => (
                            <motion.div
                                key={link.href}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <button
                                    onClick={() => handleClick(link.href)}
                                    style={{
                                        display: "block",
                                        width: "100%",
                                        background: "none",
                                        border: "none",
                                        color: "#cbd5e1",
                                        fontSize: "1rem",
                                        fontWeight: 500,
                                        padding: "12px 0",
                                        cursor: "pointer",
                                        textAlign: "left",
                                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    {link.label}
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
