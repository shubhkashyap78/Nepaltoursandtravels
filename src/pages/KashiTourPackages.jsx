import React from 'react';
import { 
  MapPin, Clock, Car, Phone, 
  Send, Star, Waves, ShieldCheck, 
  ChevronRight, Hotel, Globe
} from 'lucide-react';

const KashiTourPage = () => {
  
  const travelRoutes = [
    { route: "Kashi → Ayodhya", dist: "210 km", train: "4.5–6h", car: "4–5h", color: "border-orange-100 bg-orange-50/30" },
    { route: "Kashi → Prayagraj", dist: "125 km", train: "2.5–3h", car: "2.5–3h", color: "border-blue-100 bg-blue-50/30" },
    { route: "Kashi → Gorakhpur", dist: "220 km", train: "4.5–5h", car: "5h", color: "border-slate-100 bg-slate-50/30" },
    { route: "Kashi → Lucknow", dist: "325 km", train: "4–6h", car: "6h", color: "border-orange-100 bg-orange-50/30" },
    { route: "Kashi → Chitrakoot", dist: "260 km", train: "5–6h", car: "5–6h", color: "border-blue-100 bg-blue-50/30" },
    { route: "Kashi → Nepal Border", dist: "315 km", train: "Via GKP", car: "7–8h", color: "border-red-100 bg-red-50/30" }
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen selection:bg-orange-100 pt-20 lg:pt-28 font-sans">
      
      {/* 1. CLEAR & UNDERSTANDABLE TOP HEADING SECTION */}
      <section className="px-4 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto text-center md:text-left border-b border-slate-100 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <a href="/" className="hover:text-orange-600">Home</a>
                <span>/</span>
                <span className="text-slate-900">Tour Packages</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Kashi Varanasi <br/>
                <span className="text-orange-600 font-serif italic font-medium normal-case tracking-normal">Tour Packages</span>
              </h1>
            </div>
            <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-50">
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Trusted Partner</p>
                <p className="text-sm font-black text-slate-900 leading-none">Nepal Tour & Travels</p>
              </div>
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PREMIUM MULTI-IMAGE HERO */}
      <section className="px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 h-auto lg:h-[60vh]">
          <div className="lg:w-2/3 h-[300px] lg:h-full relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] group shadow-xl">
            <img 
              src="src\images\kashi-vishhwanath-temple-varanasi-india.jpg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Varanasi Ghats"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-xl lg:text-3xl font-bold italic tracking-tight">"Spiritual Kashi Vishwanath Darshan"</h2>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-4">
            <div className="h-[180px] lg:h-1/2 relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-md group">
              <img src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Ganga Aarti" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center p-4">
                <p className="text-white font-bold uppercase tracking-widest text-lg">Holy Ganga Aarti</p>
              </div>
            </div>
            <div className="h-[180px] lg:h-1/2 bg-blue-900 rounded-[2rem] lg:rounded-[3rem] p-8 flex flex-col justify-center text-white relative overflow-hidden">
               <p className="text-[10px] font-bold text-orange-400 tracking-widest uppercase mb-2">Expert Local Guides</p>
               <h3 className="text-xl font-black leading-tight mb-4 uppercase italic">Over 25 Years of Expertise</h3>
               <a href="tel:+918576000084" className="text-xs font-bold text-white flex items-center gap-2 hover:text-orange-400 transition-colors">
                 <Phone size={14}/> +91 8576000084
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRIP QUICK STATS BAR */}
      <div className="bg-blue-900 text-white py-5 px-6 mt-10 overflow-x-auto shadow-inner">
        <div className="max-w-7xl mx-auto flex gap-10 text-[11px] lg:text-sm font-bold whitespace-nowrap justify-start lg:justify-center items-center">
           <span className="flex items-center gap-2 opacity-90 font-medium tracking-tight"><Clock size={16} className="text-orange-400"/> Best Price Guarantee</span>
           <span className="flex items-center gap-2 opacity-90 font-medium tracking-tight"><Hotel size={16} className="text-orange-400"/> Clean Vehicle & Hotel</span>
           <span className="flex items-center gap-2 opacity-90 font-medium tracking-tight"><Car size={16} className="text-orange-400"/> Expert Drivers</span>
           <span className="flex items-center gap-2 opacity-90 font-medium tracking-tight"><Globe size={16} className="text-orange-400"/> Established 1999</span>
        </div>
      </div>

      {/* 4. CONTENT SECTION (CLEAN BENTO) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
              A Complete Spiritual Experience
            </h2>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-6 font-medium italic">
              Our **Kashi Tour Packages** offer a seamless travel solution for Kashi Vishwanath Darshan, 
              local sightseeing, and holy temple visits. We provide smooth city transfers with expert 
              drivers and clean vehicles for a peaceful spiritual journey.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Assi Ghat Aarti", "Sarnath Buddhist Site"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                  <Star size={14} className="text-orange-500 shrink-0" fill="currentColor"/>
                  <span className="font-bold text-slate-700 text-xs tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="bg-white p-3 rounded-[3rem] shadow-xl">
                <img src="https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200" className="rounded-[2.5rem] w-full object-cover h-[350px]" alt="Varanasi Spirit" />
             </div>
          </div>
        </div>
      </section>

      {/* 5. CLEAN TRAVEL CARDS ( NO IMAGE BACKGROUNDS ) */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase mb-3">Distance & Transport Information</h2>
            <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Major routes connected from Kashi (Varanasi)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travelRoutes.map((item, i) => (
              <div key={i} className={`group p-8 rounded-[2rem] border-2 ${item.color} shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300`}>
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-orange-600 transition-colors">
                  <Waves className="text-slate-400 group-hover:text-white" size={20}/>
                </div>
                <h4 className="font-black text-lg text-slate-800 mb-6 tracking-tight uppercase border-b border-slate-200 pb-3">{item.route}</h4>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic font-bold"><MapPin size={14} className="text-orange-500"/> Distance</span>
                    <span className="text-slate-700 font-bold">{item.dist}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic font-bold"><Clock size={14} className="text-orange-400"/> Train Time</span>
                    <span className="text-slate-700 font-bold">{item.train}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-black text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic font-bold"><Car size={14} className="text-blue-500"/> Road Time</span>
                    <span className="text-slate-700 font-bold">{item.car}</span>
                  </div>
                </div>

                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center gap-2 uppercase shadow-lg shadow-slate-200">
                  Book Now <ChevronRight size={14}/>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA FOOTER */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 p-10 lg:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-xl">
           <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter uppercase leading-none">Plan Your Spiritual Retreat</h2>
           <p className="text-slate-400 text-sm lg:text-base mb-10 italic font-medium opacity-80 leading-relaxed">
             "Contact us 24/7 for bookings or inquiries regarding your Kashi tour itinerary."
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-[11px] tracking-widest transition-transform hover:scale-105 shadow-xl uppercase">
                 Call: +91 8576000084
              </a>
              <div className="text-left text-slate-500">
                 <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Head Office</p>
                 <p className="font-bold text-xs text-slate-300">Gorakhpur (U.P) - 273001, India</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default KashiTourPage;