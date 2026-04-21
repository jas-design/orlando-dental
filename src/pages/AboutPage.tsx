import { motion } from 'motion/react';
import { Award, ShieldCheck, Users, Heart, Target, Lightbulb, Stethoscope, Stars } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-[140px] min-h-screen bg-white">
      {/* Page Title Band */}
      <section className="bg-soft py-20 lg:py-28 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto relative z-10"
         >
           <span className="section-label mx-auto">Who We Are</span>
           <h1 className="section-title !text-5xl lg:!text-7xl font-black">Our Commitment to Excellence</h1>
           <p className="section-desc mx-auto mt-8 font-medium">
             Everything you need to know about our dental clinic and our mission to provide the best care in the community.
           </p>
         </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-40 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden border-[15px] border-white shadow-2xl relative z-10">
                 <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=800" alt="Dr. Marcia Marinez" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-0"></div>
           </div>
           
           <div className="space-y-10">
              <div className="space-y-4">
                 <span className="section-label">Our Story</span>
                 <h2 className="section-title">
                   Meet Dr. Marcia Marinez & The Team
                 </h2>
              </div>
              <div className="space-y-6 text-gray-500 text-lg font-medium leading-relaxed">
                <p>
                  At Orange County Dentist, we believe that a healthy smile is the foundation of confidence and well-being. Dr. Marcia Marinez founded our Orlando studio with a simple goal: to provide world-class dental care in a setting that feels safe, modern, and welcoming.
                </p>
                <p>
                  Our clinic, known to locals as OC Smiles, specializes in a wide array of dental services. From the transformative power of Invisalign® to the precision of restorative dental implants, we are committed to using the latest technology to achieve optimal results for every patient.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                 {[
                   { label: 'Happy Smiles', value: '5K+', icon: Users },
                   { label: 'Licensed Experts', value: '8+', icon: Stethoscope },
                   { label: 'Clinical Success', value: '99%', icon: Stars },
                   { label: 'Years in Orlando', value: '10+', icon: Award }
                 ].map((stat, i) => (
                   <div key={i} className="space-y-2 group">
                      <div className="text-primary group-hover:scale-110 transition-transform"><stat.icon size={28} /></div>
                      <div className="text-3xl font-black text-navy">{stat.value}</div>
                      <div className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{stat.label}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-navy py-24 lg:py-40 text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
         <div className="max-w-7xl mx-auto px-4 relative z-10 text-center mb-20 space-y-4">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Our Values</span>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight leading-tight">Our Core Mission & Philosophy</h2>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
               <div key={i} className="bg-white/5 border border-white/10 p-12 rounded-3xl hover:bg-white/10 transition-all group">
                  <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                     {v.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-6 text-white tracking-tight">{v.title}</h3>
                  <p className="text-white/60 font-medium leading-relaxed">{v.description}</p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}

const values = [
  {
    icon: <Target size={32} />,
    title: 'Precision Care',
    description: 'We use high-resolution imaging and modern diagnosis to ensure absolute accuracy in every dental procedure.'
  },
  {
    icon: <Heart size={32} />,
    title: 'Patient Comfort',
    description: 'A gentle touch and focused attention ensure that your visit is stress-free, pain-free, and comfortable.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Quality First',
    description: 'Continuously adopting the latest advancements in dental materials to deliver long-lasting and safe solutions.'
  }
];

const team = [
  { name: 'Dr. Marcia Marinez', role: 'Lead Dentist & Founder', image: '/images/dr.marcia_252bmartinez.jpg' },
  { name: 'Dr. Robert Wilson', role: 'Orthodontist Specialist', image: 'https://picsum.photos/seed/doc2/400/400' },
  { name: 'Dr. Sarah Lopez', role: 'Cosmetic Specialist', image: 'https://picsum.photos/seed/doc3/400/400' },
  { name: 'Dr. James Miller', role: 'Periodontist', image: 'https://picsum.photos/seed/doc4/400/400' },
];
