import React, { useState, useRef } from 'react';
import { Sparkles, RefreshCw, Download, ArrowRight } from 'lucide-react';
import PhotoUploader from './PhotoUploader';
import TemplateSelector from './TemplateSelector';
import { FrameTemplate1, FrameTemplate2, FrameTemplate3 } from './FrameTemplates';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import html2canvas from 'html2canvas';

const FrameEditor: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [wishingText, setWishingText] = useState(
    "Wishing you a New Year filled with success, prosperity, and new opportunities. May 2026 be a year of great achievements for all of us. Happy New Year!"
  );
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const frameRef = useRef<HTMLDivElement>(null);

  const handleStartOver = () => {
    setStep(1);
    setUploadedPhoto(null);
    setSelectedTemplate(1);
    setWishingText("Wishing you a New Year filled with success, prosperity, and new opportunities. May 2026 be a year of great achievements for all of us. Happy New Year!");
    setName('');
    setDesignation('');
  };

  const handleDownload = async () => {
    if (frameRef.current) {
      try {
        const canvas = await html2canvas(frameRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: null,
        });
        const link = document.createElement('a');
        link.download = `new-year-2026-${name || 'greeting'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  const SelectedFrameComponent = selectedTemplate === 1 ? FrameTemplate1 : 
                                  selectedTemplate === 2 ? FrameTemplate2 : FrameTemplate3;

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* Preview */}
      <div className="bg-card rounded-2xl p-6 shadow-card">
        <div ref={frameRef} className="max-w-sm mx-auto">
          <SelectedFrameComponent
            uploadedPhoto={uploadedPhoto}
            wishingText={wishingText}
            name={name}
            designation={designation}
            selectedTemplate={selectedTemplate}
          />
        </div>
      </div>

      {/* Editor */}
      <div className="bg-card rounded-2xl p-6 shadow-card">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h2 className="font-heading text-xl font-bold text-foreground">New Year Frame Editor</h2>
        </div>
        <p className="text-sm text-primary font-body mb-6">
          Step {step}: {step === 1 ? 'Upload Photo' : 'Customize Frame'}
        </p>

        {step === 1 ? (
          <div className="space-y-6">
            <div>
              <Label className="text-foreground font-body mb-2 block">1. Select Your Photo</Label>
              <PhotoUploader 
                onPhotoUpload={setUploadedPhoto} 
                uploadedPhoto={uploadedPhoto}
              />
            </div>

            <Button
              onClick={() => setStep(2)}
              className="w-full font-body shadow-button"
              size="lg"
            >
              Next: Customize Frame
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <Label className="text-foreground font-body mb-2 block">2. Choose Template</Label>
              <TemplateSelector 
                selectedTemplate={selectedTemplate}
                onSelectTemplate={setSelectedTemplate}
              />
            </div>

            <div>
              <Label className="text-foreground font-body mb-2 block">3. Wishing Message</Label>
              <Textarea
                value={wishingText}
                onChange={(e) => setWishingText(e.target.value)}
                placeholder="Enter your wishing message..."
                className="font-body resize-none"
                rows={3}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground font-body mb-2 block">4. Your Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="font-body"
                />
              </div>
              <div>
                <Label className="text-foreground font-body mb-2 block">5. Designation</Label>
                <Input
                  value={designation}
                  onChange={(e) => setDesignation(e.target.value)}
                  placeholder="e.g., Student, Teacher"
                  className="font-body"
                />
              </div>
            </div>

            <Button
              onClick={handleDownload}
              className="w-full font-body shadow-button"
              size="lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Card
            </Button>
          </div>
        )}

        <button
          onClick={handleStartOver}
          className="flex items-center justify-center gap-2 w-full mt-4 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Start Over
        </button>
      </div>
    </div>
  );
};

export default FrameEditor;
