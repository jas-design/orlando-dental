import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Calendar, Send, ShieldAlert } from 'lucide-react';

export default function ContactPage() {
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
           <span className="section-label mx-auto">Get In Touch</span>
           <h1 className="section-title !text-5xl lg:!text-7xl font-black">Contact Us</h1>
           <p className="section-desc mx-auto mt-8 font-medium">
             We are here to help you with any questions or concerns you may have about your dental health. Call us or send a message.
           </p>
         </motion.div>
      </section>

      <section className="py-24 lg:py-40 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
           {/* Form */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-8 md:p-16 rounded-3xl shadow-2xl border border-gray-50"
           >
              <div className="mb-10">
                 <h3 className="text-3xl font-black text-navy tracking-tight mb-2">Send Us A Message</h3>
                 <p className="text-sm text-gray-500 font-medium font-medium">We'll get back to you within 24 hours.</p>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Your Name</label>
                       <input type="text" className="dentia-input w-full" placeholder="e.g. John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Your Email</label>
                       <input type="email" className="dentia-input w-full" placeholder="e.g. info@example.com" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Phone Number</label>
                    <input type="tel" className="dentia-input w-full" placeholder="e.g. +1 123 456 7890" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Your Message</label>
                    <textarea rows={5} className="dentia-input w-full resize-none" placeholder="How can we help you?"></textarea>
                 </div>
                 <button className="dentia-button w-full !py-5 shadow-xl shadow-blue-500/20">
                    Send Message
                 </button>
              </form>
           </motion.div>

           {/* Details */}
           <div className="space-y-16">
              <div className="space-y-8">
                 <h3 className="text-3xl font-black text-navy tracking-tight">Our Contact Details</h3>
                 <p className="text-gray-500 font-medium text-lg leading-relaxed">
                   We believe in providing professional and personalized dental excellence at every single visit.
                 </p>
              </div>

              <div className="space-y-10">
                 {[
                   { icon: MapPin, title: 'Our Location', detail: '1000 N Alafaya Trail #100, Orlando, FL 32828' },
                   { icon: Phone, title: 'Call Us', detail: '(407) 273-6620' },
                   { icon: Mail, title: 'Email Address', detail: 'info@ocsmilesdentist.com' }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 bg-soft text-primary rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                         <item.icon size={28} />
                      </div>
                      <div>
                         <h4 className="text-xl font-black text-navy mb-1">{item.title}</h4>
                         <p className="text-gray-500 font-bold">{item.detail}</p>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="bg-soft p-10 rounded-3xl border border-gray-100">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="text-primary"><Clock size={24} /></div>
                    <h4 className="text-lg font-black tracking-tight text-navy uppercase">Office Hours</h4>
                 </div>
                 <div className="space-y-4 font-bold text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-3">
                       <span className="text-gray-400 uppercase tracking-widest text-[10px]">Monday - Friday</span>
                       <span className="text-navy">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-3">
                       <span className="text-gray-400 uppercase tracking-widest text-[10px]">Saturday</span>
                       <span className="text-navy">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                       <span className="text-gray-400 uppercase tracking-widest text-[10px]">Sunday</span>
                       <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">By Appointment</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
