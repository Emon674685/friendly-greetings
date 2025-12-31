import React, { useCallback, useRef } from 'react';
import { Upload } from 'lucide-react';

interface PhotoUploaderProps {
  onPhotoUpload: (photoUrl: string) => void;
  uploadedPhoto: string | null;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ onPhotoUpload, uploadedPhoto }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        onPhotoUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onPhotoUpload]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      if (file.size > 10 * 1024 * 1024) {
        alert('File size must be less than 10MB');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        onPhotoUpload(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, [onPhotoUpload]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="border-2 border-dashed border-primary/40 rounded-lg p-8 text-center cursor-pointer hover:border-primary hover:bg-accent/30 transition-all duration-300 group"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg"
        onChange={handleFileChange}
        className="hidden"
      />
      
      {uploadedPhoto ? (
        <div className="space-y-3">
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-primary">
            <img src={uploadedPhoto} alt="Uploaded" className="w-full h-full object-cover" />
          </div>
          <p className="text-sm text-primary font-medium font-body">Photo uploaded! Click to change</p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Upload className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-primary font-medium font-body">Click to upload or drag and drop</p>
            <p className="text-xs text-muted-foreground mt-1 font-body">PNG, JPG (max 10MB)</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
