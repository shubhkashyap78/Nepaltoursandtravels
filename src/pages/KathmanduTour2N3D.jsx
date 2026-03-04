import React, { useState } from 'react';
import { 
  Calendar, MapPin, CheckCircle, XCircle, 
  Clock, Info, ShieldCheck, Sun, Star,
  ChevronDown, ChevronUp, Camera, Car, 
  Send, Phone, Utensils, Hotel, ArrowRight
} from 'lucide-react';

const KathmanduFullItinerary = () => {
  const [openDay, setOpenDay] = useState(0);

  const inclusions = [
    "Pick-up and drop-off service from Gorakhpur.",
    "Comfortable private air-conditioned vehicle for the entire journey.",
    "2 nights accommodation in Kathmandu hotels with daily breakfast.",
    "Guided sightseeing tours as per the itinerary."
  ];

  const exclusions = [
    "Personal expenses such as laundry, phone calls, and tips.",
    "Meals not mentioned (Lunch & Dinner).",
    "Entrance tickets to monuments, temples, and attractions.",
    "GST and other applicable government taxes."
  ];

  const itinerary = [
    {
      day: "Day 1",
      title: "Gorakhpur – Kathmandu: The Himalayan Gateway",
      highlights: ["Sunauli Border Crossing", "Scenic Hill Drive", "Thamel Exploration"],
      details: [
        "Your journey begins with an early morning pick-up from Gorakhpur railway station or airport.",
        "Travel through the scenic landscapes of Sunauli, Butwal, and Narayanghat.",
        "Complete border formalities and proceed toward the vibrant capital, Kathmandu.",
        "Evening arrival followed by hotel check-in and an optional walk through Thamel's nightlife."
      ]
    },
    {
      day: "Day 2",
      title: "Kathmandu: Cultural & Spiritual Heritage",
      highlights: ["Pashupatinath", "Boudhanath", "Swayambhunath", "Patan Durbar Square"],
      details: [
        "Visit the sacred Pashupatinath Temple, a major Hindu site dedicated to Lord Shiva.",
        "Explore the massive Boudhanath Stupa, a center for Tibetan Buddhism.",
        "Climb to Swayambhunath (Monkey Temple) for panoramic valley views.",
        "Discover the exquisite art and architecture of Patan Durbar Square."
      ]
    },
    {
      day: "Day 3",
      title: "Kathmandu – Gorakhpur: Departure",
      highlights: ["Scenic Return Drive", "Last-minute Souvenirs"],
      details: [
        "Enjoy your final breakfast in Kathmandu before hotel check-out.",
        "Drive back to Gorakhpur with beautiful landscape stops along the mountain roads.",
        "Drop-off at Gorakhpur railway station or airport for your onward journey."
      ]
    }
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen selection:bg-orange-100 pt-20 lg:pt-28">
      
      {/* 1. TOUR HEADER - BALANCED TYPOGRAPHY */}
      <div className="bg-white border-b shadow-sm mb-6 mx-4 lg:mx-8 rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-xl lg:text-2xl font-bold text-slate-900 leading-tight uppercase">
              Kathmandu Tour Package
              <span className="block md:inline-block text-blue-600 text-[10px] font-bold bg-blue-50 px-3 py-0.5 rounded-full uppercase mt-2 md:mt-0 md:ml-3">
                2N/3D Package
              </span>
            </h1>
            <p className="text-slate-500 text-xs lg:text-sm flex items-center justify-center md:justify-start gap-2 mt-1.5 font-medium">
              <MapPin size={14} className="text-orange-500" /> Nepal Tour & Travels • Gorakhpur
            </p>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto pt-4 md:pt-0 border-t md:border-t-0">
             <div className="text-right hidden lg:block">
               <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">Best Price Guarantee</p>
               <p className="text-lg font-bold text-orange-600 leading-none">Since 1999</p>
             </div>
             <a href="tel:+918576000084" className="flex-1 md:flex-none bg-orange-600 hover:bg-black text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md text-center text-xs tracking-wider">
               SEND ENQUIRY
             </a>
          </div>
        </div>
      </div>

      {/* 2. RESPONSIVE MULTI-IMAGE HERO */}
      <section className="w-full bg-white overflow-hidden p-3 lg:p-6">
        <div className="flex flex-col lg:flex-row h-auto lg:h-[65vh] w-full gap-3">
          
          <div className="lg:w-1/2 h-[300px] lg:h-full relative overflow-hidden rounded-2xl lg:rounded-3xl group shadow-md">
            <img 
              src="https://nepaltoursandtravels.com/wp-content/uploads/2025/10/hero-1.png" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Kathmandu Temple"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="bg-orange-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">Bestseller</span>
              <h2 className="text-xl lg:text-3xl font-bold italic">The Heart of Nepal</h2>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-3">
            <div className="h-[200px] lg:h-1/2 relative overflow-hidden rounded-2xl lg:rounded-3xl group shadow-sm">
              <img 
                src="src\images\mountain-majesty-stockcake.webp" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Mountains"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <p className="text-white font-bold text-lg lg:text-2xl uppercase tracking-tight">Mountain Vistas</p>
              </div>
            </div>

            <div className="h-[200px] lg:h-1/2 flex gap-3">
               <div className="w-2/3 relative overflow-hidden rounded-2xl lg:rounded-3xl group border border-slate-100 shadow-sm">
                  <img 
                    src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Patan"
                  />
               </div>
               <div className="w-1/3 bg-blue-900 rounded-2xl lg:rounded-3xl flex flex-col items-center justify-center p-4 text-center group cursor-pointer hover:bg-orange-600 transition-colors shadow-sm">
                  <Star className="text-white mb-2" fill="white" size={20}/>
                  <p className="text-white font-bold text-[10px] lg:text-xs uppercase tracking-tighter">Verified Choice</p>
                  <p className="text-white/50 text-[9px] mt-1 uppercase font-medium">Est. 1999</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRIP STATS BAR */}
      <div className="bg-blue-900 text-white py-4 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-8 text-[11px] lg:text-sm font-bold whitespace-nowrap justify-center items-center">
           <span className="flex items-center gap-2 opacity-90"><Clock size={14} className="text-orange-400"/> 3 Days / 2 Nights</span>
           <span className="flex items-center gap-2 opacity-90"><Hotel size={14} className="text-orange-400"/> Hotels Included</span>
           <span className="flex items-center gap-2 opacity-90"><Car size={14} className="text-orange-400"/> Private AC Cab</span>
           <span className="flex items-center gap-2 opacity-90"><Utensils size={14} className="text-orange-400"/> Daily Breakfast</span>
        </div>
      </div>

      {/* 4. CONTENT GRID - BALANCED FONTS */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-10">
        
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm border border-slate-200">
            <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-8 border-l-4 border-blue-600 pl-4 uppercase">
              Tour Itinerary
            </h2>
            
            <div className="space-y-4">
              {itinerary.map((day, index) => (
                <div key={index} className={`border rounded-xl overflow-hidden transition-all ${openDay === index ? 'border-blue-400 shadow-md' : 'border-slate-100 shadow-sm'}`}>
                  <button 
                    onClick={() => setOpenDay(openDay === index ? -1 : index)} 
                    className="w-full flex items-center justify-between p-5 lg:p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                  >
                    <div className="flex items-center gap-4 lg:gap-6">
                      <span className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center font-bold text-sm lg:text-base ${openDay === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                        0{index + 1}
                      </span>
                      <div>
                        <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">{day.day}</p>
                        <h3 className="text-base lg:text-lg font-bold text-slate-800 leading-tight">{day.title}</h3>
                      </div>
                    </div>
                    {openDay === index ? <ChevronUp className="text-blue-600" size={20} /> : <ChevronDown className="text-slate-300" size={20} />}
                  </button>

                  {openDay === index && (
                    <div className="p-6 lg:p-8 bg-slate-50 border-t border-slate-100">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {day.highlights.map((tag, i) => (
                          <span key={i} className="text-[9px] font-bold bg-white text-blue-600 px-3 py-1 rounded-md border border-blue-50 shadow-sm uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-4">
                        {day.details.map((text, i) => (
                          <li key={i} className="flex gap-3 text-xs lg:text-sm text-slate-600 leading-relaxed font-medium">
                            <ArrowRight size={14} className="text-blue-500 mt-0.5 shrink-0" /> {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
             <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-sm lg:text-base font-bold text-green-600 mb-6 flex items-center gap-2">
                   <CheckCircle size={18}/> INCLUSIONS
                </h4>
                <ul className="space-y-3">
                   {inclusions.map((text, i) => (
                     <li key={i} className="text-xs lg:text-sm text-slate-500 flex gap-3 leading-relaxed font-medium italic">
                        <ArrowRight size={12} className="text-green-400 mt-1 shrink-0" /> {text}
                     </li>
                   ))}
                </ul>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-sm lg:text-base font-bold text-red-600 mb-6 flex items-center gap-2">
                   <XCircle size={18}/> EXCLUSIONS
                </h4>
                <ul className="space-y-3">
                   {exclusions.map((text, i) => (
                     <li key={i} className="text-xs lg:text-sm text-slate-500 flex gap-3 leading-relaxed font-medium italic">
                        <ArrowRight size={12} className="text-red-300 mt-1 shrink-0" /> {text}
                     </li>
                   ))}
                </ul>
             </div>
          </div>
        </div>

        {/* SIDEBAR - CLEANER SCALING */}
        <div className="space-y-8">
           <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 text-white shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600 blur-[80px] opacity-40"></div>
              <h4 className="text-xl lg:text-2xl font-bold mb-4 relative leading-tight">Ready for <br/><span className="text-orange-500">Nepal?</span></h4>
              <p className="text-slate-400 text-xs lg:text-sm mb-8 leading-relaxed font-medium relative opacity-90">
                Book your 3-day spiritual getaway from Gorakhpur today with the experts.
              </p>
              <div className="space-y-4 relative">
                 <a href="tel:+918576000084" className="w-full bg-orange-600 text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-xs lg:text-sm transition-all shadow-lg">
                    <Phone size={16}/> CALL: +91 8576000084
                 </a>
                 <button className="w-full bg-white/10 border border-white/20 text-white flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-xs lg:text-sm transition-colors">
                    <Send size={16} className="text-green-500"/> WHATSAPP CHAT
                 </button>
              </div>
           </div>

           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h5 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-sm">
                 <Info size={18} className="text-blue-600"/> TRAVEL GUIDE
              </h5>
              <div className="space-y-8">
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Passport/ID</p>
                    <p className="text-xs text-slate-600 font-bold italic leading-relaxed">Voter ID or Passport is mandatory for Indians. Aadhar is not accepted.</p>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Currency</p>
                    <p className="text-xs text-slate-600 font-bold italic leading-relaxed">INR up to ₹100 notes are accepted. Use NPR for small expenses.</p>
                 </div>
              </div>
           </div>
        </div>

      </main>
    </div>
  );
};

export default KathmanduFullItinerary;