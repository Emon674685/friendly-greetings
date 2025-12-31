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
    <div className="absolute left-0 top-0 bottom-0 w-3 bg-primary" />
    
    {/* Top right logo */}
    <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-primary/30 overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Excellence text */}
    <div className="absolute top-8 left-6 text-primary text-xs font-medium italic font-body">
      Excellence in Education
    </div>
    
    {/* Main content */}
    <div className="absolute left-6 top-16 pr-20">
      <div className="font-heading text-primary text-2xl">HAPPY</div>
      <div className="font-heading text-foreground text-4xl font-bold leading-tight">NEW YEAR</div>
      <div className="font-heading text-primary text-5xl font-bold">2026</div>
    </div>
    
    {/* Photo circle */}
    <div className="absolute right-8 top-1/4 w-36 h-36">
      <div className="w-full h-full rounded-full border-4 border-dashed border-primary/50 flex items-center justify-center bg-card/50 overflow-hidden">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-muted-foreground text-sm font-body">Your Photo</span>
        )}
      </div>
      {/* Decorative sparkles */}
      <div className="absolute -top-2 -right-2 text-gold animate-sparkle">✦</div>
      <div className="absolute -bottom-2 left-4 text-gold animate-sparkle" style={{ animationDelay: '0.5s' }}>✦</div>
      <div className="absolute top-1/2 -left-3 text-gold animate-sparkle" style={{ animationDelay: '1s' }}>✦</div>
    </div>
    
    {/* Wishing text box */}
    <div className="absolute bottom-28 left-4 right-4 bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
      <div className="text-lg text-primary font-serif mb-1">"</div>
      <p className="text-foreground text-xs leading-relaxed font-body">{wishingText}</p>
      <div className="text-lg text-primary font-serif text-right">"</div>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-12 left-4">
      {name && <div className="text-foreground font-semibold text-sm font-body">{name}</div>}
      {designation && <div className="text-muted-foreground text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 left-4 right-4 flex justify-between items-center">
      <div className="text-xs text-muted-foreground font-body flex items-center gap-1">
        <span>▶</span> kpi.edu.bd
      </div>
      <div className="text-xs text-primary/70 font-body">Kishoreganj Polytechnic Institute</div>
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
    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-gold to-primary" />
    
    {/* Logo centered top */}
    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full border-2 border-gold overflow-hidden bg-card shadow-lg">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Happy New Year text - centered */}
    <div className="absolute top-24 left-0 right-0 text-center">
      <div className="font-body text-gold text-sm tracking-widest">✨ HAPPY ✨</div>
      <div className="font-heading text-foreground text-3xl font-bold">NEW YEAR</div>
      <div className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold text-5xl font-bold">2026</div>
    </div>
    
    {/* Photo - centered large */}
    <div className="absolute top-48 left-1/2 -translate-x-1/2 w-40 h-40">
      <div className="w-full h-full rounded-full border-4 border-gold/60 flex items-center justify-center bg-card/80 overflow-hidden shadow-lg">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-muted-foreground text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute bottom-28 left-4 right-4 text-center">
      <p className="text-foreground text-xs leading-relaxed font-body italic">"{wishingText}"</p>
    </div>
    
    {/* Name and designation - centered */}
    <div className="absolute bottom-14 left-0 right-0 text-center">
      {name && <div className="text-foreground font-semibold text-sm font-body">{name}</div>}
      {designation && <div className="text-primary text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 left-0 right-0 text-center">
      <div className="text-xs text-muted-foreground font-body">Kishoreganj Polytechnic Institute</div>
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
      <div className="absolute top-4 left-4 w-20 h-20 border border-primary-foreground rounded-full" />
      <div className="absolute top-8 left-8 w-20 h-20 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-4 right-4 w-20 h-20 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border border-primary-foreground rounded-full" />
    </div>
    
    {/* Logo */}
    <div className="absolute top-4 right-4 w-12 h-12 rounded-full overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main content */}
    <div className="absolute top-8 left-6">
      <div className="font-body text-gold text-xs tracking-widest">CELEBRATING</div>
      <div className="font-heading text-primary-foreground text-5xl font-bold leading-none mt-2">2026</div>
      <div className="font-heading text-gold text-xl">Happy New Year</div>
    </div>
    
    {/* Photo */}
    <div className="absolute top-32 left-1/2 -translate-x-1/2 w-36 h-36">
      <div className="w-full h-full rounded-2xl border-4 border-gold/60 flex items-center justify-center bg-card/20 overflow-hidden rotate-3 shadow-xl">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover" />
        ) : (
          <span className="text-primary-foreground/70 text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="absolute bottom-28 left-4 right-4">
      <p className="text-primary-foreground/90 text-xs leading-relaxed font-body text-center">{wishingText}</p>
    </div>
    
    {/* Name and designation */}
    <div className="absolute bottom-12 left-0 right-0 text-center">
      {name && <div className="text-gold font-semibold text-sm font-body">{name}</div>}
      {designation && <div className="text-primary-foreground/70 text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="absolute bottom-3 left-0 right-0 text-center">
      <div className="text-xs text-primary-foreground/60 font-body">kpi.edu.bd • Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

export const templates = [
  { id: 1, name: "Classic Green", component: FrameTemplate1 },
  { id: 2, name: "Golden Elegance", component: FrameTemplate2 },
  { id: 3, name: "Modern Dark", component: FrameTemplate3 },
];
