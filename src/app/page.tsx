'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const PyramidScene = dynamic(() => import('@/components/PyramidScene'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-900 to-amber-900">
        <div className="absolute inset-0">
          <PyramidScene />
        </div>
      </main>
  );
}
