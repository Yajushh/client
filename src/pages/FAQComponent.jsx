import React, { useState } from "react";

const faqData = [
  {
    question: "How do I invest in a Project?",
    answer:
      "When you want to invest in a project, click on the Connect button and schedule a call with you so we can understand your requirements. You can also email us at aashish@decarbonn.com and we will get back to you within 48 hours to understand your requirements. Shortly after that, we will connect you with the on-ground team and you can invest in the project.",
  },
  {
    question: "Can I get more details on the project than already on the site?",
    answer:
      "Yes, you can write to us and we will be able to connect you with the on-ground operations team of the project. They would be able to give you a detailed explanation of the project.",
  },
  {
    question: "When will I receive my Carbon Credits in my account?",
    answer:
      "For Ex-post Carbon Credit, the credits will be transferred to your account within 15 days of agreement. For Ex-ante Carbon Credits, an agreement will be signed and the credits will be made available to you on the completion of the project.",
  },
];

const FAQItem = ({ faq, toggle, isOpen }) => (
  <div style={{ marginBottom: "10px" }}>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={toggle}
    >
      <p>{faq.question}</p>
      <span>{isOpen ? "▲" : "▼"}</span>
    </div>
    {isOpen && <p style={{ marginTop: "5px" }}>{faq.answer}</p>}
  </div>
);

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{ background: "#fdfaec", padding: "20px", borderRadius: "5px" }}
    >
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          faq={faq}
          isOpen={openIndex === index}
          toggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}
