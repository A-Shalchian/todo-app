import React from "react";
import Image from "next/image";
import todoImage from "@/assets/images/todo.jpg";

export const Hero = () => {
  return (
    <section className="py-12 md:py-16 ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-36">
          {/* Left side - Image (order changes on mobile) */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Image
              src={todoImage}
              alt="Todo App Illustration"
              className="w-full h-auto object-contain rounded-2xl"
              width={500}
              height={500}
            />
          </div>

          {/* Right side - Content (order changes on mobile) */}
          <div className="w-full md:w-1/2 order-1 md:order-2 text-center mt-10 ">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Organize Your Life with Our Todo App
            </h1>
            <p className="text-lg md:text-xl text-gray-600 my-8">
              Stay productive and never miss a task. Our intuitive todo app
              helps you manage your daily tasks, set priorities, and achieve
              your goals efficiently.
            </p>
            <p className="text-base md:text-lg text-gray-500 my-8">
              Track your progress, set deadlines, and collaborate with team
              members seamlessly. Perfect for both personal and professional
              task management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
