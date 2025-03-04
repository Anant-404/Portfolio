"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    if (!form.current) return; // Ensure form exists before calling sendForm

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? "defaultServiceId",
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? "defaultTemplateId",
        form.current, // Now TypeScript knows it's an HTMLFormElement
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? "defaultPublicKey"
      )
      .then(
        () => {
          setSuccess(true);
          form.current?.reset(); // Optional chaining in case form is null
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
  {/* TEXT CONTAINER */}
  <div className="min-h-[40vh] lg:h-full lg:w-1/2 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl">
    <div>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        >
          {letter}
        </motion.span>
      ))}
      😊
    </div>
  </div>
  
  {/* FORM CONTAINER */}
  <form
    onSubmit={sendEmail}
    ref={form}
    className="min-h-[60vh] lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-6 sm:p-12 md:p-16 lg:p-24"
  >
    <span>Dear Anant,</span>
    <label className="w-full block cursor-text">
      <textarea
        rows={2}
        className="w-full block bg-transparent border-b-2 border-black outline-none resize-none p-2"
        placeholder="Write your message..."
        name="user_message"
      />
    </label>
    <span>My mail address is:</span>
    <input
      name="user_email"
      type="text"
      className="bg-transparent border-b-2 border-b-black outline-none"
    />
    <span>Regards</span>
    <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
      Send
    </button>
    {success && (
      <span className="text-green-600 font-semibold">
        Your message has been sent successfully!
      </span>
    )}
    {error && (
      <span className="text-red-600 font-semibold">
        Something went wrong!
      </span>
    )}
  </form>
</div>

    </motion.div>
  );
};

export default ContactPage;
