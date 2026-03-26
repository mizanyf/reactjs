import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const team = [
    { 
      name: 'Mizan', 
      path: '/mizan', 
      role: 'Team Leader', 
      color: 'bg-blue-600',
      image: '/mizan.png' // <-- Ganti dengan nama file fotomu di folder public
    },
    { 
      name: 'Aditya', 
      path: '/aditya', 
      role: 'Developer', 
      color: 'bg-emerald-600',
      image: '/aditya.jpeg' // <-- Nama file foto Aditya
    },
    { 
      name: 'Ali', 
      path: '/ali', 
      role: 'Developer', 
      color: 'bg-purple-600',
      image: 'ali.png' // <-- Nama file foto Ali
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <h1 className="text-4xl font-black text-slate-800 mb-2 uppercase tracking-tighter text-center">Our Creative Team</h1>
      <p className="text-slate-500 mb-12 font-medium">Pilih profil untuk melihat detail anggota kelompok.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {team.map((member) => (
          <Link to={member.path} key={member.path} className="group">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center">
              
              {/* BAGIAN FOTO PROFIL */}
              <div className={`w-24 h-24 mb-6 rounded-2xl overflow-hidden shadow-lg border-4 border-white ${member.color}`}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} // Fallback jika foto belum ada
                />
              </div>

              <h2 className="text-xl font-extrabold text-slate-800 mb-1 group-hover:text-blue-600 transition-colors text-center">
                {member.name}
              </h2>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                {member.role}
              </span>
              <div className="mt-6 px-6 py-2 bg-slate-50 text-slate-400 group-hover:bg-blue-600 group-hover:text-white rounded-full text-xs font-bold transition-all shadow-sm">
                Lihat Profil →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;