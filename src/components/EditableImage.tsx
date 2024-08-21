import React from "react";

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
}

const EditableImage: React.FC<EditableImageProps> = ({
  src,
  alt,
  className,
}) => {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        className="object-contain h-auto cursor-pointer rounded-lg w-full"
      />
    </div>
  );
};

export default EditableImage;
