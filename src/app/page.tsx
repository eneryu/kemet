'use client';

import dynamic from 'next/dynamic';

const PyramidScene = dynamic(() => import('@/components/PyramidScene'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-stone-950 flex items-center justify-center">
      <div className="text-kemet-gold text-2xl animate-pulse font-serif">كيمت... جارٍ التحميل</div>
    </div>
  )
});

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 text-sand-100 overflow-x-hidden">
      <PyramidScene />
    </main>
  );
}
