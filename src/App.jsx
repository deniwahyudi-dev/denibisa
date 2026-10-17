import React, { useState, useEffect } from 'react';
import {
  Code2,
  Laptop,
  Sparkles,
  Layers,
  FolderGit2,
  Mail,
  MapPin,
  ExternalLink,
  Moon,
  Sun,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  FileText,
  Send,
  Menu,
  X,
  PhoneCall,
  Globe,
  Clock
} from 'lucide-react';

function GithubIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 20, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Default to Dark Mode so user sees modern dark UI immediately
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Sync Dark Mode class to <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('deniwahyudi5678@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const skills = [
    { name: 'HTML5 Semantic', level: 'Dasar Kuat', desc: 'Struktur web yang rapi, aksesibel, dan ramah SEO.' },
    { name: 'CSS3 & Modern Layout', level: 'Dasar Kuat', desc: 'Flexbox, Grid, dan styling antarmuka modern.' },
    { name: 'JavaScript (ES6+)', level: 'Sedang Didalami', desc: 'Logika interaktif, manipulasi DOM, dan event handling.' },
    { name: 'React.js', level: 'Sedang Didalami', desc: 'Pemisahan komponen modular, state, dan interaksi dinamis.' },
    { name: 'Tailwind CSS', level: 'Dasar Kuat', desc: 'Styling cepat dengan utility classes yang konsisten.' },
    { name: 'Vite & Tooling', level: 'Dasar Kuat', desc: 'Build tool kencang untuk front-end modern.' },
    { name: 'Git & GitHub', level: 'Dasar Kuat', desc: 'Manajemen repository kode dan version control.' },
    { name: 'Responsive Web Design', level: 'Dasar Kuat', desc: 'Tampilan proporsional di HP, tablet, maupun desktop.' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Website Portofolio DeniBisa',
      category: 'Proyek Utama (Live)',
      status: 'Selesai & Aktif',
      description:
        'Website portofolio yang sedang Anda buka ini! Dibangun murni di sisi front-end menggunakan React.js dan Tailwind CSS dengan dukungan tema gelap/terang dan desain responsif penuh.',
      technologies: ['React.js', 'Tailwind CSS', 'Vite', 'Lucide Icons'],
      features: ['Fitur Dark/Light Mode Interaktif', '100% Client-Side Tanpa Backend', 'Optimal di Smartphone & Laptop'],
      github: 'https://github.com/deniwahyudi-dev',
      demo: '#',
      isLive: true,
    },
    {
      id: 2,
      title: 'Eksplorasi Komponen UI & Layout',
      category: 'Proyek Latihan',
      status: 'Sedang Dieksplorasi',
      description:
        'Koleksi eksplorasi komponen antarmuka web modern seperti tombol interaktif, kartu produk, form input bersih, dan navigasi ramah pengguna.',
      technologies: ['HTML5', 'Tailwind CSS', 'JavaScript'],
      features: ['Eksplorasi Desain Bersih', 'Micro-Interactions Halus', 'Eksperimen Tipografi'],
      github: 'https://github.com/deniwahyudi-dev',
      demo: '#',
      isLive: false,
    },
    {
      id: 3,
      title: 'Proyek Web Baru (Coming Soon)',
      category: 'Rencana Berikutnya',
      status: 'Segera Hadir 🚀',
      description:
        'Proyek website berikutnya yang saat ini sedang dalam tahap perancangan ide dan akan ditambahkan ke portofolio ini setelah selesai.',
      technologies: ['React.js', 'Front-End Tools'],
      features: ['Ide Baru Sedang Dipersiapkan', 'Fokus Solusi & Pengalaman Pengguna'],
      github: 'https://github.com/deniwahyudi-dev',
      demo: '#',
      isLive: false,
    },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-800'} transition-colors duration-300`}>
      {/* ==================== NAVBAR ==================== */}
      <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors ${
        darkMode ? 'bg-slate-950/85 border-slate-800/80 shadow-lg shadow-black/20' : 'bg-white/85 border-slate-200 shadow-sm'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 font-bold text-xl tracking-tight">
            <span className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-extrabold text-lg shadow-md shadow-indigo-600/30">
              D
            </span>
            <span className={darkMode ? 'text-white' : 'text-slate-900'}>
              Deni<span className="text-indigo-500">Bisa</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}>Tentang</a>
            <a href="#skills" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}>Keahlian</a>
            <a href="#projects" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}>Proyek</a>
            <a href="#contact" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-indigo-600'} transition-colors`}>Kontak</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl border transition-all ${
                darkMode
                  ? 'bg-slate-900 border-slate-700 text-amber-400 hover:bg-slate-800 hover:border-slate-600 shadow-sm'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
              title={darkMode ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap'}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Hubungi Tombol */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/25"
            >
              <Mail size={16} />
              <span>Hubungi</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border ${
                darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-slate-100 border-slate-300 text-slate-700'
              }`}
              aria-label="Open Mobile Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden px-4 pt-2 pb-4 border-t ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <nav className="flex flex-col gap-2 text-sm font-medium">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg ${darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                Tentang
              </a>
              <a
                href="#skills"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg ${darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                Keahlian
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg ${darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                Proyek
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg ${darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'}`}
              >
                Kontak
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ==================== HERO SECTION ==================== */}
      <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border ${
              darkMode 
                ? 'bg-slate-900 border-slate-700 text-indigo-300 shadow-sm' 
                : 'bg-indigo-50 border-indigo-200 text-indigo-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Terbuka untuk Belajar & Kolaborasi Web</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Halo, Saya <span className="text-indigo-500 dark:text-indigo-400">Deni Wahyudi</span> 👋
            </h1>

            {/* Subtitle / Intro Text */}
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed mb-8 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Berasal dari <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Lamongan</strong>, saya fokus mempelajari dan membangun website modern dengan teknologi 
              <strong className={darkMode ? 'text-white' : 'text-slate-900'}> Front-End</strong> seperti HTML5, CSS3, JavaScript, dan React.js. Senang menciptakan antarmuka yang bersih, cepat, dan mudah diakses.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-md shadow-indigo-600/30 w-full sm:w-auto"
              >
                <FolderGit2 size={18} />
                <span>Lihat Proyek Saya</span>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border font-medium transition-all w-full sm:w-auto ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200 shadow-sm'
                    : 'border-slate-300 bg-white hover:bg-slate-100 text-slate-700 shadow-sm'
                }`}
              >
                <Send size={18} />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-3 mt-10">
              <a
                href="https://github.com/deniwahyudi-dev"
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode 
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:border-slate-700' 
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                }`}
                title="GitHub: deniwahyudi-dev"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://www.linkedin.com/search/results/all/?keywords=deni%20wahyudi"
                target="_blank"
                rel="noreferrer"
                className={`p-2.5 rounded-xl border transition-all ${
                  darkMode 
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:border-slate-700' 
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                }`}
                title="LinkedIn: Deni Wahyudi"
              >
                <LinkedinIcon size={20} />
              </a>
              <button
                onClick={copyEmailToClipboard}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium transition-all ${
                  darkMode 
                    ? 'border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:border-slate-700' 
                    : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-100'
                }`}
                title="Salin Email"
              >
                <Mail size={16} />
                <span>{copiedEmail ? 'Email Disalin! ✓' : 'deniwahyudi5678@gmail.com'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <section id="about" className={`py-16 md:py-20 border-t ${
        darkMode ? 'border-slate-800/80 bg-slate-900/60' : 'border-slate-200 bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 text-indigo-500 font-semibold text-sm mb-2">
              <Laptop size={18} />
              <span>TENTANG SAYA</span>
            </div>
            <h2 className={`text-3xl font-bold tracking-tight mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Membangun Website yang Menarik, Ringan, dan Berstandar Bersih
            </h2>
            
            <div className={`space-y-4 text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>
                Halo! Saya <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Deni Wahyudi</strong>, tinggal di <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Lamongan, Jawa Timur</strong>. 
                Saya memiliki antusiasme yang besar dalam dunia teknologi dan pemrograman web, terutama di ranah <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Front-End Development</strong>.
              </p>
              <p>
                Bagi saya, website yang baik adalah website yang tidak membebani pengguna: tampilan yang rapi, navigasi yang intuitif, dan kecepatan muat halaman yang instan tanpa ketergantungan server yang rumit. 
                Saat ini saya aktif bereksplorasi dengan alat-alat modern seperti React.js, Tailwind CSS, dan ekosistem JavaScript.
              </p>
            </div>

            {/* 3 Keunggulan */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className={`p-5 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  darkMode ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-900/50' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  <Code2 size={22} />
                </div>
                <h3 className={`font-semibold text-base mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Clean Code</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Menulis struktur kode yang rapi, teratur, dan mudah dipahami.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  darkMode ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-900/50' : 'bg-emerald-50 text-emerald-600'
                }`}>
                  <Globe size={22} />
                </div>
                <h3 className={`font-semibold text-base mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Responsif & Cepat</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Nyaman dan proporsional dibuka di smartphone maupun layar monitor.
                </p>
              </div>

              <div className={`p-5 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  darkMode ? 'bg-amber-950/80 text-amber-400 border border-amber-900/50' : 'bg-amber-50 text-amber-600'
                }`}>
                  <Sparkles size={22} />
                </div>
                <h3 className={`font-semibold text-base mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Visual Menarik</h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Pilihan warna modern, animasi halus, dan dukungan tema gelap/terang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section id="skills" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-indigo-500 font-semibold text-sm mb-2">
              <Terminal size={18} />
              <span>KEAHLIAN TEKNOLOGI</span>
            </div>
            <h2 className={`text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Teknologi yang Saya Pelajari</h2>
            <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Fondasi dan perangkat front-end yang saya gunakan untuk merancang website.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-5 rounded-2xl border transition-all hover:scale-[1.02] ${
                  darkMode
                    ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/60 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-indigo-400 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>{skill.name}</h3>
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                    darkMode
                      ? skill.level === 'Dasar Kuat'
                        ? 'bg-indigo-950/70 border-indigo-800 text-indigo-300'
                        : 'bg-slate-800 border-slate-700 text-slate-300'
                      : skill.level === 'Dasar Kuat'
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                        : 'bg-slate-100 border-slate-200 text-slate-700'
                  }`}>
                    {skill.level}
                  </span>
                </div>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects" className={`py-16 md:py-20 border-t ${
        darkMode ? 'border-slate-800/80 bg-slate-900/60' : 'border-slate-200 bg-white'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 text-indigo-500 font-semibold text-sm mb-2">
              <FolderGit2 size={18} />
              <span>SHOWCASE KARYA</span>
            </div>
            <h2 className={`text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Daftar Proyek & Eksplorasi</h2>
            <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Karya pertama yang aktif dan rencana pengembangan proyek berikutnya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`flex flex-col rounded-2xl border overflow-hidden transition-all shadow-sm ${
                  darkMode 
                    ? 'bg-slate-900 border-slate-800 hover:border-slate-700' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Project Header Card */}
                <div className={`p-6 border-b ${
                  darkMode ? 'border-slate-800/80 bg-slate-950/70' : 'border-slate-200 bg-white'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                      {project.category}
                    </span>
                    <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${
                      darkMode
                        ? project.isLive
                          ? 'bg-emerald-950/70 border-emerald-800 text-emerald-300'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                        : project.isLive
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                          : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mt-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {project.title}
                  </h3>
                </div>

                {/* Project Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {project.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-5">
                      {project.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                          <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Badges */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`text-[11px] font-medium px-2.5 py-0.5 rounded-md border ${
                            darkMode 
                              ? 'bg-slate-800/80 border-slate-700 text-slate-200' 
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className={`flex items-center gap-3 pt-3 border-t ${
                      darkMode ? 'border-slate-800' : 'border-slate-200'
                    }`}>
                      {project.isLive ? (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-500">
                          <CheckCircle2 size={14} />
                          <span>Proyek Ini (Aktif)</span>
                        </span>
                      ) : (
                        <span className={`inline-flex items-center gap-1 text-xs font-semibold ${
                          darkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          <Clock size={14} />
                          <span>Sedang Dipersiapkan</span>
                        </span>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1 text-xs font-semibold hover:underline ml-auto ${
                          darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        <GithubIcon size={14} />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT SECTION ==================== */}
      <section id="contact" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-indigo-500 font-semibold text-sm mb-2">
                <Mail size={18} />
                <span>HUBUNGI SAYA</span>
              </div>
              <h2 className={`text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Mari Terhubung</h2>
              <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Silakan hubungi saya melalui WhatsApp, Email, atau kirimkan pesan langsung di bawah ini.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Info Kontak Langsung */}
              <div className="space-y-4">
                <div className={`p-5 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      darkMode ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-900/50' : 'bg-emerald-50 text-emerald-600'
                    }`}>
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">WhatsApp</h4>
                      <p className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>+62 857-0772-3635</p>
                      <a
                        href="https://wa.me/6285707723635"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-emerald-500 hover:underline mt-1 inline-flex items-center gap-1 font-medium"
                      >
                        <span>Chat langsung di WhatsApp</span>
                        <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      darkMode ? 'bg-indigo-950/80 text-indigo-400 border border-indigo-900/50' : 'bg-indigo-50 text-indigo-600'
                    }`}>
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Email</h4>
                      <p className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>deniwahyudi5678@gmail.com</p>
                      <button
                        onClick={copyEmailToClipboard}
                        className="text-xs text-indigo-500 hover:underline mt-1 block font-medium"
                      >
                        {copiedEmail ? 'Email Berhasil Disalin! ✓' : 'Klik untuk menyalin email'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border transition-all ${
                  darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${
                      darkMode ? 'bg-amber-950/80 text-amber-400 border border-amber-900/50' : 'bg-amber-50 text-amber-600'
                    }`}>
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">Domisili</h4>
                      <p className={`text-sm font-semibold mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Lamongan, Jawa Timur</p>
                      <p className="text-xs text-slate-400 mt-1">Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Pesan Cepat */}
              <div className={`p-6 rounded-2xl border transition-all ${
                darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
              }`}>
                <h3 className={`font-bold text-base mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Kirim Pesan</h3>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-700 focus:border-indigo-500 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 focus:border-indigo-600 text-slate-800 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                        darkMode
                          ? 'bg-slate-950 border-slate-700 focus:border-indigo-500 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 focus:border-indigo-600 text-slate-800 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Pesan Anda
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tulis pesan Anda..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm outline-none transition-all resize-none ${
                        darkMode
                          ? 'bg-slate-950 border-slate-700 focus:border-indigo-500 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 focus:border-indigo-600 text-slate-800 placeholder-slate-400'
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-md shadow-indigo-600/25"
                  >
                    <Send size={16} />
                    <span>Kirim Pesan</span>
                  </button>

                  {formSubmitted && (
                    <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs text-center font-medium">
                      Pesan terkirim! Terima kasih telah menghubungi Deni.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className={`py-8 border-t text-center text-xs transition-colors ${
        darkMode ? 'border-slate-800/80 bg-slate-950 text-slate-500' : 'border-slate-200 bg-white text-slate-500'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Deni Wahyudi (Lamongan). Dibuat dengan React & Tailwind CSS.</p>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:underline">Tentang</a>
            <a href="#skills" className="hover:underline">Keahlian</a>
            <a href="#projects" className="hover:underline">Proyek</a>
            <a href="#contact" className="hover:underline">Kontak</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
