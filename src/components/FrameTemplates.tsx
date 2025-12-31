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
    
    {/* Top right logo */}
    <div className="absolute top-2 md:top-4 right-2 md:right-4 w-10 md:w-16 h-10 md:h-16 rounded-full border-2 border-primary/30 overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Institution text */}
    <div className="absolute top-3 md:top-6 left-4 md:left-6 text-primary text-[10px] md:text-xs font-medium italic font-body">
      Kishoreganj Polytechnic Institute
    </div>
    
    {/* Main content */}
    <div className="absolute left-4 md:left-6 top-10 md:top-16 pr-16 md:pr-20">
      <div className="font-heading text-primary text-lg md:text-2xl">HAPPY</div>
      <div className="font-heading text-foreground text-2xl md:text-4xl font-bold leading-tight">NEW YEAR</div>
      <div className="font-heading text-primary text-3xl md:text-5xl font-bold">2026</div>
    </div>
    
    {/* Photo circle */}
    <div className="absolute right-4 md:right-8 top-[28%] md:top-1/4 w-24 md:w-36 h-24 md:h-36">
      <div className="w-full h-full rounded-full border-4 border-dashed border-primary/50 flex items-center justify-center bg-card/50 overflow-hidden">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-muted-foreground text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
      {/* Decorative sparkles */}
      <div className="absolute -top-2 -right-2 text-gold animate-sparkle text-sm md:text-base">✦</div>
      <div className="absolute -bottom-2 left-4 text-gold animate-sparkle text-sm md:text-base" style={{ animationDelay: '0.5s' }}>✦</div>
      <div className="absolute top-1/2 -left-3 text-gold animate-sparkle text-sm md:text-base" style={{ animationDelay: '1s' }}>✦</div>
    </div>
    
    {/* Wishing text box */}
    <div className="absolute bottom-24 md:bottom-28 left-3 md:left-4 right-3 md:right-4 bg-primary/10 rounded-lg p-2 md:p-4 border-l-4 border-primary">
      <div className="text-base md:text-lg text-primary font-serif mb-1">"</div>
      <p className="text-foreground text-[10px] md:text-xs leading-relaxed font-body">{wishingText}</p>
      <div className="text-base md:text-lg text-primary font-serif text-right">"</div>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-10 md:bottom-12 left-3 md:left-4">
      {name && <div className="text-foreground font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-muted-foreground text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-2 md:bottom-3 left-3 md:left-4 right-3 md:right-4">
      <div className="text-[10px] md:text-xs text-primary/70 font-body text-center">Kishoreganj Polytechnic Institute</div>
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
    <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 w-10 md:w-14 h-10 md:h-14 rounded-full border-2 border-gold overflow-hidden bg-card shadow-lg">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Happy New Year text - centered */}
    <div className="absolute top-16 md:top-24 left-0 right-0 text-center">
      <div className="font-body text-gold text-[10px] md:text-sm tracking-widest">✨ HAPPY ✨</div>
      <div className="font-heading text-foreground text-2xl md:text-3xl font-bold">NEW YEAR</div>
      <div className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold text-3xl md:text-5xl font-bold">2026</div>
    </div>
    
    {/* Photo - centered large */}
    <div className="absolute top-36 md:top-48 left-1/2 -translate-x-1/2 w-28 md:w-40 h-28 md:h-40">
      <div className="w-full h-full rounded-full border-4 border-gold/60 flex items-center justify-center bg-card/80 overflow-hidden shadow-lg">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-muted-foreground text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute bottom-24 md:bottom-28 left-3 md:left-4 right-3 md:right-4 text-center">
      <p className="text-foreground text-[10px] md:text-xs leading-relaxed font-body italic">"{wishingText}"</p>
    </div>
    
    {/* Name and designation - centered */}
    <div className="absolute bottom-12 md:bottom-14 left-0 right-0 text-center">
      {name && <div className="text-foreground font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-primary text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-2 md:bottom-3 left-0 right-0 text-center">
      <div className="text-[10px] md:text-xs text-muted-foreground font-body">Kishoreganj Polytechnic Institute</div>
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
      <div className="absolute top-2 md:top-4 left-2 md:left-4 w-14 md:w-20 h-14 md:h-20 border border-primary-foreground rounded-full" />
      <div className="absolute top-4 md:top-8 left-4 md:left-8 w-14 md:w-20 h-14 md:h-20 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-14 md:w-20 h-14 md:h-20 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-14 md:w-20 h-14 md:h-20 border border-primary-foreground rounded-full" />
    </div>
    
    {/* Logo */}
    <div className="absolute top-2 md:top-4 right-2 md:right-4 w-9 md:w-12 h-9 md:h-12 rounded-full overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main content */}
    <div className="absolute top-4 md:top-8 left-4 md:left-6">
      <div className="font-body text-gold text-[9px] md:text-xs tracking-widest">CELEBRATING</div>
      <div className="font-heading text-primary-foreground text-3xl md:text-5xl font-bold leading-none mt-1 md:mt-2">2026</div>
      <div className="font-heading text-gold text-base md:text-xl">Happy New Year</div>
    </div>
    
    {/* Photo */}
    <div className="absolute top-24 md:top-32 left-1/2 -translate-x-1/2 w-24 md:w-36 h-24 md:h-36">
      <div className="w-full h-full rounded-2xl border-4 border-gold/60 flex items-center justify-center bg-card/20 overflow-hidden rotate-3 shadow-xl">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover" />
        ) : (
          <span className="text-primary-foreground/70 text-xs md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute bottom-24 md:bottom-28 left-3 md:left-4 right-3 md:right-4">
      <p className="text-primary-foreground/90 text-[10px] md:text-xs leading-relaxed font-body text-center">{wishingText}</p>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-12 md:bottom-14 left-0 right-0 text-center">
      {name && <div className="text-gold font-semibold text-xs md:text-sm font-body">{name}</div>}
      {designation && <div className="text-primary-foreground/70 text-[10px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-2 md:bottom-3 left-0 right-0 text-center">
      <div className="text-[10px] md:text-xs text-primary-foreground/60 font-body">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

export const templates = [
  { id: 1, name: "Classic Green", component: FrameTemplate1 },
  { id: 2, name: "Golden Elegance", component: FrameTemplate2 },
  { id: 3, name: "Modern Dark", component: FrameTemplate3 },
];
