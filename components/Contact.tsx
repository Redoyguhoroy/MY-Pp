
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const { name, email, message } = formState;
    const subject = encodeURIComponent(`New Inquiry from Portfolio: ${name}`);
    const body = encodeURIComponent(`Hi Roy,\n\nYou have received a new message from your portfolio website:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n--- End of Message ---`);
    
    // Construct the mailto URL
    const mailtoUrl = `mailto:royredoyguho@gmail.com?subject=${subject}&body=${body}`;
    
    // Simulate a brief delay for high-end feel before opening mail client
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSending(false);
      setIsSent(true);
      
      // Reset success state after a while
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-24 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-cyan-400 font-orbitron tracking-widest text-sm uppercase mb-4">Connection</h3>
            <h2 className="text-4xl font-orbitron font-bold">Let's Secure Your Software</h2>
            <p className="text-slate-400 mt-6 leading-relaxed">
              Available for freelance opportunities and full-time collaborations. 
              Any message sent here goes directly to <span className="text-cyan-400 font-bold">royredoyguho@gmail.com</span>.
            </p>
          </div>

          <div className="space-y-6">
            <a 
              href="mailto:royredoyguho@gmail.com"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="p-4 glass rounded-xl text-cyan-400 group-hover:bg-cyan-500/10 group-hover:neon-border-blue transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-orbitron uppercase tracking-widest">Email</p>
                <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">royredoyguho@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+8801313731493"
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="p-4 glass rounded-xl text-purple-400 group-hover:bg-purple-500/10 group-hover:border-purple-500/50 transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-orbitron uppercase tracking-widest">Phone</p>
                <p className="text-lg font-medium group-hover:text-purple-400 transition-colors">+880 1313-731493</p>
              </div>
            </a>

            <div className="flex items-center gap-4 group">
              <div className="p-4 glass rounded-xl text-emerald-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-orbitron uppercase tracking-widest">Location</p>
                <p className="text-lg font-medium">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
        >
          {/* Subtle bg glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]"></div>

          <form className="space-y-6 relative z-10" onSubmit={handleSendMessage}>
            <div className="space-y-2">
              <label className="text-xs font-orbitron text-slate-500 uppercase tracking-widest">Full Name</label>
              <input 
                required
                type="text" 
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="How should I address you?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-slate-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-orbitron text-slate-500 uppercase tracking-widest">Email Address</label>
              <input 
                required
                type="email" 
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Where can I reach you back?" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-slate-200"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-orbitron text-slate-500 uppercase tracking-widest">Message</label>
              <textarea 
                required
                rows={4} 
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your quality assurance needs..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-slate-200 resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-5 rounded-xl font-orbitron tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${
                isSent 
                ? 'bg-emerald-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]' 
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)]'
              }`}
            >
              <AnimatePresence mode="wait">
                {isSending ? (
                  <motion.span 
                    key="sending"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    OPENING EMAIL...
                  </motion.span>
                ) : isSent ? (
                  <motion.span 
                    key="sent"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    SENT TO MAIL <CheckCircle size={18} />
                  </motion.span>
                ) : (
                  <motion.span 
                    key="default"
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    SEND MESSAGE <Send size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
