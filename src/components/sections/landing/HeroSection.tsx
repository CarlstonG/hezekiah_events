import React from "react";
import MainButton from "@/components/common/MainButton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Toaster } from "@/components/ui/toaster";

import AuthWrapperForm from "@/components/forms/AuthWrapperForm";

function HeroSection() {
  return (
    <section className="flex flex-col gap-8 md:flex-row justify-between items-center">
      <div>
        <div className="relative text-3xl md:text-[70px]  lg:text-[80px] font-bold md:leading-[6rem] select-none">
          {" "}
          Let&apos;s Create Memorable Memories
          <div className="hidden md:block w-[215px] h-[6px] bg-primary absolute top-[6rem] left-2"></div>
        </div>
        <p className="text-black mt-4 opacity-[75] mb-8 md:my-8">
          Book for a professional Events Coordinator
        </p>

        <div>
          <Dialog>
            <DialogTrigger asChild>
              <MainButton text="Get Started" classes="" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <AuthWrapperForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <img src="/images/wedding1.jpg" alt="hero image" className="object-cover h-200 w-100"/>
      </div>
      <Toaster />
    </section>
  );
}

export default HeroSection;
