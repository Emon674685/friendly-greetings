import React from 'react';
import FrameEditor from '@/components/FrameEditor';
import kpiLogo from '@/assets/kpi-logo.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full border-4 border-primary/30 overflow-hidden bg-card shadow-card p-1">
              <img src={kpiLogo} alt="KPI Logo" className="w-full h-full object-contain" />
            </div>
          </div>
          
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-1">
            Kishoreganj Polytechnic Institute
          </h1>
          <p className="text-primary font-body text-sm mb-6">Excellence in Technical Education</p>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl md:text-4xl animate-bounce">🎉</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-gold to-primary bg-[length:200%_auto] animate-[gradient-shift_3s_ease-in-out_infinite] bg-clip-text text-transparent drop-shadow-lg">
              Happy New Year 2026
            </h2>
            <span className="text-3xl md:text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎊</span>
          </div>
          <div className="flex justify-center gap-2 mb-2">
            <span className="text-gold text-2xl animate-sparkle">✨</span>
            <span className="text-gold text-2xl animate-sparkle" style={{ animationDelay: '0.3s' }}>⭐</span>
            <span className="text-gold text-2xl animate-sparkle" style={{ animationDelay: '0.6s' }}>✨</span>
          </div>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Create your personalized New Year greeting card and share with friends & family
          </p>
        </header>

        {/* Main Editor */}
        <FrameEditor />
        
        {/* Footer */}
        <footer className="text-center mt-12 pb-6">
          <p className="text-muted-foreground text-sm font-body">
            © 2026 Kishoreganj Polytechnic Institute • kpi.edu.bd
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
