import React from 'react';
import { templates } from './FrameTemplates';
import { Check } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: number;
  onSelectTemplate: (id: number) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ selectedTemplate, onSelectTemplate }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelectTemplate(template.id)}
          className={`relative p-2 rounded-lg border-2 transition-all duration-300 ${
            selectedTemplate === template.id 
              ? 'border-primary bg-accent shadow-card' 
              : 'border-border hover:border-primary/50 bg-card'
          }`}
        >
          <div className={`h-16 rounded-md flex items-center justify-center text-xs font-body ${
            template.id === 1 ? 'bg-gradient-to-br from-primary/20 to-accent' :
            template.id === 2 ? 'bg-gradient-to-br from-gold/20 to-primary/10' :
            'bg-primary'
          }`}>
            <span className={template.id === 3 ? 'text-primary-foreground' : 'text-foreground'}>
              {template.name.split(' ')[0]}
            </span>
          </div>
          <p className="text-xs text-foreground mt-1 font-body text-center">{template.name}</p>
          
          {selectedTemplate === template.id && (
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
              <Check className="w-3 h-3 text-primary-foreground" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
