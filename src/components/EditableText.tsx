import React, { useState } from "react";

interface EditableTextProps {
  text: string;
  onSave: (newText: string) => void;
  className?: string;
}

const EditableText: React.FC<EditableTextProps> = ({
  text,
  onSave,
  className,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  const handleSave = () => {
    setIsEditing(false);
    onSave(value);
  };

  return isEditing ? (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleSave}
      autoFocus
      className={`border-b-2 ${className}`}
    />
  ) : (
    <div
      onClick={() => setIsEditing(true)}
      className={`cursor-pointer text-left ${className}`}
    >
      {text}
    </div>
  );
};

export default EditableText;
