import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const storeRes = await axios.post(
        "http://localhost:3000/shasmedia/storeemail",
        {
          email: data.email,
          phone: data.phone,
          name: data.name,
          message: data.message,
        }
      );

      toast.success(storeRes.data.message || "Email Sent ✅");
      reset();

      const sendRes = await axios.post(
        "http://localhost:3000/shasmedia/sendemail"
      );
      toast.success(sendRes.data.message || "You will get a response soon 😊 ");
    } catch (e) {
      if (e.response?.data?.message) {
        toast.error(e.response.data.message);
      } else {
        toast.error("Something went wrong ❌");
      }
      console.error("Error in onSubmit:", e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-6 py-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md md:max-w-lg bg-gray-900 p-6 md:p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6 text-center">
          Contact Us
        </h2>

        <label className="block mb-3">
          <span className="text-white text-sm font-medium">Name</span>
          <input
            type="text"
            placeholder="Your name"
            {...register("name", { required: "Name is required" })}
            className={`mt-1 block w-full rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 ${
              errors.name ? "border border-red-500" : "border-transparent"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </label>

        <label className="block mb-3">
          <span className="text-white text-sm font-medium">Phone</span>
          <input
            type="tel"
            placeholder="+1 234 567 8900"
            {...register("phone", { required: "Phone number is required" })}
            className={`mt-1 block w-full rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 ${
              errors.phone ? "border border-red-500" : "border-transparent"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </label>

        <label className="block mb-3">
          <span className="text-white text-sm font-medium">Email</span>
          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: "Email is required" })}
            className={`mt-1 block w-full rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 ${
              errors.email ? "border border-red-500" : "border-transparent"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </label>

        <label className="block mb-6">
          <span className="text-white text-sm font-medium">Message</span>
          <textarea
            rows="4"
            placeholder="Write your message..."
            {...register("message", { required: "Message is required" })}
            className={`mt-1 block w-full rounded-md bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none px-4 py-2 resize-none ${
              errors.message ? "border border-red-500" : "border-transparent"
            }`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </label>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
