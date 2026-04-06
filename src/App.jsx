import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Wrench, ShieldAlert, Zap, Phone, MapPin, Clock, ChevronRight } from 'lucide-react';

const Nav = () => (
  <nav className="fixed w-full z-50 mix-blend-difference top-0 left-0 p-4 md:p-6 flex justify-between items-center text-[var(--color-brand-white)] border-b border-[var(--color-brand-white)]/20">
    <div className="font-[var(--font-display)] text-2xl md:text-3xl font-bold tracking-tighter uppercase flex items-center gap-2">
      <div className="w-3 h-3 md:w-4 md:h-4 bg-[var(--color-brand-neon)] animate-pulse"></div>
      SRB
    </div>
    <div className="hidden lg:flex gap-8 font-mono text-sm uppercase tracking-widest">
      <a href="#services" className="hover:text-[var(--color-brand-neon)] transition-colors">Layanan</a>
      <a href="#inventory" className="hover:text-[var(--color-brand-neon)] transition-colors">Katalog</a>
      <a href="#contact" className="hover:text-[var(--color-brand-neon)] transition-colors">Kontak</a>
    </div>
    <a href="https://wa.me/6285323009197" target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-neon)] text-black px-4 py-2 md:px-6 md:py-2 font-mono text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-colors flex items-center gap-2">
      <span className="hidden sm:inline">Hubungi Kami</span>
      <span className="sm:hidden">Chat WA</span>
      <ArrowUpRight size={16} />
    </a>
  </nav>
);

const Marquee = () => {
  return (
    <div className="bg-[var(--color-brand-neon)] text-black py-3 overflow-hidden whitespace-nowrap border-y-2 border-black transform -rotate-1 scale-105 relative z-20 mt-10">
      <motion.div 
        className="inline-block font-[var(--font-display)] text-2xl font-bold uppercase tracking-wider"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
      >
        <span>&nbsp;/// JUAL BELI BAN BARU & BEKAS /// SPOORING 3D /// BALANCING PRESISI /// ISI NITROGEN /// KANISIR BAN /// LAYANAN PROFESIONAL ///</span>
        <span>&nbsp;/// JUAL BELI BAN BARU & BEKAS /// SPOORING 3D /// BALANCING PRESISI /// ISI NITROGEN /// KANISIR BAN /// LAYANAN PROFESIONAL ///</span>
      </motion.div>
    </div>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen min-h-[600px] md:min-h-[800px] flex flex-col justify-center overflow-hidden pt-20 px-4 md:px-6">
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
        <motion.img 
          style={{ y }}
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=industrial%20car%20tire%20close%20up%20studio%20lighting%20dark%20background%20highly%20detailed&image_size=landscape_16_9" 
          alt="Latar Belakang Ban" 
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-asphalt)] via-transparent to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ opacity }}
        >
          <h2 className="text-[var(--color-brand-neon)] font-mono text-xs sm:text-sm md:text-lg mb-4 tracking-[0.2em] uppercase flex items-center gap-2 md:gap-4">
            <span className="w-6 md:w-12 h-px bg-[var(--color-brand-neon)]"></span>
            Pusat Layanan Ban Terlengkap
          </h2>
          <h1 className="font-[var(--font-display)] text-[15vw] md:text-[12vw] leading-[0.85] font-bold uppercase m-0 p-0 text-transparent bg-clip-text bg-white" style={{ WebkitTextStroke: '1px white' }}>
            <span className="glitch-text block" data-text="SRB">SRB</span>
            <span className="block text-[var(--color-brand-neon)]" style={{ WebkitTextStroke: '0' }}>TIRE SHOP</span>
          </h1>
          <p className="font-mono mt-6 md:mt-8 max-w-md text-gray-400 text-xs md:text-sm leading-relaxed border-l-2 border-[var(--color-brand-neon)] pl-4 md:pl-6">
            Solusi terbaik untuk kendaraan Anda. Kami melayani jual beli ban baru dan bekas (copotan) berkualitas, 
            dilengkapi dengan layanan spooring, balancing, isi nitrogen, dan kanisir ban terpercaya.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Jual Beli Ban", icon: <Wrench size={32} />, desc: "Menyediakan berbagai pilihan ban baru dan bekas (copotan) dengan kondisi 80-95%, harga bersahabat dan kualitas terjamin." },
    { title: "Spooring & Balancing", icon: <Zap size={32} />, desc: "Penyetelan sudut roda (spooring) dan penyeimbangan roda (balancing) presisi tinggi untuk kenyamanan dan keawetan ban. Termasuk isi Nitrogen." },
    { title: "Kanisir Ban", icon: <ShieldAlert size={32} />, desc: "Layanan vulkanisir/kanisir ban profesional untuk memperpanjang umur ban Anda secara ekonomis tanpa mengorbankan keamanan." }
  ];

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 relative bg-[var(--color-brand-asphalt)] z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 border-b border-gray-800 pb-8">
          <h2 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-8xl font-bold uppercase text-white/10 leading-none">
            01 / <span className="text-white block sm:inline mt-2 sm:mt-0">Layanan</span>
          </h2>
          <p className="font-mono text-[var(--color-brand-neon)] text-xs md:text-base max-w-xs text-left md:text-right mt-6 md:mt-0">
            [ PERAWATAN & IMPLEMENTASI ]
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((srv, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group border border-gray-800 p-6 md:p-8 hover:border-[var(--color-brand-neon)] transition-colors bg-[var(--color-brand-concrete)] relative overflow-hidden flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 group-hover:text-[var(--color-brand-neon)] transition-all transform group-hover:scale-110">
                {srv.icon}
              </div>
              <div className="text-[var(--color-brand-neon)] font-mono text-xs md:text-sm mb-8 md:mb-12">SRB_SYS_{i+1}</div>
              <h3 className="font-[var(--font-display)] text-2xl md:text-3xl font-bold uppercase mb-4">{srv.title}</h3>
              <p className="font-mono text-gray-400 text-xs md:text-sm leading-relaxed flex-grow">{srv.desc}</p>
              
              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-white group-hover:text-[var(--color-brand-neon)] transition-colors cursor-pointer uppercase tracking-widest">
                Pelajari <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Inventory = () => {
  const tires = [
    { name: "BAN BARU PREMIUM", type: "Berbagai Merk Tersedia", price: "Hubungi", img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=sleek%20sports%20car%20tire%20on%20alloy%20wheel%20dark%20background&image_size=square" },
    { name: "BAN BEKAS COPOTAN", type: "Kondisi 80% - 95%", price: "Mulai Rp 100k", img: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=off%20road%20mud%20tire%20tread%20pattern%20close%20up%20macro%20photography&image_size=square" }
  ];

  return (
    <section id="inventory" className="py-20 md:py-32 px-4 md:px-6 bg-[var(--color-brand-concrete)] border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-[var(--font-display)] text-5xl sm:text-6xl md:text-8xl font-bold uppercase text-white/10 mb-12 md:mb-16 border-b border-gray-800 pb-8 leading-none">
          02 / <span className="text-white block sm:inline mt-2 sm:mt-0">Katalog</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {tires.map((tire, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-[var(--color-brand-asphalt)] flex flex-col sm:flex-row overflow-hidden border border-gray-800 hover:border-white transition-colors"
            >
              <div className="w-full sm:w-2/5 md:w-1/2 aspect-square sm:aspect-auto relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 mix-blend-multiply"></div>
                <img src={tire.img} alt={tire.name} className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
              </div>
              <div className="w-full sm:w-3/5 md:w-1/2 p-6 md:p-8 flex flex-col justify-between relative z-20">
                <div>
                  <div className="font-mono text-[var(--color-brand-neon)] text-[10px] md:text-xs tracking-widest uppercase mb-2 md:mb-4">{tire.type}</div>
                  <h3 className="font-[var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-4">{tire.name}</h3>
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-mono mb-4 md:mb-6">{tire.price}</div>
                  <button className="w-full bg-transparent border border-white text-white py-3 md:py-4 font-mono uppercase text-xs md:text-sm tracking-widest hover:bg-[var(--color-brand-neon)] hover:text-black hover:border-[var(--color-brand-neon)] transition-all">
                    Cek Stok
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-[var(--color-brand-asphalt)] pt-20 md:pt-32 pb-8 md:pb-12 px-4 md:px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-12 md:pb-16 mb-8 md:mb-12">
      <div className="lg:col-span-2">
        <h2 className="font-[var(--font-display)] text-4xl md:text-5xl font-bold uppercase mb-6 flex items-center gap-3 md:gap-4">
          <div className="w-4 h-4 md:w-6 md:h-6 bg-[var(--color-brand-neon)]"></div>
          SRB
        </h2>
        <p className="font-mono text-gray-400 text-xs md:text-sm max-w-sm leading-relaxed">
          Pusat layanan ban profesional. Jual beli ban baru/bekas, spesialis spooring, balancing, isi nitrogen, dan kanisir ban berkualitas dengan harga bersahabat.
        </p>
      </div>
      
      <div>
        <h4 className="font-mono text-white text-lg mb-6 uppercase tracking-widest">Lokasi</h4>
        <ul className="font-mono text-gray-400 text-sm space-y-4">
          <li className="flex items-start gap-3 hover:text-[var(--color-brand-neon)] transition-colors cursor-pointer group">
            <MapPin size={18} className="shrink-0 mt-0.5" />
            <a href="https://maps.app.goo.gl/pYfJnqMkASsQ2bRC6" target="_blank" rel="noopener noreferrer" className="flex flex-col group-hover:text-[var(--color-brand-neon)] transition-colors">
              <span>Jl. Siliwangi No.1, Rancagoong, Kec. Cilaku</span>
              <span>Kabupaten Cianjur, Jawa Barat</span>
            </a>
          </li>
          <li className="flex items-center gap-3 hover:text-[var(--color-brand-neon)] transition-colors cursor-pointer">
            <Phone size={18} />
            <a href="https://wa.me/6285323009197" target="_blank" rel="noopener noreferrer">+62 853-2300-9197</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-mono text-white text-lg mb-6 uppercase tracking-widest">Jam Buka</h4>
        <ul className="font-mono text-gray-400 text-sm space-y-4">
          <li className="flex items-center gap-3">
            <Clock size={18} />
            <div>
              <div className="text-white">SENIN - SABTU</div>
              <div>08:00 - 17:00</div>
            </div>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-[18px]"></div>
            <div>
              <div className="text-white">MINGGU</div>
              <div>08:00 - 15:00</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs text-gray-600 uppercase tracking-widest">
      <div>© 2026 SRB TIRE SHOP. HAK CIPTA DILINDUNGI.</div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white transition-colors">PRIVASI</a>
        <a href="#" className="hover:text-white transition-colors">SYARAT & KETENTUAN</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="bg-[var(--color-brand-asphalt)] min-h-screen text-[var(--color-brand-white)] selection:bg-[var(--color-brand-neon)] selection:text-black">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      
      {/* Mid-section image breaker */}
      <section className="h-[30vh] md:h-[40vh] min-h-[300px] md:min-h-[400px] relative overflow-hidden border-y-2 border-[var(--color-brand-neon)]">
        <div className="absolute inset-0 bg-[var(--color-brand-neon)] mix-blend-color z-10 opacity-20"></div>
        <img 
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=mechanic%20working%20on%20car%20tire%20in%20dark%20industrial%20garage%20neon%20lighting&image_size=landscape_16_9" 
          alt="Bengkel SRB" 
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-5xl md:text-8xl font-bold uppercase text-white mix-blend-overlay text-center leading-none">
            KUALITAS TERJAMIN <br/> HARGA BERSAHABAT
          </h2>
        </div>
      </section>

      <Inventory />
      <Footer />
    </div>
  );
}

export default App;