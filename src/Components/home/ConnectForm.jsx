"use client";

import { useForm } from "react-hook-form";

const ConnectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <div className="text-center">
          <h3 className="text-[#EC0E0E] font-bold text-lg sm:text-[22px]">
            Call Us Now
          </h3>
          <h3 className="font-bold text-3xl sm:text-4xl lg:text-[40px]">
            Let's Make It Happen!
          </h3>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mx-auto py-4 sm:py-6 px-4 sm:px-8 lg:px-16 text-[#101828] font-semibold"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                First name
              </label>
              <input
                {...register("firstName", { required: true })}
                className="w-full p-2 text-sm sm:text-base border rounded mt-1"
                placeholder="First name"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </div>
            <div>
              <label className="block text-gray-700 text-sm sm:text-base">
                Last name
              </label>
              <input
                {...register("lastName", { required: true })}
                className="w-full p-2 text-sm sm:text-base border rounded mt-1"
                placeholder="Last name"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mt-4">
              <label className="block text-gray-700 text-sm sm:text-base">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="w-full p-2 text-sm sm:text-base border rounded mt-1"
                placeholder="you@company.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </div>

            <div className="mt-4">
              <label className="block text-gray-700 text-sm sm:text-base">
                Phone number
              </label>
              <input
                {...register("phone", { required: true })}
                className="w-full p-2 text-sm sm:text-base border rounded mt-1"
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">Required</span>
              )}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm sm:text-base">
              Company Name
            </label>
            <input
              {...register("companyName")}
              className="w-full p-2 text-sm sm:text-base border rounded mt-1"
              placeholder="Company Name"
            />
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm sm:text-base">
              Select the Country where your company is located?
            </label>
            <select
              {...register("country")}
              className="w-full p-2 text-sm sm:text-base border rounded mt-1"
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm sm:text-base">
              How can we help you?
            </label>
            <select
              {...register("category")}
              className="w-full p-2 text-sm sm:text-base border rounded mt-1"
            >
              <option value="">Select Category</option>
              <option value="Support">Support</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block text-gray-700 text-sm sm:text-base">
              Message
            </label>
            <textarea
              {...register("message")}
              className="w-full p-2 text-sm sm:text-base border rounded mt-1"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white p-2 sm:p-3 text-sm sm:text-base rounded-lg hover:bg-blue-700 transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConnectForm;
