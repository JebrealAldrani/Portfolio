"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { IoSend } from "react-icons/io5";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // simple, efficient email regex
const phoneRegex = /^\+?\d{7,15}$/; // allows +, 7-15 digits

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Email sent successfully!");
        reset();
      } else {
        alert("Failed to send email: " + result.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-7 p-3 md:p-10">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* First Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="firstName" className="text-[#999]">
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              {...register("firstName", { required: "First Name is Required" })}
              className="bg-[#121212] text-white border border-[#777] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0ebb73]"
            />
            <p className="text-red-600 text-sm">{errors.firstName?.message}</p>
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="lastName" className="text-[#999]">
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              {...register("lastName", { required: "Last Name is Required" })}
              className="bg-[#121212] text-white border border-[#777] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0ebb73]"
            />
            <p className="text-red-600 text-sm">{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[#999]">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is Required",
                pattern: { value: emailRegex, message: "Invalid email format" },
              })}
              className="bg-[#121212] text-white border border-[#777] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0ebb73]"
            />
            <p className="text-red-600 text-sm">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="phone" className="text-[#999]">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", {
                required: false,
                pattern: { value: phoneRegex, message: "Invalid phone format" },
              })}
              className="bg-[#121212] text-white border border-[#777] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0ebb73]"
            />
            <p className="text-red-600 text-sm">{errors.phone?.message}</p>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-[#999]">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is Required" })}
            className="bg-[#121212] text-white border border-[#777] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#0ebb73]"
          />
          <p className="text-red-600 text-sm">{errors.message?.message}</p>
        </div>

        <button
          type="submit"
          className="md:w-fit w-full bg-linear-to-br from-[#0ebb73] via-[#173026] to-[#03492c] text-white py-2 px-4 rounded-md cursor-pointer flex items-center justify-center gap-2 self-end"
        >
          <p className="text-lg font-medium"> Send Message</p>

          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
