'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export default function Footer() {
    return (
        <footer className="bg-stone-950 border-t border-kemet-gold/20 py-12 relative overflow-hidden">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kemet-gold to-transparent opacity-50" />

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="text-center md:text-right">
                        <Link href="/" className="text-3xl font-bold text-kemet-gold mb-4 inline-block hover:scale-105 transition-transform">
                            كيمت
                        </Link>
                        <p className="text-sand-200 leading-relaxed mb-6">
                            رحلة عبر الزمن لاستكشاف عظمة وجمال الحضارة المصرية القديمة والحديثة، من الأهرامات إلى العاصمة الإدارية.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="text-xl font-bold text-kemet-gold mb-6">روابط سريعة</h3>
                        <div className="flex flex-col gap-3 text-sand-200">
                            <Link href="/" className="hover:text-kemet-gold transition-colors">الرئيسية</Link>
                            <Link href="/museum" className="hover:text-kemet-gold transition-colors">المتحف</Link>
                            <Link href="/gallery" className="hover:text-kemet-gold transition-colors">المعرض</Link>
                            <Link href="/#modern" className="hover:text-kemet-gold transition-colors">مصر الحديثة</Link>
                        </div>
                    </div>

                    {/* Contact & Social */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-kemet-gold mb-6">تواصل معنا</h3>
                        <div className="flex justify-center md:justify-end gap-4 mb-6">
                            <Link href="https://github.com/eneryu" target="_blank" className="p-2 bg-stone-900 rounded-full text-sand-200 hover:text-kemet-gold hover:bg-stone-800 transition-all">
                                <IconBrandGithub size={24} />
                            </Link>
                            <Link href="mailto:jackezt2@gmail.com" className="p-2 bg-stone-900 rounded-full text-sand-200 hover:text-kemet-gold hover:bg-stone-800 transition-all">
                                <IconMail size={24} />
                            </Link>
                        </div>
                        <p className="text-sand-300 text-sm">
                            تم التطوير بكل ❤️ في مصر
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/5 pt-8 text-center md:flex md:justify-between items-center text-sand-400 text-sm">
                    <p>© 2025 كيمت. جميع الحقوق محفوظة.</p>
                    <div className="flex items-center justify-center gap-2 mt-4 md:mt-0">
                        <span>Developed by</span>
                        <Link
                            href="https://github.com/eneryu"
                            target="_blank"
                            className="text-kemet-gold font-bold hover:underline flex items-center gap-1"
                        >
                            Jack (Eneryu)
                            <IconBrandGithub size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
