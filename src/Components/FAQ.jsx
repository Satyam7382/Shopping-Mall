import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "What are the mall timings?",
    answer: "Satlini Mall is open from 10 AM to 10 PM every day.",
  },
  {
    question: "Is parking available at the mall?",
    answer: "Yes, we have ample parking space for visitors, including valet service.",
  },
  {
    question: "Are pets allowed in the mall?",
    answer: "Unfortunately, pets are not allowed except for service animals.",
  },
  {
    question: "Do you have free Wi-Fi?",
    answer: "Yes, free Wi-Fi is available throughout the mall.",
  },
];

const FAQ = ({ showFeedback = false, showPrivacy = false }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [feedbackGiven, setFeedbackGiven] = useState(false);
  const [comment, setComment] = useState("");
  const refs = useRef([]);

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Scroll to feedback or privacy section on mount if requested
  useEffect(() => {
    if (showFeedback) {
      const feedbackSection = document.getElementById("feedback-section");
      if (feedbackSection) {
        feedbackSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    if (showPrivacy) {
      const privacySection = document.getElementById("privacy-policy");
      if (privacySection) {
        privacySection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [showFeedback, showPrivacy]);

  // Handle feedback submit
  const handleFeedback = () => {
    if (comment.trim().length > 0) {
      alert("Thanks for your feedback!");
      setFeedbackGiven(true);
      setComment("");
    } else {
      alert("Please enter a comment before submitting.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 sm:p-16">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">
        Frequently Asked Questions
      </h1>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm overflow-hidden transition-all"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer p-5 bg-gray-100 hover:bg-gray-200"
            >
              <h2 className="text-lg font-medium text-gray-800">{faq.question}</h2>
              <span className="text-2xl font-bold text-indigo-600">
                {activeIndex === index ? "–" : "+"}
              </span>
            </div>
            <div
              ref={(el) => (refs.current[index] = el)}
              style={{
                maxHeight:
                  activeIndex === index
                    ? `${refs.current[index]?.scrollHeight}px`
                    : "0px",
              }}
              className="transition-max-height duration-500 ease-in-out overflow-hidden px-5 bg-white text-gray-700"
            >
              <p className="py-4">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Privacy Policy Section */}
      <div
        id="privacy-policy"
        className="mt-16 bg-white p-6 rounded-lg shadow-md border border-gray-200"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Privacy Policy
        </h2>
        <p className="text-gray-700 mb-4">
          We value your privacy. Any information you provide, such as feedback or
          questions, will be kept confidential and used only to improve your
          experience at Satlini Mall. We do not share your personal information
          with third parties.
        </p>
        <p className="text-gray-700">
          By submitting feedback or interacting with this site, you agree to our
          use of your data as outlined in this policy. If you have any concerns,
          please feel free to contact us.
        </p>
      </div>

      {/* Feedback Section */}
      <div
        id="feedback-section"
        className="mt-12 bg-gray-50 p-6 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Was this page helpful?
        </h3>
        {!feedbackGiven ? (
          <>
            <textarea
              className="w-full border border-gray-300 rounded-md p-3 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
              rows="4"
              placeholder="Your feedback..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={handleFeedback}
              className="block mx-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition"
            >
              Submit Feedback
            </button>
          </>
        ) : (
          <p className="text-center text-green-600 font-semibold">
            Thank you for your feedback!
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
