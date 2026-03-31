import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const canvasRef = useRef(null);

  // Data Tim (Properti color dihapus karena sekarang kita menggunakan warna yang seragam)
  const team = [
    { 
      name: 'Mizan', 
      path: '/mizan', 
      role: 'Team Leader', 
      image: '/mizan.png' 
    },
    { 
      name: 'Aditya', 
      path: '/aditya', 
      role: 'Developer', 
      image: '/aditya.jpeg' 
    },
    { 
      name: 'Ali', 
      path: '/ali', 
      role: 'Developer', 
      image: '/ali.png' 
    },
  ];

  // Efek Partikel Galaxy (HTML5 Canvas)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: null, y: null, radius: 150 };

    const mouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    window.addEventListener('mousemove', mouseMove);

    // Palet warna bintang
    const starColors = ['#ffffff', '#e0f7fa', '#fff9c4', '#f8bbd0'];

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.opacity = Math.random();
        this.opacitySpeed = (Math.random() * 0.02) + 0.005; 
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = this.size * 2;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.globalAlpha = 1; 
        ctx.shadowBlur = 0;  
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        this.opacity += this.opacitySpeed;
        if (this.opacity >= 1 || this.opacity <= 0.1) {
          this.opacitySpeed = -this.opacitySpeed;
        }

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

        this.x += this.directionX * 0.5;
        this.y += this.directionY * 0.5;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.height * canvas.width) / 5000; 
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5; 
        let x = Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2;
        let y = Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2;
        let directionX = (Math.random() * 1) - 0.5;
        let directionY = (Math.random() * 1) - 0.5;
        let color = starColors[Math.floor(Math.random() * starColors.length)];
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.fillStyle = 'rgba(10, 5, 25, 0.2)'; 
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
          + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          if (distance < (canvas.width / 8) * (canvas.height / 8)) {
            let opacityValue = 1 - (distance / 8000);
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacityValue * 0.15})`; 
            ctx.lineWidth = 0.5;
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

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      
      {/* Efek Nebula Statis (Biru) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 pointer-events-none z-0"></div>
      <div className="absolute top-[40%] left-[40%] w-[30rem] h-[30rem] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none z-0"></div>

      {/* Canvas Partikel */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Konten Utama */}
      <div className="z-10 flex flex-col items-center w-full">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-400 to-blue-300 mb-4 uppercase tracking-widest text-center drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          Eleven Team
        </h1>
        <p className="text-blue-200/70 mb-16 font-medium text-lg text-center max-w-lg tracking-wide">
          Menjelajahi batas inovasi. Pilih profil untuk melihat detail dari anggota kami.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl w-full px-4">
          {team.map((member) => (
            <Link to={member.path} key={member.path} className="group">
              <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/10 hover:bg-white/10 hover:border-blue-400/30 hover:-translate-y-4 transition-all duration-500 flex flex-col items-center relative overflow-hidden h-full">
                
                {/* Efek Glow Baru: Skala membesar perlahan saat hover, tidak berkedip */}
                <div className="absolute -inset-4 bg-blue-500/40 opacity-0 group-hover:opacity-100 blur-2xl scale-90 group-hover:scale-100 transition-all duration-700 ease-out -z-10 rounded-[3rem]"></div>

                {/* FOTO PROFIL */}
                <div className="w-36 h-36 mb-6 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] border-2 border-white/20 relative z-10 group-hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 bg-blue-500 opacity-20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-20"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${member.name}&background=random&color=fff`; }}
                  />
                </div>

                <h2 className="text-3xl font-extrabold text-white mb-2 group-hover:text-blue-200 transition-colors text-center z-10 tracking-wide">
                  {member.name}
                </h2>
                
                {/* Warna Teks Seragam (Biru Muda) */}
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-blue-400 mb-8 text-center z-10">
                  {member.role}
                </span>
                
                {/* Tombol Aksi - Seragam Biru */}
                <div className="mt-auto px-8 py-3 bg-black/40 text-blue-200 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] rounded-full text-sm font-bold transition-all duration-500 z-10 flex items-center gap-2 overflow-hidden relative">
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  Lihat Profil
                  <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>

              </div>
            </Link>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
};

export default Home;