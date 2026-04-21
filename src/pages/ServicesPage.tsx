import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Zap, Users, Stethoscope, Sparkles, Smile, Baby } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="pt-[140px] min-h-screen bg-white">
      {/* Header Band */}
      <section className="bg-soft py-20 lg:py-28 text-center px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto relative z-10"
         >
           <span className="section-label mx-auto">Expert Care</span>
           <h1 className="section-title !text-5xl lg:!text-7xl font-black">Our Services</h1>
           <p className="section-desc mx-auto mt-8 font-medium">
             Comprehensive dental solutions for every stage of life, delivered with the latest technology and a patient-first focus.
           </p>
         </motion.div>
      </section>

      {/* Services List */}
      <section className="py-24 lg:py-40 px-4">
        <div className="max-w-7xl mx-auto space-y-32">
          {fullServices.map((service, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full z-0 blur-3xl"></div>
              </div>
              <div className="lg:w-1/2 space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-soft text-primary rounded-2xl flex items-center justify-center">
                      <service.icon size={24} />
                   </div>
                   <span className="text-primary font-bold uppercase tracking-widest text-xs">{service.category}</span>
                </div>
                <h3 className="text-4xl lg:text-5.5xl font-black text-navy leading-tight tracking-tight">{service.title}</h3>
                <p className="text-gray-500 text-lg font-medium leading-relaxed">{service.description}</p>
                
                <ul className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-4 text-navy font-bold">
                      <div className="text-primary">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="dentia-button !px-12 !py-5 shadow-xl shadow-blue-500/20">
                   Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Grid (Dark Band) */}
      <section className="py-24 lg:py-32 px-4 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
           {[
             { title: 'Insurance Accepted', desc: 'We work with all major dental PPO insurance providers.', icon: ShieldCheck },
             { title: 'Expert Team', desc: 'Our dentists are highly trained and regularly update their skills.', icon: Users },
             { title: 'Safe & Clean', desc: 'We maintain the highest standards of sterilization and hygiene.', icon: Zap }
           ].map((item, i) => (
             <div key={i} className="space-y-6 group text-center md:text-left">
                <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform mx-auto md:mx-0">
                  <item.icon size={36} />
                </div>
                <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
                <p className="text-white/60 font-medium leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
}

const fullServices = [
  {
    title: 'Invisalign® Clear Aligners',
    category: 'Orthodontics',
    icon: Sparkles,
    description: 'Transform your smile without the hassle of metal braces. Invisalign® uses a series of custom-made, clear, and removable aligners to gradually straighten your teeth in a studio-quality setting.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    benefits: [
       'Virtually invisible aligners',
       'Removable for easy cleaning',
       'Custom-fit for your comfort',
       'Faster results than traditional braces'
    ]
  },
  {
    title: 'Dental Implants & Restorative',
    category: 'Tooth Replacement',
    icon: Smile,
    description: 'The standard of care for missing teeth. Our implants look, feel, and function like natural teeth, providing a permanent solution that prevents bone loss and restores your bite.',
    image: 'https://images.unsplash.com/photo-1629909608135-ca950854407b?auto=format&fit=crop&q=80&w=800',
    benefits: [
       'Restores full chewing power',
       'Prevents facial bone deterioration',
       'Natural-looking porcelain crowns',
       'Long-lasting dental solution'
    ]
  },
  {
    title: 'Preventive Care & Exams',
    category: 'Family Dentistry',
    icon: Stethoscope,
    description: 'Healthy smiles start with regular prevention. Dr. Marinez provides comprehensive exams, professional cleanings, and modern screenings to keep your oral health at its peak.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    benefits: [
       'Detailed digital x-rays',
       'Professional deep cleanings',
       'Oral cancer screenings',
       'Personalized hygiene plans'
    ]
  }
];
