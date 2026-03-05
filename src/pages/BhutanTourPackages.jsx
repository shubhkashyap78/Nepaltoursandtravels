import React from 'react';
import { 
  MapPin, Star, ShieldCheck, Zap, 
  ChevronRight, Phone, Globe, Info, 
  CheckCircle, ArrowUpRight, Send, Award, Headphones 
} from 'lucide-react';

const BhutanTourPackages = () => {

  const destinations = [
    { 
      name: "Paro Taktsang", 
      rating: 5.0, 
      img: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/pexels-peng-lim-6377-910368.jpg",
      tag: "Iconic Monastery"
    },
    { 
      name: "Punakha Dzong", 
      rating: 4.8, 
      img: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/palace-2725141_640.jpg",
      tag: "Architectural Marvel"
    },
    { 
      name: "Thimphu", 
      rating: 4.9, 
      img: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/Thimphu.jpg",
      tag: "Capital Heart"
    },
    { 
      name: "Phobjikha Valley", 
      rating: 4.9, 
      img: "https://nepaltoursandtravels.com/wp-content/uploads/2025/12/phobjikha-valley-in-bhutan-4897677_640.jpg",
      tag: "Scenic Nature"
    }
  ];

  const highlights = [
    "Fast & reliable INR → BTN currency exchange",
    "Best rates compared to banks and airports in Bhutan",
    "100% safe, secure & fully transparent service",
    "Trusted by thousands of India—Bhutan travelers",
    "Instant cash exchange with no hidden fees",
    "Verified & authorized exchange facility"
  ];

  const advantages = [
    "No long queues—quick and smooth service",
    "Honest, real-time market rates for major currencies",
    "Support available for tourists at border areas",
    "Office pickup & doorstep support for tour customers",
    "Valid receipts provided for every transaction",
    "Support available for tourists at border areas"
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen selection:bg-blue-100 pt-20 lg:pt-28 font-sans">
      
      {/* 1. CLEAR TOP HEADING SECTION */}
      <section className="px-4 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto text-center md:text-left border-b border-slate-100 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                <a href="/" className="hover:text-blue-600">Home</a>
                <span>/</span>
                <span className="text-slate-900">Tour Packages</span>
              </nav>
              <h1 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                Bhutan <br/>
                <span className="text-blue-600 font-serif italic font-medium normal-case tracking-normal">Tour Packages</span>
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

      {/* 2. PREMIUM MULTI-IMAGE HERO SECTION */}
      <section className="px-4 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 h-auto lg:h-[65vh]">
          <div className="lg:w-2/3 h-[350px] lg:h-full relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] group shadow-2xl">
            <img 
              src="https://nepaltoursandtravels.com/wp-content/uploads/2025/12/pexels-peng-lim-6377-910368.jpg" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              alt="Paro Taktsang Bhutan"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <span className="bg-blue-600 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Established 1999</span>
              <h2 className="text-2xl lg:text-4xl font-bold italic tracking-tight">"Where Tradition Meets Tranquility"</h2>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col gap-4">
            <div className="h-[200px] lg:h-1/2 relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] shadow-xl group">
              <img src="https://nepaltoursandtravels.com/wp-content/uploads/2025/12/palace-2725141_640.jpg" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Punakha Dzong" />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <p className="text-white font-black uppercase tracking-widest text-xl text-center px-4">Architectural <br/>Marvels</p>
              </div>
            </div>
            <div className="h-[200px] lg:h-1/2 bg-blue-900 rounded-[2.5rem] lg:rounded-[3rem] p-10 flex flex-col justify-center text-white relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-400 blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <Zap size={32} className="mb-4 text-blue-400" />
              <h3 className="text-xl font-black leading-tight mb-2 uppercase italic text-white">Instant <br/> Currency Exchange</h3>
              <p className="text-[10px] font-bold text-blue-300 tracking-widest uppercase">Best Market Rates</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. NEW INTRODUCTORY DESCRIPTION SECTION */}
      <section className="py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="bg-white p-8 lg:p-16 rounded-[3rem] shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
                Discover Nature’s Untouched Beauty
              </h2>
              <p className="text-slate-600 text-sm lg:text-lg font-medium italic leading-relaxed">
                Bhutan, the mystical kingdom nestled in the Himalayas, offers a perfect blend of culture, spirituality, and natural beauty. 
                From ancient monasteries perched on cliffs to serene valleys and vibrant festivals, our Bhutan tours promise an unforgettable journey. 
                Explore the land where tradition meets tranquility.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center">
               <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-center">
                  <Globe className="text-blue-600 mx-auto mb-3" size={32}/>
                  <p className="text-[10px] font-black text-blue-900 uppercase tracking-[0.2em]">Himalayan Gateway</p>
                  <p className="text-xs font-bold text-slate-500 mt-1 uppercase">Customizable Packages</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESTINATIONS GRID */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tighter uppercase mb-3 text-center">Top Bhutan Destinations</h2>
          <p className="text-slate-500 font-bold text-xs lg:text-sm uppercase tracking-widest">Explore the mystical kingdom nestled in the Himalayas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, i) => (
            <div key={i} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
               <div className="h-[250px] relative overflow-hidden">
                  <img src={dest.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={dest.name} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                     <Star size={12} className="text-orange-500" fill="currentColor"/>
                     <span className="text-[10px] font-black text-slate-900">{dest.rating}</span>
                  </div>
               </div>
               <div className="p-6">
                  <h4 className="font-black text-lg text-slate-800 mb-4 uppercase tracking-tight">{dest.name}</h4>
                  <button className="w-full border-2 border-slate-900 text-slate-900 py-3 rounded-xl font-black text-[10px] tracking-widest uppercase hover:bg-slate-900 hover:text-white transition-all flex items-center justify-center gap-2">
                     Book Now <ArrowUpRight size={14}/>
                  </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US / ADVANTAGES SECTION */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tighter">Why Choose Us</h2>
            <p className="text-blue-600 font-bold text-xs tracking-[0.2em] mt-2">ADVANTAGES FOR BHUTAN TOURISTS</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-inner">
               <h3 className="text-xl font-black text-slate-900 mb-8 border-l-8 border-blue-600 pl-4 uppercase">Trip Highlights</h3>
               <ul className="space-y-6">
                  {highlights.map((text, i) => (
                    <li key={i} className="flex gap-4 text-sm lg:text-base text-slate-600 font-bold italic leading-relaxed">
                      <CheckCircle size={22} className="text-blue-600 shrink-0" />
                      {text}
                    </li>
                  ))}
               </ul>
            </div>

            <div className="flex flex-col justify-between space-y-8">
               <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:bg-blue-600 transition-colors">
                     <Award className="text-blue-600 mb-4 group-hover:text-white" size={32} />
                     <p className="text-xs font-black uppercase text-slate-400 group-hover:text-white opacity-60 mb-2">Experience</p>
                     <p className="text-sm font-black group-hover:text-white">Trusted since 1999</p>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:bg-blue-600 transition-colors">
                     <Headphones className="text-blue-600 mb-4 group-hover:text-white" size={32} />
                     <p className="text-xs font-black uppercase text-slate-400 group-hover:text-white opacity-60 mb-2">Support</p>
                     <p className="text-sm font-black group-hover:text-white">24/7 Availability</p>
                  </div>
               </div>
               
               <div className="bg-blue-900 p-10 rounded-[3rem] text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 blur-[80px] opacity-20"></div>
                  <h3 className="text-2xl font-black uppercase mb-6 italic">Tourist Advantages</h3>
                  <ul className="space-y-4">
                    {advantages.map((text, i) => (
                      <li key={i} className="flex gap-3 text-sm font-medium opacity-90 italic">
                        <ArrowUpRight size={18} className="text-blue-400 shrink-0" />
                        {text}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FOOTER */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-slate-900 p-10 lg:p-16 rounded-[3rem] text-white relative overflow-hidden shadow-xl">
           <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tighter uppercase leading-none">Experience Bhutan</h2>
           <p className="text-slate-400 text-sm lg:text-base mb-10 italic font-medium opacity-80 leading-relaxed">
             "Our Bhutan tours promise an unforgettable journey. Contact us 24/7 for bookings!"
           </p>
           
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:+918576000084" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-[11px] tracking-widest transition-transform hover:scale-105 shadow-xl uppercase">
                 Call: +91 8576000084
              </a>
              <div className="text-left text-slate-500">
                 <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Head Office</p>
                 <p className="font-bold text-xs text-slate-300 italic">Gorakhpur (U.P) - 273001</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default BhutanTourPackages;