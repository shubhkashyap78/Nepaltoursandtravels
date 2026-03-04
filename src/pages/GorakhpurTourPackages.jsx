import React from 'react';
import { 
  MapPin, Clock, Car, Star, ShieldCheck, 
  ChevronRight, Landmark, ArrowUpRight, CheckCircle 
} from 'lucide-react';

const GorakhpurTourPackages = () => {
  
  const travelRoutes = [
    { 
      route: "Gorakhpur → Kashi", 
      dist: "230 km", 
      train: "4.5–5h", 
      car: "5h", 
      img: "src/images/kashi-vishhwanath-temple-varanasi-india.jpg",
      tag: "Spiritual Hub"
    },
    { 
      route: "Gorakhpur → Ayodhya", 
      dist: "260 km", 
      train: "5–6h", 
      car: "5–6h", 
      img: "src/images/Ram-Mandir-Ayodhya-Tour.jpg",
      tag: "Ram Janmabhoomi"
    },
    { 
      route: "Gorakhpur → Prayagraj", 
      dist: "340 km", 
      train: "6–7h", 
      car: "7h", 
      img: "src/images/Triveni-Sangam.webp",
      tag: "Sangam City"
    },
    { 
      route: "Gorakhpur → Lucknow", 
      dist: "275 km", 
      train: "5–6h", 
      car: "6h", 
      img: "src/images/luknow.jpg",
      tag: "Capital City"
    },
    { 
      route: "Gorakhpur → Kushinagar", 
      dist: "55 km", 
      train: "Direct Bus", 
      car: "1.5–2h", 
      img: "src/images/kushinagar-banner2.webp",
      tag: "Buddhist Path"
    },
    { 
      route: "Gorakhpur → Nepal Border", 
      dist: "95 km", 
      train: "Via Sonauli", 
      car: "3–4h", 
      img: "src/images/GettyImages-1439040510.webp",
    //   tag: "International Gateway"
    }
  ];

  const whyVisit = [
    "Home of the famous Gorakhnath Temple",
    "Gateway to Nepal, Kushinagar & Lumbini",
    "Peaceful lakes and scenic surroundings",
    "Cultural museums & heritage attractions",
    "Ideal for pilgrimage, family tours & short trips"
  ];

  const topAttractions = [
    "Gorakhnath Temple",
    "Geeta Press",
    "Nauka Vihar (Ramgarh Tal)",
    "Gorakhpur Railway Museum",
    "Marine Drive Gorakhpur"
  ];

  return (
    <div className="bg-[#FDFDFD] min-h-screen pt-20 lg:pt-28 font-sans overflow-x-hidden">
      
      {/* 1. TOP HEADING SECTION */}
      <section className="px-4 lg:px-8 mb-10">
        <div className="max-w-7xl mx-auto text-center md:text-left border-b border-slate-100 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center justify-center md:justify-start gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <a href="/" className="hover:text-orange-600 transition-colors">Home</a>
                <span>/</span>
                <span className="text-slate-900 uppercase">Tour Packages</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Gorakhpur <br/>
                <span className="text-orange-600 font-serif italic font-medium normal-case tracking-normal">Tour Packages</span>
              </h1>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-4 bg-white p-3 rounded-2xl shadow-sm border border-slate-50">
              <div className="text-right">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1 leading-none">Established Since</p>
                <p className="text-sm font-black text-slate-900 leading-none">1999</p>
              </div>
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center text-white shadow-md">
                <ShieldCheck size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MULTI-IMAGE HERO SECTION */}
      <section className="px-2 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 h-auto lg:h-[60vh]">
          <div className="lg:w-2/3 h-[300px] lg:h-full relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] group shadow-xl">
            <img 
              src="src\images\gorakhpur.webp" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Gorakhnath Temple"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white pr-4">
              <span className="bg-orange-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 inline-block shadow-lg leading-none">City of Seer</span>
              <h2 className="text-xl lg:text-3xl font-bold italic tracking-tight uppercase leading-tight">"Spiritual Gateway & Cultural Heritage"</h2>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-4">
            <div className="w-1/2 lg:w-full h-[180px] lg:h-1/2 relative overflow-hidden rounded-2xl lg:rounded-[3rem] shadow-md group border border-slate-100">
              <img src="src\images\Nauka-Vihar-in.jpg" className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Ramgarh Tal" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center p-4">
                <p className="text-white font-bold uppercase tracking-widest text-sm lg:text-lg">Scenic Nauka Vihar</p>
              </div>
            </div>
            <div className="w-1/2 lg:w-full h-[180px] lg:h-1/2 bg-blue-900 rounded-2xl lg:rounded-[3rem] p-4 lg:p-8 flex flex-col justify-center text-white relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600 blur-[80px] opacity-30"></div>
               <Landmark size={32} className="mb-3 text-orange-400 hidden lg:block" />
               <h3 className="text-xs lg:text-xl font-black leading-tight mb-1 uppercase italic text-white text-left">Local <br/> Experts</h3>
               <p className="text-[8px] lg:text-[10px] font-bold text-blue-300 tracking-widest uppercase leading-none text-left">Trusted Since 1999</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICE DESCRIPTION */}
      <section className="py-12 lg:py-20 px-4 lg:px-6 max-w-7xl mx-auto">
        <div className="bg-white p-6 lg:p-16 rounded-2xl lg:rounded-[4rem] shadow-sm border border-slate-100">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            <div className="lg:col-span-8">
              <h2 className="text-xl lg:text-3xl font-black text-slate-900 mb-4 lg:mb-6 uppercase tracking-tighter border-l-8 border-orange-600 pl-6 leading-none">
                Complete Travel Experience
              </h2>
              <div className="space-y-4 lg:space-y-6 text-slate-600 font-medium italic leading-relaxed text-xs lg:text-base">
                <p>
                  Our Gorakhpur Tour Packages offer a complete travel experience covering spiritual sites, cultural attractions, family-friendly spots, and nearby pilgrimage destinations. From Gorakhnath Temple Darshan to relaxing at Nauka Vihar and exploring heritage locations, we provide smooth travel, clean vehicles, and reliable service for a comfortable journey.
                </p>
                <p>
                  Whether you are traveling solo, with family, or in a group, our Gorakhpur packages are designed for short trips, religious tours, and Nepal border travel. Enjoy affordable pricing, experienced drivers, and well-planned itineraries for a stress-free Gorakhpur sightseeing experience.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4">
               {["Gorakhnath Darshan", "Nepal Gateway", "Trusted Service"].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-4 lg:p-6 rounded-xl lg:rounded-3xl border border-slate-100 flex items-center gap-4 group hover:bg-orange-600 transition-colors duration-300">
                    <CheckCircle className="text-orange-600 group-hover:text-white shrink-0" size={24}/>
                    <p className="text-[10px] font-black uppercase text-slate-700 group-hover:text-white tracking-widest">{item}</p>
                  </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY VISIT & ATTRACTIONS SPLIT BENTO */}
      <section className="pb-12 lg:pb-20 px-4 lg:px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 lg:gap-10">
        <div className="bg-white p-6 lg:p-12 rounded-2xl lg:rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col justify-center">
          <h2 className="text-lg lg:text-2xl font-black text-slate-900 mb-6 border-l-8 border-blue-900 pl-6 uppercase tracking-tighter italic text-left">Why Visit Gorakhpur?</h2>
          <ul className="space-y-3 lg:space-y-5">
            {whyVisit.map((item, i) => (
              <li key={i} className="flex gap-4 text-[10px] lg:text-sm text-slate-600 font-bold italic leading-relaxed">
                <CheckCircle size={20} className="text-blue-900 shrink-0 mt-0.5" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 p-6 lg:p-12 rounded-2xl lg:rounded-[2.5rem] shadow-xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 blur-[100px] opacity-20"></div>
          <h2 className="text-lg lg:text-2xl font-black mb-6 border-l-8 border-orange-600 pl-6 uppercase tracking-tighter italic text-left">Top Attractions</h2>
          <ul className="space-y-3 lg:space-y-5">
            {topAttractions.map((item, i) => (
              <li key={i} className="flex gap-4 text-[10px] lg:text-sm opacity-90 font-bold italic leading-relaxed">
                <Star size={20} className="text-orange-600 shrink-0 mt-0.5" fill="currentColor" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. TRAVEL CARDS (IMAGE TOP) */}
      <section className="py-12 lg:py-24 bg-slate-50 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto text-center mb-10 lg:mb-16">
          <h2 className="text-xl lg:text-4xl font-black text-slate-900 tracking-tighter uppercase mb-3">Distance & Transport Information</h2>
          <p className="text-slate-500 font-bold text-[10px] lg:text-xs uppercase tracking-widest text-center">Major travel routes from Gorakhpur</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          {travelRoutes.map((item, i) => (
            <div key={i} className="group bg-white rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col">
              <div className="h-[180px] lg:h-[220px] relative overflow-hidden">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.route} />
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4">
                  <span className="bg-orange-600 text-white px-2 py-0.5 lg:px-3 lg:py-1 rounded-lg text-[8px] lg:text-[9px] font-black uppercase tracking-widest shadow-lg leading-none">{item.tag}</span>
                </div>
              </div>
              <div className="p-6 lg:p-8 flex-1">
                <h4 className="font-black text-base lg:text-xl text-slate-800 mb-4 lg:mb-6 uppercase tracking-tight flex items-center justify-between">
                  {item.route}
                  <ArrowUpRight size={20} className="text-slate-300 group-hover:text-orange-600 transition-colors hidden lg:block"/>
                </h4>
                <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  <div className="flex justify-between text-[9px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic font-bold"><MapPin size={16} className="text-orange-600"/> Dist</span>
                    <span className="text-slate-700 font-bold">{item.dist}</span>
                  </div>
                  <div className="flex justify-between text-[9px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic font-bold"><Clock size={16} className="text-orange-600"/> Train</span>
                    <span className="text-slate-700 font-bold">{item.train}</span>
                  </div>
                  <div className="flex justify-between text-[9px] lg:text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span className="flex items-center gap-2 italic font-bold"><Car size={16} className="text-orange-600"/> Road</span>
                    <span className="text-slate-700 font-bold">{item.car}</span>
                  </div>
                </div>

                {/* SLATE BY DEFAULT -> ORANGE ON HOVER */}
                <button className="w-full bg-slate-900 hover:bg-orange-600 text-white py-3 lg:py-4 rounded-xl lg:rounded-2xl font-black text-[8px] lg:text-[10px] tracking-[0.3em] transition-all duration-300 flex items-center justify-center gap-2 lg:gap-3 uppercase shadow-lg group-hover:shadow-orange-900/20">
                  Book Now <ChevronRight size={16}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION FOOTER */}
      <section className="py-12 lg:py-24 px-4 lg:px-6 text-center">
        <div className="max-w-5xl mx-auto bg-slate-900 p-8 lg:p-24 rounded-[2.5rem] lg:rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
           <div className="absolute top-0 right-0 w-48 lg:w-72 h-48 lg:h-72 bg-orange-600 blur-[100px] lg:blur-[150px] opacity-20"></div>
           <h2 className="text-2xl lg:text-6xl font-black mb-4 lg:mb-8 tracking-tighter uppercase leading-none italic">Plan Your <br/><span className="text-orange-500">Gorakhpur Tour</span></h2>
           <p className="text-slate-400 text-xs lg:text-lg mb-8 lg:mb-14 italic font-medium opacity-80 leading-relaxed max-w-2xl mx-auto">
             "Explore the city with trusted local experts since 1999. Contact us 24/7 for bookings!"
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-8">
              {/* WHITE BY DEFAULT -> ORANGE ON HOVER */}
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-white hover:bg-orange-600 text-slate-900 hover:text-white px-8 lg:px-14 py-4 lg:py-6 rounded-2xl lg:rounded-3xl font-black text-[9px] lg:text-[11px] tracking-[0.2em] transition-all duration-300 hover:scale-105 shadow-2xl uppercase border-2 border-transparent hover:border-orange-600">
                 Call: +91 8576000084
              </a>
              <div className="text-center sm:text-left">
                 <p className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest leading-none mb-1 text-slate-500">Nepal Tour & Travels</p>
                 <p className="font-bold text-[10px] lg:text-xs text-slate-300 italic">Gorakhpur HQ</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default GorakhpurTourPackages;