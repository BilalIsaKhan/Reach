import React from 'react';

interface EditableImageProps {
  src: string;
  alt: string;
  onImageChange: (newSrc: string) => void;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({ src, alt, onImageChange, className }) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newImageUrl = URL.createObjectURL(e.target.files[0]);
      onImageChange(newImageUrl);
    }
  };

  return (
    <div className={className}>
      <img src={src} alt={alt} className="w-full h-auto cursor-pointer" />
      <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
    </div>
  );
};

export default EditableImage;
