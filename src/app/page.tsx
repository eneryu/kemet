'use client';

import dynamic from 'next/dynamic';

const PyramidScene = dynamic(() => import('@/components/PyramidScene'), {
    ssr: false,
});

export default function Home() {
    return (
        <main className="min-h-screen bg-stone-950">
            <PyramidScene />
        </main>
    );
}
