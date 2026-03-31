import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const canvasRef = useRef(null);

  // Data Tim
  const team = [
    { 
      name: 'Mizan', 
      path: '/mizan', 
      role: 'Team Leader', 
      color: 'from-blue-500 to-cyan-400', // Ubah warna menjadi gradient
      image: '/mizan.png' 
    },
    { 
      name: 'Aditya', 
      path: '/aditya', 
      role: 'Developer', 
      color: 'from-emerald-500 to-teal-400',
      image: '/aditya.jpg' 
    },
    { 
      name: 'Ali', 
      path: '/ali', 
      role: 'Developer', 
      color: 'from-purple-500 to-pink-400',
      image: '/ali.png' // Pastikan pakai slash '/' agar konsisten
    },
  ];

  // Efek Partikel Interaktif (HTML5 Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: null, y: null, radius: 120 };

    const mouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener('mousemove', mouseMove);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Pantulkan jika menyentuh ujung layar
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Cek interaksi mouse (partikel menghindar)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = forceDirectionX * force * 5;
          const directionY = forceDirectionY * force * 5;
          
          this.x -= directionX;
          this.y -= directionY;
        }

        // Pindahkan partikel
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2;
        let y = Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2;
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        let color = '#ffffff40'; // Putih transparan
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    // Garis penghubung antar partikel (Efek Constellation)
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
          + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            let opacityValue = 1 - (distance / 10000);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resizeCanvas);

    init();
    animate();

    // Cleanup saat komponen unmount
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      
      {/* Canvas Partikel di Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Konten Utama (z-10 agar berada di atas partikel) */}
      <div className="z-10 flex flex-col items-center w-full">
        <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-4 uppercase tracking-tighter text-center drop-shadow-lg">
          Our Creative Team
        </h1>
        <p className="text-slate-400 mb-16 font-medium text-lg text-center max-w-lg">
          Inovasi, Kolaborasi, dan Dedikasi. Pilih profil untuk melihat detail anggota kelompok kami.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          {team.map((member) => (
            <Link to={member.path} key={member.path} className="group">
              <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-4 transition-all duration-500 flex flex-col items-center relative overflow-hidden h-full">
                
                {/* Efek Glow di belakang Card saat Hover */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10 rounded-[3rem]`}></div>

                {/* BAGIAN FOTO PROFIL */}
                <div className="w-32 h-32 mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-slate-800 relative z-10 group-hover:scale-105 transition-transform duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${member.color} opacity-20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-20`}></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random&color=fff`; }} // Fallback UI Avatars
                  />
                </div>

                <h2 className="text-2xl font-extrabold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all text-center z-10">
                  {member.name}
                </h2>
                
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300 mb-8 text-center z-10">
                  {member.role}
                </span>
                
                {/* Tombol Aksi */}
                <div className="mt-auto px-8 py-3 bg-white/5 text-slate-300 border border-white/10 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent rounded-full text-sm font-bold transition-all duration-300 shadow-lg z-10 flex items-center gap-2">
                  Lihat Profil
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;