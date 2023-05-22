import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const contact_info = [
    { logo: "mail", text: "smassuh@gmail.com" },
    { logo: "logo-whatsapp", text: "+54 3512455236" },
    {
      logo: "location",
      text: "Córdoba, Argentina",
    },
  ];

  const intialState = {
    name: "",
    email: "",
    message: "",
  };

  const [contact, setContact] = useState(intialState);

  const handleInputChange = (elem) => {
    const { name, value } = elem.target;
    setContact({ ...contact, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE}`,
        `${import.meta.env.VITE_TEMPlATE}`,
        form.current,
        `${import.meta.env.VITE_FORM}`
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message sent, thank you for contacting me.",
            showConfirmButton: false,
            timer: 3000,
          });
        },
        (error) => {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Error, the message could not be sent.",
            showConfirmButton: false,
            timer: 3000,
          });
        }
      );
    setContact(intialState);
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
          <form
            ref={form}
            className="flex flex-col flex-1 gap-5"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleInputChange}
              value={contact.name}
              required
            />

            <input
              type="Email"
              name="email"
              placeholder="Your Email Address"
              onChange={handleInputChange}
              value={contact.email}
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              rows={10}
              onChange={handleInputChange}
              value={contact.message}
              required
            ></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
