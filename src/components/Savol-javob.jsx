// Accordion.jsx
import { useState } from "react";
import { accordionData } from "../data";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f2f8fb]">
      <div className="text-center p-8 border -mx-5 bg-white">
        <button
          className="flex cursor-pointer justify-between w-[885px] p-4 text-left text-[20px] font-medium focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span className="relative left-[460px] text-4xl">{isOpen ? "↑" : "↓"}</span>
        </button>
      </div>
      {isOpen && (
        <div className="text-gray-600 -mx-5 w-[910px] px-8 py-6 bg-[#f2f8fb] text-lg cursor-default">{answer}</div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="bg-[#F2F8FB] py-[121.525px] border-b">
      <div className="container">
        <h2 className="text-center font-bold text-5xl">Savol - javob</h2>
        <p className="mb-12 text-center text-[22px] text-black/50 mt-2">Qiyin narsa darhol amalga oshiriladi, <br />imkonsiz narsa biroz ko'proq vaqt oladi.</p>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
