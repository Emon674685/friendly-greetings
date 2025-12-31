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
  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-primary/5 via-card to-accent/20 rounded-lg overflow-hidden shadow-card flex flex-col">
    {/* Left accent bar */}
    <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 bg-primary" />
    
    {/* Top right logo */}
    <div className="absolute top-2 md:top-4 right-2 md:right-4 w-8 md:w-14 h-8 md:h-14 rounded-full border-2 border-primary/30 overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Institution text */}
    <div className="pt-3 md:pt-5 pl-5 md:pl-8 text-primary text-[8px] md:text-xs font-medium italic font-body">
      Kishoreganj Polytechnic Institute
    </div>
    
    {/* Header and photo row */}
    <div className="flex items-start justify-between px-4 md:px-6 mt-4 md:mt-6">
      <div className="flex-shrink-0">
        <div className="font-heading text-primary text-sm md:text-xl">HAPPY</div>
        <div className="font-heading text-foreground text-lg md:text-3xl font-bold leading-tight">NEW YEAR</div>
        <div className="font-heading text-primary text-2xl md:text-4xl font-bold">2026</div>
      </div>
      
      {/* Photo circle */}
      <div className="relative w-24 md:w-36 h-24 md:h-36 flex-shrink-0 ml-2">
        <div className="w-full h-full rounded-full border-4 border-dashed border-primary/50 flex items-center justify-center bg-card/50 overflow-hidden">
          {uploadedPhoto ? (
            <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-muted-foreground text-[8px] md:text-sm font-body">Your Photo</span>
          )}
        </div>
        {/* Decorative sparkles */}
        <div className="absolute -top-1 -right-1 text-gold animate-sparkle text-xs md:text-base">✦</div>
        <div className="absolute -bottom-1 left-2 text-gold animate-sparkle text-xs md:text-base" style={{ animationDelay: '0.5s' }}>✦</div>
        <div className="absolute top-1/2 -left-2 text-gold animate-sparkle text-xs md:text-base" style={{ animationDelay: '1s' }}>✦</div>
      </div>
    </div>
    
    {/* Wishing text box */}
    <div className="mx-3 md:mx-5 mt-3 md:mt-4 bg-primary/10 rounded-lg p-2 md:p-3 border-l-4 border-primary flex-grow">
      <div className="text-sm md:text-lg text-primary font-serif">"</div>
      <p className="text-foreground text-[9px] md:text-xs leading-relaxed font-body">{wishingText}</p>
      <div className="text-sm md:text-lg text-primary font-serif text-right">"</div>
    </div>
    
    {/* Name and designation */}
    <div className="px-3 md:px-5 mt-2 md:mt-3">
      {name && <div className="text-foreground font-semibold text-[10px] md:text-sm font-body">{name}</div>}
      {designation && <div className="text-muted-foreground text-[9px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="px-3 md:px-5 py-2 md:py-3 mt-auto">
      <div className="text-[8px] md:text-xs text-primary/70 font-body text-center">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

export const FrameTemplate2: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-gold/10 via-card to-primary/10 rounded-lg overflow-hidden shadow-card border border-gold/30 flex flex-col">
    {/* Top decorative band */}
    <div className="h-1.5 md:h-2 bg-gradient-to-r from-primary via-gold to-primary flex-shrink-0" />
    
    {/* Logo centered top */}
    <div className="flex justify-center pt-2 md:pt-4 flex-shrink-0">
      <div className="w-10 md:w-14 h-10 md:h-14 rounded-full border-2 border-gold overflow-hidden bg-card shadow-lg">
        <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
      </div>
    </div>
    
    {/* Happy New Year text - centered */}
    <div className="text-center py-2 md:py-3 flex-shrink-0">
      <div className="font-body text-gold text-[9px] md:text-sm tracking-widest">✨ HAPPY ✨</div>
      <div className="font-heading text-foreground text-xl md:text-3xl font-bold">NEW YEAR</div>
      <div className="font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold text-2xl md:text-4xl font-bold">2026</div>
    </div>
    
    {/* Photo - centered */}
    <div className="flex justify-center flex-shrink-0">
      <div className="w-24 md:w-36 h-24 md:h-36 rounded-full border-4 border-gold/60 flex items-center justify-center bg-card/80 overflow-hidden shadow-lg">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover rounded-full" />
        ) : (
          <span className="text-muted-foreground text-[9px] md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="px-4 md:px-6 py-2 md:py-3 text-center flex-grow">
      <p className="text-foreground text-[9px] md:text-xs leading-relaxed font-body italic">"{wishingText}"</p>
    </div>
    
    {/* Name and designation - centered */}
    <div className="text-center pb-1 md:pb-2 flex-shrink-0">
      {name && <div className="text-foreground font-semibold text-[10px] md:text-sm font-body">{name}</div>}
      {designation && <div className="text-primary text-[9px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Spacer for bottom */}
    <div className="py-1.5 md:py-2 flex-shrink-0" />
    
    {/* Bottom decorative band */}
    <div className="h-1 bg-gradient-to-r from-primary via-gold to-primary flex-shrink-0" />
  </div>
);

export const FrameTemplate3: React.FC<FrameTemplateProps> = ({ 
  uploadedPhoto, 
  wishingText, 
  name, 
  designation 
}) => (
  <div className="relative w-full aspect-[4/5] bg-primary rounded-lg overflow-hidden shadow-card flex flex-col">
    {/* Decorative patterns */}
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <div className="absolute top-2 md:top-4 left-2 md:left-4 w-12 md:w-20 h-12 md:h-20 border border-primary-foreground rounded-full" />
      <div className="absolute top-4 md:top-8 left-4 md:left-8 w-12 md:w-20 h-12 md:h-20 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 w-12 md:w-20 h-12 md:h-20 border border-primary-foreground rounded-full" />
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 w-12 md:w-20 h-12 md:h-20 border border-primary-foreground rounded-full" />
    </div>
    
    {/* Logo */}
    <div className="absolute top-2 md:top-4 right-2 md:right-4 w-8 md:w-12 h-8 md:h-12 rounded-full overflow-hidden bg-card">
      <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
    </div>
    
    {/* Main content */}
    <div className="pt-3 md:pt-6 px-4 md:px-6 flex-shrink-0">
      <div className="font-body text-gold text-[8px] md:text-xs tracking-widest">CELEBRATING</div>
      <div className="font-heading text-primary-foreground text-2xl md:text-4xl font-bold leading-none mt-1">2026</div>
      <div className="font-heading text-gold text-sm md:text-xl">Happy New Year</div>
    </div>
    
    {/* Photo */}
    <div className="flex justify-center py-3 md:py-4 flex-shrink-0">
      <div className="w-20 md:w-32 h-20 md:h-32 rounded-2xl border-4 border-gold/60 flex items-center justify-center bg-card/20 overflow-hidden rotate-3 shadow-xl">
        {uploadedPhoto ? (
          <img src={uploadedPhoto} alt="Your photo" className="w-full h-full object-cover" />
        ) : (
          <span className="text-primary-foreground/70 text-[9px] md:text-sm font-body">Your Photo</span>
        )}
      </div>
    </div>
    
    {/* Wishing text */}
    <div className="px-4 md:px-6 flex-grow">
      <p className="text-primary-foreground/90 text-[9px] md:text-xs leading-relaxed font-body text-center">{wishingText}</p>
    </div>
    
    {/* Name and designation */}
    <div className="text-center py-1 md:py-2 flex-shrink-0">
      {name && <div className="text-gold font-semibold text-[10px] md:text-sm font-body">{name}</div>}
      {designation && <div className="text-primary-foreground/70 text-[9px] md:text-xs font-body">{designation}</div>}
    </div>
    
    {/* Footer */}
    <div className="text-center py-2 md:py-3 flex-shrink-0">
      <div className="text-[8px] md:text-xs text-primary-foreground/60 font-body">Kishoreganj Polytechnic Institute</div>
    </div>
  </div>
);

export const templates = [
  { id: 1, name: "Classic Green", component: FrameTemplate1 },
  { id: 2, name: "Golden Elegance", component: FrameTemplate2 },
  { id: 3, name: "Modern Dark", component: FrameTemplate3 },
];
