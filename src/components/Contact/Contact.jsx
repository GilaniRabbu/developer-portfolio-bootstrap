import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tou150ra",
        "template_fam10tr",
        form.current,
        "SZCqfOKN5ON7VziFt"
      )
      .then(
        (result) => {
          console.log("Message Sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("Error:", error.text);
          alert("Failed to send the message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <section className="py-5 contact-section">
      <div className="container">
        <h2 className="section-title mb-5 text-center font-bonny-bold">
          Contact Me.
        </h2>
        <div className="mt-5 d-flex gap-5 gap-md-5 flex-column flex-md-row">
          <div className="contact-info">
            <h2 className="w-75 mb-4 font-bonny-regular">
              I am always here to assist you and respond to your inquiries
            </h2>
            <p className="mb-5 contact-desc">
              Whether you have questions, need assistance, or simply want to
              share your thoughts, I am eager to hear from you. Feel free to
              connect with me through any of the methods below, and I will get
              back to you promptly. I look forward to hearing from you!
            </p>
            <div className="d-flex flex-wrap justify-content-between gap-2 mb-5">
              <div className="contact-info-item">
                <h3>Location</h3>
                <p>Dhaka, South Khilgaon</p>
              </div>
              <div className="contact-info-item">
                <h3>E-mail</h3>
                <p>toufiqjilanirabbu7@gmail.com</p>
              </div>
            </div>
            <div>
              <h3 className="mb-2 social-network-title">Social Network</h3>
              <div className="d-flex gap-2 social-network">
                <a
                  href="https://www.facebook.com/GilaniRabbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  f
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  x
                </a>
                <a
                  href="https://www.linkedin.com/in/toufiq-gilani-rabbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  in
                </a>
                <a
                  href="https://github.com/GilaniRabbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  g
                </a>
              </div>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h3 className="font-bonny-regular">Get in Touch</h3>
            <p>
              Define your goals and identify areas where I can add value to your
              business.
            </p>
            <input type="text" name="user_name" placeholder="Name" required />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
            />
            <textarea name="message" placeholder="Message" rows={3} required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
