import React from 'react';
import { templates } from './FrameTemplates';
import { Check } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: number;
  onSelectTemplate: (id: number) => void;
}

const getTemplateStyle = (id: number) => {
  switch(id) {
    case 1: return 'bg-gradient-to-br from-primary/20 to-accent text-foreground';
    case 2: return 'bg-gradient-to-br from-gold/20 to-primary/10 text-foreground';
    case 3: return 'bg-primary text-primary-foreground';
    case 4: return 'bg-gradient-to-br from-blue-900 to-blue-700 text-white';
    case 5: return 'bg-gradient-to-br from-red-700 to-red-600 text-white';
    case 6: return 'bg-gradient-to-br from-purple-900 to-violet-700 text-white';
    default: return 'bg-card text-foreground';
  }
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selectedTemplate, onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelectTemplate(template.id)}
          className={`relative p-1.5 md:p-2 rounded-lg border-2 transition-all duration-300 ${
            selectedTemplate === template.id 
              ? 'border-primary bg-accent shadow-card scale-105' 
              : 'border-border hover:border-primary/50 bg-card hover:scale-102'
          }`}
        >
          <div className={`h-12 md:h-16 rounded-md flex items-center justify-center text-[10px] md:text-xs font-body font-medium ${getTemplateStyle(template.id)}`}>
            <span>{template.name.split(' ')[0]}</span>
          </div>
          <p className="text-[10px] md:text-xs text-foreground mt-1 font-body text-center truncate">{template.name}</p>
          
          {selectedTemplate === template.id && (
            <div className="absolute -top-1 -right-1 w-4 md:w-5 h-4 md:h-5 bg-primary rounded-full flex items-center justify-center">
              <Check className="w-2.5 md:w-3 h-2.5 md:h-3 text-primary-foreground" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
