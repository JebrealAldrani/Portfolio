"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import { toast } from "react-toastify";
import { useState } from "react";

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

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      console.log(result);

      if (result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error("Failed to send message: ");
        console.log(result.error);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
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
          disabled={isLoading}
          className="md:w-fit w-full bg-linear-to-br from-[#0ebb73] via-[#173026] to-[#03492c] text-white py-2 px-6 rounded-md flex items-center justify-center gap-2 self-end transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="31.4"
                  strokeDashoffset="10"
                  strokeLinecap="round"
                />
              </svg>
              <p className="text-lg font-medium">Sending...</p>
            </>
          ) : (
            <>
              <p className="text-lg font-medium">Send Message</p>
              <IoSend />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
