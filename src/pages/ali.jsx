import React from "react";
import foto from "../assets/image.png"; // Pastikan path foto sesuai
import { 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedin, 
  FaPhoneAlt, 
  FaGithub, 
  FaMapMarkerAlt, 
  FaGraduationCap,
  FaCode
} from "react-icons/fa";

const ali = () => {
  // ===== DATA PROFIL =====
  const profil = {
    nama: "Moh Ali Farda Al Ghifari",
    role: "Full-Stack Developer Enthusiast",
    kelas: "D3 Teknologi Informasi",
    jurusan: "Rekayasa Perangkat Lunak",
    sekolah: "Universitas Brawijaya",
    domisili: "Malang, Jawa Timur",
    email: "alifarda126@gmail.com",
    instagram: "https://instagram.com/otherrr.al",
    linkedin: "https://linkedin.com/in/alifarda",
    github: "https://github.com/alifarda126",
    noTelp: "+62 831 1404 1924",
    deskripsi: `Halo, perkenalkan nama saya Ali Farda. Saya adalah siswa kelas XII jurusan Rekayasa Perangkat Lunak di SMK Negeri 1 Bandung. Saya memiliki ketertarikan mendalam di bidang pengembangan web dan mobile.\n\nSaya mulai belajar coding sejak kelas X, dan hingga kini saya terus mengasah kemampuan di ekosistem JavaScript modern. Selain coding, saya juga aktif sebagai ketua bidang IT di organisasi sekolah, yang melatih kemampuan saya dalam problem-solving dan kerja sama tim.\n\nKe depannya, saya ingin mendalami bidang Artificial Intelligence dan Cloud Computing, serta berkontribusi lebih banyak pada proyek Open Source.`,
    skills: ["Java", "Tailwind CSS", "Node.js", "JavaScript", "HTML", "PHP", "Figma"]
  };

  return (

    <div className="min-h-screen bg-slate-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:32px_32px] opacity-30"></div>
      
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-500/30 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-400/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>

      <div className="max-w-5xl w-full bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-600 shadow-2xl overflow-hidden relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* ===== SIDEBAR (KIRI) ===== */}
          {/* Sidebar dibuat sedikit transparan agar menyatu dengan card utama */}
          <div className="lg:col-span-4 bg-slate-800/50 p-8 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-slate-600/80">
            {/* Foto Profil */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <img
                className="relative h-44 w-44 rounded-full object-cover border-4 border-slate-800 shadow-xl"
                src={foto}
                alt="Foto Profil Ali Farda"
              />
            </div>

            <h1 className="mt-6 text-3xl font-extrabold text-white tracking-tight text-center">
              {profil.nama}
            </h1>
            <p className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300 font-medium text-lg text-center">
              {profil.role}
            </p>

            <a
              href={`mailto:${profil.email}`}
              className="mt-8 w-full flex justify-center items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 hover:scale-[1.02] transition-all duration-300"
            >
              <FaEnvelope /> Contact Me
            </a>

            <div className="mt-8 flex justify-center gap-5">
              {[
                { icon: FaGithub, link: profil.github, color: "hover:text-white" },
                { icon: FaLinkedin, link: profil.linkedin, color: "hover:text-blue-400" },
                { icon: FaInstagram, link: profil.instagram, color: "hover:text-pink-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-300 ${social.color} transition-colors duration-300 transform hover:-translate-y-1`}
                >
                  <social.icon size={26} />
                </a>
              ))}
            </div>
          </div>

          {/* ===== KONTEN UTAMA (KANAN) ===== */}
          <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center">
            
            <div className="flex flex-wrap gap-4 mb-8">
              {/* 4. UPDATE: Badge / Kotak elemen di dalam card ikut diterangkan sedikit */}
              <div className="flex items-center gap-2 text-slate-200 bg-slate-700/60 px-4 py-2 rounded-lg border border-slate-600/50 text-sm">
                <FaGraduationCap className="text-blue-400" />
                <span>{profil.sekolah} - {profil.kelas}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200 bg-slate-700/60 px-4 py-2 rounded-lg border border-slate-600/50 text-sm">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>{profil.domisili}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">#</span> Tentang Saya
              </h2>
              <p className="text-slate-300 leading-relaxed whitespace-pre-line text-lg">
                {profil.deskripsi}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <FaCode className="text-cyan-400" /> Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {profil.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600 text-cyan-200 rounded-lg text-sm font-medium border border-slate-600/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-600/50">
              <a href={`mailto:${profil.email}`} className="flex items-center gap-4 bg-slate-700/40 p-4 rounded-xl hover:bg-slate-700 transition-colors border border-slate-600/30 hover:border-slate-500 group">
                <div className="bg-slate-800 p-3 rounded-lg text-slate-300 group-hover:text-blue-400 transition-colors shadow-inner">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Email</p>
                  <p className="text-sm font-semibold text-slate-100 truncate">{profil.email}</p>
                </div>
              </a>

              <a href={`tel:${profil.noTelp}`} className="flex items-center gap-4 bg-slate-700/40 p-4 rounded-xl hover:bg-slate-700 transition-colors border border-slate-600/30 hover:border-slate-500 group">
                <div className="bg-slate-800 p-3 rounded-lg text-slate-300 group-hover:text-cyan-400 transition-colors shadow-inner">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">WhatsApp / Telepon</p>
                  <p className="text-sm font-semibold text-slate-100">{profil.noTelp}</p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ali;