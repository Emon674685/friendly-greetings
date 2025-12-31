import React from 'react';
import kpiLogo from '@/assets/kpi-logo.jpg';

interface FrameTemplateProps {
  uploadedPhoto: string | null;
  wishingText: string;
  name: string;
  designation: string;
  selectedTemplate: number;
}

export const FrameTemplate1: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-primary/5 via-card to-accent/20 rounded-lg overflow-hidden shadow-card">
    {/* Left accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-primary" />
    {/* Right accent bar */}
    <div className="absolute right-0 top-0 bottom-0 w-1 md:w-2 bg-gradient-to-b from-gold via-primary to-gold" />
    
    {/* Top logo */}
    <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-12 md:w-16 h-12 md:h-16 rounded-full border-2 border-primary/30 overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main content - centered */}
    <div className="absolute top-16 md:top-24 left-0 right-0 text-center px-4">
      <div className="flex items-center justify-center gap-1 md:gap-2 mb-1">
        <span className="text-gold text-xs md:text-sm">✦</span>
        <span className="font-body text-primary text-xs md:text-sm tracking-widest">HAPPY</span>
        <span className="text-gold text-xs md:text-sm">✦</span>
      </div>
      <div className="font-heading text-foreground text-2xl md:text-4xl font-bold">NEW YEAR</div>
      <div className="font-heading text-primary text-3xl md:text-5xl font-bold">2026</div>
    </div>
    
    {/* Photo circle - positioned lower */}
    <div className="absolute top-[52%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 md:w-32 h-20 md:h-32">
      <div className="w-full h-full rounded-full border-4 border-primary/40 flex items-center justify-center bg-card/50 overflow-hidden shadow-lg">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-muted-foreground text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
      {/* Decorative sparkles */}
      <div className="absolute -top-1 -right-1 text-gold animate-sparkle text-xs md:text-sm">✦</div>
      <div className="absolute -bottom-1 left-2 text-gold animate-sparkle text-xs md:text-sm" style={{ animationDelay: '0.5s' }}>✦</div>
    </div>
    
    {/* Wishing text box - below photo */}
    <div className="absolute top-[70%] md:top-[68%] left-3 md:left-6 right-3 md:right-6 bg-primary/5 rounded-lg p-2 md:p-3">
      <p className="text-foreground text-[9px] md:text-xs leading-relaxed font-body text-center italic">"{wishingText}"</p>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-8 md:bottom-12 left-0 right-0 text-center">
      {name && <div className="text-foreground font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-primary text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 md:bottom-4 left-0 right-0">
      <div className="text-[9px] md:text-xs text-primary font-body text-center font-medium">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

export const FrameTemplate2: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-gold/10 via-card to-primary/10 rounded-lg overflow-hidden shadow-card border border-gold/30">
    {/* Top decorative band */}
    <div className="absolute top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r from-primary via-gold to-primary" />
    
    {/* Logo centered top */}
    <div className="absolute top-3 md:top-5 left-1/2 -translate-x-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full border-2 border-gold overflow-hidden bg-card shadow-lg">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Happy New Year text - centered */}
    <div className="absolute top-14 md:top-22 left-0 right-0 text-center">
      <div className="font-body text-gold text-[10px] md:text-sm tracking-widest">✨ HAPPY ✨</div>
      <div className="font-heading text-foreground text-xl md:text-3xl font-bold">NEW YEAR</div>
      <div className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold text-2xl md:text-4xl font-bold">2026</div>
    </div>
    
    {/* Photo - centered */}
    <div className="absolute top-[40%] md:top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-36 h-24 md:h-36">
      <div className="w-full h-full rounded-full border-4 border-gold/60 flex items-center justify-center bg-card/80 overflow-hidden shadow-lg">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-muted-foreground text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute top-[60%] md:top-[58%] left-3 md:left-6 right-3 md:right-6 text-center">
      <p className="text-foreground text-[9px] md:text-xs leading-relaxed font-body italic">"{wishingText}"</p>
    </div>
    
    {/* Name and designation - centered */}
    <div className="absolute bottom-10 md:bottom-14 left-0 right-0 text-center">
      {name && <div className="text-foreground font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-primary text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center">
      <div className="text-[9px] md:text-xs text-muted-foreground font-body">Kishoreganj Polytechnic Institute</div>
    </div>
    
    {/* Bottom decorative band */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary" />
  </div>
);

export const FrameTemplate3: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-primary rounded-lg overflow-hidden shadow-card">
    {/* Decorative patterns */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-2 left-2 w-10 md:w-16 h-10 md:h-16 border border-primary-foreground rounded-full" />
      <div className="absolute top-4 left-4 w-10 md:w-16 h-10 md:h-16 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-2 right-2 w-10 md:w-16 h-10 md:h-16 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-4 right-4 w-10 md:w-16 h-10 md:h-16 border border-primary-foreground rounded-full" />
    </div>
    
    {/* Logo */}
    <div className="absolute top-2 md:top-4 left-1/2 -translate-x-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main content - centered */}
    <div className="absolute top-14 md:top-20 left-0 right-0 text-center">
      <div className="font-body text-gold text-[9px] md:text-xs tracking-widest">CELEBRATING</div>
      <div className="font-heading text-primary-foreground text-3xl md:text-5xl font-bold mt-1">2026</div>
      <div className="font-heading text-gold text-sm md:text-xl">Happy New Year</div>
    </div>
    
    {/* Photo - centered */}
    <div className="absolute top-[42%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-36 h-24 md:h-36">
      <div className="w-full h-full rounded-2xl border-4 border-gold/60 flex items-center justify-center bg-card/20 overflow-hidden rotate-3 shadow-xl">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover" />
        ) : (
          <span className="text-primary-foreground/70 text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute top-[62%] md:top-[60%] left-3 md:left-6 right-3 md:right-6">
      <p className="text-primary-foreground/90 text-[9px] md:text-xs leading-relaxed font-body text-center">{wishingText}</p>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-10 md:bottom-14 left-0 right-0 text-center">
      {name && <div className="text-gold font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-primary-foreground/70 text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center">
      <div className="text-[9px] md:text-xs text-primary-foreground/60 font-body">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

// Template 4 - Royal Blue Elegance
export const FrameTemplate4: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 rounded-lg overflow-hidden shadow-card">
    {/* Decorative stars */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-4 left-4 text-yellow-300 text-xs animate-sparkle">★</div>
      <div className="absolute top-8 right-8 text-yellow-300 text-sm animate-sparkle" style={{ animationDelay: '0.3s' }}>★</div>
      <div className="absolute top-16 left-12 text-yellow-300 text-xs animate-sparkle" style={{ animationDelay: '0.6s' }}>★</div>
      <div className="absolute bottom-20 right-6 text-yellow-300 text-xs animate-sparkle" style={{ animationDelay: '0.9s' }}>★</div>
      <div className="absolute bottom-32 left-8 text-yellow-300 text-sm animate-sparkle" style={{ animationDelay: '1.2s' }}>★</div>
    </div>
    
    {/* Logo */}
    <div className="absolute top-3 md:top-5 left-1/2 -translate-x-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full border-2 border-yellow-400/50 overflow-hidden bg-white shadow-lg">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main text */}
    <div className="absolute top-14 md:top-22 left-0 right-0 text-center">
      <div className="font-body text-yellow-300 text-[10px] md:text-sm tracking-[0.3em]">✨ HAPPY ✨</div>
      <div className="font-heading text-white text-2xl md:text-4xl font-bold mt-1">NEW YEAR</div>
      <div className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 text-3xl md:text-5xl font-bold">2026</div>
    </div>
    
    {/* Photo with golden border */}
    <div className="absolute top-[42%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-36 h-24 md:h-36">
      <div className="w-full h-full rounded-full border-4 border-yellow-400 flex items-center justify-center bg-blue-900/50 overflow-hidden shadow-[0_0_20px_rgba(250,204,21,0.3)]">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-white/70 text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute top-[62%] md:top-[60%] left-3 md:left-6 right-3 md:right-6 bg-white/10 rounded-lg p-2 md:p-3 backdrop-blur-sm">
      <p className="text-white text-[9px] md:text-xs leading-relaxed font-body text-center italic">"{wishingText}"</p>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-10 md:bottom-14 left-0 right-0 text-center">
      {name && <div className="text-yellow-300 font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-white/80 text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center">
      <div className="text-[9px] md:text-xs text-yellow-300/70 font-body">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

// Template 5 - Festive Red & Gold
export const FrameTemplate5: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-red-700 via-red-600 to-red-800 rounded-lg overflow-hidden shadow-card">
    {/* Decorative corners */}
    <div className="absolute top-0 left-0 w-16 md:w-24 h-16 md:h-24 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg" />
    <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 border-t-4 border-r-4 border-yellow-400 rounded-tr-lg" />
    <div className="absolute bottom-0 left-0 w-16 md:w-24 h-16 md:h-24 border-b-4 border-l-4 border-yellow-400 rounded-bl-lg" />
    <div className="absolute bottom-0 right-0 w-16 md:w-24 h-16 md:h-24 border-b-4 border-r-4 border-yellow-400 rounded-br-lg" />
    
    {/* Logo */}
    <div className="absolute top-3 md:top-5 left-1/2 -translate-x-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full border-2 border-yellow-400 overflow-hidden bg-white shadow-lg">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main text */}
    <div className="absolute top-14 md:top-22 left-0 right-0 text-center">
      <div className="font-body text-yellow-300 text-[10px] md:text-sm tracking-widest">🎊 HAPPY 🎊</div>
      <div className="font-heading text-white text-2xl md:text-4xl font-bold">NEW YEAR</div>
      <div className="font-heading text-yellow-400 text-3xl md:text-5xl font-bold drop-shadow-lg">2026</div>
    </div>
    
    {/* Photo with decorative border */}
    <div className="absolute top-[42%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-36 h-24 md:h-36">
      <div className="w-full h-full rounded-full border-4 border-yellow-400 flex items-center justify-center bg-red-900/50 overflow-hidden shadow-xl">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-white/70 text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
      {/* Decorative elements */}
      <div className="absolute -top-2 -right-2 text-yellow-400 text-lg animate-sparkle">✦</div>
      <div className="absolute -bottom-2 -left-2 text-yellow-400 text-lg animate-sparkle" style={{ animationDelay: '0.5s' }}>✦</div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute top-[62%] md:top-[60%] left-3 md:left-6 right-3 md:right-6">
      <p className="text-white text-[9px] md:text-xs leading-relaxed font-body text-center italic">"{wishingText}"</p>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-10 md:bottom-14 left-0 right-0 text-center">
      {name && <div className="text-yellow-300 font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-white/80 text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center">
      <div className="text-[9px] md:text-xs text-yellow-300/80 font-body">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

// Template 6 - Modern Gradient Purple
export const FrameTemplate6: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 rounded-lg overflow-hidden shadow-card">
    {/* Glowing orbs */}
    <div className="absolute top-10 left-10 w-20 md:w-32 h-20 md:h-32 bg-pink-500/20 rounded-full blur-3xl" />
    <div className="absolute bottom-10 right-10 w-24 md:w-40 h-24 md:h-40 bg-cyan-500/20 rounded-full blur-3xl" />
    
    {/* Logo */}
    <div className="absolute top-3 md:top-5 left-1/2 -translate-x-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full border-2 border-pink-400/50 overflow-hidden bg-white shadow-lg">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main text */}
    <div className="absolute top-14 md:top-22 left-0 right-0 text-center">
      <div className="font-body text-pink-300 text-[10px] md:text-sm tracking-[0.2em]">✨ HAPPY ✨</div>
      <div className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-cyan-300 text-2xl md:text-4xl font-bold">NEW YEAR</div>
      <div className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 text-3xl md:text-5xl font-bold">2026</div>
    </div>
    
    {/* Photo with gradient border */}
    <div className="absolute top-[42%] md:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 md:w-36 h-24 md:h-36 p-1 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-full">
      <div className="w-full h-full rounded-full flex items-center justify-center bg-purple-900 overflow-hidden">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-white/70 text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute top-[62%] md:top-[60%] left-3 md:left-6 right-3 md:right-6 bg-white/5 rounded-xl p-2 md:p-3 backdrop-blur-sm border border-white/10">
      <p className="text-white/90 text-[9px] md:text-xs leading-relaxed font-body text-center">"{wishingText}"</p>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-10 md:bottom-14 left-0 right-0 text-center">
      {name && <div className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-cyan-300 font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-white/70 text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 md:bottom-4 left-0 right-0 text-center">
      <div className="text-[9px] md:text-xs text-pink-300/70 font-body">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

export const templates = [
  { id: 1, name: "Classic Green", component: FrameTemplate1 },
  { id: 2, name: "Golden Elegance", component: FrameTemplate2 },
  { id: 3, name: "Modern Dark", component: FrameTemplate3 },
  { id: 4, name: "Royal Blue", component: FrameTemplate4 },
  { id: 5, name: "Festive Red", component: FrameTemplate5 },
  { id: 6, name: "Purple Glow", component: FrameTemplate6 },
];
