'use client';

import { useState } from 'react';
import Link from 'next/link';
import { caesarDressing } from './fonts';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from './navlink';


export default function SideNav({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    const closeNav = () => {
        if (isOpen) setIsOpen(false);
    };

    return (
        <div className="flex h-screen">
            {/* Hamburger Menu Button */}
            {
                !isOpen && <button
                    onClick={toggleNav}
                    className="fixed top-4 left-4 z-50 p-2 bg-blue-primary text-white rounded-md shadow-lg hover:bg-blue-secondary transition-colors"
                    aria-label="Toggle navigation"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>
            }

            {/* Side Navigation */}
            <nav
                className={`fixed top-0 left-0 h-full w-65 bg-greek-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Button */}
                {isOpen && (
                    <button
                        onClick={toggleNav}
                        className="absolute top-4 right-4 z-50 p-2 text-blue-primary hover:text-gold-accent transition-colors"
                        aria-label="Close navigation"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}
                
                {/* Header */}
                <div className="bg-blue-primary text-greek-blue p-6 border-b-4 border-gold-accent">
                    <h1 className={`${caesarDressing.className} text-3xl font-bold text-white`}>
                        Greek To Me
                    </h1>
                    <p className="text-cream-medium text-sm mt-1">Authentic Greek Cuisine with a Modern Street Food Twist</p>
                </div>

                {/* Navigation Links */}
                <div className="p-6">
                    <ul className="space-y-4 text-greek-blue">
                        <NavLink
                            href="/"
                            label="Home"
                            icon={<HomeIcon className="text-blue-primary" />}
                            onClick={toggleNav}
                        />
                        <NavLink
                            href="/menu"
                            label="Menu"
                            icon="🍽️"
                            onClick={toggleNav}
                        />
                        <NavLink
                            href="/about"
                            label="About Us"
                            icon="ℹ️"
                            onClick={toggleNav}
                        />
                        <NavLink
                            href="/location"
                            label="Location"
                            icon="📍"
                            onClick={toggleNav}
                        />
                        <NavLink
                            href="/contact"
                            label="Contact"
                            icon="📞"
                            onClick={toggleNav}
                        />
                    </ul>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-blue-secondary text-cream-light text-center">
                    <p className="text-sm">Opa! Welcome to our family</p>
                </div>
            </nav>

            {/* Main Content Area */}
            <main 
                className={`flex-1 transition-all duration-300 ${isOpen ? 'ml-65' : 'ml-0'}`}
                onClick={closeNav}
            >
                {children}
            </main>
        </div>
    );
}
