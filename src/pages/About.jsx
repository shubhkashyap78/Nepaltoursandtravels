import React from 'react';
import { 
  Users, Map, ShieldCheck, Heart, 
  Calendar, Award, Star, Compass, 
  ChevronRight, Quote, Car, MapPin
} from 'lucide-react';

const AboutPage = () => {
  
  const stats = [
    { label: "Years Experience", value: "25+", icon: <Calendar className="text-orange-500" /> },
    { label: "Happy Travelers", value: "50K+", icon: <Users className="text-orange-500" /> },
    { label: "Tours Completed", value: "1200+", icon: <Map className="text-orange-500" /> },
    { label: "Safety Rating", value: "100%", icon: <ShieldCheck className="text-orange-500" /> },
  ];

  return (
    <div className="bg-white text-gray-900 selection:bg-orange-100">
      
      {/* SECTION 1: HERO SECTION */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544735745-b812335178af?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover shadow-inner"
            alt="Nepal Mountains"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-900/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
            About <span className="text-orange-500">Nepal Tour & Travels</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto font-light italic">
            "Your Trusted Companion in the Himalayas Since 1999"
          </p>
        </div>
      </section>

      {/* SECTION 2: THE HISTORY (From your URL content) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-blue-900 font-black text-sm uppercase tracking-[0.3em] mb-4">Our Legacy</h2>
            <h3 className="text-4xl font-bold mb-6 text-gray-800">Established In 1999</h3>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                <strong>Nepal Tour & Travels</strong> is a premier travel agency based in Gorakhpur, 
                India, dedicated to providing unforgettable experiences in the enchanting land of Nepal. 
                With over 25 years of expertise, we have become a household name for pilgrims and adventurers alike.
              </p>
              <p>
                We specialize in a wide range of services including <strong>customized Nepal tour packages</strong>, 
                reliable hotel bookings, and adventure sports. Our strategic location in Gorakhpur acts 
                as the perfect gateway for travelers entering Nepal by road.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="bg-orange-500 absolute -inset-4 rounded-3xl -z-10 rotate-3 opacity-20"></div>
            <img src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=600" className="rounded-2xl shadow-xl" alt="Nepal Culture" />
            <img src="src\images\GettyImages-1439040510.webp" className="rounded-2xl shadow-xl mt-12" alt="Nepal Temple" />
          </div>
        </div>
      </section>

      {/* SECTION 3: VISION & MISSION (Modern Cards) */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Compass size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-blue-900">Our Mission</h4>
            <p className="text-gray-600 text-lg italic leading-relaxed">
              "To deliver authentic Nepali experiences with world-class service—connecting travelers 
              to the heart of Nepal's culture, nature, and spirituality through well-crafted and 
              safe journeys."
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
              <Star size={32} />
            </div>
            <h4 className="text-2xl font-bold mb-4 text-blue-900">Our Vision</h4>
            <p className="text-gray-600 text-lg italic leading-relaxed">
              "To be Nepal's leading travel brand recognized for excellence, hospitality, and 
              sustainable tourism—inspiring every traveler to experience the true beauty and warmth 
              of the Himalayas."
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: DIRECTOR'S MESSAGE (The "About" Content Special) */}
      <section className="py-24 px-6 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-48 h-48 rounded-full border-4 border-orange-500 p-2 shrink-0">
             <div className="w-full h-full rounded-full bg-blue-800 flex items-center justify-center overflow-hidden italic font-serif text-4xl">MD</div>
          </div>
          <div className="relative">
            <Quote className="absolute -top-10 -left-10 w-20 h-20 text-white opacity-10" />
            <h3 className="text-3xl font-bold mb-6">A Message From Our Managing Director</h3>
            <p className="text-blue-100 text-xl leading-relaxed font-light italic">
              "At Nepal Tour & Travels, we believe that travel is more than just seeing new places; 
              it is about creating memories that last a lifetime. For over two decades, our goal 
              has been to treat every client like family, ensuring they feel safe, comfortable, 
              and inspired by the majesty of Nepal. We invite you to explore the Himalayas with us."
            </p>
            <div className="mt-6">
              <p className="font-bold text-orange-400 text-lg">Managing Director</p>
              <p className="text-blue-300">Nepal Tour & Travels, Gorakhpur</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUR FLEET & SERVICE (High modern design) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Our Specialized Services</h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600" alt="Luxury Fleet" className="group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h4 className="text-xl font-bold flex items-center gap-2"><Car className="text-orange-500" /> Luxury Fleet</h4>
            <p className="text-gray-500 mt-2">Premium SUVs, Coaches, and private cars for Muktinath and Pashupatinath Yatras.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=600" alt="Hotel Bookings" className="group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h4 className="text-xl font-bold flex items-center gap-2"><MapPin className="text-orange-500" /> Curated Stays</h4>
            <p className="text-gray-500 mt-2">Exclusive partnerships with top-rated hotels in Kathmandu, Pokhara, and Chitwan.</p>
          </div>
          <div className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl mb-4">
              <img src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&q=80&w=600" alt="Adventure" className="group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h4 className="text-xl font-bold flex items-center gap-2"><Compass className="text-orange-500" /> Adventure Sports</h4>
            <p className="text-gray-500 mt-2">Paragliding, River Rafting, and Jungle Safaris with certified safety professionals.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: THE STATS */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="bg-orange-500 rounded-[3rem] p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black mb-2">{stat.value}</div>
              <div className="text-sm font-bold uppercase opacity-80 tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutPage;