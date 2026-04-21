import { motion } from 'motion/react';

export default function GalleryPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">Patient Transformations</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results for real people. Browse our gallery of smiles and our modern clinic environment.
          </p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {galleryImages.map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="break-inside-avoid group relative rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">{img.category}</p>
                  <p className="text-white font-bold text-xl">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Focus */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <p className="text-primary font-bold tracking-widest uppercase">Comparisons</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Before & After Results</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-xl space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <p className="text-center font-bold text-gray-400 uppercase text-xs">Before</p>
                    <img src={`https://picsum.photos/seed/before${i}/400/400`} alt="Before" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="space-y-4 text-center">
                    <p className="text-center font-bold text-primary uppercase text-xs">After</p>
                    <img src={`https://picsum.photos/seed/after${i}/400/400`} alt="After" className="rounded-2xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-xl text-gray-900">Full Smile Reconstruction Case #{i}</h4>
                  <p className="text-gray-500 text-sm">Treatment time: 6 Months | Procedures: Invisalign & Whitening</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const galleryImages = [
  { url: 'https://picsum.photos/seed/gall1/600/800', title: 'Modern Reception', category: 'Clinic' },
  { url: 'https://picsum.photos/seed/gall2/600/600', title: 'Bright Smiles', category: 'Patient' },
  { url: 'https://picsum.photos/seed/gall3/600/1000', title: 'Dental Consultation', category: 'Procedure' },
  { url: 'https://picsum.photos/seed/gall4/600/700', title: 'Relaxing Lounge', category: 'Clinic' },
  { url: 'https://picsum.photos/seed/gall5/600/900', title: 'Precise Hygiene', category: 'Procedure' },
  { url: 'https://picsum.photos/seed/gall6/600/600', title: 'Young Patient', category: 'Patient' },
];
