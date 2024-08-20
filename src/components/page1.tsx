import React, { useState } from "react";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";
import Image from "../assets/image.jpg";
import Footer from "./footer";

const EditablePage: React.FC = () => {
  const [heading, setHeading] = useState(
    "Engaging Your Members in Constitutional Changes"
  );
  const [paragraph1, setParagraph1] = useState(
    `Engaging your members in the process of constitutional changes is not just a best practice; it’s essential for ensuring the legitimacy and acceptance of those changes. When members are involved and informed, they are more likely to understand the need for updates and support the board’s decisions. Effective member engagement begins with clear communication about why changes are necessary and how they will benefit the organization. This approach helps to build trust, fosters a sense of ownership among members, and minimizes resistance to change. By treating constitutional updates as a collaborative effort rather than a top-down mandate, organizations can ensure that their governance framework remains both relevant and supported by those it serves.`
  );
  const [paragraph2, setParagraph2] = useState(
    `A critical aspect of this engagement is recognizing that members should be viewed as partners in the governance process. Stephen Bowman emphasized this during the webinar, noting, "You are guaranteed to upset your members if you tell them, ‘Here are the changes that we, the board, want—just say yes.’ They won’t do it; so you need to take them through a process." This quote underscores the importance of involving members early in the discussion, seeking their input, and ensuring that they feel heard. By doing so, organizations can navigate the delicate process of constitutional change with greater ease and success, ultimately strengthening their governance structures.`
  );
  const [imageSrc, setImageSrc] = useState(Image);

  return (
    <>
      <div className="relative bg-white p-[5.2rem] rounded-lg shadow-lg bg-[radial-gradient(circle,_#ddd_1px,_transparent_1px)] bg-[length:10px_10px] opacity-100">
        <div className="relative z-10 grid">
          <EditableText
            text={heading}
            onSave={setHeading}
            className="text-[56px] mb-4 text-blue-600 font-times"
          />
          <EditableText
            text={paragraph1}
            onSave={setParagraph1}
            className="text-lg mb-4 text-gray-500"
          />
          <EditableImage
            src={imageSrc}
            alt="Editable Content"
            onImageChange={setImageSrc}
            className="my-4 text-gray-500"
          />
          <EditableText
            text={paragraph2}
            onSave={setParagraph2}
            className="text-lg text-gray-500"
          />
        </div>
      </div>
      <Footer number={5} />
    </>
  );
};

export default EditablePage;
