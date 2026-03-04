import React from 'react';
import { 
  MapPin, Clock, Car, Phone, 
  Send, Star, Waves, ShieldCheck, 
  ChevronRight, Landmark, Info, ArrowUpRight, CheckCircle 
} from 'lucide-react';

const PrayagrajTourPackages = () => {
  
  const travelRoutes = [
    { 
      route: "Prayagraj → Ayodhya", 
      dist: "170 km", 
      train: "4–5h", 
      car: "4–4.5h", 
      img: "src/images/Ram-Mandir-Ayodhya-Tour.jpg",
      tag: "Temple City"
    },
    { 
      route: "Prayagraj → Kashi", 
      dist: "120 km", 
      train: "2.5–3h", 
      car: "2.5–3h", 
      img: "src/images/kashi-vishhwanath-temple-varanasi-india.jpg",
      tag: "Spiritual Ghats"
    },
    { 
      route: "Prayagraj → Gorakhpur", 
      dist: "270 km", 
      train: "5–6h", 
      car: "6h", 
      img: "src/images/Visit-Gorakhnath-Temple.jpg",
      tag: "Nepal Gateway"
    },
    { 
      route: "Prayagraj → Lucknow", 
      dist: "200 km", 
      train: "4.5–5h", 
      car: "4.5–5h", 
      img: "src/images/luknow.jpg",
      tag: "Nawab City"
    },
    { 
      route: "Prayagraj → Chitrakoot", 
      dist: "115 km", 
      train: "3–3.5h", 
      car: "3–3.5h", 
      img: "src/images/Chitrakoot2.jpg",
      tag: "Sacred Forest"
    },
    { 
      route: "Prayagraj → Nepal Border", 
      dist: "320 km", 
      train: "Via GKP", 
      car: "7–8h", 
      img: "src/images/GettyImages-1439040510.webp",
      tag: "Cross Border"
    }
  ];

  const whyVisit = [
    "Triveni Sangam – confluence of Ganga, Yamuna & Saraswati",
    "Famous Ardh Kumbh & Maha Kumbh city",
    "Spiritual temples, ancient forts & sacred ghats",
    "Ideal for pilgrimage, religious rituals & cultural journeys"
  ];

  const topAttractions = [
    "Bade Hanuman Ji Temple",
    "Akshayavat Tree",
    "Swaraj Bhawan & Anand Bhawan Museum",
    "Alopi Devi Temple"
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen selection:bg-orange-100 pt-20 lg:pt-28 font-sans">
      
      {/* 1. TOP HEADING SECTION */}
      <section className="px-4 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto text-center md:text-left border-b border-slate-100 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <a href="/" className="hover:text-orange-600">Home</a>
                <span>/</span>
                <span className="text-slate-900 uppercase">Tour Packages</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Prayagraj <br/>
                <span className="text-orange-600 font-serif italic font-medium normal-case tracking-normal">Tour Packages</span>
              </h1>
            </div>
            <div className="flex items-center gap-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-50">
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 leading-none">Established Since</p>
                <p className="text-sm font-black text-slate-900 leading-none">1999</p>
              </div>
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white">
                <ShieldCheck size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MULTI-IMAGE HERO SECTION */}
      <section className="px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 h-auto lg:h-[60vh]">
          <div className="lg:w-2/3 h-[300px] lg:h-full relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] group shadow-xl">
            <img 
              src="src/images/Triveni-Sangam.webp" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Prayagraj Sangam"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="bg-orange-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 inline-block">Best Seller</span>
              <h2 className="text-xl lg:text-3xl font-bold italic tracking-tight uppercase">"Triveni Sangam & Spiritual Sangam Darshan"</h2>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-4">
            <div className="h-[180px] lg:h-1/2 relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-md group">
              <img src="src/images/anand-bhawan-prayagraj-uttar-pradesh-2.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Anand Bhawan" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center p-4">
                <p className="text-white font-bold uppercase tracking-widest text-lg">Historic Heritage</p>
              </div>
            </div>
            <div className="h-[180px] lg:h-1/2 bg-blue-900 rounded-[2rem] lg:rounded-[3rem] p-8 flex flex-col justify-center text-white relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500 blur-[80px] opacity-30"></div>
               <Landmark size={32} className="mb-3 text-orange-400" />
               <h3 className="text-xl font-black leading-tight mb-2 uppercase italic text-white">Kumbh Mela <br/> Destination</h3>
               <p className="text-[10px] font-bold text-blue-300 tracking-widest uppercase">Verified Expert Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW DETAILED DESCRIPTION SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Complete Sangam Experience</h2>
            <div className="space-y-6 text-slate-600 font-medium italic leading-relaxed">
              <p>
                Our Prayagraj Tour Packages offer a complete spiritual and cultural experience, including Triveni Sangam Darshan, Bade Hanuman Ji Temple visit, and sightseeing across the historic city of Prayagraj. 
                From sacred rituals to heritage exploration, we provide smooth travel, clean vehicles, and reliable service for a peaceful pilgrimage.
              </p>
              <p>
                Whether you’re traveling solo, with family, or with groups, our packages ensure a comfortable and devotional Prayagraj journey. 
                We provide affordable Prayagraj taxi services, railway station/airport pick-up, and guided tours covering all major temples, ghats, and historical landmarks.
              </p>
              <p>
                Enjoy customized 1-day, 2-day, and extended Prayagraj tour itineraries designed for Sangam Snan, Darshan, and cultural exploration.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner">
             <div className="space-y-6">
                <div className="flex items-start gap-4">
                   <div className="bg-orange-600 p-2 rounded-lg text-white shrink-0"><CheckCircle size={18}/></div>
                   <p className="text-xs font-bold text-slate-700 uppercase tracking-tight">Sangam Snan & Darshan</p>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-orange-600 p-2 rounded-lg text-white shrink-0"><CheckCircle size={18}/></div>
                   <p className="text-xs font-bold text-slate-700 uppercase tracking-tight">Airport / Station Pickup</p>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-orange-600 p-2 rounded-lg text-white shrink-0"><CheckCircle size={18}/></div>
                   <p className="text-xs font-bold text-slate-700 uppercase tracking-tight">Heritage Sightseeing</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. WHY VISIT & ATTRACTIONS SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <div className="bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-center">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-8 border-l-8 border-blue-900 pl-6 uppercase tracking-tighter italic text-center lg:text-left">Why Visit Prayagraj?</h2>
          <ul className="space-y-5">
            {whyVisit.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm lg:text-base text-slate-600 font-bold italic leading-relaxed">
                <CheckCircle size={22} className="text-blue-900 shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 p-8 lg:p-12 rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 blur-[100px] opacity-20"></div>
          <h2 className="text-2xl lg:text-3xl font-black mb-8 border-l-8 border-orange-600 pl-6 uppercase tracking-tighter italic text-center lg:text-left">Top Attractions</h2>
          <ul className="space-y-5">
            {topAttractions.map((item, i) => (
              <li key={i} className="flex gap-4 text-sm lg:text-base opacity-90 font-bold italic leading-relaxed text-center lg:text-left">
                <Star size={22} className="text-orange-600 shrink-0" fill="currentColor" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. TRAVEL CARDS WITH TOP IMAGES */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-2xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-3 text-center">Travel Connections</h2>
          <p className="text-slate-500 font-bold text-xs uppercase tracking-widest text-center">Major routes connected from Prayagraj</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {travelRoutes.map((item, i) => (
            <div key={i} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="h-[220px] relative overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.route} />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest shadow-lg">{item.tag}</span>
                </div>
              </div>
              <div className="p-8 flex-1">
                <h4 className="font-black text-xl text-slate-800 mb-6 uppercase tracking-tight flex items-center justify-between">
                  {item.route}
                  <ArrowUpRight size={20} className="text-slate-300 group-hover:text-orange-600 transition-colors"/>
                </h4>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic"><MapPin size={14} className="text-orange-500"/> Dist</span>
                    <span className="text-slate-700">{item.dist}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic"><Clock size={14} className="text-blue-600"/> Train</span>
                    <span className="text-slate-700">{item.train}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic"><Car size={14} className="text-orange-600"/> Road</span>
                    <span className="text-slate-700">{item.car}</span>
                  </div>
                </div>
                <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-black text-[10px] tracking-[0.2em] hover:bg-orange-600 transition-all flex items-center justify-center gap-2 uppercase shadow-lg shadow-slate-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION FOOTER */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 p-12 lg:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter uppercase leading-none italic text-center">Experience Prayagraj</h2>
           <p className="text-slate-400 text-sm lg:text-base mb-10 italic font-medium opacity-80 leading-relaxed max-w-2xl mx-auto text-center">
             "Our packages offer a complete spiritual experience. Contact us 24/7 for bookings!"
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-orange-600 text-white px-10 py-4 rounded-2xl font-black text-[11px] tracking-widest transition-transform hover:scale-105 shadow-xl uppercase">
                 Call: +91 8576000084
              </a>
              <div className="text-left">
                 <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1 text-slate-500 text-center lg:text-left">Head Office</p>
                 <p className="font-bold text-xs text-slate-300 italic text-center lg:text-left">Gorakhpur (U.P) - 273001</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default PrayagrajTourPackages;