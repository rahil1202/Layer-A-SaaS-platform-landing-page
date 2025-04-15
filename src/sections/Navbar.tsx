"use client";

import Image from "next/image";
import logo from "../assets/images/logo.svg";
import Button from "../components/Button";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section className="py-4 lg:py-8">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between border border-white/25 rounded-full px-4 py-4">
                    {/* Logo */}
                    <div>
                        <a href="#">
                            <Image
                                src={logo}
                                alt="Layers Logo"
                                className="h-9 w-auto md:h-10"
                            />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex justify-center items-center gap-6 font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/70 hover:text-white px-4 py-2 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Buttons and Hamburger */}
                    <div className="flex items-center gap-3">
                        {/* Hamburger Menu for Mobile */}
                        <button
                            className="lg:hidden"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {isMenuOpen ? (
                                    // Close icon
                                    <>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </>
                                ) : (
                                    // Menu icon
                                    <>
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </>
                                )}
                            </svg>
                        </button>

                        {/* Desktop Buttons */}
                        <div className="hidden lg:flex gap-3">
                            <Button
                                variant="secondary"
                                className="inline-flex items-center"
                            >
                                Log In
                            </Button>
                            <Button
                                variant="primary"
                                className="inline-flex items-center"
                            >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen
                            ? "max-h-screen opacity-100"
                            : "max-h-0 opacity-0"
                    }`}
                >
                    <nav className="flex flex-col items-center gap-4 py-6 font-medium bg-neutral-950 rounded-b-2xl border border-t-0 border-white/25">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-white/70 hover:text-white px-4 py-2 transition-colors"
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {link.label}
                            </a>
                        ))}
                        <Button
                            variant="secondary"
                            className="w-[90%] max-w-xs mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Log In
                        </Button>
                        <Button
                            variant="primary"
                            className="w-[90%] max-w-xs mt-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign Up
                        </Button>
                    </nav>
                </div>
            </div>
        </section>
    );
}
