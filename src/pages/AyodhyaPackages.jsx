import React from 'react';
import { 
  MapPin, Clock, Car, Phone, 
  CheckCircle2, ArrowRight, ShieldCheck, 
  Flame, Sunrise, Info, Send, Calendar, Star
} from 'lucide-react';

const AyodhyaPremium = () => {
  
  const topAttractions = [
    "Ram Janmabhoomi Temple",
    "Hanuman Garhi",
    "Kanak Bhawan",
    "Nageshwar Nath Temple"
  ];

  const travelRoutes = [
    { route: "Ayodhya → Kashi (Varanasi)", dist: "210 km", train: "4.5–6h", car: "4–5h", icon: "🕉️" },
    { route: "Ayodhya → Prayagraj", dist: "167 km", train: "4h", car: "3.5–4h", icon: "🌊" },
    { route: "Ayodhya → Gorakhpur", dist: "135 km", train: "3–3.5h", car: "3h", icon: "🏛️" },
    { route: "Ayodhya → Lucknow", dist: "135 km", train: "3–4h", car: "2.5–3h", icon: "🏙️" },
    { route: "Ayodhya → Chitrakoot", dist: "270 km", train: "6–7h", car: "5–6h", icon: "⛰️" },
    { route: "Ayodhya → Nepal (Sonauli)", dist: "180 km", train: "Via GKP", car: "4–5h", icon: "🏔️" }
  ];

  return (
    <div className="bg-[#fcfcfc] text-slate-900 font-sans selection:bg-orange-200">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="src\images\Ram-Mandir-Ayodhya-Tour.jpg" 
            className="w-full h-full object-cover"
            alt="Ayodhya Ram Mandir"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#fcfcfc]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 mt-[-10vh]">
          <div className="flex justify-center mb-6">
            <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-6 py-2 rounded-full text-xs font-black tracking-[0.3em] uppercase">
              Spiritual Odyssey
            </span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter">
            AYODHYA
          </h1>
          <p className="text-orange-400 text-xl md:text-3xl font-light max-w-3xl mx-auto italic drop-shadow-md">
            "Home of Shri Ram Janmabhoomi"
          </p>
        </div>

        {/* Floating Quick Contact */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center gap-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Call Expert</span>
            <span className="font-black text-orange-600">+91 8576000084</span>
          </div>
          <div className="h-10 w-[1px] bg-slate-100"></div>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-black transition-all">
            Book Now
          </button>
        </div>
      </section>

      {/* 2. BENTO GRID OVERVIEW */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-8 bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-orange-100"><Star size={120} fill="currentColor"/></div>
            <h2 className="text-4xl font-black text-slate-900 mb-8 relative">Why Visit Ayodhya?</h2>
            <div className="grid md:grid-cols-2 gap-8 relative">
              <p className="text-slate-500 leading-relaxed">
                Ayodhya is perfect for family trips and pilgrimage tourism, offering beautiful ghats on the Sarayu River and ancient temples in a peaceful environment.
              </p>
              <div className="space-y-4">
                {topAttractions.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl hover:scale-105 transition-transform">
                    <MapPin className="text-orange-500" size={18}/>
                    <span className="font-bold text-slate-700 text-sm tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-orange-600 p-12 rounded-[3rem] text-white flex flex-col justify-center">
            <ShieldCheck size={48} className="mb-6" />
            <h3 className="text-2xl font-black mb-4">Safe & Comfortable</h3>
            <p className="opacity-90 font-medium leading-relaxed">
              Trusted service since 1999 with expert drivers and clean, flexible pick-up options.
            </p>
          </div>

        </div>
      </section>

      {/* 3. NEUMORPHIC TRAVEL DATA */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Travel Routes</h2>
            <p className="text-slate-400 mt-2 font-medium">Detailed distance and transport information</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelRoutes.map((route, i) => (
              <div key={i} className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100">
                <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500 inline-block">{route.icon}</div>
                <h4 className="font-black text-xl mb-8 text-slate-800">{route.route}</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Distance</span>
                    <span className="text-sm font-black text-slate-700">{route.dist}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Train</span>
                    <span className="text-sm font-black text-slate-700">{route.train}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-50 pb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bus/Car</span>
                    <span className="text-sm font-black text-slate-700">{route.car}</span>
                  </div>
                </div>

                <button className="w-full mt-10 bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 group-hover:bg-orange-600 transition-colors">
                  Book Now <Send size={16}/>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MODERN FOOTER SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Calendar className="mx-auto text-orange-500 mb-8" size={64}/>
          <h2 className="text-5xl font-black mb-8">Ready for Darshan?</h2>
          <p className="text-slate-500 text-lg mb-12 font-medium leading-relaxed">
            We provide affordable taxi services and smooth city transfers. Contact us 24/7 for a peaceful, well-planned spiritual journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:+918576000084" className="w-full sm:w-auto bg-black text-white px-12 py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-all">
              Call Now
            </a>
            <div className="text-left">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Head Office</p>
              <p className="font-bold text-slate-700 leading-tight">Gorakhpur (U.P) - 273001</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AyodhyaPremium;