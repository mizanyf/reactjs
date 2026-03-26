export default function Mizan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center p-6 font-sans antialiased text-slate-700 relative z-0">
      
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-200 rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-200 rounded-full blur-[120px] opacity-40"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-[2.5rem] overflow-hidden max-w-4xl w-full shadow-xl flex flex-col md:flex-row transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 z-10">
        
        <div className="md:w-2/5 bg-gradient-to-b from-blue-50 to-white p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-blue-100">
          
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-sky-300 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            <img 
              src="/mizan.png" 
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lgelative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-slate-800 text-center tracking-tight">
            Mochammad Al Mizan Ya Hafidl
          </h2>

          <span className="mt-3 px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] rounded-full border border-blue-200 shadow-sm">
            Team Leader
          </span>
            <div className="mt-6 flex gap-4">
              <a href="https://instagram.com/@mizanyf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              <a href="https://tiktok.com/@mizantzyy" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

        <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
            <div className="space-y-1">
              <p className="text-[10px] text-blue-500 uppercase tracking-widest font-bold">Kelas</p>
              <p className="text-sm font-medium text-slate-700">T2C - Pemrograman Website</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-blue-500 uppercase tracking-widest font-bold">Domisili</p>
              <p className="text-sm font-medium text-slate-700">Kota Malang, Jawa Timur</p>
            </div>
            <div className="col-span-2 space-y-1 pt-2 border-t border-blue-50">
              <p className="text-[10px] text-blue-500 uppercase tracking-widest font-bold">Jurusan / Universitas</p>
              <p className="text-sm font-medium text-slate-700">D-III Teknologi Informasi - Universitas Brawijaya</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.3em]">
                Tentang Saya
              </h3>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-50"></div>
            </div>

            <div className="text-sm text-slate-600 leading-relaxed text-justify space-y-4">
              <div className="text-sm text-slate-600 leading-relaxed text-justify space-y-4">
              <p>
                Halo! Saya adalah mahasiswa D-III Teknologi Informasi yang memiliki antusiasme tinggi dalam mengeksplorasi dunia pengembangan aplikasi web modern, khususnya pada ekosistem JavaScript. Sebagai seorang Team Leader, saya memegang tanggung jawab penuh dalam membangun fondasi teknis proyek menggunakan teknologi mutakhir seperti React, Vite, dan Tailwind CSS guna memastikan performa aplikasi berjalan dengan optimal dan skalabel. Saya sangat percaya bahwa kombinasi antara desain yang bersih, struktur kode yang rapi, serta efisiensi eksekusi adalah kunci utama dalam menciptakan pengalaman pengguna yang berkesan.
              </p>
              <p>
                Di luar kesibukan akademik dan koding, saya adalah seorang yang sangat menggemari dunia video game dan sepak bola. Bermain game telah melatih kemampuan <span className="italic">problem-solving</span> dan ketangkasan berpikir strategis saya dalam menghadapi tantangan yang kompleks. Sementara itu, sebagai penikmat sepak bola, saya belajar banyak tentang arti penting koordinasi, sportivitas, dan kerja keras dalam sebuah tim. Nilai-nilai kedisiplinan dan kolaborasi inilah yang selalu saya bawa dan terapkan dalam setiap proyek pengembangan perangkat lunak yang saya pimpin.
              </p>
            </div>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="/mizan.pdf" target="_blank" className="flex-1">
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 uppercase tracking-wider">
                  CV Saya
                </button>
              </a>


            <a href="https://wa.me/6285977573788" target="_blank" className="flex-1">
                <button className="w-full py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-50 transition-all shadow-sm hover:shadow transform hover:-translate-y-0.5 uppercase tracking-wider">
                  Hubungi Saya
                </button>
              </a>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
}