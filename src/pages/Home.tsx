import { motion } from 'motion/react';
import { 
  Phone, 
  Clock, 
  Mail, 
  CheckCircle2, 
  ChevronDown,
  Activity,
  Heart,
  Stethoscope,
  ShieldCheck,
  Zap,
  Star,
  Users,
  Target,
  ChevronRight,
  Sparkles,
  Baby,
  Smile
} from 'lucide-react';
import { Page } from '../types';
import React, { useState } from 'react';

interface HomeProps {
  setPage: (page: Page) => void;
}

function BeforeAfterSlider({ before, after }: { before: string; after: string }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = x - rect.left;
    const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setSliderPos(position);
  };

  return (
    <div 
      className="relative w-full h-full cursor-col-resize select-none overflow-hidden"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={after} className="absolute inset-0 w-full h-full object-cover" alt="After" referrerPolicy="no-referrer" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} className="absolute inset-0 w-full h-full object-cover" alt="Before" referrerPolicy="no-referrer" />
      </div>
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-xl flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-10 h-10 bg-white rounded-full shadow-2xl border-4 border-white flex items-center justify-center -ml-[1px]">
          <div className="flex gap-0.5 items-center">
             <ChevronRight className="w-3 h-3 text-navy rotate-180" />
             <ChevronRight className="w-3 h-3 text-navy" />
          </div>
        </div>
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-navy/50 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-1 rounded">Before</div>
      <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-md text-white text-[10px] font-black uppercase px-2 py-1 rounded">After</div>
    </div>
  );
}

export default function Home({ setPage }: HomeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=2000" 
             alt="Orange County Smiles - Healthy Smiles" 
             className="w-full h-full object-cover"
             referrerPolicy="no-referrer"
           />
           <div className="absolute inset-0 bg-navy/20 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-navy/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-2xl space-y-6"
           >
              <div className="space-y-2">
                 <span className="text-white font-bold text-sm uppercase tracking-[0.3em] bg-primary/80 px-3 py-1 rounded inline-block">Welcome to Orlando Dental Care</span>
                 <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
                   The Smile Studio for <span className="text-primary italic">Comprehensive</span> Dental Care
                 </h1>
              </div>
              <p className="text-white text-lg md:text-xl font-medium max-w-lg leading-relaxed drop-shadow-md">
                Dr. A. Viviana Santos provides high-quality dentistry in Orlando, FL, including Invisalign®, cosmetic enhancements, and restorative care.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <button onClick={() => setPage('contact')} className="dentia-button !px-10 !py-4 shadow-xl shadow-orange-500/20">
                   Book Appointment
                 </button>
                 <button onClick={() => setPage('services')} className="dentia-button-secondary !px-10 !py-4 shadow-xl">
                   Explore Treatments
                 </button>
              </div>
              
              <div className="flex items-center gap-4 pt-8">
                 <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <img key={i} src={`https://i.pravatar.cc/100?u=patient${i}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient" />
                    ))}
                 </div>
                 <div className="text-white">
                    <div className="flex items-center gap-1">
                       <span className="font-black text-sm uppercase">High Standards</span>
                       <span className="font-black ml-2">Happy Patients</span>
                    </div>
                    <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest">Transforming Smiles in Orlando</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-navy py-12">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-6 text-white group">
               <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500 text-primary">
                  <Phone size={28} />
               </div>
               <div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">How can we help?</div>
                  <div className="text-lg font-black tracking-tight">(407) 273-6620</div>
               </div>
            </div>
            <div className="flex items-center gap-6 text-white group">
               <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500 text-primary">
                  <Clock size={28} />
               </div>
               <div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Office Hours</div>
                  <div className="text-lg font-black tracking-tight">Visit Us in Orlando, FL</div>
               </div>
            </div>
            <div className="flex items-center gap-6 text-white group">
               <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500 text-primary">
                  <Mail size={28} />
               </div>
               <div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Location</div>
                  <div className="text-sm font-black tracking-tight leading-tight">1000 N Alafaya Trail #100<br/>Orlando, FL 32828</div>
               </div>
            </div>
         </div>
      </section>

      {/* Featured Services (Attached Layout) */}
      <section className="py-32 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
            {[
              { 
                title: 'Teeth Whitening', 
                desc: 'Whitening is among the most popular dental procedures because it can greatly improve how your teeth look.',
                icon: Sparkles
              },
              { 
                title: 'Teeth Cleaning', 
                desc: 'Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth (dental caries).',
                icon: Activity 
              },
              { 
                title: 'Modern Anesthetic', 
                desc: 'Dental anesthesia is a field of anesthesia that includes not only local but sedation and general anesthesia.',
                icon: ShieldCheck
              },
              { 
                title: 'Quality Brackets', 
                desc: 'Orthodontics is the branch of dentistry that corrects teeth and jaws that are positioned improperly.',
                icon: Target
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex justify-center">
                  <div className="text-cyan-400">
                    <item.icon size={64} strokeWidth={1} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative"
           >
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                 <img 
                    src="images/dr.marcia_252bmartinez.jpg" 
                    alt="Dr. A. Viviana Santos" 
                    className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute -bottom-10 -right-10 md:right-0 md:translate-x-1/4 w-2/3 md:w-1/2 aspect-square rounded-3xl overflow-hidden border-[12px] border-white shadow-2xl z-20 hidden md:block">
                 <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                    alt="Dental Studio" 
                    className="w-full h-full object-cover"
                 />
              </div>
              <div className="absolute top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0"></div>
           </motion.div>
           
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8"
           >
              <div>
                 <span className="section-label">Meet the Dentist</span>
                 <h2 className="section-title">Welcome to Orange County Dentist</h2>
              </div>
              <p className="text-gray-500 font-medium leading-relaxed">
                At Orlando Dental Care, Dr. A. Viviana Santos and our dedicated team offer comprehensive dental solutions tailored to your unique needs. We believe in providing the highest standard of care in a comfortable, studio-like environment.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pb-4">
                 {[
                   'Premier Orlando Dentist',
                   'Modern Treatment Studio',
                   'Invisalign® Specialized',
                   'Compassionate Dental Team'
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-navy font-bold text-sm">
                      <div className="text-primary"><CheckCircle2 size={18} /></div>
                      {item}
                   </div>
                 ))}
              </div>
              
              <button 
                onClick={() => setPage('about')}
                className="dentia-button"
              >
                Learn More About Dr. Marinez
              </button>
           </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 md:px-8 bg-soft">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
               <span className="section-label mx-auto">Treatments</span>
               <h2 className="section-title">Comprehensive Dental Care</h2>
               <p className="section-desc mx-auto">
                 We provide everything from routine cleanings and exams to complex cosmetic and restorative dentistry.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
               {[
                 { title: 'Invisalign®', desc: 'Straighten your teeth discreetly with the world\'s most advanced clear aligners.', icon: Sparkles },
                 { title: 'Checkups & Exams', icon: Stethoscope, desc: 'Maintain peak oral health with regular cleanings and comprehensive exams.' },
                 { title: 'Smile Improvement', icon: Smile, desc: 'Enhance your look with whitening, veneers, and custom cosmetic treatments.' },
                 { title: 'Tooth Replacement', icon: Zap, desc: 'Restore function and confidence with durable implants and bridges.' }
               ].map((service, i) => (
                 <div key={i} className="glass-card p-10 group hover:bg-primary transition-all duration-500">
                    <div className="w-20 h-20 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors">
                       <service.icon size={40} />
                    </div>
                    <h3 className="text-xl font-extrabold text-navy tracking-tight mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider group-hover:text-white/80 transition-colors leading-relaxed">
                       {service.desc}
                    </p>
                 </div>
               ))}
            </div>
            
            <div className="text-center">
               <button onClick={() => setPage('services')} className="dentia-button bg-white text-primary border border-primary hover:bg-primary hover:text-white">
                 View All Services
               </button>
            </div>
         </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-navy">
         <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            {[
              { label: 'Happy Patients', value: '10000+' },
              { label: 'Teeth Whitened', value: '2500+' },
              { label: 'Dental Implants', value: '800+' },
              { label: 'Years of Experience', value: '15+' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                 <div className="text-4xl md:text-5xl font-black tracking-tight">{stat.value}</div>
                 <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">{stat.label}</div>
              </div>
            ))}
         </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-4 md:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-12">
              <div className="space-y-4">
                 <span className="section-label">Why Choose Our Dental Care</span>
                 <h2 className="section-title">Exceptional Service With a Personal Touch</h2>
                 <p className="section-desc">Choosing the right dental provider matters. We combine expert care, advanced technology, and a warm atmosphere to ensure every visit is comfortable, efficient, and tailored to your unique needs.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-10">
                 {[
                   { title: 'Experienced Dental', desc: 'Skilled care backed by years of trusted dental experience.', icon: ShieldCheck },
                   { title: 'Advanced Technology', desc: 'Modern tools ensure accurate and efficient treatments.', icon: Zap },
                   { title: 'Personalized Treatment', icon: Target, desc: 'Custom care plans made to fit your smile and lifestyle.' },
                   { title: 'Family-Friendly', icon: Heart, desc: 'Welcoming space for kids, teens, adults, and seniors.' }
                 ].map((item, i) => (
                   <div key={i} className="space-y-3">
                      <div className="text-primary"><item.icon size={32} /></div>
                      <h4 className="font-extrabold text-navy tracking-tight">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">
                         {item.desc}
                      </p>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 pt-12">
                    <img src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full aspect-square object-cover" alt="Care" />
                    <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full aspect-[4/5] object-cover" alt="Treatment" />
                 </div>
                 <div className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1643660526741-094639fbe53a?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full aspect-[4/5] object-cover" alt="Service" />
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg w-full aspect-square object-cover" alt="Lab" />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Teeth Whitening Benefits (Attached Layout) */}
      <section className="py-32 px-4 md:px-8 bg-[#FFF9F2] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">
              The benefit of choosing professional teeth whitening
            </h2>
            <p className="text-gray-500 font-medium leading-relaxed">
              Teeth whitening is one of the most popular cosmetic dental procedures. While there are many over-the-counter options, professional treatment ensures a safe, effective, and long-lasting transformation that brightens your smile evenly.
            </p>
            <ul className="space-y-6">
              {[
                "You can achieve long-lasting results.",
                "Brighten the teeth multiple shades in less than an hour.",
                "A safe and effective solution for whiter teeth."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-navy font-bold group">
                  <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
             <BeforeAfterSlider 
               before="images/before22.jpg" 
               after="images/after11.jpg"
             />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
           <div className="space-y-6">
              <span className="section-label">Everything You Need to Know</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-desc">Got questions? We have answers. If you can\'t find what you\'re looking for, feel free to contact us.</p>
           </div>
           
           <div className="space-y-4">
              {[
                { q: 'How often should I visit the dentist?', a: 'Generally, it is recommended to visit the dentist every 6 months for a routine check-up and professional cleaning.' },
                { q: 'What should I do in a dental emergency?', a: 'Contact us immediately. We offer emergency dental services to address urgent issues like tooth pain or injury.' },
                { q: 'Do you offer services for kids?', a: 'Yes! We have pediatric dental specialists trained to handle the unique needs of children.' },
                { q: 'What are my options for replacing missing teeth?', a: 'We offer several options including dental implants, bridges, and dentures tailored to your specific needs.' },
                { q: 'Is teeth whitening safe?', a: 'Yes, professional teeth whitening is a safe and effective way to brighten your smile under dental supervision.' }
              ].map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                   <button 
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-navy hover:bg-gray-50 transition-colors"
                   >
                      {faq.q}
                      <ChevronDown size={20} className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                   </button>
                   {openFaq === i && (
                     <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-medium">
                        {faq.a}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 md:px-8 bg-soft">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 space-y-4">
               <span className="section-label mx-auto">Testimonials</span>
               <h2 className="section-title">Our Happy Customers</h2>
               <p className="section-desc mx-auto">
                 Join thousands of happy patients who trust us for gentle, expert care and beautiful smiles. Your perfect dental experience starts here!
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { name: 'Alex P.', role: 'Customer', text: '"They\'re professional, friendly, and genuinely care about your dental health. I trust them completely and recommend them to anyone looking for great care."' },
                 { name: 'Michael S.', role: 'Customer', text: '"I\'ve always been nervous about dental visits, but the staff made me feel completely comfortable. Their attention to detail truly stood out."' },
                 { name: 'Robert L.', role: 'Customer', text: '"My family and I have been coming here for years. The service is exceptional, and the team always goes the extra mile to make sure we\'re happy."' }
               ].map((test, i) => (
                 <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-gray-50 space-y-8 relative overflow-hidden group">
                    <div className="absolute top-4 right-6 text-primary/10">
                       <Zap size={80} strokeWidth={4} />
                    </div>
                    <p className="text-sm font-medium leading-relaxed italic text-gray-500 relative z-10 leading-[1.8]">
                       {test.text}
                    </p>
                    <div className="flex items-center gap-4 relative z-10 border-t border-gray-50 pt-8">
                       <img src={`https://i.pravatar.cc/100?u=test${i}`} className="w-12 h-12 rounded-full object-cover" alt={test.name} />
                       <div>
                          <h4 className="font-extrabold text-navy">{test.name}</h4>
                          <p className="text-[10px] font-black uppercase tracking-widest text-primary">{test.role}</p>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA Bar */}
      <section className="bg-primary py-20 px-8 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2"></div>
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight text-center md:text-left">Ready to book your dental care session?</h2>
            <button onClick={() => setPage('contact')} className="bg-white text-primary font-black px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-transform active:scale-95">
               Book Appointment
            </button>
         </div>
      </section>
    </div>
  );
}
