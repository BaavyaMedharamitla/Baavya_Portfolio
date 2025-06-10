import React from 'react';


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 ">

      <div className="section-container text-center">
        <h2 className="section-title text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contact Me</h2>
        <p className="section-subtitle text-gray-600 dark:text-gray-300 mb-10">
          I'm open to collaborations, ideas, or just a friendly hello. Fill out the form below to get in touch.
        </p>

        <div className="w-full max-w-3xl mx-auto">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSexfLtotWY6OJBiZIpZs2asZbtPRzOAy6hRCaC2VLUb7PRzJQ/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
            className="rounded-xl shadow-xl"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
