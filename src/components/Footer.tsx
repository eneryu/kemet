'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-stone-900 to-black py-12 border-t-2 border-kemet-gold/30" dir="rtl">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
                    <div className="text-right">
                        <h3 className="text-3xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                            <span className="text-2xl">𓃭</span>
                            كيمت
                            <span className="text-2xl">𓃭</span>
                        </h3>
                        <p className="text-sand-200 text-sm md:text-base">
                            اكتشف عظمة الحضارة المصرية القديمة والحديثة من خلال رحلة تفاعلية عبر العصور
                        </p>
                    </div>

                    <div className="text-right">
                        <h3 className="text-2xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                            <span className="text-xl">𓂀</span>
                            تواصل معنا
                            <span className="text-xl">𓂀</span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:jackezt2@gmail.com" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                                    <span className="text-kemet-gold text-sm">𓃾</span>
                                    البريد الإلكتروني
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/2001014023583" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                                    <span className="text-kemet-gold text-sm">𓃾</span>
                                    واتساب
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="text-right">
                        <h3 className="text-2xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                            <span className="text-xl">𓂀</span>
                            روابط سريعة
                            <span className="text-xl">𓂀</span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#history" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                                    <span className="text-kemet-gold text-sm">𓆣</span>
                                    التاريخ
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                                    <span className="text-kemet-gold text-sm">𓆣</span>
                                    المعرض
                                </Link>
                            </li>
                            <li>
                                <Link href="/museum" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2">
                                    <span className="text-kemet-gold text-sm">𓆣</span>
                                    المتحف
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-right">
                        <h3 className="text-2xl font-bold text-kemet-gold mb-4 flex items-center gap-2">
                            <span className="text-xl">𓂀</span>
                            المطور
                            <span className="text-xl">𓂀</span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://github.com/eneryu" target="_blank" rel="noopener noreferrer" className="text-sand-200 hover:text-kemet-gold transition-colors text-sm md:text-base flex items-center gap-2 font-bold">
                                    <span className="text-kemet-gold text-sm">𓃾</span>
                                    Jack (Eneryu)
                                </a>
                            </li>
                            <li>
                                <span className="text-sand-300 text-xs italic">
                                    Developed with Passion for Egypt
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-kemet-gold/30 mt-12 pt-8 text-center flex flex-col items-center gap-4">
                    <p className="text-sand-300 text-sm md:text-base flex items-center justify-center gap-3">
                        <span className="text-kemet-gold">☥</span>
                        Designed & Developed by <a href="https://github.com/eneryu" target="_blank" rel="noopener noreferrer" className="text-kemet-gold hover:underline font-bold">Jack (Eneryu)</a>
                        <span className="text-kemet-gold">☥</span>
                    </p>
                    <div className="text-sand-500 text-xs md:text-sm dir-ltr">
                        © 2024 - {new Date().getFullYear()} Kemet. All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
