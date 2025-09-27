import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          () => {
            alert("✅ Thank you. Your message sent successfully!");
            formRef.current?.reset(); // reset form
          },
          (error) => {
            alert("❌ Failed to send: " + error.text);
          }
        );
    }
  };

  return (
    <div className="flex flex-col">
      <p className="text-3xl font-semibold mb-1 text-[#3cc88a]">Message me</p>
      <p className="text-gray-500 mb-6">
        I'll get back to you within 24 hours.
      </p>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col p-6 max-w-lg mx-auto gap-4"
      >
        {/* First & Last name */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            required
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3cc88a]"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            required
            className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3cc88a]"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="you@company.com"
          required
          className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-[#3cc88a]"
        />

        {/* Phone */}
        <div className="flex items-center border rounded-md gap-2 px-2">
          <select
            name="country_code"
            defaultValue="+84"
            className="bg-black text-white rounded-md px-2 py-1"
          >
            <option value="+84">VN</option>
            <option value="+1">US</option>
            <option value="+81">JP</option>
            <option value="+44">UK</option>
            <option value="+61">AU</option>
          </select>
          <input
            type="tel"
            name="phone"
            placeholder="123 456 789"
            required
            className="flex-1 outline-none py-2"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Write your message..."
          required
          className="border rounded-md p-3 min-h-[120px] focus:ring-2 focus:ring-[#3cc88a]"
        />

        <button
          type="submit"
          className="bg-[#3cc88a] hover:bg-[#006239] text-white font-medium px-4 py-2 rounded-md w-full mt-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
