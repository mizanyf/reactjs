export default function Aditya() { 
    return(
            
           <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      {/* Card Container */}
      <div className="bg-white/95 backdrop-blur-md max-w-4xl w-full rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden border border-white">
        
        {/* Left Section (Identity) */}
        <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex flex-col items-center justify-center text-center border-r border-slate-100">
          <div className="relative group">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            {/* Profile Image */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/aditya.jpeg" 
                alt="Aditya Karyudie S.KOM." 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="mt-6 text-2xl font-bold text-slate-800 tracking-tight">
            Aditya Karyudie
          </h1>
        </div>

        {/* Right Section (Details) */}
        <div className="md:w-2/3 p-10 lg:p-14 bg-white">
          
          {/* DESAIN BARU: Iconic Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {/* Kelas Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-start gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-xs">Kelas</p>
                <p className="text-slate-800 font-bold leading-tight">T2C</p>
              </div>
            </div>

            {/* Domisili Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-start gap-3">
              <div className="p-2 bg-rose-100 rounded-lg">
                <svg className="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-xs">Domisili</p>
                <p className="text-slate-800 font-bold leading-tight text-xs">Kota Gorontalo, Gorontalo</p>
              </div>
            </div>

            {/* Universitas Card */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-start gap-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-xs">Institusi</p>
                <p className="text-slate-800 font-bold leading-tight text-xs">Universitas Brawijaya - D3 Teknologi Informasi</p>
              </div>
            </div>
          </div>

          <hr className="border-slate-100 mb-8" />

          {/* About Section */}
          <div className="mb-10 text-xs sm:text-base">
            <div className="flex items-center gap-4 mb-4">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800">Tentang Saya</h2>
              <div className="h-[1px] flex-grow bg-gradient-to-r from-blue-600 to-transparent opacity-20"></div>
            </div>
            <div className="space-y-4 text-slate-600 leading-relaxed italic">
              <p>
                Halo! Saya Aditya Karyudie mahasiswa program studi D3 Teknologi Informasi di Universitas Brawijaya di mana saya terus mengasah kemampuan teknis dan logika untuk mempersiapkan diri menjadi tenaga ahli di bidang IT.
              </p>
              <p>
                Ketertarikan saya di dunia teknologi sebenarnya sudah dimulai sejak bangku kelas 2 SMA. Berawal dari rasa penasaran terhadap cara kerja perangkat lunak, minat tersebut kini berkembang menjadi semangat untuk mendalami berbagai bahasa pemrograman dan membangun solusi digital yang bermanfaat.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/6282190220487" target="_blank" className="flex-1">
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font py-4 rounded-2xl transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-blue-200 active:scale-95">
              Contact Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>

    );

 }